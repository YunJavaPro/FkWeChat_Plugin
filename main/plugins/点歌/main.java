// Created by 吃不香菜
// Plugin: 点歌
// 无损音源多选 / 卡片 / 直链 / 列表 / ui搜索 / 授权 / 直链文本首尾自定义 
// ===========================================================
import org.json.JSONArray;
import org.json.JSONObject;
import java.util.*;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

static final int ALLOW_SELF_CMD = 1;
String LOG_TAG = "[点歌]";
String robotName = "不吃香菜";
Map queryCache = new HashMap();
Map firstCardCache = new HashMap();
Map queryTimeMap = new HashMap();
String KW_API_KEY = "西瓜糖key";
String QQ_OPEN_API_KEY = "西瓜糖key";
String PAID_TOKEN = "慕名key";

static final int CFG_MUSIC_SOURCE = 4;//默认源
static final int CFG_MUSIC_ENABLED = 1;//开关
static final int CFG_GROUP_ENABLED = 1;//群
static final int CFG_CARD_ENABLED = 1;//卡片
static final int CFG_LINK_ENABLED = 1;//直链
static final int CFG_LIST_ENABLED = 1;//列表
static final int CFG_DEBUG_LOG = 0;//日志

Map userConfigMap = new HashMap();

Map newDefaultObjConfig() {
    Map c = new HashMap();
    c.put("musicSource", CFG_MUSIC_SOURCE);
    c.put("musicEnabled", CFG_MUSIC_ENABLED);
    c.put("groupEnabled", CFG_GROUP_ENABLED);
    c.put("cardEnabled", CFG_CARD_ENABLED);
    c.put("linkEnabled", CFG_LINK_ENABLED);
    c.put("listEnabled", CFG_LIST_ENABLED);
    c.put("debugLog", CFG_DEBUG_LOG);
    c.put("cmdAuthList", "");  // 命令授权成员wxid列表，用逗号分隔
    return c;
}

Map getObjConfig(String talker) {
    if (talker == null || talker.length() == 0) talker = "__default__";
    if (!userConfigMap.containsKey(talker)) userConfigMap.put(talker, newDefaultObjConfig());
    return (Map) userConfigMap.get(talker);
}

int getObjCfg(Map cfg, String key, int def) {
    try { return ((Number) cfg.get(key)).intValue(); } catch (Throwable e) { return def; }
}

String getConfigDir() {
    int userId = android.os.UserHandle.myUserId();
    return "/storage/emulated/" + userId + "/Android/media/com.tencent.mm/FkWeChat/Plugin/点歌/";
}
String getConfigFile() { return getConfigDir() + "config.json"; }

void ensureDir() { try { new java.io.File(getConfigDir()).mkdirs(); } catch (Throwable e) {} }

JSONObject diffObjConfig(Map cfg, Map def) {
    JSONObject out = new JSONObject();
    try { int v=getObjCfg(cfg,"musicSource",CFG_MUSIC_SOURCE); if(v!=getObjCfg(def,"musicSource",CFG_MUSIC_SOURCE)) out.put("musicSource",v); } catch(Throwable e){}
    try { int v=getObjCfg(cfg,"musicEnabled",CFG_MUSIC_ENABLED); if(v!=getObjCfg(def,"musicEnabled",CFG_MUSIC_ENABLED)) out.put("musicEnabled",v); } catch(Throwable e){}
    try { int v=getObjCfg(cfg,"groupEnabled",CFG_GROUP_ENABLED); if(v!=getObjCfg(def,"groupEnabled",CFG_GROUP_ENABLED)) out.put("groupEnabled",v); } catch(Throwable e){}
    try { int v=getObjCfg(cfg,"cardEnabled",CFG_CARD_ENABLED); if(v!=getObjCfg(def,"cardEnabled",CFG_CARD_ENABLED)) out.put("cardEnabled",v); } catch(Throwable e){}
    try { int v=getObjCfg(cfg,"linkEnabled",CFG_LINK_ENABLED); if(v!=getObjCfg(def,"linkEnabled",CFG_LINK_ENABLED)) out.put("linkEnabled",v); } catch(Throwable e){}
    try { int v=getObjCfg(cfg,"listEnabled",CFG_LIST_ENABLED); if(v!=getObjCfg(def,"listEnabled",CFG_LIST_ENABLED)) out.put("listEnabled",v); } catch(Throwable e){}
    try { int v=getObjCfg(cfg,"debugLog",CFG_DEBUG_LOG); if(v!=getObjCfg(def,"debugLog",CFG_DEBUG_LOG)) out.put("debugLog",v); } catch(Throwable e){}
    return out;
}

void saveConfig() {
    try {
        ensureDir();
        JSONObject root = new JSONObject();
        Map def = newDefaultObjConfig();
        Iterator it = userConfigMap.keySet().iterator();
        while (it.hasNext()) {
            String t = (String) it.next();
            Map cfg = (Map) userConfigMap.get(t);
            JSONObject diff = diffObjConfig(cfg, def);
            if (diff.length() > 0) root.put(t, diff);
        }
        FileOutputStream fos = new FileOutputStream(getConfigFile());
        fos.write(root.toString().getBytes("UTF-8"));
        fos.close();
    } catch (Throwable e) { logger("saveConfig异常: " + e); }
}

void loadConfig() {
    try {
        ensureDir();
        userConfigMap.clear();
        File f = new File(getConfigFile());
        if (!f.exists()) return;
        BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(f), "UTF-8"));
        StringBuilder sb = new StringBuilder(); String line;
        while ((line = br.readLine()) != null) sb.append(line);
        br.close();
        String txt = sb.toString().trim();
        if (txt.length() == 0) return;
        JSONObject root = new JSONObject(txt);
        Iterator keys = root.keys();
        while (keys.hasNext()) {
            String talker = (String) keys.next();
            JSONObject one = root.optJSONObject(talker);
            Map cfg = newDefaultObjConfig();
            if (one != null) {
                if (one.has("musicSource")) cfg.put("musicSource", one.optInt("musicSource", CFG_MUSIC_SOURCE));
                if (one.has("musicEnabled")) cfg.put("musicEnabled", one.optInt("musicEnabled", CFG_MUSIC_ENABLED));
                if (one.has("groupEnabled")) cfg.put("groupEnabled", one.optInt("groupEnabled", CFG_GROUP_ENABLED));
                if (one.has("cardEnabled")) cfg.put("cardEnabled", one.optInt("cardEnabled", CFG_CARD_ENABLED));
                if (one.has("linkEnabled")) cfg.put("linkEnabled", one.optInt("linkEnabled", CFG_LINK_ENABLED));
                if (one.has("listEnabled")) cfg.put("listEnabled", one.optInt("listEnabled", CFG_LIST_ENABLED));
                if (one.has("debugLog")) cfg.put("debugLog", one.optInt("debugLog", CFG_DEBUG_LOG));
            }
            userConfigMap.put(talker, cfg);
        }
    } catch (Throwable e) { logger("loadConfig异常: " + e); }
}

void logger(String s) { try { log(LOG_TAG + " " + s); } catch (Throwable e) {} }
String ss(Object v) { try { if (v == null) return ""; return String.valueOf(v).trim(); } catch (Throwable e) { return ""; } }
int ii(Object v, int d) { try { if (v instanceof Number) return ((Number) v).intValue(); String t = ss(v); if (t.length() == 0) return d; return Integer.parseInt(t); } catch (Throwable e) { return d; } }
boolean isGroupTalker(String t) { return t != null && t.endsWith("@chatroom"); }
boolean startsWithAnyBotPrefix(String content) {
    if (content == null) return false;
    String t = content.trim();
    if (t.startsWith("🔍 ") || t.startsWith("❌ ") || t.startsWith("✅ ") || t.startsWith("💡 ") || t.startsWith("🎵 ") || t.startsWith("📋 ")) return true;
    return false;
}
String shortLogContent(String content) { if (content == null) return ""; String t = content.trim(); if (t.length() > 120) return t.substring(0, 120) + "..."; return t; }
String onOffText(int v) { return v == 1 ? "开" : "关"; }
String getStrCfg(String key, String def) { try { return ss(getString(key, def)); } catch (Throwable e) { return def; } }
void putStrCfg(String key, String value) { try { setString(key, value); } catch (Throwable e) {} }

String fkFieldStr(Object obj, String field) {
    try {
        java.lang.reflect.Field ff = obj.getClass().getDeclaredField(field);
        ff.setAccessible(true); Object v = ff.get(obj);
        if (v == null) return ""; return String.valueOf(v).trim();
    } catch (Throwable e) { return ""; }
}
boolean fkIsSend(Object msg) {
    try { Object v = msg.getClass().getMethod("isSend").invoke(msg); if (v instanceof Boolean) return ((Boolean) v).booleanValue(); } catch (Throwable e1) {}
    try { java.lang.reflect.Field f = msg.getClass().getDeclaredField("isSend"); f.setAccessible(true); Object v2 = f.get(msg); if (v2 instanceof Boolean) return ((Boolean) v2).booleanValue(); } catch (Throwable e2) {}
    return false;
}
String readTalkerFk(Object msg) { return fkFieldStr(msg, "talker"); }
String readContentFk(Object msg) {
    String c = fkFieldStr(msg, "content");
    if (c.length() == 0) c = fkFieldStr(msg, "rawContent");
    return c;
}
String readSenderFk(Object msg, String talker) {
    String s = fkFieldStr(msg, "sendTalker");
    if (s.length() > 0) return s;
    if (!isGroupTalker(talker)) return talker;
    return "";
}

void sendTextCompat(String talker, String text) { try { sendText(talker, text); } catch (Throwable e) { logger("sendText失败: " + e); } }

