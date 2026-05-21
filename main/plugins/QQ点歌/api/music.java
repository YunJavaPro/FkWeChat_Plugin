import com.alibaba.fastjson2.*

HEADERS = new HashMap()
HEADERS.put("referer", "http://aqqmusic.tc.qq.com/")
HEADERS.put("user-agent", "Mozilla/5.0 Chrome/92.0.4515.105 Safari/537.36")

BASE_URL = "http://aqqmusic.tc.qq.com/"
API_URL = "http://u.y.qq.com/cgi-bin/musicu.fcg"
PIC_URL = "http://y.gtimg.cn/music/photo_new/T002R500x500M000"
LYRIC_URL = "http://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?format=json&nobase64=1"

search(name) {
    return """
    {"comm": {
           "ct": "19",
           "cv": "1882",
           "uin": "3449496653"
        }, "searchMusic": {
            "method": "DoSearchForQQMusicDesktop",
            "module": "music.search.SearchCgiService",
            "param": {
                "grp": 1,
                "num_per_page": 1,
                "page_num": 1, 
                "query": "${name}",
                "search_type": 0
            }
        }
    }"""
}

purl(id) {
    return """
    {"comm": {
           "ct": "11",
           "cv": "22060004",
           "tmeAppID": "ztelite",
           "OpenUDID": "nouid",
           "uid": "3449496653"
        }, "request": {
            "module": "music.qqmusiclite.MtLimitFreeSvr",
            "method": "Obtain",
            "param": {
                "songid": [${id}],
                "need_ppurl": true
            }
        }
    }"""
}

getVkey(name, mid) { 
    return """
    {"comm": {
            "ct": "11",
            "cv": "22060004",
            "tmeAppID": "ztelite",
            "OpenUDID": "nouid",
            "uid": "3449496653"
        }, "request": {
            "module": "music.vkey.GetVkey",
            "method": "UrlGetVkey",
            "param": {
                "guid": "yun",
                "songmid": ["${mid}"],
                "filename": ["M500${name}.mp3"]
            }
        }
    }"""
}

vkey(mid, purl) {
    return """
    {"request": {
            "module": "music.vkey.GetVkey",
            "method": "CgiGetTempVkey",
            "param": {
                "guid": "yun",
                "songlist": [{
                    "mediamid": "yun",
                    "tempVkey": "${purl}",
                    "songMID": "${mid}"
                }]
            }
        }
    }"""
}

send_Music(talker, title, author, musicUrl, albumUrl, lyric) {
    sendCard(talker,
    """<msg>
        <appmsg appid="wx1c37343fc2a86bc4">
            <title>${escape(title)}</title>
            <des>${escape(author)}</des>
            <action>view</action>
            <type>76</type>
            <url>${escape(musicUrl)}</url>
            <dataurl>${escape(musicUrl)}</dataurl>
            <songalbumurl>${escape(albumUrl)}</songalbumurl>
            <songlyric>${escape(lyric)}</songlyric>
            <musicShareItem>
                <mvCoverUrl>${escape(albumUrl)}</mvCoverUrl>
                <mvSingerName>${escape(author)}</mvSingerName>
                <mid>getlinkmid_</mid>
            </musicShareItem>
        </appmsg>
    </msg>""")
}

escape(s) {
    if (s == null) return ""
    return s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace("\"", "&quot;")
        .replace("'", "&apos;")
}

music(talker, song) {
    get(API_URL + "?data=${search(song)}", resp -> {
        if (resp == null) return sendText(talker, "请求失败")
        search = JSON.parseObject(resp)
        if (search.getIntValue("code") != 0) return sendText(talker, "发生错误")
        music = JSONPath.eval(search, "$.searchMusic.data.body.song.list[0]")
        if (music == null) return sendText(talker, "未搜到")
        mid = music.getString("mid")
        id = music.getString("id")
        name = music.getString("name")
        singer = JSONPath.eval(music, "$.singer[0].name")
        mediamid = JSONPath.eval(music, "$.file.media_mid")
        pic = PIC_URL + JSONPath.eval(music, "$.album.pmid") + ".jpg"
        post(API_URL, "${purl(id)}", resp -> {
            if (resp == null) return
            result = JSON.parseObject(resp)
            pUrl = JSONPath.eval(result, "$.request.data.tracks[0].control.ppurl")
            get(LYRIC_URL + "&songmid=${mid}", resp -> {
                lyric = JSONPath.eval(resp, "$.lyric")
                if (!pUrl.isEmpty()) {
                    post(API_URL, "${vkey(mid, pUrl)}", resp -> {
                        url = JSONPath.eval(resp, "$.request.data.data.yun.purl")
                        send_Music(talker, name, singer, url, pic, lyric)
                    })
                } else
                post(API_URL, "${getVkey(mediamid, mid)}", resp -> {
                    url = JSONPath.eval(resp, "$.request.data.midurlinfo[0].flowurl")
                    if (!url.isEmpty()) {
                        send_Music(talker, name, singer, BASE_URL + url, pic, lyric)
                    } else sendText(talker, "该曲可能是数字专辑")
                })
            }, HEADERS)
        })
    }, HEADERS)
}