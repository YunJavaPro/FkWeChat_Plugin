// Created by 雲上升
// Plugin: 视频解析

loadDex("dex/classes")

import com.alibaba.fastjson2.JSON
import com.alibaba.fastjson2.JSONObject
import com.alibaba.fastjson2.JSONArray
import org.jsoup.Jsoup
import java.util.regex.Pattern

// 视频解析主入口
parseVideo(txt) {
    try {
        url = extractUrl(txt)
        if (url == null) return null

        redirectUrl = getRedirectUrl(url)
        if (redirectUrl == null) return null
        
        respJson = new JSONObject()
        if (redirectUrl.matches(".*\\.(bilibili\\.com|b23\\.tv).*")) {
            return parseBilibili(redirectUrl, respJson)
        }

        document = Jsoup.connect(redirectUrl)
            .userAgent("Mozilla/5.0 (iPhone)")
            .get()

        scriptElements = document.select("script")

        for (script : scriptElements) {
            content = script.html()
            if (content.contains("_ROUTER_DATA")) {
                return parseDouyin(content, respJson)
            } else if (content.contains("__INITIAL_STATE__")) {
                return parseXiaohongshu(content, respJson)
            } else if (content.contains("INIT_STATE")) {
                return parseKuaishou(content, respJson)
            }
        }
        return null
    } catch (e) {
        return null
    }
}

// 提取文本中的URL链接
extractUrl(msg) {
    regex = "(https?://\\S+)"
    matcher = Pattern.compile(regex).matcher(msg)
    return matcher.find() ? matcher.group(1) : null
}

// 获取短链接的真实跳转地址
getRedirectUrl(targetUrl) {
    conn = null
    try {
        url = new URL(targetUrl)
        conn = url.openConnection()
        conn.setInstanceFollowRedirects(false)
        conn.setRequestProperty("User-Agent", "Mozilla/5.0 (iPhone)")
        code = conn.getResponseCode()
        if (code >= 300 && code < 400) {
            return conn.getHeaderField("Location")
        }
        return targetUrl
    } catch (e) {
        return null
    } finally {
        if (conn != null) conn.disconnect()
    }
}

// 解析哔哩哔哩平台数据
parseBilibili(url, respJson) {
    try {
        matcher = Pattern.compile("(BV[a-zA-Z0-9]{10})").matcher(url)
        if (!matcher.find()) return null
        bvid = matcher.group(1)

        viewApi = "https://api.bilibili.com/x/web-interface/view?bvid=$bvid"
        viewRes = Jsoup.connect(viewApi).ignoreContentType(true).execute().body()
        dataObj = JSONObject.parseObject(viewRes).getJSONObject("data")
        
        title = dataObj.getString("title")
        nickName = dataObj.getJSONObject("owner").getString("name")
        cid = dataObj.getString("cid")

        playApi = "https://api.bilibili.com/x/player/playurl?bvid=$bvid&cid=$cid&platform=html5&high_quality=1"
        playRes = Jsoup.connect(playApi).ignoreContentType(true).execute().body()

        durl = JSONObject.parseObject(playRes).getJSONObject("data").getJSONArray("durl")
        videoUrl = durl.getJSONObject(0).getString("url")

        respJson.put("title", title)
        respJson.put("nickName", nickName)
        respJson.put("type", 1)
        respJson.put("videoUrl", videoUrl)

        return respJson
    } catch (e) {
        return null
    }
}

// 解析抖音平台数据
parseDouyin(scriptContent, respJson) {
    jsonData = extractFirstJsonData(scriptContent)
    if (jsonData == null) return null
    loaderData = JSONObject.parseObject(jsonData).getJSONObject("loaderData")
    if (loaderData == null) return null

    pageInfo = loaderData.getJSONObject("video_(id)/page")
    if (pageInfo == null) pageInfo = loaderData.getJSONObject("note_(id)/page")
    if (pageInfo == null) pageInfo = loaderData.getJSONObject("ugc_video_page")

    if (pageInfo != null) {
        videoInfoRes = pageInfo.getJSONObject("videoInfoRes")
        if (videoInfoRes != null) {
            itemList = videoInfoRes.getJSONArray("item_list").getJSONObject(0)
            videoUrl = itemList.getJSONObject("video").getJSONObject("play_addr")
                .getJSONArray("url_list").get(0).toString()
                .replaceAll("playwm", "play")
                .replaceAll("720p", "1080p")
            respJson.put("title", itemList.getString("desc"))
            respJson.put("nickName", itemList.getJSONObject("author").getString("nickname"))
            respJson.put("type", 1)
            respJson.put("videoUrl", videoUrl)
        }
    }
    return respJson
}