String httpGet(String urlStr) {
    BufferedReader br = null; InputStreamReader isr = null; InputStream ins = null;
    try {
        URL url = new URL(urlStr); HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET"); conn.setConnectTimeout(15000); conn.setReadTimeout(20000);
        ins = conn.getInputStream(); isr = new InputStreamReader(ins, "UTF-8"); br = new BufferedReader(isr);
        StringBuilder sb = new StringBuilder(); String line;
        while ((line = br.readLine()) != null) sb.append(line);
        return sb.toString();
    } catch (Throwable e) { return null; } finally {
        try { if (br != null) br.close(); } catch (Throwable e1) {}
        try { if (isr != null) isr.close(); } catch (Throwable e2) {}
        try { if (ins != null) ins.close(); } catch (Throwable e3) {}
    }
}
String urlEncodeUtf8(String s) { try { return URLEncoder.encode(s, "UTF-8"); } catch (Throwable e) { return s; } }

// ===== 卡片发送 =====
String getFriendName(String talker) {
    try {
        if (talker == null || talker.endsWith("@chatroom")) return null;
        String remark = getUserRemark(talker);
        if (remark != null && remark.length() > 0) return remark;
        return getUserName(talker);
    } catch (Throwable e) { return null; }
}

void sendMusicCardTry(String talker, String title, String artist, String playUrl, String coverUrl, String lyric) {
    try {
        // 自定义歌手覆盖
        String finalArtist = artist;
        String customSinger = getStrCfg("customSinger", "");
        if (customSinger.length() > 0) {
            finalArtist = customSinger;
        }
        
        // 自定义封面覆盖
        String finalCover = coverUrl;
        String customCover = getStrCfg("customCover", "");
        if (customCover.length() > 0) {
            finalCover = customCover;
        }
        
        // 发送音乐卡片
        sendMusic(talker, title, finalArtist, playUrl, finalCover, (lyric != null && lyric.length() > 0) ? lyric : "");
        logger("发送音乐卡片成功: " + title);
        
    } catch (Throwable e) { 
        logger("卡片失败: " + e); 
    }
}

void sendFirstCard(String talker, JSONObject firstItem) {
    if (firstItem == null) return;
    Map cfg = getObjConfig(talker);
    int src = getObjCfg(cfg, "musicSource", CFG_MUSIC_SOURCE);
    
    // 音源7和8是MV视频，不发送卡片，只发文本（在sendLinkText中处理）
    if (src == 7 || src == 8) {
        return;
    }
    
    // 原有音乐卡片逻辑
    if (src == 6) return; // 音源6直接返回
    if (getObjCfg(cfg, "cardEnabled", CFG_CARD_ENABLED) != 1) return;
    String title = ss(firstItem.optString("_title", "未知歌曲"));
    String artist = ss(firstItem.optString("_artist", "未知歌手"));
    String cover = ss(firstItem.optString("_cover", ""));
    String playUrl = ss(firstItem.optString("_playUrl", ""));
    String lyric = ss(firstItem.optString("_lyric", ""));
    if (playUrl.length() == 0) return;
    sendMusicCardTry(talker, title, artist, playUrl, cover, lyric);
}

void sendLinkText(String talker, JSONObject item) {
    if (item == null) return;
    Map cfg = getObjConfig(talker);
    if (getObjCfg(cfg, "linkEnabled", CFG_LINK_ENABLED) != 1) return;
    
    int source = item.optInt("_source", 0);
    
    // MV视频用不同的格式
    if (source == 7 || source == 8) {
        String title = ss(item.optString("_title", "未知MV"));
        String artist = ss(item.optString("_artist", "未知歌手"));
        String playUrl = ss(item.optString("_playUrl", ""));
        if (playUrl.length() == 0) return;
        
        StringBuilder sb = new StringBuilder();
        String prefix = getStrCfg("prefixText", "");
        if (prefix.length() > 0) sb.append(prefix).append("\n\n");
        sb.append("🎬 ").append(title).append("\n");
        sb.append("🎤 ").append(artist).append("\n");
        sb.append("🔗 ").append(playUrl).append("\n");
        String suffix = getStrCfg("tailText", "");
        if (suffix.length() > 0) sb.append("\n").append(suffix);
        sendTextCompat(talker, sb.toString());
        return;
    }
    
    String title = ss(item.optString("_title", "未知歌曲"));
    String artist = ss(item.optString("_artist", "未知歌手"));
    String album = ss(item.optString("_album", ""));
    String duration = ss(item.optString("_duration", ""));
    String format = ss(item.optString("_format", ""));
    String bitrate = ss(item.optString("_bitrate", ""));
    String size = ss(item.optString("_size", ""));
    String playUrl = ss(item.optString("_playUrl", ""));
    String lyric = ss(item.optString("_lyric", ""));
    if (playUrl.length() == 0) return;
    StringBuilder sb = new StringBuilder();
    String prefix = getStrCfg("prefixText", "");
    if (prefix.length() > 0) sb.append(prefix).append("\n\n");
    sb.append("🎵 ").append(title).append("\n");
    sb.append("🎤 ").append(artist).append("\n");
    if (album.length() > 0) sb.append("💿 ").append(album).append("\n");
    if (duration.length() > 0) sb.append("⏱ ").append(duration).append("\n");
    if (format.length() > 0) sb.append("📦 格式: ").append(format).append("\n");
    if (bitrate.length() > 0) sb.append("🎚 音质: ").append(bitrate).append("\n");
    if (size.length() > 0) sb.append("📏 大小: ").append(size).append("\n");
    if (lyric.length() > 0 && lyric.length() < 500) sb.append("📝 歌词: ").append(lyric).append("\n");
    sb.append("🔗 ").append(playUrl).append("\n");
    String suffix = getStrCfg("tailText", "");
    if (suffix.length() > 0) sb.append("\n").append(suffix);
    sendTextCompat(talker, sb.toString());
}

void sendListText(String talker, JSONArray data, String keyword) {
    if (data == null || data.length() == 0) return;
    Map cfg = getObjConfig(talker);
    if (getObjCfg(cfg, "listEnabled", CFG_LIST_ENABLED) != 1) return;
    StringBuilder sb = new StringBuilder();
    sb.append("📋 ").append(keyword).append("\n--------------------\n");
    for (int i = 0; i < data.length(); i++) {
        JSONObject item = data.optJSONObject(i);
        if (item != null) {
            sb.append(i + 1).append(". ").append(ss(item.optString("_title", "未知歌曲")));
            String a = ss(item.optString("_artist", ""));
            if (a.length() > 0) sb.append(" - ").append(a);
            sb.append("\n");
        }
    }
    sb.append("\n💡 回复数字播放歌曲");
    sendTextCompat(talker, sb.toString());
}

// ==================== 8个音源 ====================

JSONArray fetchSource1(String keyword) {
    String resp = httpGet("https://api.mmp.cc/api/kuwo?action=search_song&msg=" + urlEncodeUtf8(keyword) + "&pageSize=20&br=flac");
    if (resp == null) return null;
    try {
        JSONObject root = new JSONObject(resp);
        if (root.optInt("code", -1) != 200) return null;
        JSONArray data = root.optJSONArray("data");
        if (data == null || data.length() == 0) return null;
        JSONArray out = new JSONArray();
        for (int i = 0; i < data.length(); i++) {
            JSONObject item = data.optJSONObject(i);
            if (item == null) continue;
            JSONObject o = new JSONObject();
            o.put("_title", ss(item.optString("name", "")));
            o.put("_artist", ss(item.optString("artist", "")));
            o.put("_album", ss(item.optString("album", "")));
            o.put("_duration", ss(item.optString("duration", "")));
            o.put("_cover", ss(item.optString("cover", "")));
            o.put("_playUrl", ss(item.optString("play_url", "")));
            o.put("_format", "flac");
            out.put(o);
        }
        return out;
    } catch (Throwable e) { return null; }
}

JSONArray fetchSource2(String keyword) {
    String resp = httpGet("http://api.dovis.work/api/163search.php?keyword=" + urlEncodeUtf8(keyword) + "&limit=20");
    if (resp == null) return null;
    try {
        JSONObject root = new JSONObject(resp);
        if (root.optInt("code", -1) != 1) return null;
        JSONArray songs = root.optJSONObject("data").optJSONArray("songs");
        if (songs == null || songs.length() == 0) return null;
        JSONArray out = new JSONArray();
        for (int i = 0; i < songs.length(); i++) {
            JSONObject item = songs.optJSONObject(i);
            if (item == null) continue;
            JSONObject o = new JSONObject();
            o.put("_title", ss(item.optString("name", "")));
            o.put("_artist", ss(item.optString("artists", "")));
            o.put("_album", ss(item.optString("album", "")));
            o.put("_playUrl", ss(item.optString("audio_url", "")));
            out.put(o);
        }
        return out;
    } catch (Throwable e) { return null; }
}

JSONObject fetchSource3Item(String keyword, int n) {
    String resp = httpGet("https://api.nki.pw/API/kw.php?msg=" + urlEncodeUtf8(keyword) + "&n=" + n + "&count=20&apikey=" + urlEncodeUtf8(KW_API_KEY));
    if (resp == null) return null;
    try {
        JSONObject root = new JSONObject(resp);
        if (root.optInt("code", -1) != 200) return null;
        JSONObject data = root.optJSONObject("data");
        if (data == null) return null;
        String title = ss(data.optString("Name", ""));
        String artist = ss(data.optString("Singer", ""));
        String duration = ss(data.optString("Duration", ""));
        String cover = ss(data.optString("Img", ""));
        String bestUrl = "", bestFormat = "";
        JSONObject high = data.optJSONObject("High");
        if (high != null) {
            for (int i = 0; i < 10; i++) {
                JSONObject hi = high.optJSONObject(String.valueOf(i));
                if (hi != null) { bestUrl = ss(hi.optString("url", "")); bestFormat = ss(high.optString("format", "")); if (bestUrl.length() > 0) break; }
            }
        }
        if (bestUrl.length() == 0) {
            JSONArray arr = data.optJSONArray("Data");
            if (arr != null) {
                int bestScore = -1;
                for (int j = 0; j < arr.length(); j++) {
                    JSONObject it = arr.optJSONObject(j);
                    if (it == null) continue;
                    String fmt = ss(it.optString("format", ""));
                    String br = ss(it.optString("bitrate", ""));
                    int sc = "flac".equalsIgnoreCase(fmt) ? 1000 : ("mp3".equalsIgnoreCase(fmt) && "320".equals(br)) ? 900 : ("mp3".equalsIgnoreCase(fmt) && "128".equals(br)) ? 700 : 0;
                    if (sc > bestScore) { bestScore = sc; bestUrl = ss(it.optString("url", "")); bestFormat = fmt; }
                }
            }
        }
        JSONObject out = new JSONObject();
        out.put("_title", title); out.put("_artist", artist);
        out.put("_duration", duration); out.put("_cover", cover);
        out.put("_playUrl", bestUrl); out.put("_format", bestFormat);
        return out;
    } catch (Throwable e) { return null; }
}

JSONArray fetchSource3List(String keyword) {
    String resp = httpGet("https://api.nki.pw/API/kw.php?msg=" + urlEncodeUtf8(keyword) + "&count=20&apikey=" + urlEncodeUtf8(KW_API_KEY));
    if (resp == null) return null;
    try {
        JSONObject root = new JSONObject(resp);
        if (root.optInt("code", -1) != 200) return null;
        JSONArray data = root.optJSONArray("data");
        if (data == null || data.length() == 0) return null;
        JSONArray out = new JSONArray();
        for (int i = 0; i < data.length(); i++) {
            JSONObject item = data.optJSONObject(i);
            if (item == null) continue;
            JSONObject o = new JSONObject();
            o.put("_title", ss(item.optString("Name", "")));
            o.put("_artist", ss(item.optString("Singer", "")));
            out.put(o);
        }
        return out;
    } catch (Throwable e) { return null; }
}

String parseFormatFromFilename(String fn) {
    if (fn == null || fn.length() == 0) return "";
    int d = fn.lastIndexOf('.'); if (d > 0 && d < fn.length() - 1) return fn.substring(d + 1).toLowerCase(); return "";
}

JSONObject fetchSource4Item(String keyword, int n) {
    String resp = httpGet("https://api.nki.pw/API/music_open_api.php?msg=" + urlEncodeUtf8(keyword) + "&n=" + n + "&line=20&json=1&apikey=" + urlEncodeUtf8(QQ_OPEN_API_KEY));
    if (resp == null) return null;
    try {
        JSONObject data = new JSONObject(resp);
        String title = ss(data.optString("song_name", data.optString("song_title", "")));
        String artist = ss(data.optString("singer_name", ""));
        String album = ss(data.optString("album_name", ""));
        String duration = ss(data.optString("duration", ""));
        String cover = ss(data.optString("album_pic", data.optString("singer_pic", "")));
        String bestUrl = "", bestFormat = "", bestBitrate = "", bestSize = "";
        String[] qualities = {"sq", "hq", "standard"};
        for (String q : qualities) {
            String u = ss(data.optString("song_play_url_" + q, ""));
            if (u.length() > 0 && data.optLong("song_size_" + q + "_str", 0) > 0) {
                bestUrl = u;
                bestFormat = parseFormatFromFilename(ss(data.optString("song_filename_" + q, "")));
                bestBitrate = ss(data.optString("kbps_" + q, ""));
                bestSize = ss(data.optString("song_size_" + q, ""));
                break;
            }
        }
        if (bestUrl.length() == 0) {
            bestUrl = ss(data.optString("song_play_url", ""));
            bestFormat = parseFormatFromFilename(ss(data.optString("song_filename", "")));
            bestBitrate = ss(data.optString("kbps", ""));
            bestSize = ss(data.optString("song_size", ""));
        }
        JSONObject out = new JSONObject();
        out.put("_title", title); out.put("_artist", artist); out.put("_album", album);
        out.put("_duration", duration); out.put("_cover", cover);
        out.put("_playUrl", bestUrl); out.put("_format", bestFormat);
        out.put("_bitrate", bestBitrate); out.put("_size", bestSize);
        out.put("_lyric", ss(data.optString("song_lyric", data.optString("lyric", ""))));
        return out;
    } catch (Throwable e) { return null; }
}

JSONArray fetchSource4List(String keyword) {
    String resp = httpGet("https://api.nki.pw/API/music_open_api.php?msg=" + urlEncodeUtf8(keyword) + "&line=20&json=1&apikey=" + urlEncodeUtf8(QQ_OPEN_API_KEY));
    if (resp == null) return null;
    try {
        JSONArray data = new JSONArray(resp);
        if (data.length() == 0) return null;
        JSONArray out = new JSONArray();
        for (int i = 0; i < data.length(); i++) {
            JSONObject item = data.optJSONObject(i);
            if (item == null) continue;
            JSONObject o = new JSONObject();
            o.put("_title", ss(item.optString("song_title", "")));
            o.put("_artist", ss(item.optString("singer_name", "")));
            out.put(o);
        }
        return out;
    } catch (Throwable e) { return null; }
}

// ==================== 音源5：慕名酷我 ====================
String source5ApiUrl = "https://api.suol.cc/v1/music_kw.php";

JSONArray fetchSource5SearchRaw(String keyword) {
    try {
        String url = source5ApiUrl
            + "?action=search"
            + "&keyword=" + urlEncodeUtf8(keyword)
            + "&size=20"
            + "&page=1"
            + "&m_token=" + urlEncodeUtf8(PAID_TOKEN);
        
        String resp = httpGet(url);
        if (resp == null || resp.length() == 0) return null;
        
        JSONObject root = new JSONObject(resp);
        if (root.optInt("code", -1) != 200) return null;
        
        JSONArray data = root.optJSONArray("data");
        if (data == null || data.length() == 0) return null;
        
        return data;
    } catch (Throwable e) {
        logger("fetchSource5SearchRaw异常: " + e);
        return null;
    }
}

String resolveSource5Url(String rid) {
    try {
        String url = source5ApiUrl
            + "?action=music_url"
            + "&music_id=" + urlEncodeUtf8(rid)
            + "&quality=ff"
            + "&m_token=" + urlEncodeUtf8(PAID_TOKEN);
        
        String resp = httpGet(url);
        if (resp == null || resp.length() == 0) return "";
        
        JSONObject root = new JSONObject(resp);
        if (root.optInt("code", -1) != 200) return "";
        
        JSONObject data = root.optJSONObject("data");
        if (data != null) {
            // 优先取 music_url
            String u = ss(data.optString("music_url", ""));
            if (u.length() > 0) return u;
            u = ss(data.optString("url", ""));
            if (u.length() > 0) return u;
        }
        return "";
    } catch (Throwable e) {
        logger("resolveSource5Url异常: " + e);
        return "";
    }
}

JSONObject buildSource5Item(JSONObject item, boolean needUrl) {
    try {
        if (item == null) return null;
        
        String rid = ss(item.optString("rid", ""));
        String title = ss(item.optString("name", ""));
        String artist = ss(item.optString("artist", ""));
        String album = ss(item.optString("album", ""));
        String cover = ss(item.optString("pic", ""));
        int durationSec = item.optInt("duration", 0);
        String duration = durationSec > 0 ? formatDuration(durationSec) : "";
        
        String playUrl = "";
        if (needUrl && rid.length() > 0) {
            playUrl = resolveSource5Url(rid);
        }
        
        JSONObject out = new JSONObject();
        out.put("_title", title);
        out.put("_artist", artist);
        out.put("_album", album);
        out.put("_duration", duration);
        out.put("_cover", cover);
        out.put("_playUrl", playUrl);
        out.put("_format", "flac");
        out.put("_bitrate", "无损");
        out.put("_rid", rid);
        out.put("_source", 5);
        
        return out;
    } catch (Throwable e) {
        logger("buildSource5Item异常: " + e);
        return null;
    }
}

JSONObject fetchSource5Item(String keyword, int n) {
    try {
        JSONArray data = fetchSource5SearchRaw(keyword);
        if (data == null || data.length() == 0) return null;
        int idx = n - 1;
        if (idx < 0 || idx >= data.length()) return null;
        JSONObject item = data.optJSONObject(idx);
        if (item == null) return null;
        return buildSource5Item(item, true);
    } catch (Throwable e) {
        logger("fetchSource5Item异常: " + e);
        return null;
    }
}

JSONArray fetchSource5List(String keyword) {
    try {
        JSONArray data = fetchSource5SearchRaw(keyword);
        if (data == null || data.length() <= 1) return null;
        JSONArray out = new JSONArray();
        for (int i = 1; i < data.length(); i++) {
            JSONObject item = data.optJSONObject(i);
            if (item == null) continue;
            JSONObject o = buildSource5Item(item, false);
            if (o != null) out.put(o);
        }
        return out.length() > 0 ? out : null;
    } catch (Throwable e) {
        logger("fetchSource5List异常: " + e);
        return null;
    }
}

// ==================== 音源6：慕名QQ ====================
String source6ApiUrl = "https://api.suol.cc/v1/yy_sq.php";

JSONObject fetchSource6Item(String keyword, int n) {
    try {
        String url = source6ApiUrl
            + "?type=qq"
            + "&msg=" + urlEncodeUtf8(keyword)
            + "&n=" + n
            + "&m_token=" + urlEncodeUtf8(PAID_TOKEN);
        
        String resp = httpGet(url);
        if (resp == null || resp.length() == 0) return null;
        
        JSONObject root = new JSONObject(resp);
        if (root.optInt("code", -1) != 200) return null;
        
        String title = ss(root.optString("name", ""));
        String artist = ss(root.optString("singer", ""));
        String cover = ss(root.optString("cover", ""));
        String playUrl = ss(root.optString("url", ""));
        String quality = ss(root.optString("quality", ""));
        
        if (playUrl.length() == 0) return null;
        
        JSONObject out = new JSONObject();
        out.put("_title", title);
        out.put("_artist", artist);
        out.put("_cover", cover);
        out.put("_playUrl", playUrl);
        out.put("_format", quality.contains("无损") ? "flac" : "mp3");
        out.put("_bitrate", quality);
        out.put("_source", 6);
        
        return out;
    } catch (Throwable e) {
        logger("fetchSource6Item异常: " + e);
        return null;
    }
}