// 解析小红书平台数据
parseXiaohongshu(scriptContent, respJson) {
    jsonData = extractJsonData(scriptContent).replaceAll("undefined", "\"undefined\"")
    noteData = JSONObject.parseObject(jsonData)
        .getJSONObject("noteData").getJSONObject("data").getJSONObject("noteData")

    type = noteData.getString("type")
    respJson.put("title", noteData.getString("desc"))
    respJson.put("nickName", noteData.getJSONObject("user").getString("nickName"))

    if ("video".equals(type)) {
        videoUrl = noteData.getJSONObject("video").getJSONObject("media").getJSONObject("stream")
            .getJSONArray("h265").getJSONObject(0).getString("masterUrl")
        respJson.put("type", 1)
        respJson.put("videoUrl", videoUrl)
    } else {
        jsonArray = noteData.getJSONArray("imageList")
        imageList = new ArrayList()
        for (object : jsonArray) {
            img = JSONObject.parseObject(object.toString())
            imageList.add(img.getString("url"))
        }
        respJson.put("type", 2)
        respJson.put("imageList", imageList)
    }
    return respJson
}

// 解析快手平台数据
parseKuaishou(scriptContent, respJson) {
    jsonData = extractJsonData(scriptContent)
    jsonObject = JSONObject.parseObject(jsonData)
    prefix = "tusjoh.0sftu0xe0vhI6Bqq0qipup0tjnqmf0jogp@lqo"
    
    targetObj = null
    for (key : jsonObject.keySet()) {
        if (key.startsWith(prefix)) {
            targetObj = jsonObject.getJSONObject(key)
            break
        }
    }

    if (targetObj != null) {
        photo = targetObj.getJSONObject("photo")
        caption = photo.getString("caption")
        userName = photo.getString("userName")
        mvUrls = photo.getJSONArray("mainMvUrls")

        if (mvUrls != null && !mvUrls.isEmpty()) {
            respJson.put("title", caption)
            respJson.put("nickName", userName)
            respJson.put("type", 1)
            respJson.put("videoUrl", mvUrls.getJSONObject(0).getString("url"))
        } else {
            atlasJson = photo.getJSONObject("ext_params").getJSONObject("atlas")
            cdn = atlasJson.getJSONArray("cdn").get(0).toString()
            list = atlasJson.getJSONArray("list")
            imageList = new ArrayList()
            for (o : list) imageList.add("https://" + cdn + o)
            respJson.put("title", caption)
            respJson.put("nickName", userName)
            respJson.put("type", 2)
            respJson.put("imageList", imageList)
        }
    }
    return respJson
}

// 提取JS脚本中的JSON字符串
extractJsonData(scriptContent) {
    start = scriptContent.indexOf("{")
    end = scriptContent.lastIndexOf("}")
    return (start != -1 && end != -1) ? scriptContent.substring(start, end + 1) : ""
}

// 提取JS脚本中第一个完整的JSON对象
extractFirstJsonData(scriptContent) {
    start = scriptContent.indexOf("{")
    if (start == -1) return null
    braceCount = 0
    for (i = start; i < scriptContent.length(); i++) {
        c = scriptContent.charAt(i)
        if (c == '{') braceCount++
        else if (c == '}') {
            braceCount--
            if (braceCount == 0) return scriptContent.substring(start, i + 1)
        }
    }
    return null
}

// 下载网络文件到本地
Download(urlStr, fullPath) {
    conn = null
    try {
        file = new File(fullPath)
        if (!file.getParentFile().exists()) file.getParentFile().mkdirs()
        url = new URL(urlStr)
        conn = url.openConnection()
        conn.setRequestProperty("User-Agent", "Mozilla/5.0")

        if (conn.getResponseCode() == 200) {
            is = conn.getInputStream()
            fos = new FileOutputStream(file)
            buffer = new byte[8192]
            int len
            len2 = 0
            while ((len = is.read(buffer)) != -1 && len2 < 35 * 1048576) {
                fos.write(buffer, 0, len)
                len2 += len
            }
            fos.flush()
            fos.close()
            is.close()
            return true
        }
    } catch (e) {
        log("下载报错: " + e.getMessage())
    } finally {
        if (conn != null) conn.disconnect()
    }
    return false
}

// 过滤文件名非法字符
safeFileName(name) {
     name = name.replace("\\", "_")
     name = name.replace("/", "_")
     name = name.replace(":", "_")
     name = name.replace("*", "_")
     name = name.replace("?", "_")
     name = name.replace("\"", "_")
     name = name.replace("<", "_")
     name = name.replace(">", "_")
     name = name.replace("|", "_")
     name = name.replaceAll("\\s+", "")
     if(name.length() > 60) {
         name = name.substring(0, 60)
     }
     return name
}

// 消息监听回调
onMsg(msg) {
    text = msg.content
    group = msg.talker
    if (text.contains("http") && msg.sendTalker == myWxId) {
        new Thread(() -> {
            try {
                res = parseVideo(text)
                if (res != null) {
                    title = res.getString("title")
                    safeName = safeFileName(title) // 转译安全标题
                    if (res.getIntValue("type") == 1) {
                        videoUrl = res.getString("videoUrl")
                        path = "$pluginPath/video/$safeName.mp4"
                        if (Download(videoUrl, path)) sendFile(group, path)
                    } else {
                        log("解析到图集: " + title)
                    }
                }
            } catch (e) {
                log("处理错误: " + e.getMessage())
            }
        }).start()
    }
}