JSONArray fetchSource6List(String keyword) {
    try {
        JSONArray out = new JSONArray();
        for (int n = 2; n <= 10; n++) {
            JSONObject item = fetchSource6Item(keyword, n);
            if (item != null) out.put(item);
        }
        return out.length() > 0 ? out : null;
    } catch (Throwable e) {
        logger("fetchSource6List异常: " + e);
        return null;
    }
}

// ==================== 音源7：慕名酷狗MV ====================
String source7ApiUrl = "https://api.suol.cc/v1/mv_kg.php";

JSONObject fetchSource7Item(String keyword, int n) {
    try {
        String url = source7ApiUrl
            + "?msg=" + urlEncodeUtf8(keyword)
            + "&n=" + n;
        
        String resp = httpGet(url);
        if (resp == null || resp.length() == 0) return null;
        
        JSONObject root = new JSONObject(resp);
        if (root.optInt("code", -1) != 200) return null;
        
        // 注意：MV接口返回的是data数组
        JSONArray data = root.optJSONArray("data");
        if (data != null && data.length() > 0) {
            // 取第n-1条
            int idx = n - 1;
            if (idx >= 0 && idx < data.length()) {
                JSONObject item = data.optJSONObject(idx);
                if (item != null) {
                    String title = ss(item.optString("name", ""));
                    String artist = ss(item.optString("singer", ""));
                    String cover = ss(item.optString("cover", ""));
                    String resolution = ss(item.optString("resolution", ""));
                    
                    // 需要再请求一次获取urls
                    String detailUrl = source7ApiUrl
                        + "?msg=" + urlEncodeUtf8(keyword)
                        + "&n=" + n
                        + "&detail=1";
                    String detailResp = httpGet(detailUrl);
                    if (detailResp != null) {
                        JSONObject detail = new JSONObject(detailResp);
                        JSONArray urls = detail.optJSONArray("urls");
                        if (urls != null && urls.length() > 0) {
                            String playUrl = ss(urls.optJSONObject(0).optString("url", ""));
                            if (playUrl.length() > 0) {
                                JSONObject out = new JSONObject();
                                out.put("_title", title);
                                out.put("_artist", artist);
                                out.put("_cover", cover);
                                out.put("_playUrl", playUrl);
                                out.put("_format", "mp4");
                                out.put("_bitrate", resolution);
                                out.put("_source", 7);
                                return out;
                            }
                        }
                    }
                }
            }
        }
        
        // 兼容直接返回
        String title = ss(root.optString("name", ""));
        String artist = ss(root.optString("singer", ""));
        String cover = ss(root.optString("cover", ""));
        String resolution = ss(root.optString("resolution", ""));
        String playUrl = "";
        JSONArray urls = root.optJSONArray("urls");
        if (urls != null && urls.length() > 0) {
            playUrl = ss(urls.optJSONObject(0).optString("url", ""));
        }
        
        if (playUrl.length() == 0) return null;
        
        JSONObject out = new JSONObject();
        out.put("_title", title);
        out.put("_artist", artist);
        out.put("_cover", cover);
        out.put("_playUrl", playUrl);
        out.put("_format", "mp4");
        out.put("_bitrate", resolution);
        out.put("_source", 7);
        
        return out;
    } catch (Throwable e) {
        logger("fetchSource7Item异常: " + e);
        return null;
    }
}

JSONArray fetchSource7List(String keyword) {
    try {
        JSONArray out = new JSONArray();
        for (int n = 2; n <= 10; n++) {
            JSONObject item = fetchSource7Item(keyword, n);
            if (item != null) out.put(item);
        }
        return out.length() > 0 ? out : null;
    } catch (Throwable e) {
        logger("fetchSource7List异常: " + e);
        return null;
    }
}

// ==================== 音源8：慕名QQMV ====================
String source8ApiUrl = "https://api.suol.cc/v1/mv.php";

JSONObject fetchSource8Item(String keyword, int n) {
    try {
        String url = source8ApiUrl
            + "?msg=" + urlEncodeUtf8(keyword)
            + "&n=" + n;
        
        String resp = httpGet(url);
        if (resp == null || resp.length() == 0) return null;
        
        JSONObject root = new JSONObject(resp);
        if (root.optInt("code", -1) != 200) return null;
        
        String title = ss(root.optString("name", ""));
        String artist = ss(root.optString("singer", ""));
        String cover = ss(root.optString("cover", ""));
        String playUrl = "";
        
        JSONArray urls = root.optJSONArray("url");
        if (urls != null && urls.length() > 0) {
            // 取最后一个（最清晰）
            playUrl = ss(urls.optString(urls.length() - 1, ""));
        }
        
        if (playUrl.length() == 0) return null;
        
        JSONObject out = new JSONObject();
        out.put("_title", title);
        out.put("_artist", artist);
        out.put("_cover", cover);
        out.put("_playUrl", playUrl);
        out.put("_format", "mp4");
        out.put("_source", 8);
        
        return out;
    } catch (Throwable e) {
        logger("fetchSource8Item异常: " + e);
        return null;
    }
}

JSONArray fetchSource8List(String keyword) {
    try {
        JSONArray out = new JSONArray();
        for (int n = 2; n <= 10; n++) {
            JSONObject item = fetchSource8Item(keyword, n);
            if (item != null) out.put(item);
        }
        return out.length() > 0 ? out : null;
    } catch (Throwable e) {
        logger("fetchSource8List异常: " + e);
        return null;
    }
}

// ==================== 辅助函数 ====================
String formatDuration(int seconds) {
    if (seconds <= 0) return "";
    int min = seconds / 60;
    int sec = seconds % 60;
    return min + ":" + (sec < 10 ? "0" + sec : sec);
}

// ==================== 统一请求调度 ====================
JSONArray fetchFirstItem(int source, String keyword) {
    if (source == 1) {
        JSONArray all = fetchSource1(keyword);
        if (all == null || all.length() == 0) return null;
        firstCardCache.put(keyword + "_" + source, all);
        JSONArray f = new JSONArray();
        f.put(all.optJSONObject(0));
        return f;
    } else if (source == 2) {
        JSONArray all = fetchSource2(keyword);
        if (all == null || all.length() == 0) return null;
        firstCardCache.put(keyword + "_" + source, all);
        JSONArray f = new JSONArray();
        f.put(all.optJSONObject(0));
        return f;
    } else if (source == 3) {
        JSONObject item = fetchSource3Item(keyword, 1);
        if (item == null) return null;
        JSONArray f = new JSONArray();
        f.put(item);
        return f;
    } else if (source == 4) {
        JSONObject item = fetchSource4Item(keyword, 1);
        if (item == null) return null;
        JSONArray f = new JSONArray();
        f.put(item);
        return f;
    } else if (source == 5) {
        JSONObject item = fetchSource5Item(keyword, 1);
        if (item == null) return null;
        JSONArray f = new JSONArray();
        f.put(item);
        return f;
    } else if (source == 6) {
        JSONObject item = fetchSource6Item(keyword, 1);
        if (item == null) return null;
        JSONArray f = new JSONArray();
        f.put(item);
        return f;
    } else if (source == 7) {
        JSONObject item = fetchSource7Item(keyword, 1);
        if (item == null) return null;
        JSONArray f = new JSONArray();
        f.put(item);
        return f;
    } else if (source == 8) {
        JSONObject item = fetchSource8Item(keyword, 1);
        if (item == null) return null;
        JSONArray f = new JSONArray();
        f.put(item);
        return f;
    }
    return null;
}

JSONArray fetchRemaining(int source, String keyword) {
    if (source == 1 || source == 2) {
        Object cached = firstCardCache.get(keyword + "_" + source);
        if (cached instanceof JSONArray) {
            JSONArray all = (JSONArray) cached;
            if (all.length() <= 1) return null;
            JSONArray rem = new JSONArray();
            for (int i = 1; i < all.length(); i++) {
                rem.put(all.optJSONObject(i));
            }
            return rem;
        }
        return null;
    } else if (source == 3) {
        return fetchSource3List(keyword);
    } else if (source == 4) {
        return fetchSource4List(keyword);
    } else if (source == 5) {
        return fetchSource5List(keyword);
    } else if (source == 6) {
        return fetchSource6List(keyword);
    } else if (source == 7) {
        return fetchSource7List(keyword);
    } else if (source == 8) {
        return fetchSource8List(keyword);
    }
    return null;
}

// ==================== 音源名称映射 ====================
String getSourceName(int s) {
    switch (s) {
        case 1: return "远梦酷我";
        case 2: return "云烟网易";
        case 3: return "西瓜糖酷我";
        case 4: return "西瓜糖QQ";
        case 5: return "慕名酷我";
        case 6: return "慕名QQ";
        case 7: return "慕名酷狗MV";
        case 8: return "慕名QQMV";
        default: return "😡彩蛋";
    }
}

List<Integer> getActiveSources(Map cfg) {
    List<Integer> list = new ArrayList();
    int src = getObjCfg(cfg, "musicSource", CFG_MUSIC_SOURCE);
    if (src == 0) { for (int s=1; s<=8; s++) list.add(s); }
    else if (src < 0) {
        String multi = getStrCfg("multiSrc", "");
        String[] parts = multi.split(",");
        for (String p : parts) { try { int s=Integer.parseInt(p.trim()); if (s>=1&&s<=8) list.add(s); } catch(Throwable e) {} }
        if (list.isEmpty()) list.add(1);
    } else { list.add(src); }
    return list;
}

String buildSrcLabel(int src) {
    if (src == 0) return "😡彩蛋(全选)";
    if (src < 0) return "多选(" + getActiveSources(getObjConfig("__default__")).size() + "个)";
    return getSourceName(src);
}

void queryData(final String talker, final String keyword) {
    if (keyword == null || keyword.trim().length() == 0) { sendTextCompat(talker, "❌ 请输入歌曲名称"); return; }
    sendTextCompat(talker, "🔍 正在搜索 \"" + keyword + "\" ...");
    new Thread(new Runnable() {
        public void run() {
            try {
                Map cfg = getObjConfig(talker);
                List<Integer> srcList = getActiveSources(cfg);
                firstCardCache.clear();
                JSONArray allResults = new JSONArray();
                for (int s : srcList) {
                    JSONArray firstArr = fetchFirstItem(s, keyword);
                    if (firstArr != null && firstArr.length() > 0) {
                        JSONObject first = firstArr.optJSONObject(0);
                        sendFirstCard(talker, first);
                        sendLinkText(talker, first);
                        allResults.put(first);
                    }
                    JSONArray remaining = fetchRemaining(s, keyword);
                    if (remaining != null) { for (int i=0; i<remaining.length(); i++) allResults.put(remaining.optJSONObject(i)); }
                }
                if (allResults.length() > 0) {
                    queryCache.put(talker, allResults);
                    queryTimeMap.put(talker, System.currentTimeMillis());
                    if (srcList.size() == 1 && getObjCfg(cfg, "listEnabled", CFG_LIST_ENABLED) == 1)
                        sendListText(talker, allResults, keyword);
                } else { sendTextCompat(talker, "❌ 未找到结果"); }
                if (srcList.size() > 1) sendTextCompat(talker, "搜索完毕😡");
            } catch (Throwable e) { logger("queryData异常: " + e); }
        }
    }).start();
}

void showList(String talker) {
    Object obj = queryCache.get(talker);
    if (!(obj instanceof JSONArray)) { sendTextCompat(talker, "❌ 无缓存列表"); return; }
    JSONArray data = (JSONArray) obj;
    Map cfg = getObjConfig(talker);
    if (getObjCfg(cfg, "listEnabled", CFG_LIST_ENABLED) != 1) { sendTextCompat(talker, "✅ 列表已关闭"); return; }
    StringBuilder sb = new StringBuilder();
    sb.append("📋 歌曲列表\n--------------------\n");
    for (int i = 0; i < data.length(); i++) {
        JSONObject item = data.optJSONObject(i);
        if (item != null) {
            sb.append(i + 1).append(". ").append(ss(item.optString("_title", "未知歌曲")));
            String a = ss(item.optString("_artist", ""));
            if (a.length() > 0) sb.append(" - ").append(a);
            sb.append("\n");
        }
    }
    sb.append("\n💡 回复数字播放歌曲");
    sendTextCompat(talker, sb.toString());
}

void playIndex(final String talker, final int index) {
    final Object obj = queryCache.get(talker);
    if (!(obj instanceof JSONArray)) { sendTextCompat(talker, "❌ 列表已过期"); return; }
    new Thread(new Runnable() {
        public void run() {
            try {
                JSONArray data = (JSONArray) obj;
                if (index < 1 || index > data.length()) { sendTextCompat(talker, "❌ 序号超出范围"); return; }
                JSONObject song = data.optJSONObject(index - 1);
                if (song == null) { sendTextCompat(talker, "❌ 选歌失败"); return; }
                Map cfg = getObjConfig(talker);
                String title = ss(song.optString("_title", "未知歌曲"));
                String artist = ss(song.optString("_artist", "未知歌手"));
                String cover = ss(song.optString("_cover", ""));
                String playUrl = ss(song.optString("_playUrl", ""));
                // 音源5 列表项默认不批量解析直链，点选时再解析
                if (playUrl.length() == 0 && song.optInt("_source", 0) == 5) {
                    String rid = ss(song.optString("_rid", ""));
                    if (rid.length() > 0) {
                        playUrl = resolveSource5Url(rid);
                        try { song.put("_playUrl", playUrl); } catch (Throwable e) {}
                    }
                }
                String lyric = ss(song.optString("_lyric", ""));
                if (playUrl.length() > 0) {
                    if (getObjCfg(cfg, "cardEnabled", CFG_CARD_ENABLED) == 1)
                        sendMusicCardTry(talker, title, artist, playUrl, cover, lyric);
                    if (getObjCfg(cfg, "linkEnabled", CFG_LINK_ENABLED) == 1) {
                        StringBuilder sb = new StringBuilder();
                        String prefix = getStrCfg("prefixText", "");
                        if (prefix.length() > 0) sb.append(prefix).append("\n\n");
                        sb.append("🎵 ").append(title).append("\n");
                        sb.append("🎤 ").append(artist).append("\n");
                        String album = ss(song.optString("_album", ""));
                        String duration = ss(song.optString("_duration", ""));
                        String format = ss(song.optString("_format", ""));
                        String bitrate = ss(song.optString("_bitrate", ""));
                        String size = ss(song.optString("_size", ""));
                        if (album.length() > 0) sb.append("💿 ").append(album).append("\n");
                        if (duration.length() > 0) sb.append("⏱ ").append(duration).append("\n");
                        if (format.length() > 0) sb.append("📦 格式: ").append(format).append("\n");
                        if (bitrate.length() > 0) sb.append("🎚 音质: ").append(bitrate).append("\n");
                        if (size.length() > 0) sb.append("📏 大小: ").append(size).append("\n");
                        if (lyric.length() > 0 && lyric.length() < 500) sb.append("📝 歌词: ").append(lyric).append("\n");
                        sb.append("🔗 ").append(playUrl).append("\n");
                        String suffix = getStrCfg("tailText", "");
                        if (suffix.length() > 0) sb.append("\n").append(suffix);
                        sendTextCompat(talker, sb.toString());
                    }
                } else { sendTextCompat(talker, "❌ 该歌曲无可用直链"); }
            } catch (Throwable e) { logger("playIndex异常: " + e); }
        }
    }).start();
}

// ===== 命令系统 =====
void sendHelp(String talker) {
    Map cfg = getObjConfig(talker);
    int src = getObjCfg(cfg, "musicSource", CFG_MUSIC_SOURCE);
    StringBuilder sb = new StringBuilder();
    sb.append("🎵 点歌\n");
    sb.append("当前音源：").append(buildSrcLabel(src)).append("\n\n");
    sb.append("点歌：").append(getStrCfg("trigger","play")).append(" 歌名\n");
    sb.append("数字选歌：1 2 3 ...\n");
    sb.append("列表：列表\n\n");
    sb.append("--- 切换音源 ---\n");
    for (int i=0; i<=8; i++) sb.append("切换 ").append(i).append("  · ").append(i==0?"😡彩蛋":getSourceName(i)).append("\n");
    sb.append("\n--- 开关 ---\n");
    sb.append("音乐开关 / 群聊开关 / 卡片开关 / 直链开关 / 列表开关 / 日志开关\n");
    sb.append("\n--- 自定义 ---\n");
    sb.append("指令 触发词 / 例：指令 点歌 → 发送 点歌 歌名\n");
    sb.append("句首 文本 / 句尾 文本\n");
    sendTextCompat(talker, sb.toString());
}

boolean isCommandText(String content) {
    if (content == null) return false;
    String cmd = content.trim(); if (cmd.length() == 0) return false;
    if (cmd.startsWith("切换")) return true;
       
    String triggerStr = getStrCfg("trigger", "play 我想听 点歌");
    String[] triggers = triggerStr.split("\\s+");
    for (String t : triggers) {
        if (t.length() > 0 && cmd.startsWith(t)) return true;
    }
    if (cmd.equals("列表") || cmd.equalsIgnoreCase("list")) return true;
    
    if (cmd.equals("音乐开关") || cmd.equals("群聊开关") || cmd.equals("卡片开关") || cmd.equals("直链开关") || cmd.equals("列表开关") || cmd.equals("日志开关")) return true;
    if (cmd.startsWith("指令") || cmd.startsWith("句首") || cmd.startsWith("句尾")) return true;
    try { Integer.parseInt(cmd); return true; } catch (Throwable e) {}
    return false;
}

void processCommand(String talker, String content) {
    String clean = content.trim(); 
    if (clean.length() == 0) return;
    Map cfg = getObjConfig(talker);
    
    // 判断是否是管理命令
    boolean isAdminCmd = false;
    if (clean.startsWith("切换")) isAdminCmd = true;
    if (clean.equals("音乐开关") || clean.equals("群聊开关") || clean.equals("卡片开关") || 
        clean.equals("直链开关") || clean.equals("列表开关") || clean.equals("日志开关")) isAdminCmd = true;
    if (clean.startsWith("指令") || clean.startsWith("句首") || clean.startsWith("句尾")) isAdminCmd = true;
    
    // 如果是管理命令，检查权限（仅群聊需要检查，且自己默认有权限）
    if (isAdminCmd && talker.endsWith("@chatroom")) {
        String authList = ss(cfg.get("cmdAuthList"));
        String sender = getLoginWxid(); // 获取发送者的wxid
        // 如果授权列表不为空，且当前用户不在列表中，且不是自己，则拒绝
        if (authList.length() > 0 && authList.indexOf(sender) < 0 && !sender.equals(getLoginWxid())) {
            sendTextCompat(talker, "❌ 你没有管理权限，只能点歌");
            return;
        }
    }
    
    // ========== 1. 切换音源：切换 数字 ==========
    if (clean.startsWith("切换")) {
        String after = clean.length() > 2 ? clean.substring(2).trim() : "";
        try {
            int ns = Integer.parseInt(after);
            if (ns < 0 || ns > 8) { 
                sendTextCompat(talker, "❌ 音源编号 0~8"); 
                return; 
            }
            cfg.put("musicSource", ns);
            if (ns > 0) putStrCfg("multiSrc", "");
            saveConfig();
            sendTextCompat(talker, "✅ 已切换到 " + (ns == 0 ? "😡彩蛋" : getSourceName(ns)));
        } catch (Throwable e) {
            sendHelp(talker);
        }
        return;
    }
    
    // ========== 2. 音乐开关 ==========
    if (clean.equals("音乐开关")) { 
        int v = getObjCfg(cfg, "musicEnabled", CFG_MUSIC_ENABLED); 
        cfg.put("musicEnabled", v == 1 ? 0 : 1); 
        saveConfig(); 
        sendTextCompat(talker, "✅ 音乐开关：" + onOffText(getObjCfg(cfg, "musicEnabled", CFG_MUSIC_ENABLED))); 
        return; 
    }
    
    // ========== 3. 其他开关 ==========
    if (clean.equals("群聊开关")) { 
        int v = getObjCfg(cfg, "groupEnabled", CFG_GROUP_ENABLED); 
        cfg.put("groupEnabled", v == 1 ? 0 : 1); 
        saveConfig(); 
        sendTextCompat(talker, "✅ 群聊开关：" + onOffText(getObjCfg(cfg, "groupEnabled", CFG_GROUP_ENABLED))); 
        return; 
    }
    if (clean.equals("卡片开关")) { 
        int v = getObjCfg(cfg, "cardEnabled", CFG_CARD_ENABLED); 
        cfg.put("cardEnabled", v == 1 ? 0 : 1); 
        saveConfig(); 
        sendTextCompat(talker, "✅ 卡片开关：" + onOffText(getObjCfg(cfg, "cardEnabled", CFG_CARD_ENABLED))); 
        return; 
    }
    if (clean.equals("直链开关")) { 
        int v = getObjCfg(cfg, "linkEnabled", CFG_LINK_ENABLED); 
        cfg.put("linkEnabled", v == 1 ? 0 : 1); 
        saveConfig(); 
        sendTextCompat(talker, "✅ 直链开关：" + onOffText(getObjCfg(cfg, "linkEnabled", CFG_LINK_ENABLED))); 
        return; 
    }
    if (clean.equals("列表开关")) { 
        int v = getObjCfg(cfg, "listEnabled", CFG_LIST_ENABLED); 
        cfg.put("listEnabled", v == 1 ? 0 : 1); 
        saveConfig(); 
        sendTextCompat(talker, "✅ 列表开关：" + onOffText(getObjCfg(cfg, "listEnabled", CFG_LIST_ENABLED))); 
        return; 
    }
    if (clean.equals("日志开关")) { 
        int v = getObjCfg(cfg, "debugLog", CFG_DEBUG_LOG); 
        cfg.put("debugLog", v == 1 ? 0 : 1); 
        saveConfig(); 
        sendTextCompat(talker, "✅ 日志开关：" + onOffText(getObjCfg(cfg, "debugLog", CFG_DEBUG_LOG))); 
        return; 
    }
    
    // ========== 4. 自定义 ==========
    if (clean.startsWith("指令")) { 
        String v = clean.length() > 2 ? clean.substring(2).trim() : ""; 
        if (v.length() > 0) {
            putStrCfg("trigger", v); 
            sendTextCompat(talker, "✅ 触发词改为：" + v);
        } else {
            sendTextCompat(talker, "例：指令 点歌");
        }
        return; 
    }
    if (clean.startsWith("句首")) { 
        String v = clean.length() > 2 ? clean.substring(2).trim() : ""; 
        putStrCfg("prefixText", v); 
        sendTextCompat(talker, "✅ 句首文案：" + (v.length() > 0 ? v : "(已清除)")); 
        return; 
    }
    if (clean.startsWith("句尾")) { 
        String v = clean.length() > 2 ? clean.substring(2).trim() : ""; 
        putStrCfg("tailText", v); 
        sendTextCompat(talker, "✅ 句尾文案：" + (v.length() > 0 ? v : "(已清除)")); 
        return; 
    }
    
    // ========== 5. 列表 ==========
    if (clean.equals("列表") || clean.equalsIgnoreCase("list")) { 
        showList(talker); 
        return; 
    }
    
    // ========== 6. 数字选歌 ==========
    if (clean.matches("\\d+")) {
        Object obj = queryCache.get(talker);
        Long lastTime = (Long) queryTimeMap.get(talker);
        long now = System.currentTimeMillis();
        int expireMin = 5;
        try { expireMin = Integer.parseInt(getStrCfg("expireMin", "5")); } catch (Throwable e) {}
        if (obj instanceof JSONArray && lastTime != null && (now - lastTime) < expireMin * 60 * 1000) {
            int index = Integer.parseInt(clean);
            JSONArray data = (JSONArray) obj;
            if (index >= 1 && index <= data.length()) { 
                playIndex(talker, index); 
            } else { 
                sendTextCompat(talker, "❌ 序号超出范围 (1~" + data.length() + ")"); 
            }
        } else { 
            sendTextCompat(talker, "❌ 列表已过期，重新点歌吧"); 
        }
        return;
    }
    
    // ========== 7. 点歌 ==========
    String triggerStr = getStrCfg("trigger", "play 我想听 点歌");
    String[] triggers = triggerStr.split("\\s+");
    for (String t : triggers) {
        if (t.length() > 0 && clean.startsWith(t)) {
            String kw = clean.substring(t.length()).trim();
            if (kw.length() == 0) { 
                sendTextCompat(talker, "❌ 例：" + t + " 歌名"); 
                return; 
            }
            queryData(talker, kw);
            return;
        }
    }
}

// ===== 核心消息处理 =====
void onMessageCore(String talker, String content, boolean isSelf, String sender) {
    try {
        if (talker == null) talker = ""; if (content == null) content = ""; if (sender == null) sender = "";
        String cmd = content.trim();
        if (startsWithAnyBotPrefix(cmd)) return;
        if (isSelf) { if (ALLOW_SELF_CMD != 1) return; if (!isCommandText(cmd)) return; processCommand(talker, cmd); return; }
        boolean group = isGroupTalker(talker);
        Map cfg = getObjConfig(talker);
        if (group) {
            String ga = getStrCfg("groups_auth", "");
            if (ga.length()>0 && ga.indexOf(talker)<0) {
                if (getObjCfg(cfg, "musicEnabled", CFG_MUSIC_ENABLED) != 1) return;
                if (isCommandText(cmd)) processCommand(talker, cmd);
                return;
            }
        } else {
            String fa = getStrCfg("friends_auth", "");
            if (fa.length()>0 && fa.indexOf(talker)<0) {
                if (getObjCfg(cfg, "musicEnabled", CFG_MUSIC_ENABLED) != 1) return;
                if (isCommandText(cmd)) processCommand(talker, cmd);
                return;
            }
        }
        if (getObjCfg(cfg, "musicEnabled", CFG_MUSIC_ENABLED) != 1) return;
        if (isCommandText(cmd)) processCommand(talker, cmd);
    } catch (Throwable e) { logger("onMessageCore异常: " + e); }
}

// ===== Fk入口 =====
void onMsg(Object msg) {
    try {
        String talker = readTalkerFk(msg);
        String content = readContentFk(msg);
        boolean isSelf = fkIsSend(msg);
        String sender = readSenderFk(msg, talker);
        Map cfg = getObjConfig(talker);
        if (getObjCfg(cfg, "debugLog", CFG_DEBUG_LOG) == 1) logger("[Fk] " + talker + " content=" + shortLogContent(content));
        onMessageCore(talker, content, isSelf, sender);
    } catch (Throwable e) { logger("onMsg异常: " + e); }
}

// ===== 生命周期 =====
void onLoad() { loadConfig(); logger("吃不香菜 🎵 点歌 已加载"); }
void onUnload() { saveConfig(); logger("onUnload (Fk)"); }

// ============================================================================
// 长按菜单 / UI 部分
// ============================================================================

AlertDialog tuneDialog = null;
Button uiBtnSource, uiBtnMusic, uiBtnGroup, uiBtnCard, uiBtnLink, uiBtnList, uiBtnDebug;
EditText uiSearchInput, uiPrefixEt, uiSuffixEt, uiTriggerEt, uiExpireEt;
String uiTalker = "";

// ===== 长按消息入口 =====
void onMsgMenu(Object msg) {
    Activity a = getTopActivity();
    if (a == null) return;

    String msgTalker = fkFieldStr(msg, "talker");
    if (msgTalker.length() > 0) uiTalker = msgTalker;
    else if (uiTalker.length() == 0) uiTalker = "__default__";

    if (tuneDialog == null || !tuneDialog.isShowing()) {
        showTuneMainUI(a);
    } else {
        refreshTuneUIButtons();
    }
}

// ===== UI按钮刷新 =====
void refreshTuneUIButtons() {
    if (tuneDialog == null || !tuneDialog.isShowing()) return;
    Map cfg = getObjConfig(uiTalker);
    if (uiBtnSource != null) {
        int src = getObjCfg(cfg, "musicSource", CFG_MUSIC_SOURCE);
        uiBtnSource.setText("音源: " + buildSrcLabel(src));
    }
    if (uiBtnMusic != null) uiBtnMusic.setText("点歌: " + onOffText(getObjCfg(cfg, "musicEnabled", CFG_MUSIC_ENABLED)));
    if (uiBtnGroup != null) uiBtnGroup.setText("群聊: " + onOffText(getObjCfg(cfg, "groupEnabled", CFG_GROUP_ENABLED)));
    if (uiBtnCard != null) uiBtnCard.setText("卡片: " + onOffText(getObjCfg(cfg, "cardEnabled", CFG_CARD_ENABLED)));
    if (uiBtnLink != null) uiBtnLink.setText("直链: " + onOffText(getObjCfg(cfg, "linkEnabled", CFG_LINK_ENABLED)));
    if (uiBtnList != null) uiBtnList.setText("列表: " + onOffText(getObjCfg(cfg, "listEnabled", CFG_LIST_ENABLED)));
    if (uiBtnDebug != null) uiBtnDebug.setText("日志: " + onOffText(getObjCfg(cfg, "debugLog", CFG_DEBUG_LOG)));
}

// ===== 主设置UI =====
void showTuneMainUI(Activity a) {
    if (uiTalker.length() == 0) {
        try {
            List result = executeQuery("SELECT talker FROM message ORDER BY createTime DESC LIMIT 1");
            if (result != null && !result.isEmpty()) {
                uiTalker = ss(((Map) result.get(0)).get("talker"));
            }
        } catch (Throwable e) {}
        if (uiTalker.length() == 0) uiTalker = "__default__";
    }
    
    // 获取当前对话框的配置（自动与全局合并）
    final Map cfg = getObjConfig(uiTalker);
    
    ScrollView scrollView = new ScrollView(a);
    LinearLayout root = new LinearLayout(a);
    root.setOrientation(LinearLayout.VERTICAL);
    root.setPadding(40, 40, 40, 40);

    // 标题（显示当前会话）
    TextView tvTitle = new TextView(a);
    String talkerDisplay = uiTalker;
    if (uiTalker.endsWith("@chatroom")) {
        talkerDisplay = "群聊: " + uiTalker;
    } else if (!uiTalker.equals("__default__")) {
        talkerDisplay = "私聊: " + uiTalker;
    } else {
        talkerDisplay = "默认设置";
    }
    tvTitle.setText("🎵 点歌设置\n" + talkerDisplay);
    tvTitle.setTextSize(14);
    tvTitle.setPadding(0, 0, 0, 15);
    root.addView(tvTitle);

    // ========== 1. 音源选择 ==========
    TextView tvSourceLabel = new TextView(a);
    tvSourceLabel.setText("🎚 音源选择");
    tvSourceLabel.setTextSize(14);
    tvSourceLabel.setPadding(0, 0, 0, 8);
    root.addView(tvSourceLabel);

    uiBtnSource = new Button(a);
    int src = getObjCfg(cfg, "musicSource", CFG_MUSIC_SOURCE);
    uiBtnSource.setText("音源: " + buildSrcLabel(src));
    uiBtnSource.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            final String[] srcNames = {"远梦酷我", "云烟网易", "西瓜糖酷我", "西瓜糖QQ", "慕名酷我", "慕名QQ", "慕名酷狗MV", "慕名QQMV"};
            final int[] idxToSrc = {1, 2, 3, 4, 5, 6, 7, 8};
            int curSrc = getObjCfg(cfg, "musicSource", CFG_MUSIC_SOURCE);
            final boolean[] checked = new boolean[8];
            if (curSrc == 0) { for (int i=0;i<8;i++) checked[i]=true; }
            else if (curSrc < 0) {
                String multi = getStrCfg("multiSrc", "");
                String[] parts = multi.split(",");
                for (String p : parts) { try { int s=Integer.parseInt(p.trim()); for(int j=0;j<8;j++){if(idxToSrc[j]==s){checked[j]=true;break;}} } catch(Throwable e){} }
            } else { for(int j=0;j<8;j++){if(idxToSrc[j]==curSrc){checked[j]=true;break;}} }
            new AlertDialog.Builder(a)
                .setTitle("选择音源（可多选）")
                .setMultiChoiceItems(srcNames, checked, new DialogInterface.OnMultiChoiceClickListener(){
                    public void onClick(DialogInterface d, int w, boolean isChecked){ checked[w]=isChecked; }
                })
                .setPositiveButton("确定", new DialogInterface.OnClickListener(){
                    public void onClick(DialogInterface d, int w){
                        int cnt=0, lastSrc=1;
                        for (int i=0;i<8;i++){ if(checked[i]){cnt++;lastSrc=idxToSrc[i];} }
                        if(cnt==0){toast("至少选一个");return;}
                        if(cnt==8) cfg.put("musicSource", 0);
                        else if(cnt==1) cfg.put("musicSource", lastSrc);
                        else {
                            cfg.put("musicSource", -cnt);
                            StringBuilder sb=new StringBuilder();
                            for(int i=0;i<8;i++) if(checked[i]){ if(sb.length()>0)sb.append(","); sb.append(idxToSrc[i]); }
                            putStrCfg("multiSrc", sb.toString());
                        }
                        saveConfig(); refreshTuneUIButtons();
                    }
                }).setNegativeButton("取消", null).show();
        }
    });
    root.addView(uiBtnSource);

    View spacer1 = new View(a);
    spacer1.setMinimumHeight(20);
    root.addView(spacer1);

    // ========== 2. 搜索发送 ==========
    LinearLayout searchRow = new LinearLayout(a);
    searchRow.setOrientation(LinearLayout.HORIZONTAL);
    searchRow.setPadding(0, 0, 0, 10);

    uiSearchInput = new EditText(a);
    uiSearchInput.setHint("输入歌名搜索并发送...");
    uiSearchInput.setSingleLine(true);
    LinearLayout.LayoutParams lpInput = new LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1.0f);
    uiSearchInput.setLayoutParams(lpInput);
    searchRow.addView(uiSearchInput);

    Button btnSearchAndSend = new Button(a);
    btnSearchAndSend.setText("发送");
    btnSearchAndSend.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            String keyword = uiSearchInput.getText().toString().trim();
            if (keyword.length() == 0) { toast("请输入歌名"); return; }
            queryData(uiTalker, keyword);
            toast("已发送");
            uiSearchInput.setText("");
        }
    });
    searchRow.addView(btnSearchAndSend);
    root.addView(searchRow);

    View spacer2 = new View(a);
    spacer2.setMinimumHeight(15);
    root.addView(spacer2);

    // ========== 3. 第一行开关（点歌开关 + 群聊开关） ==========
    LinearLayout row1 = new LinearLayout(a);
    row1.setOrientation(LinearLayout.HORIZONTAL);
    row1.setPadding(0, 0, 0, 10);

    uiBtnMusic = new Button(a);
    uiBtnMusic.setText("点歌: " + onOffText(getObjCfg(cfg, "musicEnabled", CFG_MUSIC_ENABLED)));
    uiBtnMusic.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            int cur = getObjCfg(cfg, "musicEnabled", CFG_MUSIC_ENABLED);
            cfg.put("musicEnabled", cur == 1 ? 0 : 1);
            saveConfig(); refreshTuneUIButtons();
        }
    });
    LinearLayout.LayoutParams btnParams = new LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1.0f);
    btnParams.setMargins(0, 0, 10, 0);
    uiBtnMusic.setLayoutParams(btnParams);
    row1.addView(uiBtnMusic);

    uiBtnGroup = new Button(a);
    uiBtnGroup.setText("群聊: " + onOffText(getObjCfg(cfg, "groupEnabled", CFG_GROUP_ENABLED)));
    uiBtnGroup.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            int cur = getObjCfg(cfg, "groupEnabled", CFG_GROUP_ENABLED);
            cfg.put("groupEnabled", cur == 1 ? 0 : 1);
            saveConfig(); refreshTuneUIButtons();
        }
    });
    LinearLayout.LayoutParams btnParams2 = new LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1.0f);
    btnParams2.setMargins(10, 0, 0, 0);
    uiBtnGroup.setLayoutParams(btnParams2);
    row1.addView(uiBtnGroup);
    root.addView(row1);

    // ========== 4. 第二行开关（卡片 + 直链 + 列表） ==========
    LinearLayout row2 = new LinearLayout(a);
    row2.setOrientation(LinearLayout.HORIZONTAL);
    row2.setPadding(0, 0, 0, 10);

    uiBtnCard = new Button(a);
    uiBtnCard.setText("卡片: " + onOffText(getObjCfg(cfg, "cardEnabled", CFG_CARD_ENABLED)));
    uiBtnCard.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            int cur = getObjCfg(cfg, "cardEnabled", CFG_CARD_ENABLED);
            cfg.put("cardEnabled", cur == 1 ? 0 : 1);
            saveConfig(); refreshTuneUIButtons();
        }
    });
    uiBtnCard.setLayoutParams(new LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1.0f));
    setMargins(uiBtnCard.getLayoutParams(), 0, 0, 5, 0);
    row2.addView(uiBtnCard);

    uiBtnLink = new Button(a);
    uiBtnLink.setText("直链: " + onOffText(getObjCfg(cfg, "linkEnabled", CFG_LINK_ENABLED)));
    uiBtnLink.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            int cur = getObjCfg(cfg, "linkEnabled", CFG_LINK_ENABLED);
            cfg.put("linkEnabled", cur == 1 ? 0 : 1);
            saveConfig(); refreshTuneUIButtons();
        }
    });
    uiBtnLink.setLayoutParams(new LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1.0f));
    setMargins(uiBtnLink.getLayoutParams(), 5, 0, 5, 0);
    row2.addView(uiBtnLink);

    uiBtnList = new Button(a);
    uiBtnList.setText("列表: " + onOffText(getObjCfg(cfg, "listEnabled", CFG_LIST_ENABLED)));
    uiBtnList.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            int cur = getObjCfg(cfg, "listEnabled", CFG_LIST_ENABLED);
            cfg.put("listEnabled", cur == 1 ? 0 : 1);
            saveConfig(); refreshTuneUIButtons();
        }
    });
    uiBtnList.setLayoutParams(new LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1.0f));
    setMargins(uiBtnList.getLayoutParams(), 5, 0, 0, 0);
    row2.addView(uiBtnList);
    root.addView(row2);

    // ========== 5. 命令授权（仅群聊显示） ==========
    if (uiTalker.endsWith("@chatroom")) {
        TextView tvAuthLabel = new TextView(a);
        tvAuthLabel.setText("🔑 命令授权成员");
        tvAuthLabel.setTextSize(14);
        tvAuthLabel.setPadding(0, 10, 0, 8);
        root.addView(tvAuthLabel);
        
        // 显示当前授权人数
        String authList = ss(cfg.get("cmdAuthList"));
        int authCount = authList.length() > 0 ? authList.split(",").length : 0;
        Button btnCmdAuth = new Button(a);
        btnCmdAuth.setText("👥 授权成员 (" + authCount + "人)");
        btnCmdAuth.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                showGroupMemberAuthUI(a, uiTalker, btnCmdAuth);
            }
        });
        root.addView(btnCmdAuth);
    }

    // ========== 6. 自定义卡片设置 ==========
    TextView tvCustomLabel = new TextView(a);
    tvCustomLabel.setText("🎨 自定义卡片");
    tvCustomLabel.setTextSize(14);
    tvCustomLabel.setPadding(0, 0, 0, 8);
    root.addView(tvCustomLabel);

    final EditText etCustomSinger = new EditText(a);
    etCustomSinger.setHint("自定义歌手名 (留空使用原歌手)");
    etCustomSinger.setSingleLine(true);
    etCustomSinger.setText(getStrCfg("customSinger", ""));
    root.addView(etCustomSinger);

    final EditText etCustomCover = new EditText(a);
    etCustomCover.setHint("自定义封面图片URL (留空使用原封面)");
    etCustomCover.setSingleLine(true);
    etCustomCover.setText(getStrCfg("customCover", ""));
    root.addView(etCustomCover);

    Button btnTestCard = new Button(a);
    btnTestCard.setText("🎵 测试自定义卡片(封面艾薇儿试听歌曲)");
    btnTestCard.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            String testTitle = "试听歌曲";
            String testArtist = etCustomSinger.getText().toString().trim();
            if (testArtist.length() == 0) testArtist = "吃不香菜";
            String testUrl = "https://music.163.com/song/media/outer/url?id=1300272294.mp3";
            String testCover = etCustomCover.getText().toString().trim();
            if (testCover.length() == 0) testCover = "https://bkimg.cdn.bcebos.com/pic/359b033b5bb5c9eaf7c54492d639b6003af3b389";
            sendMusicCardTry(uiTalker, testTitle, testArtist, testUrl, testCover, "");
            toast("已发送测试卡片");
        }
    });
    root.addView(btnTestCard);

    TextView divider2 = new TextView(a);
    divider2.setText("──────────");
    divider2.setTextSize(12);
    divider2.setPadding(0, 15, 0, 10);
    root.addView(divider2);

    // ========== 7. 触发词/首尾文案 ==========
    uiTriggerEt = new EditText(a);
    uiTriggerEt.setHint("触发词 (空格分隔多个)");
    uiTriggerEt.setSingleLine(true);
    uiTriggerEt.setText(getStrCfg("trigger", "play 我想听 点歌"));
    root.addView(uiTriggerEt);

    uiPrefixEt = new EditText(a);
    uiPrefixEt.setHint("句首文案");
    uiPrefixEt.setSingleLine(true);
    uiPrefixEt.setText(getStrCfg("prefixText", ""));
    root.addView(uiPrefixEt);

    uiSuffixEt = new EditText(a);
    uiSuffixEt.setHint("句尾文案");
    uiSuffixEt.setSingleLine(true);
    uiSuffixEt.setText(getStrCfg("tailText", ""));
    root.addView(uiSuffixEt);

    uiExpireEt = new EditText(a);
    uiExpireEt.setHint("列表过期(分钟)");
    uiExpireEt.setSingleLine(true);
    uiExpireEt.setText(getStrCfg("expireMin", "5"));
    root.addView(uiExpireEt);

    TextView divider3 = new TextView(a);
    divider3.setText("──────────");
    divider3.setTextSize(12);
    divider3.setPadding(0, 15, 0, 10);
    root.addView(divider3);

    // ========== 8. 保存 / 重置 / 关闭 ==========
    LinearLayout bottomRow = new LinearLayout(a);
    bottomRow.setOrientation(LinearLayout.HORIZONTAL);

    Button btnSave = new Button(a);
    btnSave.setText("💾 保存");
    btnSave.setLayoutParams(new LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1.0f));
    setMargins(btnSave.getLayoutParams(), 0, 0, 5, 0);
    btnSave.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            putStrCfg("trigger", ss(uiTriggerEt.getText().toString()));
            putStrCfg("prefixText", ss(uiPrefixEt.getText().toString()));
            putStrCfg("tailText", ss(uiSuffixEt.getText().toString()));
            putStrCfg("expireMin", ss(uiExpireEt.getText().toString()));
            putStrCfg("customSinger", ss(etCustomSinger.getText().toString()));
            putStrCfg("customCover", ss(etCustomCover.getText().toString()));
            saveConfig();
            toast("已保存");
        }
    });
    bottomRow.addView(btnSave);

    Button btnReset = new Button(a);
    btnReset.setText("🔄 重置");
    btnReset.setLayoutParams(new LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1.0f));
    setMargins(btnReset.getLayoutParams(), 5, 0, 5, 0);
    btnReset.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            new AlertDialog.Builder(a)
                .setTitle("确认重置")
                .setMessage("将当前会话的设置重置为默认值？")
                .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface d, int w) {
                        userConfigMap.put(uiTalker, newDefaultObjConfig());
                        saveConfig();
                        tuneDialog.dismiss();
                        showTuneMainUI(a);
                    }
                })
                .setNegativeButton("取消", null)
                .show();
        }
    });
    bottomRow.addView(btnReset);

    Button btnClose = new Button(a);
    btnClose.setText("❌ 关闭");
    btnClose.setLayoutParams(new LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1.0f));
    setMargins(btnClose.getLayoutParams(), 5, 0, 0, 0);
    btnClose.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            if (tuneDialog != null) { tuneDialog.dismiss(); tuneDialog = null; }
        }
    });
    bottomRow.addView(btnClose);
    root.addView(bottomRow);

    scrollView.addView(root);
    tuneDialog = new AlertDialog.Builder(a)
        .setTitle("🎵 点歌设置")
        .setView(scrollView)
        .setCancelable(true)
        .create();
    tuneDialog.setOnDismissListener(new DialogInterface.OnDismissListener() {
        public void onDismiss(DialogInterface d) { tuneDialog = null; }
    });
    tuneDialog.show();
}

// 辅助函数：设置边距
ViewGroup.LayoutParams setMargins(ViewGroup.LayoutParams params, int left, int top, int right, int bottom) {
    if (params instanceof ViewGroup.MarginLayoutParams) {
        ((ViewGroup.MarginLayoutParams) params).setMargins(left, top, right, bottom);
    }
    return params;
}

// ===== 命令授权成员选择UI =====
void showGroupMemberAuthUI(Activity a, String groupId, Button refreshBtn) {
    try {
        // 显示加载中
        android.app.AlertDialog loadingDialog = new android.app.AlertDialog.Builder(a)
            .setTitle("加载中...")
            .setMessage("正在获取群成员列表")
            .setCancelable(false)
            .create();
        loadingDialog.show();
        
        new Thread(new Runnable() {
            public void run() {
                try {
                    // 获取群成员列表
                    List memberList = getGroupMemberList(groupId);
                    if (memberList == null || memberList.isEmpty()) {
                        new Handler(Looper.getMainLooper()).post(new Runnable() {
                            public void run() {
                                loadingDialog.dismiss();
                                toast("获取群成员失败");
                            }
                        });
                        return;
                    }
                    
                    // 获取当前已授权列表
                    Map cfg = getObjConfig(groupId);
                    String authListStr = ss(cfg.get("cmdAuthList"));
                    final Set<String> authSet = new HashSet();
                    if (authListStr.length() > 0) {
                        String[] parts = authListStr.split(",");
                        for (String p : parts) authSet.add(p.trim());
                    }
                    
                    // 构建成员列表（昵称 + wxid）
                    final List<String> memberNames = new ArrayList();
                    final List<String> memberIds = new ArrayList();
                    for (int i = 0; i < memberList.size(); i++) {
                        String wxid = ss(memberList.get(i));
                        if (wxid.length() == 0) continue;
                        memberIds.add(wxid);
                        String name = getUserName(groupId, wxid);
                        if (name == null || name.length() == 0) name = wxid;
                        memberNames.add(name);
                    }
                    
                    new Handler(Looper.getMainLooper()).post(new Runnable() {
                        public void run() {
                            loadingDialog.dismiss();
                            
                            final boolean[] checked = new boolean[memberIds.size()];
                            for (int i = 0; i < memberIds.size(); i++) {
                                if (authSet.contains(memberIds.get(i))) checked[i] = true;
                            }
                            
                            new android.app.AlertDialog.Builder(a)
                                .setTitle("选择有管理权限的成员")
                                .setMultiChoiceItems(
                                    memberNames.toArray(new String[0]), 
                                    checked,
                                    new DialogInterface.OnMultiChoiceClickListener() {
                                        public void onClick(DialogInterface dialog, int which, boolean isChecked) {
                                            checked[which] = isChecked;
                                        }
                                    }
                                )
                                .setPositiveButton("保存", new DialogInterface.OnClickListener() {
                                    public void onClick(DialogInterface dialog, int which) {
                                        StringBuilder sb = new StringBuilder();
                                        for (int i = 0; i < memberIds.size(); i++) {
                                            if (checked[i]) {
                                                if (sb.length() > 0) sb.append(",");
                                                sb.append(memberIds.get(i));
                                            }
                                        }
                                        Map c = getObjConfig(groupId);
                                        c.put("cmdAuthList", sb.toString());
                                        saveConfig();
                                        int count = sb.length() > 0 ? sb.toString().split(",").length : 0;
                                        toast("已授权 " + count + " 人");
                                        if (refreshBtn != null) {
                                            refreshBtn.setText("👥 授权成员 (" + count + "人)");
                                        }
                                    }
                                })
                                .setNegativeButton("取消", null)
                                .show();
                        }
                    });
                } catch (Throwable e) {
                    new Handler(Looper.getMainLooper()).post(new Runnable() {
                        public void run() {
                            loadingDialog.dismiss();
                            toast("获取群成员失败: " + e.getMessage());
                        }
                    });
                }
            }
        }).start();
        
    } catch (Throwable e) {
        toast("失败: " + e.getMessage());
    }
}