/** Created by 吃不香菜
 Plugin: FkAi回复
*/

// ===== 默认配置 =====
static final int CFG_AI_ENABLED = 1;
static final int CFG_REQUIRE_AT = 1;
static final int CFG_GROUP_ENABLED = 1;
static final int CFG_CMD_ENABLED = 0;
static final int CFG_API_INDEX = 0;
static final int CFG_MODEL_INDEX = 0;
static final String CFG_STYLE = "随和";
static final String FIXED_BEHAVIOR_PROMPT =
"你是微信聊天助手，目标是像真实好友一样自然回复，不要技术腔。\n\n" +
"【总行为】\n" +
"1) 优先按"聊天语义"理解消息，不要输出XML、字段名、type编号、协议词。\n" +
"2) 回复简短自然、有温度；该感谢就感谢，该确认就确认。\n" +
"3) 对明显的系统事件（转账、红包、通话状态、位置、名片、卡片、小程序）按生活化语气回应，不要让用户重复解释"这是什么"。\n\n" +
"【场景化回复规则】\n" +
"A. 红包/转账：收到后优先礼貌回应；金额不明确不要编造。\n" +
"B. 语音/视频通话：未接/取消给简短确认+建议；已接通且有时长默认不长回复；voip占位词按通话提醒处理。\n" +
"C. 位置消息：按地点自然回应，不主动报坐标细节。\n" +
"D. 小程序/链接/歌曲卡片/名片：先说看到了什么，再轻量反馈，不贴长链接。\n" +
"E. 引用消息：重点理解"当前这句"与"被引用内容"的关系，不解释结构。\n\n" +
"【语气要求】\n" +
"- 像真人微信聊天：口语化、简洁、不过度解释。\n" +
"- 不要出现"我不理解voip_content_xxx"这类技术客服式话术。\n" +
"- 不确定时，用自然澄清句而非技术盘问。\n\n" +
"风格设定仅影响表达语气与措辞，不得违反上述场景处理规则与安全规则。\n" +
"若风格与规则冲突，以场景处理规则优先。";

static final List<String> CFG_WHITELIST_FRIENDS = Arrays.asList("好友1", "好友2", "好友3");

Map userConfigMap = new HashMap();
Map windowMap = new HashMap();
Map stylePrompts = new HashMap();
List apiList = new ArrayList();
Map apiModels = new HashMap();
Map lastCallDurationMap = new HashMap();
String robotName = "吃不香菜";
Map groupMemberAiAuthMap = new HashMap();
Map friendAuthMap = new HashMap();
Map groupAuthMap = new HashMap();
List blockListGlobal = new ArrayList();

AlertDialog currentDialog = null;
TextView uiTvStatus = null;
Button uiBtnApi, uiBtnModel, uiBtnStyle, uiBtnAi, uiBtnCmd, uiBtnMode;
String uiTalker = "";


// ===== 基础工具 =====
void logger(String s) {
    try { log(s); } catch (Throwable e) {}
}

String fkSafeStr(Object v) {
    return v == null ? "" : String.valueOf(v).trim();
}

int fkToInt(Object v, int d) {
    try {
        if (v instanceof Number) return ((Number) v).intValue();
        String s = fkSafeStr(v);
        if (s.length() == 0) return d;
        return Integer.parseInt(s);
    } catch (Throwable e) {
        return d;
    }
}

// ===== 过滤文件名污染 =====
boolean isValidName(String name) {
    if (name == null || name.length() == 0) return false;
    // 过滤路径格式（包含/）、微信目录、常见文件扩展名
    if (name.startsWith("/")) return false;
    if (name.contains("com.tencent.mm")) return false;
    if (name.contains(".")) return false; // 文件名带扩展名
    if (name.contains("联系人")) return false;
    return true;
}

// ===== 风格文件路径 =====
String getStyleFile() {
    return getConfigDir() + "styles.json";
}

// ===== 风格初始化（JSON文件+内置兜底）=====
void initStyles() {
    if (!stylePrompts.isEmpty()) return;
    
    // 先尝试从JSON文件读取
    loadStylesFromFile();
    
    // 兜底：确保至少有两个内置风格
    if (!stylePrompts.containsKey("随和")) {
        stylePrompts.put("随和", "你是一个随和友善的助手，回复简洁自然。");
    }
    if (!stylePrompts.containsKey("复读机")) {
        stylePrompts.put("复读机", "+1复读机，应声虫模式，不走ai回复");
    }
}

// ===== 读取风格JSON文件 =====
void loadStylesFromFile() {
    BufferedReader reader = null;
    try {
        File file = new File(getStyleFile());
        if (!file.exists()) return;
        reader = new BufferedReader(new FileReader(file));
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) sb.append(line);
        String txt = sb.toString().trim();
        if (txt.length() == 0) return;
        JSONObject root = new JSONObject(txt);
        Iterator it = root.keys();
        int count = 0;
        while (it.hasNext()) {
            String name = String.valueOf(it.next());
            // 过滤文件名污染
            if (!isValidName(name)) {
                logger("风格过滤跳过: " + name);
                continue;
            }
            String prompt = root.optString(name, "");
            if (prompt.length() > 0) {
                stylePrompts.put(name, prompt);
                count++;
            }
        }
        logger("从styles.json加载了 " + count + " 个风格");
    } catch (Throwable e) {
        logger("loadStylesFromFile异常: " + e);
    } finally {
        try { if (reader != null) reader.close(); } catch (Throwable ee) {}
    }
}

// ===== 保存风格到JSON文件 =====
void saveStylesToFile() {
    FileWriter writer = null;
    try {
        ensureConfigDir();
        JSONObject root = new JSONObject();
        for (Object key : stylePrompts.keySet()) {
            String name = fkSafeStr(key);
            if (!isValidName(name)) continue;
            String prompt = fkSafeStr(stylePrompts.get(key));
            if (prompt.length() > 0) {
                root.put(name, prompt);
            }
        }
        File file = new File(getStyleFile());
        writer = new FileWriter(file, false);
        writer.write(root.toString(2));
        writer.flush();
    } catch (Throwable e) {
        logger("saveStylesToFile异常: " + e);
    } finally {
        try { if (writer != null) writer.close(); } catch (Throwable ee) {}
    }
}

// ===== 屏蔽词文件路径 =====
String getBlockFile() {
    return getConfigDir() + "blocklist.json";
}

// ===== 屏蔽词初始化（JSON文件+内置兜底）=====
void initBlockList() {
    // 先尝试从JSON文件读取
    loadBlockListFromFile();
    
    // 兜底：确保内置屏蔽词存在
    List defaults = Arrays.asList("点歌", "play");
    for (int i = 0; i < defaults.size(); i++) {
        String w = fkSafeStr(defaults.get(i));
        if (w.length() > 0 && !blockListGlobal.contains(w)) {
            blockListGlobal.add(w);
        }
    }
}

// ===== 读取屏蔽词JSON文件 =====
void loadBlockListFromFile() {
    BufferedReader reader = null;
    try {
        File file = new File(getBlockFile());
        if (!file.exists()) return;
        reader = new BufferedReader(new FileReader(file));
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) sb.append(line);
        String txt = sb.toString().trim();
        if (txt.length() == 0) return;
        JSONObject root = new JSONObject(txt);
        JSONArray arr = root.optJSONArray("words");
        if (arr == null) return;
        int count = 0;
        for (int i = 0; i < arr.length(); i++) {
            String w = arr.optString(i, "").trim();
            // 过滤文件名污染
            if (!isValidName(w) && !w.matches("^[a-zA-Z0-9\\u4e00-\\u9fa5]+$")) {
                logger("屏蔽词过滤跳过: " + w);
                continue;
            }
            if (w.length() > 0 && !blockListGlobal.contains(w)) {
                blockListGlobal.add(w);
                count++;
            }
        }
        logger("从blocklist.json加载了 " + count + " 个屏蔽词");
    } catch (Throwable e) {
        logger("loadBlockListFromFile异常: " + e);
    } finally {
        try { if (reader != null) reader.close(); } catch (Throwable ee) {}
    }
}

// ===== 保存屏蔽词到JSON文件 =====
void saveBlockListToFile() {
    FileWriter writer = null;
    try {
        ensureConfigDir();
        JSONObject root = new JSONObject();
        JSONArray arr = new JSONArray();
        for (int i = 0; i < blockListGlobal.size(); i++) {
            String w = fkSafeStr(blockListGlobal.get(i));
            if (w.length() > 0) arr.put(w);
        }
        root.put("words", arr);
        File file = new File(getBlockFile());
        writer = new FileWriter(file, false);
        writer.write(root.toString(2));
        writer.flush();
    } catch (Throwable e) {
        logger("saveBlockListToFile异常: " + e);
    } finally {
        try { if (writer != null) writer.close(); } catch (Throwable ee) {}
    }
}

// ===== 配置 =====
Map newDefaultConfig() {
    Map c = new HashMap();
    c.put("apiIndex", CFG_API_INDEX);
    c.put("modelIndex", CFG_MODEL_INDEX);
    c.put("style", CFG_STYLE);
    c.put("aiEnabled", CFG_AI_ENABLED);
    c.put("groupEnabled", CFG_GROUP_ENABLED);
    c.put("requireAt", CFG_REQUIRE_AT);
    c.put("cmdEnabled", CFG_CMD_ENABLED);
    c.put("msgMode", "off");
    return c;
}

Map getUserConfig(String talker) {
    if (!userConfigMap.containsKey(talker)) userConfigMap.put(talker, newDefaultConfig());
    return (Map) userConfigMap.get(talker);
}

// ===== JSON持久化 =====
String getConfigDir() {
    int userId = android.os.UserHandle.myUserId();
    return "/storage/emulated/" + userId + "/Android/media/com.tencent.mm/FkWeChat/Plugin/FkAI回复/";
}

String getConfigFile() {
    return getConfigDir() + "config.json";
}

void ensureConfigDir() {
    try {
        File dir = new File(getConfigDir());
        if (!dir.exists()) dir.mkdirs();
    } catch (Throwable e) {
        logger("ensureConfigDir异常: " + e);
    }
}

JSONObject diffConfigToJson(Map cfg, Map def) {
    JSONObject out = new JSONObject();
    try {
        int apiIndex = fkToInt(cfg.get("apiIndex"), CFG_API_INDEX);
        if (apiIndex != fkToInt(def.get("apiIndex"), CFG_API_INDEX)) out.put("apiIndex", apiIndex);
        int modelIndex = fkToInt(cfg.get("modelIndex"), CFG_MODEL_INDEX);
        if (modelIndex != fkToInt(def.get("modelIndex"), CFG_MODEL_INDEX)) out.put("modelIndex", modelIndex);
        String style = fkSafeStr(cfg.get("style"));
        if (!style.equals(fkSafeStr(def.get("style")))) out.put("style", style);
        int aiEnabled = fkToInt(cfg.get("aiEnabled"), CFG_AI_ENABLED);
        if (aiEnabled != fkToInt(def.get("aiEnabled"), CFG_AI_ENABLED)) out.put("aiEnabled", aiEnabled);
        int groupEnabled = fkToInt(cfg.get("groupEnabled"), CFG_GROUP_ENABLED);
        if (groupEnabled != fkToInt(def.get("groupEnabled"), CFG_GROUP_ENABLED)) out.put("groupEnabled", groupEnabled);
        int requireAt = fkToInt(cfg.get("requireAt"), CFG_REQUIRE_AT);
        if (requireAt != fkToInt(def.get("requireAt"), CFG_REQUIRE_AT)) out.put("requireAt", requireAt);
        int cmdEnabled = fkToInt(cfg.get("cmdEnabled"), CFG_CMD_ENABLED);
        if (cmdEnabled != fkToInt(def.get("cmdEnabled"), CFG_CMD_ENABLED)) out.put("cmdEnabled", cmdEnabled);
        String msgMode = fkSafeStr(cfg.get("msgMode")).toLowerCase();
        if (msgMode.length() == 0) msgMode = "off";
        String defMode = fkSafeStr(def.get("msgMode")).toLowerCase();
        if (defMode.length() == 0) defMode = "off";
        if (!msgMode.equals(defMode)) out.put("msgMode", msgMode);
    } catch (Throwable e) {
        logger("diffConfigToJson异常: " + e);
    }
    return out;
}

void saveAllConfigToFile() {
    FileWriter writer = null;
    try {
        ensureConfigDir();
        JSONObject root = new JSONObject();
        Map def = newDefaultConfig();
        JSONObject cfgRoot = new JSONObject();
        for (Object k : userConfigMap.keySet()) {
            String talker = k == null ? "" : String.valueOf(k);
            if (talker.length() == 0) continue;
            Map cfg = (Map) userConfigMap.get(talker);
            if (cfg == null) continue;
            JSONObject diff = diffConfigToJson(cfg, def);
            if (diff.length() > 0) cfgRoot.put(talker, diff);
        }
        root.put("userConfigMap", cfgRoot);
        JSONObject authRoot = new JSONObject();
        for (Object rk : groupMemberAiAuthMap.keySet()) {
            String room = rk == null ? "" : String.valueOf(rk);
            if (room.length() == 0) continue;
            Set set = (Set) groupMemberAiAuthMap.get(room);
            JSONArray arr = new JSONArray();
            if (set != null) {
                for (Object uid : set) {
                    String u = uid == null ? "" : String.valueOf(uid).trim();
                    if (u.length() > 0) arr.put(u);
                }
            }
            if (arr.length() > 0) authRoot.put(room, arr);
        }
        root.put("groupMemberAiAuthMap", authRoot);
        JSONObject friendAuthRoot = new JSONObject();
        for (Object fk : friendAuthMap.keySet()) {
            String wxid = fkSafeStr(fk);
            if (wxid.length() > 0 && fkToInt(friendAuthMap.get(wxid), 0) == 1) friendAuthRoot.put(wxid, 1);
        }
        if (friendAuthRoot.length() > 0) root.put("friendAuthMap", friendAuthRoot);
        JSONObject groupAuthRoot = new JSONObject();
        for (Object gk : groupAuthMap.keySet()) {
            String roomId = fkSafeStr(gk);
            if (roomId.length() > 0 && fkToInt(groupAuthMap.get(roomId), 0) == 1) groupAuthRoot.put(roomId, 1);
        }
        if (groupAuthRoot.length() > 0) root.put("groupAuthMap", groupAuthRoot);
        File file = new File(getConfigFile());
        writer = new FileWriter(file, false);
        writer.write(root.toString(2));
        writer.flush();
    } catch (Throwable e) {
        logger("saveAllConfigToFile异常: " + e);
    } finally {
        try { if (writer != null) writer.close(); } catch (Throwable ee) {}
    }
}

void loadAllConfigFromFile() {
    BufferedReader reader = null;
    try {
        File file = new File(getConfigFile());
        if (!file.exists()) return;
        reader = new BufferedReader(new FileReader(file));
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) sb.append(line);
        String txt = sb.toString().trim();
        if (txt.length() == 0) return;
        JSONObject root = new JSONObject(txt);
        userConfigMap.clear();
        groupMemberAiAuthMap.clear();
        friendAuthMap.clear();
        groupAuthMap.clear();
        Map def = newDefaultConfig();
        JSONObject cfgRoot = root.optJSONObject("userConfigMap");
        if (cfgRoot != null) {
            Iterator it = cfgRoot.keys();
            while (it.hasNext()) {
                String talker = String.valueOf(it.next());
                JSONObject one = cfgRoot.optJSONObject(talker);
                if (one == null) continue;
                Map cfg = new HashMap();
                cfg.putAll(def);
                if (one.has("apiIndex")) cfg.put("apiIndex", one.optInt("apiIndex", fkToInt(def.get("apiIndex"), CFG_API_INDEX)));
                if (one.has("modelIndex")) cfg.put("modelIndex", one.optInt("modelIndex", fkToInt(def.get("modelIndex"), CFG_MODEL_INDEX)));
                if (one.has("style")) cfg.put("style", one.optString("style", fkSafeStr(def.get("style"))));
                if (one.has("aiEnabled")) cfg.put("aiEnabled", one.optInt("aiEnabled", fkToInt(def.get("aiEnabled"), CFG_AI_ENABLED)));
                if (one.has("groupEnabled")) cfg.put("groupEnabled", one.optInt("groupEnabled", fkToInt(def.get("groupEnabled"), CFG_GROUP_ENABLED)));
                if (one.has("requireAt")) cfg.put("requireAt", one.optInt("requireAt", fkToInt(def.get("requireAt"), CFG_REQUIRE_AT)));
                if (one.has("cmdEnabled")) cfg.put("cmdEnabled", one.optInt("cmdEnabled", fkToInt(def.get("cmdEnabled"), CFG_CMD_ENABLED)));
                if (one.has("msgMode")) cfg.put("msgMode", one.optString("msgMode", fkSafeStr(def.get("msgMode"))));
                userConfigMap.put(talker, cfg);
            }
        }
        JSONObject authRoot = root.optJSONObject("groupMemberAiAuthMap");
        if (authRoot != null) {
            Iterator it2 = authRoot.keys();
            while (it2.hasNext()) {
                String room = String.valueOf(it2.next());
                JSONArray arr = authRoot.optJSONArray(room);
                if (arr == null || arr.length() == 0) continue;
                Set set = new HashSet();
                for (int i = 0; i < arr.length(); i++) {
                    String uid = arr.optString(i, "").trim();
                    if (uid.length() > 0) set.add(uid);
                }
                if (!set.isEmpty()) groupMemberAiAuthMap.put(room, set);
            }
        }
        friendAuthMap.clear();
        JSONObject friendAuthRoot = root.optJSONObject("friendAuthMap");
        if (friendAuthRoot != null) {
            Iterator it = friendAuthRoot.keys();
            while (it.hasNext()) { String wxid = String.valueOf(it.next()); if (friendAuthRoot.optInt(wxid) == 1) friendAuthMap.put(wxid, 1); }
        }
        groupAuthMap.clear();
        JSONObject groupAuthRoot = root.optJSONObject("groupAuthMap");
        if (groupAuthRoot != null) {
            Iterator it = groupAuthRoot.keys();
            while (it.hasNext()) { String roomId = String.valueOf(it.next()); if (groupAuthRoot.optInt(roomId) == 1) groupAuthMap.put(roomId, 1); }
        }
    } catch (Throwable e) {
        logger("loadAllConfigFromFile异常: " + e);
    } finally {
        try { if (reader != null) reader.close(); } catch (Throwable ee) {}
    }
}

// ===== API & 风格 =====
// ===== API文件路径 =====
String getApiFile() {
    return getConfigDir() + "api.json";
}

// ===== 读取API JSON文件 =====
void loadApiFromFile() {
    BufferedReader reader = null;
    try {
        File file = new File(getApiFile());
        if (!file.exists()) return;
        reader = new BufferedReader(new FileReader(file));
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) sb.append(line);
        String txt = sb.toString().trim();
        if (txt.length() == 0) return;
        JSONObject root = new JSONObject(txt);
        apiList.clear();
        apiModels.clear();
        Iterator it = root.keys();
        int count = 0;
        while (it.hasNext()) {
            String idx = String.valueOf(it.next());
            JSONObject a = root.optJSONObject(idx);
            if (a == null) continue;
            Map api = new HashMap();
            api.put("name", a.optString("name", "unknown"));
            api.put("url", a.optString("url", ""));
            api.put("key", a.optString("key", ""));
            apiList.add(api);
            List ms = new ArrayList();
            JSONArray mArr = a.optJSONArray("models");
            if (mArr != null) {
                for (int y = 0; y < mArr.length(); y++) {
                    String m = mArr.optString(y, "").trim();
                    if (m.length() > 0) ms.add(m);
                }
            }
            apiModels.put(apiList.size() - 1, ms);
            count++;
        }
        logger("从api.json加载了 " + count + " 个API");
    } catch (Throwable e) {
        logger("loadApiFromFile异常: " + e);
    } finally {
        try { if (reader != null) reader.close(); } catch (Throwable ee) {}
    }
}

// ===== 保存API到JSON文件 =====
void saveApiToFile() {
    FileWriter writer = null;
    try {
        ensureConfigDir();
        JSONObject root = new JSONObject();
        for (int x = 0; x < apiList.size(); x++) {
            Map api = (Map) apiList.get(x);
            JSONObject a = new JSONObject();
            a.put("name", fkSafeStr(api.get("name")));
            a.put("url", fkSafeStr(api.get("url")));
            a.put("key", fkSafeStr(api.get("key")));
            JSONArray ms = new JSONArray();
            List models = (List) apiModels.get(x);
            if (models != null) {
                for (int y = 0; y < models.size(); y++) {
                    String m = fkSafeStr(models.get(y));
                    if (m.length() > 0) ms.put(m);
                }
            }
            a.put("models", ms);
            root.put(String.valueOf(x), a);
        }
        File file = new File(getApiFile());
        writer = new FileWriter(file, false);
        writer.write(root.toString(2));
        writer.flush();
    } catch (Throwable e) {
        logger("saveApiToFile异常: " + e);
    } finally {
        try { if (writer != null) writer.close(); } catch (Throwable ee) {}
    }
}

// ===== API配置初始化（JSON+兜底）=====
void initApiConfig() {
    if (!apiList.isEmpty()) return;
    // 先尝试从JSON读取
    loadApiFromFile();
    // 兜底：确保至少有两个内置API
    if (apiList.isEmpty()) {
        Object[][] apiConfigs = {
           {
           "商汤日日新", "https://token.sensenova.cn/v1/chat/completions", "sk-修改密码",
                new String[]{"deepseek-v4-flash", "sensenova-6.7-flash-lite"}},
           {
           "mimo", "https://api.xiaomimimo.com/v1/chat/completions", "sk-修改密码", 
                new String[]{"mimo-v2-flash"}}        
        };
        for (int i = 0; i < apiConfigs.length; i++) {
            Map a = new HashMap();
            a.put("name", apiConfigs[i][0]);
            a.put("url", apiConfigs[i][1]);
            a.put("key", apiConfigs[i][2]);
            apiList.add(a);
            List ms = new ArrayList();
            String[] arr = (String[]) apiConfigs[i][3];
            for (int j = 0; j < arr.length; j++) ms.add(arr[j]);
            apiModels.put(i, ms);
        }
        // 兜底加载后保存一次，以便用户后续编辑
        saveApiToFile();
    }
}

String getCurrentModel(String talker) {
    Map c = getUserConfig(talker);
    int ai = fkToInt(c.get("apiIndex"), 0);
    int mi = fkToInt(c.get("modelIndex"), 0);
    List ms = (List) apiModels.get(ai);
    if (ms == null || ms.isEmpty()) return "unknown";
    if (mi < 0 || mi >= ms.size()) mi = 0;
    return fkSafeStr(ms.get(mi));
}

// ===== API模型拉取 / 测试 / Key脱敏工具 =====

String maskApiKey(String key) {
    key = fkSafeStr(key);
    if (key.length() <= 8) return key.length() == 0 ? "" : "****";
    return key.substring(0, Math.min(6, key.length())) + "****" + key.substring(key.length() - 4);
}

boolean isMaskedApiKeyText(String s) {
    s = fkSafeStr(s);
    return s.indexOf("****") >= 0;
}

String buildModelsUrl(String chatUrl) {
    String u = fkSafeStr(chatUrl);
    if (u.length() == 0) return "";

    if (u.endsWith("/")) u = u.substring(0, u.length() - 1);

    if (u.endsWith("/v1/chat/completions")) {
        return u.substring(0, u.length() - "/v1/chat/completions".length()) + "/v1/models";
    }

    if (u.endsWith("/chat/completions")) {
        return u.substring(0, u.length() - "/chat/completions".length()) + "/models";
    }

    if (u.endsWith("/v1/responses")) {
        return u.substring(0, u.length() - "/v1/responses".length()) + "/v1/models";
    }

    int p = u.indexOf("/v1/");
    if (p > 0) {
        return u.substring(0, p) + "/v1/models";
    }

    return u + "/v1/models";
}

String joinModelList(List models) {
    StringBuilder sb = new StringBuilder();
    if (models == null) return "";
    for (int i = 0; i < models.size(); i++) {
        String m = fkSafeStr(models.get(i));
        if (m.length() == 0) continue;
        if (sb.length() > 0) sb.append(",");
        sb.append(m);
    }
    return sb.toString();
}

List parseModelsFromResp(String resp) {
    List out = new ArrayList();
    try {
        String txt = fkSafeStr(resp);
        if (txt.length() == 0) return out;

        // OpenAI兼容格式: {"data":[{"id":"xxx"}]}
        if (txt.startsWith("{")) {
            JSONObject root = new JSONObject(txt);

            JSONArray data = root.optJSONArray("data");
            if (data != null) {
                for (int i = 0; i < data.length(); i++) {
                    Object one = data.opt(i);
                    String id = "";
                    if (one instanceof JSONObject) {
                        id = ((JSONObject) one).optString("id", "");
                    } else {
                        id = fkSafeStr(one);
                    }
                    id = id.trim();
                    if (id.length() > 0 && !out.contains(id)) out.add(id);
                }
            }

            // 兼容: {"models":["xxx","yyy"]}
            JSONArray models = root.optJSONArray("models");
            if (models != null) {
                for (int i = 0; i < models.length(); i++) {
                    Object one = models.opt(i);
                    String id = "";
                    if (one instanceof JSONObject) {
                        id = ((JSONObject) one).optString("id", "");
                    } else {
                        id = fkSafeStr(one);
                    }
                    id = id.trim();
                    if (id.length() > 0 && !out.contains(id)) out.add(id);
                }
            }
        }

        // 兼容: [{"id":"xxx"}] 或 ["xxx"]
        if (txt.startsWith("[")) {
            JSONArray arr = new JSONArray(txt);
            for (int i = 0; i < arr.length(); i++) {
                Object one = arr.opt(i);
                String id = "";
                if (one instanceof JSONObject) {
                    id = ((JSONObject) one).optString("id", "");
                } else {
                    id = fkSafeStr(one);
                }
                id = id.trim();
                if (id.length() > 0 && !out.contains(id)) out.add(id);
            }
        }

    } catch (Throwable e) {
        logger("parseModelsFromResp异常: " + e);
    }
    return out;
}

List fetchModelsFromApi(String chatUrl, String key) {
    List out = new ArrayList();
    java.net.HttpURLConnection conn = null;
    try {
        String modelsUrl = buildModelsUrl(chatUrl);
        if (modelsUrl.length() == 0) return out;

        java.net.URL obj = new java.net.URL(modelsUrl);
        conn = (java.net.HttpURLConnection) obj.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Accept", "application/json");
        if (fkSafeStr(key).length() > 0) {
            conn.setRequestProperty("Authorization", "Bearer " + fkSafeStr(key));
        }
        conn.setConnectTimeout(10000);
        conn.setReadTimeout(20000);

        int code = conn.getResponseCode();
        java.io.InputStream is = (code >= 200 && code < 300) ? conn.getInputStream() : conn.getErrorStream();

        java.io.BufferedReader in = new java.io.BufferedReader(new java.io.InputStreamReader(is, "UTF-8"));
        String line;
        StringBuilder resp = new StringBuilder();
        while ((line = in.readLine()) != null) resp.append(line);
        in.close();

        String respStr = resp.toString();
        if (code >= 200 && code < 300) {
            out = parseModelsFromResp(respStr);
            logger("拉取模型成功: " + out.size() + "个, url=" + modelsUrl);
        } else {
            logger("拉取模型失败(" + code + "): " + respStr);
        }

    } catch (Throwable e) {
        logger("fetchModelsFromApi异常: " + e);
    } finally {
        try { if (conn != null) conn.disconnect(); } catch (Throwable e) {}
    }
    return out;
}

String testOpenAiApi(String chatUrl, String key, String model) {
    java.net.HttpURLConnection conn = null;
    try {
        chatUrl = fkSafeStr(chatUrl);
        key = fkSafeStr(key);
        model = fkSafeStr(model);

        if (chatUrl.length() == 0) return "URL为空";
        if (key.length() == 0) return "Key为空";
        if (model.length() == 0) return "模型为空";

        JSONObject params = new JSONObject();
        params.put("model", model);
        params.put("temperature", 0);

        JSONArray messages = new JSONArray();
        JSONObject m = new JSONObject();
        m.put("role", "user");
        m.put("content", "只回复 OK");
        messages.put(m);
        params.put("messages", messages);

        java.net.URL obj = new java.net.URL(chatUrl);
        conn = (java.net.HttpURLConnection) obj.openConnection();
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-Type", "application/json");
        conn.setRequestProperty("Authorization", "Bearer " + key);
        conn.setDoOutput(true);
        conn.setConnectTimeout(10000);
        conn.setReadTimeout(30000);

        java.io.OutputStream os = conn.getOutputStream();
        os.write(params.toString().getBytes("UTF-8"));
        os.flush();
        os.close();

        int code = conn.getResponseCode();
        java.io.InputStream is = (code >= 200 && code < 300) ? conn.getInputStream() : conn.getErrorStream();

        java.io.BufferedReader in = new java.io.BufferedReader(new java.io.InputStreamReader(is, "UTF-8"));
        String line;
        StringBuilder resp = new StringBuilder();
        while ((line = in.readLine()) != null) resp.append(line);
        in.close();

        String respStr = resp.toString();

        if (code >= 200 && code < 300) {
            try {
                JSONObject json = new JSONObject(respStr);
                JSONArray choices = json.optJSONArray("choices");
                if (choices != null && choices.length() > 0) {
                    return "";
                }
            } catch (Throwable e) {}
            logger("API测试返回格式异常: " + respStr);
            return "接口有返回，但格式不像OpenAI兼容格式";
        } else {
            logger("API测试失败(" + code + "): " + respStr);
            return "HTTP " + code;
        }

    } catch (Throwable e) {
        logger("testOpenAiApi异常: " + e);
        return e.getMessage();
    } finally {
        try { if (conn != null) conn.disconnect(); } catch (Throwable e) {}
    }
}

void uiToast(final Activity a, final String msg) {
    try {
        if (a != null) {
            a.runOnUiThread(new Runnable() {
                public void run() {
                    try { toast(msg); } catch (Throwable e) {}
                }
            });
        } else {
            toast(msg);
        }
    } catch (Throwable e) {
        try { toast(msg); } catch (Throwable ee) {}
    }
}

void uiSetEditText(final Activity a, final EditText input, final String text) {
    try {
        if (a != null) {
            a.runOnUiThread(new Runnable() {
                public void run() {
                    try { input.setText(text); } catch (Throwable e) {}
                }
            });
        } else {
            input.setText(text);
        }
    } catch (Throwable e) {}
}

void asyncFetchModelsToInput(final Activity a, final EditText inputUrl, final EditText inputKey, final EditText inputModels, final String oldKey) {
    try {
        uiToast(a, "正在拉取模型...");

        new Thread(new Runnable() {
            public void run() {
                try {
                    String url = inputUrl.getText().toString().trim();
                    String keyText = inputKey.getText().toString().trim();
                    String key = isMaskedApiKeyText(keyText) ? oldKey : keyText;

                    final List models = fetchModelsFromApi(url, key);

                    if (models != null && !models.isEmpty()) {
                        if (a != null) {
                            a.runOnUiThread(new Runnable() {
                                public void run() {
                                    try {
                                        showFetchedModelsSelectUI(a, inputModels, models);
                                    } catch (Throwable e) {
                                        logger("打开模型点选弹窗异常: " + e);
                                        toast("已拉取模型，但显示列表失败");
                                        try {
                                            inputModels.setText(joinModelList(models));
                                        } catch (Throwable ee) {}
                                    }
                                }
                            });
                        } else {
                            uiSetEditText(a, inputModels, joinModelList(models));
                            uiToast(a, "已拉取 " + models.size() + " 个模型");
                        }
                    } else {
                        uiToast(a, "未拉取到模型，请手动填写");
                    }

                } catch (Throwable e) {
                    logger("asyncFetchModelsToInput异常: " + e);
                    uiToast(a, "拉取失败: " + e.getMessage());
                }
            }
        }).start();

    } catch (Throwable e) {
        logger("asyncFetchModelsToInput启动异常: " + e);
        toast("拉取失败: " + e.getMessage());
    }
}


// ===== 拉取模型后点选写入 =====

void showFetchedModelsSelectUI(final Activity a, final EditText inputModels, final List fetchedModels) {
    try {
        if (fetchedModels == null || fetchedModels.isEmpty()) {
            toast("没有可选择的模型");
            return;
        }

        final List allModels = new ArrayList();
        for (int i = 0; i < fetchedModels.size(); i++) {
            String m = fkSafeStr(fetchedModels.get(i));
            if (m.length() > 0 && !allModels.contains(m)) {
                allModels.add(m);
            }
        }

        if (allModels.isEmpty()) {
            toast("模型列表为空");
            return;
        }

        final boolean[] checked = new boolean[allModels.size()];

        // 默认勾选输入框里已有的模型
        try {
            String oldText = inputModels.getText().toString().trim();
            if (oldText.length() > 0) {
                String[] oldArr = oldText.split(",");
                for (int i = 0; i < oldArr.length; i++) {
                    String oldOne = fkSafeStr(oldArr[i]);
                    if (oldOne.length() == 0) continue;

                    for (int j = 0; j < allModels.size(); j++) {
                        if (oldOne.equals(fkSafeStr(allModels.get(j)))) {
                            checked[j] = true;
                        }
                    }
                }
            }
        } catch (Throwable e) {
            logger("初始化模型勾选异常: " + e);
        }

        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        TextView tvTip = new TextView(a);
        tvTip.setText(
            "已拉取 " + allModels.size() + " 个模型\n" +
            "可搜索后点选，最后点“写入已选模型”。\n" +
            "提示：如果不确定，先选常用的几个即可。"
        );
        tvTip.setTextSize(14);
        tvTip.setPadding(0, 0, 0, 10);
        layout.addView(tvTip);

        final EditText searchInput = new EditText(a);
        searchInput.setHint("搜索模型，例如 gpt / deepseek / qwen / gemini");
        searchInput.setSingleLine(true);
        layout.addView(searchInput);

        LinearLayout btnRow = new LinearLayout(a);
        btnRow.setOrientation(LinearLayout.HORIZONTAL);

        Button btnSelectVisible = new Button(a);
        btnSelectVisible.setText("选中当前筛选");

        Button btnClearVisible = new Button(a);
        btnClearVisible.setText("取消当前筛选");

        btnRow.addView(btnSelectVisible);
        btnRow.addView(btnClearVisible);
        layout.addView(btnRow);

        final TextView tvCount = new TextView(a);
        tvCount.setTextSize(14);
        tvCount.setPadding(0, 10, 0, 10);
        layout.addView(tvCount);

        final ScrollView listScroll = new ScrollView(a);
        final LinearLayout listContainer = new LinearLayout(a);
        listContainer.setOrientation(LinearLayout.VERTICAL);
        listScroll.addView(listContainer);
        layout.addView(listScroll);

        final Runnable[] refreshList = new Runnable[1];

        refreshList[0] = new Runnable() {
            public void run() {
                try {
                    listContainer.removeAllViews();

                    String kw = searchInput.getText().toString().trim().toLowerCase();

                    int selectedCount = 0;
                    for (int i = 0; i < checked.length; i++) {
                        if (checked[i]) selectedCount++;
                    }

                    int shown = 0;

                    for (int i = 0; i < allModels.size(); i++) {
                        String model = fkSafeStr(allModels.get(i));
                        String low = model.toLowerCase();

                        if (kw.length() == 0 || low.contains(kw)) {
                            shown++;

                            final int realIdx = i;

                            TextView tv = new TextView(listContainer.getContext());
                            tv.setText((checked[realIdx] ? "● " : "○ ") + model);
                            tv.setTextSize(16);
                            tv.setPadding(8, 14, 8, 14);

                            tv.setOnClickListener(new View.OnClickListener() {
                                public void onClick(View v) {
                                    try {
                                        checked[realIdx] = !checked[realIdx];
                                        refreshList[0].run();
                                    } catch (Throwable e) {
                                        logger("切换模型勾选异常: " + e);
                                    }
                                }
                            });

                            listContainer.addView(tv);
                        }
                    }

                    tvCount.setText(
                        "已选 " + selectedCount + " 个 / 当前显示 " + shown + " 个 / 总计 " + allModels.size() + " 个"
                    );

                    if (shown == 0) {
                        TextView empty = new TextView(listContainer.getContext());
                        empty.setText("没有匹配的模型");
                        empty.setTextSize(15);
                        empty.setPadding(8, 20, 8, 20);
                        listContainer.addView(empty);
                    }

                } catch (Throwable e) {
                    logger("刷新拉取模型列表异常: " + e);
                }
            }
        };

        searchInput.addTextChangedListener(new android.text.TextWatcher() {
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}

            public void onTextChanged(CharSequence s, int start, int before, int count) {
                try {
                    refreshList[0].run();
                } catch (Throwable e) {}
            }

            public void afterTextChanged(android.text.Editable s) {}
        });

        btnSelectVisible.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                try {
                    String kw = searchInput.getText().toString().trim().toLowerCase();

                    for (int i = 0; i < allModels.size(); i++) {
                        String model = fkSafeStr(allModels.get(i));
                        String low = model.toLowerCase();

                        if (kw.length() == 0 || low.contains(kw)) {
                            checked[i] = true;
                        }
                    }

                    refreshList[0].run();
                } catch (Throwable e) {
                    logger("选中当前筛选异常: " + e);
                    toast("操作失败: " + e.getMessage());
                }
            }
        });

        btnClearVisible.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                try {
                    String kw = searchInput.getText().toString().trim().toLowerCase();

                    for (int i = 0; i < allModels.size(); i++) {
                        String model = fkSafeStr(allModels.get(i));
                        String low = model.toLowerCase();

                        if (kw.length() == 0 || low.contains(kw)) {
                            checked[i] = false;
                        }
                    }

                    refreshList[0].run();
                } catch (Throwable e) {
                    logger("取消当前筛选异常: " + e);
                    toast("操作失败: " + e.getMessage());
                }
            }
        });

        final AlertDialog dialog = new AlertDialog.Builder(a)
            .setTitle("选择拉取到的模型")
            .setView(layout)
            .setPositiveButton("写入已选模型", null)
            .setNegativeButton("取消", null)
            .setNeutralButton("全部写入", null)
            .create();

        dialog.setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                try {
                    refreshList[0].run();

                    dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(new View.OnClickListener() {
                        public void onClick(View v) {
                            try {
                                List selected = new ArrayList();

                                for (int i = 0; i < allModels.size(); i++) {
                                    if (checked[i]) {
                                        String m = fkSafeStr(allModels.get(i));
                                        if (m.length() > 0 && !selected.contains(m)) selected.add(m);
                                    }
                                }

                                if (selected.isEmpty()) {
                                    toast("请至少选择一个模型");
                                    return;
                                }

                                inputModels.setText(joinModelList(selected));
                                toast("已写入 " + selected.size() + " 个模型");

                                dialog.dismiss();

                            } catch (Throwable e) {
                                logger("写入已选模型异常: " + e);
                                toast("写入失败: " + e.getMessage());
                            }
                        }
                    });

                    dialog.getButton(AlertDialog.BUTTON_NEUTRAL).setOnClickListener(new View.OnClickListener() {
                        public void onClick(View v) {
                            try {
                                inputModels.setText(joinModelList(allModels));
                                toast("已写入全部 " + allModels.size() + " 个模型");

                                dialog.dismiss();

                            } catch (Throwable e) {
                                logger("写入全部模型异常: " + e);
                                toast("写入失败: " + e.getMessage());
                            }
                        }
                    });

                } catch (Throwable e) {
                    logger("模型选择弹窗onShow异常: " + e);
                }
            }
        });

        dialog.show();

    } catch (Throwable e) {
        logger("showFetchedModelsSelectUI异常: " + e);
        toast("显示模型列表失败: " + e.getMessage());
    }
}

// ===== API编辑页模型列表管理 =====

String getModelSummaryFromText(String modelsText) {
    try {
        List list = parseModelCsvToList(modelsText);
        if (list == null || list.isEmpty()) return "模型列表：未配置";

        StringBuilder sb = new StringBuilder();
        sb.append("模型列表：已配置 ").append(list.size()).append(" 个");

        int show = Math.min(3, list.size());
        sb.append("\n");
        for (int i = 0; i < show; i++) {
            sb.append("· ").append(fkSafeStr(list.get(i))).append("\n");
        }

        if (list.size() > show) {
            sb.append("... 还有 ").append(list.size() - show).append(" 个");
        }

        return sb.toString().trim();

    } catch (Throwable e) {
        logger("getModelSummaryFromText异常: " + e);
        return "模型列表：读取失败";
    }
}

void refreshModelSummaryText(final TextView tvSummary, final EditText inputModels) {
    try {
        if (tvSummary == null || inputModels == null) return;
        tvSummary.setText(getModelSummaryFromText(inputModels.getText().toString()));
    } catch (Throwable e) {
        logger("refreshModelSummaryText异常: " + e);
    }
}

void bindModelSummaryWatcher(final TextView tvSummary, final EditText inputModels) {
    try {
        if (tvSummary == null || inputModels == null) return;

        inputModels.addTextChangedListener(new android.text.TextWatcher() {
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}

            public void onTextChanged(CharSequence s, int start, int before, int count) {
                try {
                    refreshModelSummaryText(tvSummary, inputModels);
                } catch (Throwable e) {}
            }

            public void afterTextChanged(android.text.Editable s) {}
        });

        refreshModelSummaryText(tvSummary, inputModels);

    } catch (Throwable e) {
        logger("bindModelSummaryWatcher异常: " + e);
    }
}

void showManualModelsEditUI(final Activity a, final EditText inputModels, final TextView tvSummary) {
    try {
        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        TextView tip = new TextView(a);
        tip.setText("手动编辑模型列表，多个模型用英文逗号分隔。");
        tip.setTextSize(14);
        layout.addView(tip);

        final EditText edit = new EditText(a);
        edit.setText(inputModels.getText().toString());
        edit.setHint("model-a,model-b,model-c");
        edit.setSingleLine(false);
        edit.setMinLines(4);
        edit.setMaxLines(8);
        layout.addView(edit);

        new AlertDialog.Builder(a)
            .setTitle("手动编辑模型")
            .setView(layout)
            .setPositiveButton("保存", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int w) {
                    try {
                        List list = parseModelCsvToList(edit.getText().toString());
                        inputModels.setText(joinModelList(list));
                        refreshModelSummaryText(tvSummary, inputModels);
                        toast("已保存 " + list.size() + " 个模型");
                    } catch (Throwable e) {
                        logger("手动保存模型异常: " + e);
                        toast("保存失败: " + e.getMessage());
                    }
                }
            })
            .setNegativeButton("取消", null)
            .show();

    } catch (Throwable e) {
        logger("showManualModelsEditUI异常: " + e);
        toast("打开失败: " + e.getMessage());
    }
}

void showModelsListManageUI(final Activity a, final EditText inputModels, final TextView tvSummary) {
    try {
        final List allModels = parseModelCsvToList(inputModels.getText().toString());
        final List selectedDelete = new ArrayList();

        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        TextView tip = new TextView(a);
        tip.setText("点模型可选中/取消，选中的模型可批量删除。");
        tip.setTextSize(14);
        layout.addView(tip);

        final EditText searchInput = new EditText(a);
        searchInput.setHint("搜索模型...");
        searchInput.setSingleLine(true);
        layout.addView(searchInput);

        LinearLayout addRow = new LinearLayout(a);
        addRow.setOrientation(LinearLayout.HORIZONTAL);

        final EditText addInput = new EditText(a);
        addInput.setHint("新增模型名");
        addInput.setSingleLine(true);

        Button btnAdd = new Button(a);
        btnAdd.setText("添加");

        addRow.addView(addInput);
        addRow.addView(btnAdd);
        layout.addView(addRow);

        LinearLayout btnRow = new LinearLayout(a);
        btnRow.setOrientation(LinearLayout.HORIZONTAL);

        Button btnDelete = new Button(a);
        btnDelete.setText("删除选中");

        Button btnClear = new Button(a);
        btnClear.setText("清空全部");

        btnRow.addView(btnDelete);
        btnRow.addView(btnClear);
        layout.addView(btnRow);

        final TextView countView = new TextView(a);
        countView.setTextSize(14);
        countView.setPadding(0, 10, 0, 10);
        layout.addView(countView);

        final ScrollView scroll = new ScrollView(a);
        final LinearLayout listContainer = new LinearLayout(a);
        listContainer.setOrientation(LinearLayout.VERTICAL);
        scroll.addView(listContainer);
        layout.addView(scroll);

        final Runnable[] refreshList = new Runnable[1];

        refreshList[0] = new Runnable() {
            public void run() {
                try {
                    listContainer.removeAllViews();

                    String kw = searchInput.getText().toString().trim().toLowerCase();

                    int shown = 0;

                    for (int i = 0; i < allModels.size(); i++) {
                        String model = fkSafeStr(allModels.get(i));
                        String low = model.toLowerCase();

                        if (kw.length() == 0 || low.contains(kw)) {
                            shown++;

                            final String realModel = model;

                            TextView tv = new TextView(listContainer.getContext());
                            tv.setText((selectedDelete.contains(realModel) ? "● " : "○ ") + realModel);
                            tv.setTextSize(16);
                            tv.setPadding(8, 14, 8, 14);

                            tv.setOnClickListener(new View.OnClickListener() {
                                public void onClick(View v) {
                                    try {
                                        if (selectedDelete.contains(realModel)) {
                                            selectedDelete.remove(realModel);
                                        } else {
                                            selectedDelete.add(realModel);
                                        }
                                        refreshList[0].run();
                                    } catch (Throwable e) {
                                        logger("选择删除模型异常: " + e);
                                    }
                                }
                            });

                            listContainer.addView(tv);
                        }
                    }

                    countView.setText(
                        "总计 " + allModels.size() +
                        " 个 / 当前显示 " + shown +
                        " 个 / 已选删除 " + selectedDelete.size() + " 个"
                    );

                    if (shown == 0) {
                        TextView empty = new TextView(listContainer.getContext());
                        empty.setText("没有匹配的模型");
                        empty.setTextSize(15);
                        empty.setPadding(8, 20, 8, 20);
                        listContainer.addView(empty);
                    }

                } catch (Throwable e) {
                    logger("刷新模型管理列表异常: " + e);
                }
            }
        };

        searchInput.addTextChangedListener(new android.text.TextWatcher() {
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}

            public void onTextChanged(CharSequence s, int start, int before, int count) {
                try { refreshList[0].run(); } catch (Throwable e) {}
            }

            public void afterTextChanged(android.text.Editable s) {}
        });

        btnAdd.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                try {
                    String text = addInput.getText().toString().trim();
                    if (text.length() == 0) {
                        toast("请输入模型名");
                        return;
                    }

                    int added = 0;
                    String[] arr = text.split(",");
                    for (int i = 0; i < arr.length; i++) {
                        String m = fkSafeStr(arr[i]);
                        if (m.length() > 0 && !allModels.contains(m)) {
                            allModels.add(m);
                            added++;
                        }
                    }

                    addInput.setText("");
                    refreshList[0].run();

                    toast("已添加 " + added + " 个模型");

                } catch (Throwable e) {
                    logger("添加模型异常: " + e);
                    toast("添加失败: " + e.getMessage());
                }
            }
        });

        btnDelete.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                try {
                    if (selectedDelete.isEmpty()) {
                        toast("请先点选要删除的模型");
                        return;
                    }

                    int removed = 0;
                    for (int i = allModels.size() - 1; i >= 0; i--) {
                        String m = fkSafeStr(allModels.get(i));
                        if (selectedDelete.contains(m)) {
                            allModels.remove(i);
                            removed++;
                        }
                    }

                    selectedDelete.clear();
                    refreshList[0].run();

                    toast("已删除 " + removed + " 个模型");

                } catch (Throwable e) {
                    logger("删除模型异常: " + e);
                    toast("删除失败: " + e.getMessage());
                }
            }
        });

        btnClear.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                try {
                    new AlertDialog.Builder(a)
                        .setTitle("确认清空？")
                        .setMessage("将清空当前编辑框内的全部模型，保存 API 后才会真正写入配置。")
                        .setPositiveButton("清空", new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface d, int w) {
                                try {
                                    allModels.clear();
                                    selectedDelete.clear();
                                    refreshList[0].run();
                                    toast("已清空");
                                } catch (Throwable e) {}
                            }
                        })
                        .setNegativeButton("取消", null)
                        .show();
                } catch (Throwable e) {
                    logger("清空模型异常: " + e);
                }
            }
        });

        final AlertDialog dialog = new AlertDialog.Builder(a)
            .setTitle("模型列表管理")
            .setView(layout)
            .setPositiveButton("写回", null)
            .setNegativeButton("取消", null)
            .create();

        dialog.setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                try {
                    refreshList[0].run();

                    dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(new View.OnClickListener() {
                        public void onClick(View v) {
                            try {
                                inputModels.setText(joinModelList(allModels));
                                refreshModelSummaryText(tvSummary, inputModels);
                                toast("已写回 " + allModels.size() + " 个模型");
                                dialog.dismiss();
                            } catch (Throwable e) {
                                logger("写回模型列表异常: " + e);
                                toast("写回失败: " + e.getMessage());
                            }
                        }
                    });

                } catch (Throwable e) {
                    logger("模型管理弹窗onShow异常: " + e);
                }
            }
        });

        dialog.show();

    } catch (Throwable e) {
        logger("showModelsListManageUI异常: " + e);
        toast("打开失败: " + e.getMessage());
    }
}

void asyncTestApi(final Activity a, final EditText inputUrl, final EditText inputKey, final EditText inputModels, final String oldKey) {
    try {
        uiToast(a, "正在测试API...");
        new Thread(new Runnable() {
            public void run() {
                try {
                    String url = inputUrl.getText().toString().trim();
                    String keyText = inputKey.getText().toString().trim();
                    String key = isMaskedApiKeyText(keyText) ? oldKey : keyText;
                    String modelsStr = inputModels.getText().toString().trim();

                    String model = "";
                    if (modelsStr.length() > 0) {
                        String[] arr = modelsStr.split(",");
                        if (arr.length > 0) model = arr[0].trim();
                    }

                    String err = testOpenAiApi(url, key, model);
                    if (err == null || err.length() == 0) {
                        uiToast(a, "✅ API可用，模型响应正常");
                    } else {
                        uiToast(a, "⚠️ API测试失败: " + err);
                    }
                } catch (Throwable e) {
                    logger("asyncTestApi异常: " + e);
                    uiToast(a, "测试失败: " + e.getMessage());
                }
            }
        }).start();
    } catch (Throwable e) {
        logger("asyncTestApi启动异常: " + e);
        toast("测试失败: " + e.getMessage());
    }
}

// ===== 对话上下文 =====
void addMsg(String role, String content, String talker) {
    List l = (List) windowMap.get(talker);
    if (l == null) { l = new ArrayList(); windowMap.put(talker, l); }
    Map m = new HashMap();
    m.put("role", role);
    m.put("content", content);
    l.add(m);
    if (l.size() > 20) l.remove(0);
}

void initConversation(String talker) {
    List l = (List) windowMap.get(talker);
    if (l != null && !l.isEmpty()) return;
    Map cfg = getUserConfig(talker);
    String style = fkSafeStr(cfg.get("style"));
    String stylePrompt = fkSafeStr(stylePrompts.get(style));
    if (stylePrompt.length() == 0) stylePrompt = style;
    String finalSystem = FIXED_BEHAVIOR_PROMPT + "\n\n【当前风格】\n" + stylePrompt;
    addMsg("system", finalSystem, talker);
}

// ===== 屏蔽词处理 =====
List getAllBlockList() {
    List all = new ArrayList();
    List defaults = Arrays.asList("点歌", "play");
    for (int i = 0; i < defaults.size(); i++) {
        String w = fkSafeStr(defaults.get(i));
        if (w.length() > 0 && !all.contains(w)) all.add(w);
    }
    for (int i = 0; i < blockListGlobal.size(); i++) {
        String w = fkSafeStr(blockListGlobal.get(i));
        if (w.length() > 0 && !all.contains(w)) all.add(w);
    }
    return all;
}

boolean isBlocked(String text, List blockList) {
    String lower = fkSafeStr(text).toLowerCase();
    if (blockList == null) return false;
    for (int i = 0; i < blockList.size(); i++) {
        String w = fkSafeStr(blockList.get(i)).toLowerCase();
        if (w.length() > 0 && lower.indexOf(w) >= 0) return true;
    }
    return false;
}

// ===== 命令文本 =====
String getApiListMsg() {
    StringBuilder sb = new StringBuilder("📡 API列表\n");
    for (int i = 0; i < apiList.size(); i++) {
        Map a = (Map) apiList.get(i);
        sb.append(i + 1).append(". ").append(fkSafeStr(a.get("name"))).append("\n");
    }
    sb.append("用法: /api 1");
    return sb.toString();
}

String getModelListMsg(String talker) {
    Map c = getUserConfig(talker);
    int ai = fkToInt(c.get("apiIndex"), 0);
    List ms = (List) apiModels.get(ai);
    StringBuilder sb = new StringBuilder("🤖 模型列表\n");
    if (ms != null) {
        for (int i = 0; i < ms.size(); i++) sb.append(i + 1).append(". ").append(fkSafeStr(ms.get(i))).append("\n");
    }
    sb.append("用法: /model 1");
    return sb.toString();
}

String buildHelpText() {
    return " 📚命令说明书\n"
        + "/help 查看这怎么整\n"
        + "/config 查看整了啥\n"
        + "/cmd 授权使用命令\n"
        + "/mode 或 /bug 切换消息模式(不使用/讲人话/自测😡)\n"
        + "/ai 切换回复开关\n"
        + "/group 切换群聊开关\n"
        + "/at 切换@开关\n"
        + "/api 查看api列表 空格加数字选择\n"
        + "/model 查看模型列表 空格加数字选择\n"
        + "/style 查看风格列表 空格加风格名选择\n"
        + "/addstyle 名称 内容 - 添加风格\n"
        + "/delstyle 名称 - 删除风格\n"
        + "/block 词1 词2 - 添加屏蔽词\n"
        + "/unblock 词1 词2 - 移除屏蔽词\n"
        + "群内成员授权: /群聊回复开关 (仅授权自己)\n"
        + "/lastcall 最后一次通话时长,已失效";
}

String buildConfigText(String talker) {
    Map c = getUserConfig(talker);
    int aiEnabled = fkToInt(c.get("aiEnabled"), CFG_AI_ENABLED);
    int groupEnabled = fkToInt(c.get("groupEnabled"), CFG_GROUP_ENABLED);
    int requireAt = fkToInt(c.get("requireAt"), CFG_REQUIRE_AT);
    int cmdEnabled = fkToInt(c.get("cmdEnabled"), CFG_CMD_ENABLED);
    return "⚙️ 当前配置\n"
        + "会话: " + talker + "\n"
        + "AI: " + (aiEnabled == 1 ? "开" : "关") + "\n"
        + "群聊: " + (groupEnabled == 1 ? "开" : "关") + "\n"
        + "@触发: " + (requireAt == 1 ? "开" : "关") + "\n"
        + "命令权限: " + (cmdEnabled == 1 ? "开启" : "关闭") + "\n"
        + "模型: " + getCurrentModel(talker) + "\n"
        + "风格: " + fkSafeStr(c.get("style"));
}

// ===== 命令处理 =====
boolean handleCommand(String talker, String cmd) {
    cmd = fkSafeStr(cmd);
    String lower = cmd.toLowerCase();
    Map c = getUserConfig(talker);

    if (lower.equals("/help")) { sendText(talker, buildHelpText()); return true; }
    if (lower.equals("/config")) { sendText(talker, buildConfigText(talker)); return true; }

    if (lower.equals("/cmd")) {
        int nv = (fkToInt(c.get("cmdEnabled"), CFG_CMD_ENABLED) == 1 ? 0 : 1);
        c.put("cmdEnabled", nv);
        saveAllConfigToFile();
        sendText(talker, "命令权限已" + (nv == 1 ? "开启" : "关闭"));
        return true;
    }

    if (lower.equals("/mode") || lower.equals("/bug")) {
        String now = fkSafeStr(c.get("msgMode")).toLowerCase();
        if (now.length() == 0) now = "off";
        String next = "off";
        if ("off".equals(now)) next = "parse";
        else if ("parse".equals(now)) next = "raw";
        else next = "off";
        c.put("msgMode", next);
        saveAllConfigToFile();
        sendText(talker, "消息模式已切换为: " + next + "\noff: 仅普通文本触发（富消息不触发）\nparse: 富消息本地转人话后送AI\nraw: 富消息原文直送AI");
        return true;
    }

    if (lower.equals("/ai")) {
        int nv = (fkToInt(c.get("aiEnabled"), CFG_AI_ENABLED) == 1 ? 0 : 1);
        c.put("aiEnabled", nv);
        saveAllConfigToFile();
        sendText(talker, "AI已" + (nv == 1 ? "开启" : "关闭"));
        return true;
    }

    if (lower.equals("/group")) {
        int nv = (fkToInt(c.get("groupEnabled"), CFG_GROUP_ENABLED) == 1 ? 0 : 1);
        c.put("groupEnabled", nv);
        saveAllConfigToFile();
        sendText(talker, "群聊回复已" + (nv == 1 ? "开启" : "关闭"));
        return true;
    }

    if (lower.equals("/at")) {
        int nv = (fkToInt(c.get("requireAt"), CFG_REQUIRE_AT) == 1 ? 0 : 1);
        c.put("requireAt", nv);
        saveAllConfigToFile();
        sendText(talker, "@触发已" + (nv == 1 ? "开启" : "关闭"));
        return true;
    }

    if (lower.equals("/api")) { sendText(talker, getApiListMsg()); return true; }

    if (lower.startsWith("/api ")) {
        try {
            int x = Integer.parseInt(cmd.substring(5).trim()) - 1;
            if (x >= 0 && x < apiList.size()) {
                c.put("apiIndex", x);
                c.put("modelIndex", 0);
                windowMap.put(talker, new ArrayList());
                saveAllConfigToFile();
                sendText(talker, "已切换API");
            } else sendText(talker, "API序号无效");
        } catch (Throwable e) { sendText(talker, "参数错误"); }
        return true;
    }

    if (lower.equals("/model")) { sendText(talker, getModelListMsg(talker)); return true; }

    if (lower.startsWith("/model ")) {
        try {
            int apiIndex = fkToInt(c.get("apiIndex"), 0);
            List ms = (List) apiModels.get(apiIndex);
            int x = Integer.parseInt(cmd.substring(7).trim()) - 1;
            if (ms != null && x >= 0 && x < ms.size()) {
                c.put("modelIndex", x);
                windowMap.put(talker, new ArrayList());
                saveAllConfigToFile();
                sendText(talker, "已切换模型");
            } else sendText(talker, "模型序号无效");
        } catch (Throwable e) { sendText(talker, "参数错误"); }
        return true;
    }

    // 添加API: /addapi 名称 URL Key 模型1,模型2
    if (lower.startsWith("/addapi ")) {
        String rest = cmd.substring(8).trim();
        String[] parts = rest.split("\\s+");
        if (parts.length < 4) {
            sendText(talker, "用法: /addapi 名称 URL Key 模型1,模型2\n例: /addapi 我的API https://api.xxx.com sk-xxx gpt-4,gpt-3.5");
            return true;
        }
        String name = parts[0].trim();
        String url = parts[1].trim();
        String key = parts[2].trim();
        String modelsStr = parts[3].trim();
        Map api = new HashMap();
        api.put("name", name);
        api.put("url", url);
        api.put("key", key);
        apiList.add(api);
        List ms = new ArrayList();
        String[] models = modelsStr.split(",");
        for (int i = 0; i < models.length; i++) {
            String m = models[i].trim();
            if (m.length() > 0) ms.add(m);
        }
        apiModels.put(apiList.size() - 1, ms);
        saveApiToFile();
        sendText(talker, "✅ 已添加API: " + name + " (" + ms.size() + "个模型)");
        return true;
    }

    // 删除API: /delapi 序号
    if (lower.startsWith("/delapi ")) {
        try {
            int idx = Integer.parseInt(cmd.substring(8).trim()) - 1;
            if (idx < 0 || idx >= apiList.size()) {
                sendText(talker, "⚠️ 序号无效，当前有 " + apiList.size() + " 个API");
                return true;
            }
            String name = fkSafeStr(((Map) apiList.get(idx)).get("name"));
            apiList.remove(idx);
            apiModels.remove(idx);
            Map newModels = new HashMap();
            for (int i = 0; i < apiList.size(); i++) newModels.put(i, apiModels.get(i));
            apiModels.clear();
            apiModels.putAll(newModels);
            for (Object k : userConfigMap.keySet()) {
                Map uc = (Map) userConfigMap.get(k);
                int oldIdx = fkToInt(uc.get("apiIndex"), 0);
                if (oldIdx == idx) uc.put("apiIndex", 0);
                else if (oldIdx > idx) uc.put("apiIndex", oldIdx - 1);
            }
            saveApiToFile();
            saveAllConfigToFile();
            sendText(talker, "✅ 已删除API: " + name);
        } catch (Throwable e) { sendText(talker, "参数错误"); }
        return true;
    }

    // 添加模型: /addmodel 模型1,模型2
    if (lower.startsWith("/addmodel ")) {
        String modelsStr = cmd.substring(10).trim();
        if (modelsStr.length() == 0) {
            sendText(talker, "用法: /addmodel 模型1,模型2");
            return true;
        }
        int apiIdx = fkToInt(c.get("apiIndex"), 0);
        List ms = (List) apiModels.get(apiIdx);
        if (ms == null) ms = new ArrayList();
        int added = 0;
        String[] models = modelsStr.split(",");
        for (int i = 0; i < models.length; i++) {
            String m = models[i].trim();
            if (m.length() > 0 && !ms.contains(m)) { ms.add(m); added++; }
        }
        apiModels.put(apiIdx, ms);
        saveApiToFile();
        sendText(talker, "✅ 已添加 " + added + " 个模型到当前API");
        return true;
    }

    // 删除模型: /delmodel 模型名
    if (lower.startsWith("/delmodel ")) {
        String modelName = cmd.substring(10).trim();
        if (modelName.length() == 0) {
            sendText(talker, "用法: /delmodel 模型名");
            return true;
        }
        int apiIdx = fkToInt(c.get("apiIndex"), 0);
        List ms = (List) apiModels.get(apiIdx);
        if (ms == null || !ms.contains(modelName)) {
            sendText(talker, "⚠️ 当前API不存在该模型");
            return true;
        }
        ms.remove(modelName);
        apiModels.put(apiIdx, ms);
        int oldModelIdx = fkToInt(c.get("modelIndex"), 0);
        if (oldModelIdx >= ms.size()) c.put("modelIndex", 0);
        saveApiToFile();
        saveAllConfigToFile();
        sendText(talker, "✅ 已删除模型: " + modelName);
        return true;
    }

    if (lower.equals("/style")) {
        StringBuilder sb = new StringBuilder("🎭 可选风格\n");
        for (Object key : stylePrompts.keySet()) {
            String name = fkSafeStr(key);
            if (!isValidName(name)) continue;
            sb.append("· ").append(name).append("\n");
        }
        sb.append("用法: /style 风格名\n");
        sb.append("添加: /addstyle 名称 内容\n");
        sb.append("删除: /delstyle 名称");
        sendText(talker, sb.toString());
        return true;
    }

    if (lower.startsWith("/style ")) {
        String styleName = cmd.substring(7).trim();
        if (styleName.length() == 0) { sendText(talker, "用法: /style 风格名"); return true; }
        if (!stylePrompts.containsKey(styleName)) {
            sendText(talker, "⚠️ 未知风格，发送 /style 查看可选列表");
            return true;
        }
        c.put("style", styleName);
        windowMap.put(talker, new ArrayList());
        saveAllConfigToFile();
        sendText(talker, "风格已切换为: " + styleName);
        return true;
    }

    // 添加风格: /addstyle 名称 内容
    if (lower.startsWith("/addstyle ")) {
        String rest = cmd.substring(10).trim();
        int spaceIdx = rest.indexOf(" ");
        if (spaceIdx <= 0) {
            sendText(talker, "用法: /addstyle 风格名 内容");
            return true;
        }
        String name = rest.substring(0, spaceIdx).trim();
        String content = rest.substring(spaceIdx + 1).trim();
        if (!isValidName(name)) {
            sendText(talker, "⚠️ 风格名不能包含特殊字符");
            return true;
        }
        if (content.length() == 0) {
            sendText(talker, "⚠️ 内容不能为空");
            return true;
        }
        stylePrompts.put(name, content);
        saveStylesToFile();
        sendText(talker, "✅ 风格[" + name + "]已添加");
        return true;
    }

    // 删除风格: /delstyle 名称
    if (lower.startsWith("/delstyle ")) {
        String name = cmd.substring(10).trim();
        if (name.length() == 0) {
            sendText(talker, "用法: /delstyle 风格名");
            return true;
        }
        if (!stylePrompts.containsKey(name)) {
            sendText(talker, "⚠️ 风格不存在");
            return true;
        }
        stylePrompts.remove(name);
        saveStylesToFile();
        sendText(talker, "✅ 风格[" + name + "]已删除");
        return true;
    }

    // 添加屏蔽词: /block 词1 词2
    if (lower.startsWith("/block ")) {
        String rest = cmd.substring(7).trim();
        if (rest.length() == 0) {
            sendText(talker, "用法: /block 词1 词2");
            return true;
        }
        String[] words = rest.split("[,\\s，]+");
        int added = 0;
        for (int i = 0; i < words.length; i++) {
            String w = fkSafeStr(words[i]);
            if (w.length() > 0 && !blockListGlobal.contains(w)) {
                blockListGlobal.add(w);
                added++;
            }
        }
        if (added > 0) {
            saveBlockListToFile();
            sendText(talker, "✅ 已添加 " + added + " 个屏蔽词");
        } else {
            sendText(talker, "⚠️ 未添加任何屏蔽词");
        }
        return true;
    }

    // 移除屏蔽词: /unblock 词1 词2
    if (lower.startsWith("/unblock ")) {
        String rest = cmd.substring(9).trim();
        if (rest.length() == 0) {
            sendText(talker, "用法: /unblock 词1 词2");
            return true;
        }
        String[] words = rest.split("[,\\s，]+");
        int removed = 0;
        for (int i = 0; i < words.length; i++) {
            String w = fkSafeStr(words[i]);
            if (w.length() > 0 && blockListGlobal.remove(w)) {
                removed++;
            }
        }
        if (removed > 0) {
            saveBlockListToFile();
            sendText(talker, "✅ 已移除 " + removed + " 个屏蔽词");
        } else {
            sendText(talker, "⚠️ 未移除任何屏蔽词");
        }
        return true;
    }

    if (lower.equals("/lastcall")) {
        String d = fkSafeStr(lastCallDurationMap.get(talker));
        if (d.length() == 0) sendText(talker, "暂无通话时长记录");
        else sendText(talker, "最近一次通话时长: " + d);
        return true;
    }

    return false;
}

// ===== FK消息读取 =====
String fkFieldStr(Object o, String f) {
    try {
        java.lang.reflect.Field ff = o.getClass().getDeclaredField(f);
        ff.setAccessible(true);
        Object v = ff.get(o);
        return v == null ? "" : String.valueOf(v).trim();
    } catch (Throwable e) { return ""; }
}

boolean fkIsSend(Object msg) {
    try {
        Object v = msg.getClass().getMethod("isSend").invoke(msg);
        if (v instanceof Boolean) return (Boolean) v;
    } catch (Throwable e) {}
    try {
        java.lang.reflect.Field f = msg.getClass().getDeclaredField("isSend");
        f.setAccessible(true);
        Object v = f.get(msg);
        if (v instanceof Boolean) return (Boolean) v;
    } catch (Throwable e) {}
    return false;
}

String getSenderInGroup(Object msg) {
    String s = fkFieldStr(msg, "sendTalker");
    return s == null ? "" : s.trim();
}

// ===== 群成员授权白名单 =====
Set getOrCreateGroupAuthSet(String roomTalker) {
    Set set = (Set) groupMemberAiAuthMap.get(roomTalker);
    if (set == null) {
        set = new HashSet();
        groupMemberAiAuthMap.put(roomTalker, set);
    }
    return set;
}

boolean isGroupMemberAiAuthorized(String roomTalker, String memberWxid) {
    if (roomTalker == null || memberWxid == null) return false;
    Set set = (Set) groupMemberAiAuthMap.get(roomTalker);
    return set != null && set.contains(memberWxid);
}

boolean toggleGroupMemberAiAuth(String roomTalker, String memberWxid) {
    Set set = getOrCreateGroupAuthSet(roomTalker);
    if (set.contains(memberWxid)) {
        set.remove(memberWxid);
        return false;
    } else {
        set.add(memberWxid);
        return true;
    }
}

// ===== 归一化 =====
String pickXmlTag(String s, String tag) {
    try {
        String a = "<" + tag + ">";
        String b = "</" + tag + ">";
        int i = s.indexOf(a);
        int j = s.indexOf(b);
        if (i >= 0 && j > i) return s.substring(i + a.length(), j).trim();
    } catch (Throwable e) {}
    return "";
}

boolean containsAny(String s, String[] arr) {
    if (s == null) return false;
    for (int i = 0; i < arr.length; i++) {
        if (s.indexOf(arr[i]) >= 0) return true;
    }
    return false;
}

String extractCallDuration(String s) {
    try {
        java.util.regex.Pattern p = java.util.regex.Pattern.compile("(\\d{1,2}:\\d{2}(?::\\d{2})?)");
        java.util.regex.Matcher m = p.matcher(s);
        if (m.find()) return m.group(1);
    } catch (Throwable e) {}
    return "";
}

String normalizeIncomingContent(String raw, boolean isGroup, String sender, String talker, Map cfg) {
    String s = raw == null ? "" : raw.trim();
    if (s.length() == 0) return "";
    String lower = s.toLowerCase();
    String mode = fkSafeStr(cfg.get("msgMode")).toLowerCase();
    if (mode.length() == 0) mode = "off";
    if ("raw".equals(mode)) return s;
    if ("off".equals(mode)) return s;

    if (containsAny(s, new String[]{"拍了拍", "拍一拍"})) return "[拍一拍] " + s;
    if (containsAny(lower, new String[]{"voip_content_voice", "voip_content_video"})) return "[通话提醒] 对方发起了通话相关消息";
    if (containsAny(s, new String[]{"通话时长", "通话时间"})) {
        String dur = extractCallDuration(s);
        if (dur.length() > 0) { lastCallDurationMap.put(talker, dur); return "[通话状态] 已接通，通话时长 " + dur; }
        return "[通话状态] 已接通（有通话时长）";
    }
    if (containsAny(s, new String[]{"未接", "已取消", "忙线", "拒接", "未接听"})) return "[通话状态] 未接通（未接/取消/忙线/拒接）";
    if (containsAny(s, new String[]{"微信红包", "红包"})) {
        if (containsAny(s, new String[]{"已领取", "领取了", "红包已被领取"})) return "[红包消息] 红包已被领取";
        if (containsAny(s, new String[]{"待领取", "未领取", "领取红包"})) return "[红包消息] 红包待领取";
        return "[红包消息] 收到红包相关消息";
    }
    if (containsAny(s, new String[]{"转账", "微信转账", "收款"})) {
        if (containsAny(s, new String[]{"待收款", "请确认收款"})) return "[转账消息] 待收款";
        if (containsAny(s, new String[]{"已收款", "收款成功", "已确认收款"})) return "[转账消息] 已收款";
        if (containsAny(s, new String[]{"已退还", "已退款", "退回"})) return "[转账消息] 已退回";
        return "[转账消息] 收到转账相关消息";
    }
    if (containsAny(lower, new String[]{"<location", " x=\"", " y=\"", " label=\"", "poiname"})) {
        String label = "";
        try { int i = s.indexOf("label=\""); if (i >= 0) { int j = s.indexOf("\"", i + 7); if (j > i) label = s.substring(i + 7, j); } } catch (Throwable e) {}
        if (label.length() == 0) label = pickXmlTag(s, "label");
        if (label.length() > 0) return "[位置消息] " + label;
        return "[位置消息]";
    }
    if (containsAny(lower, new String[]{"<refermsg>", "<msg>", "<appmsg", "svrid"})) {
        String cur = pickXmlTag(s, "title");
        String quoted = pickXmlTag(s, "content");
        String who = pickXmlTag(s, "displayname");
        if (quoted.length() == 0 && s.indexOf("<refermsg>") >= 0) quoted = "[被引用内容]";
        if (cur.length() == 0) cur = "[当前消息]";
        if (who.length() == 0) who = "对方";
        if (s.indexOf("<refermsg>") >= 0) return "[引用消息]\n引用人: " + who + "\n被引用: " + quoted + "\n当前: " + cur;
    }
    if (containsAny(lower, new String[]{"<appmsg", "<url>", "game.weixin.qq.com", "music", "<mmreader"})) {
        String title = pickXmlTag(s, "title");
        if (title.length() > 0) return "[卡片消息] " + title;
        return "[卡片/小程序/链接消息]";
    }
    if (containsAny(s, new String[]{"名片", "vcard", "contact"})) return "[名片消息]";
    if (containsAny(lower, new String[]{"gif", "<emoji", "md5="})) return "[表情消息]";
    if (containsAny(lower, new String[]{"<img", ".jpg", ".jpeg", ".png", ".webp"})) return "[图片消息]";
    return s;
}

// ===== AI调用 =====
// ===== AI调用 =====
void trySendByChain(String talker, Map config, List msgSnapshot, int apiIdx, int modelIdx) {
    java.net.HttpURLConnection conn = null;
    try {
        if (apiList == null || apiList.isEmpty()) {
            sendText(talker, "⚠️ 还没有配置可用的API");
            return;
        }

        if (apiIdx < 0 || apiIdx >= apiList.size()) apiIdx = 0;

        Map api = (Map) apiList.get(apiIdx);
        List models = (List) apiModels.get(apiIdx);

        if (models == null || models.isEmpty()) {
            sendText(talker, "⚠️ 当前API还没有可用模型");
            return;
        }

        if (modelIdx < 0 || modelIdx >= models.size()) modelIdx = 0;

        String model = fkSafeStr(models.get(modelIdx));
        String url = fkSafeStr(api.get("url"));
        String key = fkSafeStr(api.get("key"));

        if (url.length() == 0 || key.length() == 0 || model.length() == 0) {
            sendText(talker, "⚠️ API配置不完整，请检查URL、Key和模型");
            return;
        }

        JSONObject params = new JSONObject();
        params.put("model", model);
        params.put("messages", new JSONArray(msgSnapshot));
        params.put("temperature", 1.0D);

        java.net.URL obj = new java.net.URL(url);
        conn = (java.net.HttpURLConnection) obj.openConnection();
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-Type", "application/json");
        conn.setRequestProperty("Authorization", "Bearer " + key);
        conn.setDoOutput(true);
        conn.setConnectTimeout(10000);
        conn.setReadTimeout(30000);

        java.io.OutputStream os = conn.getOutputStream();
        os.write(params.toString().getBytes("UTF-8"));
        os.flush();
        os.close();

        int code = conn.getResponseCode();
        java.io.InputStream is = (code >= 200 && code < 300) ? conn.getInputStream() : conn.getErrorStream();

        java.io.BufferedReader in = new java.io.BufferedReader(new java.io.InputStreamReader(is, "UTF-8"));
        String line;
        StringBuilder resp = new StringBuilder();
        while ((line = in.readLine()) != null) resp.append(line);
        in.close();

        String respStr = resp.toString();

        if (code >= 200 && code < 300) {
            JSONObject json = new JSONObject(respStr);
            JSONArray choices = json.optJSONArray("choices");

            if (choices == null || choices.length() == 0) {
                logger("API响应缺少choices: " + respStr);
                sendText(talker, "⚠️ 我这边接口返回有点异常，稍后再试一下");
                return;
            }

            JSONObject choice = choices.optJSONObject(0);
            if (choice == null) {
                logger("API响应choice为空: " + respStr);
                sendText(talker, "⚠️ 我这边接口返回有点异常，稍后再试一下");
                return;
            }

            JSONObject msg = choice.optJSONObject("message");
            String out = "";
            if (msg != null) out = msg.optString("content", "");

            // 兼容少数接口返回 text
            if (out == null || out.trim().length() == 0) {
                out = choice.optString("text", "");
            }

            if (out == null || out.trim().length() == 0) {
                logger("API响应内容为空: " + respStr);
                sendText(talker, "⚠️ 我这边没有拿到有效回复，稍后再试一下");
                return;
            }

            addMsg("assistant", out, talker);
            sendText(talker, out.trim());

        } else {
            logger("API返回错误(" + code + "): " + respStr);

            if (code == 401 || code == 403) {
                sendText(talker, "⚠️ API认证失败，请检查Key是否正确");
            } else if (code == 404) {
                sendText(talker, "⚠️ API地址或模型可能不正确，请检查配置");
            } else if (code == 429) {
                sendText(talker, "⚠️ 接口请求太频繁了，稍后再试一下");
            } else if (code >= 500) {
                sendText(talker, "⚠️ 上游接口暂时不稳定，稍后再试一下");
            } else {
                sendText(talker, "⚠️ 我这边接口暂时没回好，稍后再试一下");
            }
        }

    } catch (Throwable e) {
        logger("trySendByChain异常: " + e);
        sendText(talker, "⚠️ 请求暂时失败，稍后再试一下");
    } finally {
        try { if (conn != null) conn.disconnect(); } catch (Throwable e) {}
    }
}

void sendOpenAiResp(String talker, String content) {
    Map cfg = getUserConfig(talker);
    String style = fkSafeStr(cfg.get("style"));
    if ("复读机".equals(style)) {
        sendText(talker, content);
        return;
    }
    initConversation(talker);
    addMsg("user", content, talker);
    int apiIdx = fkToInt(cfg.get("apiIndex"), 0);
    int modelIdx = fkToInt(cfg.get("modelIndex"), 0);
    if (apiIdx < 0 || apiIdx >= apiList.size()) apiIdx = 0;
    List ms = (List) apiModels.get(apiIdx);
    if (ms == null || ms.isEmpty()) { sendText(talker, "⚠️ 无可用模型"); return; }
    if (modelIdx < 0 || modelIdx >= ms.size()) modelIdx = 0;
    List msgSnapshot = new ArrayList();
    List l = (List) windowMap.get(talker);
    if (l != null) msgSnapshot.addAll(l);
    trySendByChain(talker, cfg, msgSnapshot, apiIdx, modelIdx);
}

// ===== FK入口 =====
void onMsg(Object msg) {
    try {
        initApiConfig();
        initStyles();
        initBlockList();
        String talker = fkFieldStr(msg, "talker");
        String content = fkFieldStr(msg, "content");
        if (content.length() == 0) content = fkFieldStr(msg, "rawContent");
        boolean isSelf = fkIsSend(msg);
        String sender = getSenderInGroup(msg);
        if (talker.length() == 0 || content.trim().length() == 0) return;
        String clean = content.trim();
        Map cfg = getUserConfig(talker);
        boolean isGroup = (talker != null && talker.endsWith("@chatroom"));

        if (clean.startsWith("/")) {
            if (isGroup && "/群聊回复开关".equalsIgnoreCase(clean)) {
                if (sender.length() == 0) { sendText(talker, "⚠️ 未识别发送者，无法切换授权"); return; }
                boolean on = toggleGroupMemberAiAuth(talker, sender);
                saveAllConfigToFile();
                sendText(talker, on ? "✅ 已授权你在本群触发AI" : "🛑 已取消你在本群的AI授权");
                return;
            }
            if (isSelf) {
                boolean ok = handleCommand(talker, clean);
                if (ok) toast("✅ 命令已执行");
                else toast("❌ 未知命令");
                return;
            }
            int cmdEnabled = fkToInt(cfg.get("cmdEnabled"), CFG_CMD_ENABLED);
            if (cmdEnabled == 1) handleCommand(talker, clean);
            else sendText(talker, "⛔ 未授权命令，管理员可发送 /cmd 开启");
            return;
        }

        if (isSelf) return;
        if (isGroup && fkToInt(cfg.get("groupEnabled"), CFG_GROUP_ENABLED) != 1) return;
        boolean atMe = isGroup && clean.contains("@" + robotName);
        if (isGroup && fkToInt(cfg.get("requireAt"), CFG_REQUIRE_AT) == 1 && !atMe) return;
        boolean aiSwitchOn = fkToInt(cfg.get("aiEnabled"), CFG_AI_ENABLED) == 1;
        boolean friendOk = (!isGroup) && friendAuthMap.containsKey(talker);
        boolean groupOk = isGroup && groupAuthMap.containsKey(talker);
        if (!aiSwitchOn && !friendOk && !groupOk) return;
        if (isGroup) {
            if (sender.length() == 0) return;
            if (!isGroupMemberAiAuthorized(talker, sender)) return;
        }
        if (atMe) clean = clean.replace("@" + robotName, "").trim();
        if (clean.length() == 0) return;
        String modeNow = fkSafeStr(cfg.get("msgMode")).toLowerCase();
        if (modeNow.length() == 0) modeNow = "off";
        String lowerClean = clean.toLowerCase();
        boolean isQuote = lowerClean.contains("<refermsg>");
        String blockCheckText = clean;
        String quoteContent = "";
        if (isQuote) {
            quoteContent = pickXmlTag(clean, "content");
            String title = pickXmlTag(clean, "title");
            if (title.length() > 0) blockCheckText = title;
        }
        if ("off".equals(modeNow)) {
            if (lowerClean.indexOf("<msg") >= 0 || lowerClean.indexOf("<appmsg") >= 0
                || lowerClean.indexOf("voip_content_") >= 0 || clean.indexOf("拍了拍") >= 0 || clean.indexOf("拍一拍") >= 0
                || lowerClean.indexOf("<location") >= 0 || lowerClean.indexOf("label=\"") >= 0
                || lowerClean.indexOf("<emoji") >= 0 || lowerClean.indexOf("md5=") >= 0) {
                if (!isQuote) return;
            }
        }
        String normalized;
        if (isQuote) {
            if (quoteContent.length() > 0) {
                normalized = "用户引用的消息内容是：" + quoteContent + "，用户当前说：" + blockCheckText + "。请你结合引用场景自然回复。";
            } else {
                normalized = "用户引用了一条消息并回复了 \"" + blockCheckText + "\"。请你结合引用场景自然回复，不要解释引用规则。";
            }
        } else {
            normalized = normalizeIncomingContent(clean, isGroup, sender, talker, cfg);
        }
        if (normalized.length() == 0) return;
        
        // 屏蔽词检查：只检查处理后的 normalized，避免原始 XML 被误杀
        if (isBlocked(normalized, getAllBlockList())) return;
        
        sendOpenAiResp(talker, normalized);
    } catch (Throwable e) {
        logger("onMsg异常: " + e);
    }
}

// ===== 其余回调 =====
void onLoad() {
    loadAllConfigFromFile();
    initApiConfig();
    initStyles();
    initBlockList();
    logger("[吃不香菜🤔FkAI回复] 已加载");
}

void onUnload() {}
void onUnLoad() {}
void onHandleMsg(Object msgInfoBean) {}

//-------------------发送按钮拦截--------------------
boolean onClickSendBtn(String text) {
    try {
        String t = fkSafeStr(text);
        if (t.length() == 0) return false;
        if (t.startsWith("/")) {
            String talker = fkSafeStr(getTargetTalker());
            if (talker.length() == 0) {
                toast("未识别会话");
                return true;
            }
            boolean ok = handleCommand(talker, t);
            toast(ok ? "✅ 命令已执行" : "❌ 未知命令");
            return true;
        }
    } catch (Throwable e) {}
    return false;
}

// ===== 长按菜单入口 =====
void onMsgMenu(Object msg) {
    Activity a = getTopActivity();
    if (a != null) {
        String msgTalker = fkFieldStr(msg, "talker");
        if (msgTalker.length() > 0) uiTalker = msgTalker;
        if (currentDialog == null || !currentDialog.isShowing()) showMainUI(a);
        else refreshUIButtons();
    }
}

// ===== UI状态卡片 / 模型搜索 / 常用预设 =====

String getCurrentApiNameSafe(String talker) {
    try {
        Map cfg = getUserConfig(talker);
        int apiIdx = fkToInt(cfg.get("apiIndex"), 0);
        if (apiList == null || apiList.isEmpty()) return "无API";
        if (apiIdx < 0 || apiIdx >= apiList.size()) apiIdx = 0;
        Map api = (Map) apiList.get(apiIdx);
        return fkSafeStr(api.get("name"));
    } catch (Throwable e) {
        return "未知API";
    }
}

String getCurrentModelNameSafe(String talker) {
    try {
        Map cfg = getUserConfig(talker);
        int apiIdx = fkToInt(cfg.get("apiIndex"), 0);
        int modelIdx = fkToInt(cfg.get("modelIndex"), 0);

        if (apiList == null || apiList.isEmpty()) return "无模型";
        if (apiIdx < 0 || apiIdx >= apiList.size()) apiIdx = 0;

        List models = (List) apiModels.get(apiIdx);
        if (models == null || models.isEmpty()) return "无模型";

        if (modelIdx < 0 || modelIdx >= models.size()) modelIdx = 0;
        return fkSafeStr(models.get(modelIdx));
    } catch (Throwable e) {
        return "未知模型";
    }
}

String buildUiStatusText() {
    try {
        Map cfg = getUserConfig(uiTalker);

        boolean isGroup = uiTalker != null && uiTalker.endsWith("@chatroom");

        String talkerShow = fkSafeStr(uiTalker);
        if (talkerShow.length() == 0) talkerShow = "未知会话";
        if (talkerShow.length() > 34) talkerShow = talkerShow.substring(0, 34) + "...";

        String msgMode = fkSafeStr(cfg.get("msgMode"));
        if (msgMode.length() == 0) msgMode = "off";

        int aiEnabled = fkToInt(cfg.get("aiEnabled"), CFG_AI_ENABLED);
        int cmdEnabled = fkToInt(cfg.get("cmdEnabled"), CFG_CMD_ENABLED);
        int groupEnabled = fkToInt(cfg.get("groupEnabled"), CFG_GROUP_ENABLED);
        int requireAt = fkToInt(cfg.get("requireAt"), CFG_REQUIRE_AT);

        String authText = "未授权";
        if (isGroup) {
            authText = groupAuthMap.containsKey(uiTalker) ? "群已授权" : "群未授权";
        } else {
            authText = friendAuthMap.containsKey(uiTalker) ? "好友已授权" : "好友未授权";
        }

        return "📌 当前会话状态\n"
            + "会话: " + talkerShow + "\n"
            + "类型: " + (isGroup ? "群聊" : "私聊") + " / " + authText + "\n"
            + "AI回复: " + (aiEnabled == 1 ? "开" : "关")
            + "    命令: " + (cmdEnabled == 1 ? "开" : "关") + "\n"
            + "消息模式: " + msgMode
            + "    @要求: " + (requireAt == 1 ? "开" : "关") + "\n"
            + "群聊回复: " + (groupEnabled == 1 ? "开" : "关") + "\n"
            + "API: " + getCurrentApiNameSafe(uiTalker) + "\n"
            + "模型: " + getCurrentModelNameSafe(uiTalker) + "\n"
            + "风格: " + fkSafeStr(cfg.get("style"));
    } catch (Throwable e) {
        logger("buildUiStatusText异常: " + e);
        return "📌 当前会话状态读取失败";
    }
}

String[] getPresetNames() {
    return new String[] {
        "OpenAI 常用",
        "DeepSeek 常用",
        "Gemini兼容 常用",
        "通义千问 常用",
        "豆包 常用",
        "硅基流动 常用",
        "OpenRouter 常用",
        "Claude兼容 常用"
    };
}

String[] getPresetModels() {
    return new String[] {
        "gpt-4o,gpt-4o-mini,gpt-4.1,gpt-4.1-mini,o4-mini",
        "deepseek-chat,deepseek-reasoner",
        "gemini-1.5-pro,gemini-1.5-flash,gemini-2.0-flash,gemini-2.5-pro,gemini-2.5-flash",
        "qwen-plus,qwen-turbo,qwen-max,qwen-long",
        "doubao-seed-1-6,doubao-seed-1-6-flash,doubao-1-5-pro-32k,doubao-1-5-lite-32k",
        "Qwen/Qwen2.5-7B-Instruct,deepseek-ai/DeepSeek-V3,deepseek-ai/DeepSeek-R1,Pro/deepseek-ai/DeepSeek-V3",
        "openai/gpt-4o-mini,openai/gpt-4o,anthropic/claude-3.5-sonnet,google/gemini-flash-1.5,deepseek/deepseek-chat",
        "claude-3-5-sonnet-latest,claude-3-5-haiku-latest,claude-3-opus-latest"
    };
}

List parseModelCsvToList(String modelsStr) {
    List out = new ArrayList();
    try {
        String[] arr = fkSafeStr(modelsStr).split(",");
        for (int i = 0; i < arr.length; i++) {
            String m = fkSafeStr(arr[i]);
            if (m.length() > 0 && !out.contains(m)) out.add(m);
        }
    } catch (Throwable e) {
        logger("parseModelCsvToList异常: " + e);
    }
    return out;
}

void showModelPresetUI(final Activity a, final AlertDialog parentDialog) {
    try {
        if (apiList == null || apiList.isEmpty()) {
            toast("请先添加API");
            return;
        }

        final String[] names = getPresetNames();
        final String[] models = getPresetModels();

        new AlertDialog.Builder(a)
            .setTitle("常用模型预设")
            .setItems(names, new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, final int which) {
                    try {
                        final String presetName = names[which];
                        final String presetModels = models[which];

                        new AlertDialog.Builder(a)
                            .setTitle(presetName)
                            .setMessage(
                                "模型列表:\n" + presetModels.replace(",", "\n") +
                                "\n\n请选择写入方式："
                            )
                            .setPositiveButton("替换当前API模型", new DialogInterface.OnClickListener() {
                                public void onClick(DialogInterface dd, int w) {
                                    try {
                                        Map cfg = getUserConfig(uiTalker);
                                        int apiIdx = fkToInt(cfg.get("apiIndex"), 0);
                                        if (apiIdx < 0 || apiIdx >= apiList.size()) apiIdx = 0;

                                        List newList = parseModelCsvToList(presetModels);
                                        apiModels.put(apiIdx, newList);

                                        cfg.put("modelIndex", 0);
                                        windowMap.put(uiTalker, new ArrayList());

                                        saveApiToFile();
                                        saveAllConfigToFile();
                                        refreshUIButtons();

                                        toast("已替换为预设: " + presetName);
                                        try { if (parentDialog != null) parentDialog.dismiss(); } catch (Throwable e) {}
                                    } catch (Throwable e) {
                                        logger("替换模型预设异常: " + e);
                                        toast("替换失败: " + e.getMessage());
                                    }
                                }
                            })
                            .setNeutralButton("追加到当前API", new DialogInterface.OnClickListener() {
                                public void onClick(DialogInterface dd, int w) {
                                    try {
                                        Map cfg = getUserConfig(uiTalker);
                                        int apiIdx = fkToInt(cfg.get("apiIndex"), 0);
                                        if (apiIdx < 0 || apiIdx >= apiList.size()) apiIdx = 0;

                                        List oldList = (List) apiModels.get(apiIdx);
                                        if (oldList == null) oldList = new ArrayList();

                                        List addList = parseModelCsvToList(presetModels);
                                        int added = 0;
                                        for (int i = 0; i < addList.size(); i++) {
                                            String m = fkSafeStr(addList.get(i));
                                            if (m.length() > 0 && !oldList.contains(m)) {
                                                oldList.add(m);
                                                added++;
                                            }
                                        }

                                        apiModels.put(apiIdx, oldList);

                                        saveApiToFile();
                                        saveAllConfigToFile();
                                        refreshUIButtons();

                                        toast("已追加 " + added + " 个模型");
                                        try { if (parentDialog != null) parentDialog.dismiss(); } catch (Throwable e) {}
                                    } catch (Throwable e) {
                                        logger("追加模型预设异常: " + e);
                                        toast("追加失败: " + e.getMessage());
                                    }
                                }
                            })
                            .setNegativeButton("取消", null)
                            .show();

                    } catch (Throwable e) {
                        logger("选择模型预设异常: " + e);
                        toast("失败: " + e.getMessage());
                    }
                }
            })
            .setNegativeButton("取消", null)
            .show();

    } catch (Throwable e) {
        logger("showModelPresetUI异常: " + e);
        toast("失败: " + e.getMessage());
    }
}

void showModelSelectorUI(final Activity a) {
    try {
        Map cfg = getUserConfig(uiTalker);
        int apiIdx = fkToInt(cfg.get("apiIndex"), 0);

        if (apiList == null || apiList.isEmpty()) {
            toast("无API");
            return;
        }

        if (apiIdx < 0 || apiIdx >= apiList.size()) apiIdx = 0;

        final List ms = (List) apiModels.get(apiIdx);
        if (ms == null || ms.isEmpty()) {
            toast("当前API无模型，可先用“常用模型预设”添加");
            showModelPresetUI(a, null);
            return;
        }

        final List allModels = new ArrayList();
        for (int i = 0; i < ms.size(); i++) {
            String m = fkSafeStr(ms.get(i));
            if (m.length() > 0) allModels.add(m);
        }

        if (allModels.isEmpty()) {
            toast("模型列表为空");
            return;
        }

        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        final EditText searchInput = new EditText(a);
        searchInput.setHint("搜索模型，例如 gpt / deepseek / qwen");
        searchInput.setSingleLine(true);
        layout.addView(searchInput);

        Button btnPreset = new Button(a);
        btnPreset.setText("常用模型预设");
        layout.addView(btnPreset);

        final ScrollView listScroll = new ScrollView(a);
        final LinearLayout listContainer = new LinearLayout(a);
        listContainer.setOrientation(LinearLayout.VERTICAL);
        listScroll.addView(listContainer);
        layout.addView(listScroll);

        final AlertDialog[] dialogRef = new AlertDialog[1];

        final Runnable[] refreshList = new Runnable[1];
        refreshList[0] = new Runnable() {
            public void run() {
                try {
                    listContainer.removeAllViews();

                    String kw = searchInput.getText().toString().trim().toLowerCase();
                    int cur = fkToInt(getUserConfig(uiTalker).get("modelIndex"), 0);

                    int shown = 0;
                    for (int i = 0; i < allModels.size(); i++) {
                        String model = fkSafeStr(allModels.get(i));
                        String low = model.toLowerCase();

                        if (kw.length() == 0 || low.contains(kw)) {
                            shown++;
                            final int realIdx = i;

                            TextView tv = new TextView(listContainer.getContext());
                            tv.setText((realIdx == cur ? "● " : "○ ") + model);
                            tv.setTextSize(16);
                            tv.setPadding(8, 14, 8, 14);

                            tv.setOnClickListener(new View.OnClickListener() {
                                public void onClick(View v) {
                                    try {
                                        Map c = getUserConfig(uiTalker);
                                        c.put("modelIndex", realIdx);
                                        windowMap.put(uiTalker, new ArrayList());
                                        saveAllConfigToFile();
                                        refreshUIButtons();
                                        toast("已切换模型: " + fkSafeStr(allModels.get(realIdx)));
                                        try {
                                            if (dialogRef[0] != null) dialogRef[0].dismiss();
                                        } catch (Throwable e) {}
                                    } catch (Throwable e) {
                                        logger("点击模型异常: " + e);
                                        toast("切换失败: " + e.getMessage());
                                    }
                                }
                            });

                            listContainer.addView(tv);
                        }
                    }

                    if (shown == 0) {
                        TextView empty = new TextView(listContainer.getContext());
                        empty.setText("没有匹配的模型");
                        empty.setTextSize(15);
                        empty.setPadding(8, 20, 8, 20);
                        listContainer.addView(empty);
                    }

                } catch (Throwable e) {
                    logger("刷新模型搜索列表异常: " + e);
                }
            }
        };

        searchInput.addTextChangedListener(new android.text.TextWatcher() {
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                try { refreshList[0].run(); } catch (Throwable e) {}
            }
            public void afterTextChanged(android.text.Editable s) {}
        });

        btnPreset.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                showModelPresetUI(a, dialogRef[0]);
            }
        });

        dialogRef[0] = new AlertDialog.Builder(a)
            .setTitle("选择模型 - " + getCurrentApiNameSafe(uiTalker))
            .setView(layout)
            .setNegativeButton("关闭", null)
            .create();

        dialogRef[0].setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                try { refreshList[0].run(); } catch (Throwable e) {}
            }
        });

        dialogRef[0].show();

    } catch (Throwable e) {
        logger("showModelSelectorUI异常: " + e);
        toast("失败: " + e.getMessage());
    }
}

// ===== UI刷新 =====
void refreshUIButtons() {
    try {
        if (currentDialog == null || !currentDialog.isShowing()) return;

        Map cfg = getUserConfig(uiTalker);

        if (uiTvStatus != null) {
            uiTvStatus.setText(buildUiStatusText());
        }

        if (uiBtnAi != null) {
            uiBtnAi.setText("AI回复: " + (fkToInt(cfg.get("aiEnabled"), 0) == 1 ? "开" : "关"));
        }

        if (uiBtnCmd != null) {
            uiBtnCmd.setText("命令权限: " + (fkToInt(cfg.get("cmdEnabled"), 0) == 1 ? "开" : "关"));
        }

        if (uiBtnMode != null) {
            String modeNow = fkSafeStr(cfg.get("msgMode"));
            if (modeNow.length() == 0) modeNow = "off";
            uiBtnMode.setText("消息模式: " + modeNow);
        }

        if (uiBtnApi != null) {
            uiBtnApi.setText("API: " + getCurrentApiNameSafe(uiTalker));
        }

        if (uiBtnModel != null) {
            uiBtnModel.setText("模型: " + getCurrentModelNameSafe(uiTalker));
        }

        if (uiBtnStyle != null) {
            uiBtnStyle.setText("风格: " + fkSafeStr(cfg.get("style")));
        }

    } catch (Throwable e) {
        logger("refreshUIButtons异常: " + e);
    }
}


// ===== 主设置UI =====
void showMainUI(Activity a) {
    initApiConfig();
    initStyles();
    initBlockList();
    if (uiTalker.length() == 0) {
        try {
            List result = executeQuery("SELECT talker FROM message ORDER BY createTime DESC LIMIT 1");
            if (result != null && !result.isEmpty()) {
                uiTalker = fkSafeStr(((Map) result.get(0)).get("talker"));
            }
        } catch (Throwable e) {}
        if (uiTalker.length() == 0) uiTalker = "未知会话";
    }
    final Map cfg = getUserConfig(uiTalker);
    ScrollView scrollView = new ScrollView(a);
    LinearLayout root = new LinearLayout(a);
    root.setOrientation(LinearLayout.VERTICAL);
    root.setPadding(40, 40, 40, 40);
    root.setOrientation(LinearLayout.VERTICAL);
    root.setPadding(40, 40, 40, 40);

    // AI开关
    uiBtnAi = new Button(a);
    uiBtnAi.setText("AI回复: " + (fkToInt(cfg.get("aiEnabled"), 0) == 1 ? "开" : "关"));
    uiBtnAi.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            Map c = getUserConfig(uiTalker);
            c.put("aiEnabled", fkToInt(c.get("aiEnabled"), 0) == 1 ? 0 : 1);
            saveAllConfigToFile();
            refreshUIButtons();
        }
    });
    root.addView(uiBtnAi);

    // 命令权限
    uiBtnCmd = new Button(a);
    uiBtnCmd.setText("命令权限: " + (fkToInt(cfg.get("cmdEnabled"), 0) == 1 ? "开" : "关"));
    uiBtnCmd.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            Map c = getUserConfig(uiTalker);
            c.put("cmdEnabled", fkToInt(c.get("cmdEnabled"), 0) == 1 ? 0 : 1);
            saveAllConfigToFile();
            refreshUIButtons();
        }
    });
    root.addView(uiBtnCmd);

    // 消息模式
    uiBtnMode = new Button(a);
    String modeNow = fkSafeStr(cfg.get("msgMode"));
    if (modeNow.length() == 0) modeNow = "off";
    uiBtnMode.setText("消息模式: " + modeNow);
    uiBtnMode.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            Map c = getUserConfig(uiTalker);
            String cur = fkSafeStr(c.get("msgMode"));
            if (cur.length() == 0) cur = "off";
            String next = "off";
            if ("off".equals(cur)) next = "parse";
            else if ("parse".equals(cur)) next = "raw";
            c.put("msgMode", next);
            saveAllConfigToFile();
            refreshUIButtons();
        }
    });
    root.addView(uiBtnMode);

    // API选择
    uiBtnApi = new Button(a);
    String apiName = apiList.isEmpty() ? "无" : fkSafeStr(((Map) apiList.get(fkToInt(cfg.get("apiIndex"), 0))).get("name"));
    uiBtnApi.setText("API: " + apiName);
    uiBtnApi.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            if (apiList.isEmpty()) { toast("无API"); return; }
            String[] apiNames = new String[apiList.size()];
            for (int i = 0; i < apiList.size(); i++) apiNames[i] = fkSafeStr(((Map) apiList.get(i)).get("name"));
            final int[] sel = {fkToInt(getUserConfig(uiTalker).get("apiIndex"), 0)};
            new AlertDialog.Builder(a)
                .setTitle("选择API")
                .setSingleChoiceItems(apiNames, sel[0], new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface d, int w) { sel[0] = w; }
                })
                .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface d, int w) {
                        Map c = getUserConfig(uiTalker);
                        c.put("apiIndex", sel[0]);
                        c.put("modelIndex", 0);
                        windowMap.put(uiTalker, new ArrayList());
                        saveAllConfigToFile();
                        refreshUIButtons();
                    }
                })
                .setNegativeButton("取消", null)
                .show();
        }
    });
    root.addView(uiBtnApi);

    // 模型选择
uiBtnModel = new Button(a);
uiBtnModel.setText("模型: " + getCurrentModelNameSafe(uiTalker));
uiBtnModel.setOnClickListener(new View.OnClickListener() {
    public void onClick(View v) {
        showModelSelectorUI(a);
    }
});
root.addView(uiBtnModel);
Button btnPresetModels = new Button(a);
    btnPresetModels.setText("常用模型预设");
    btnPresetModels.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            showModelPresetUI(a, null);
        }
    });
    root.addView(btnPresetModels);

    // 风格
    uiBtnStyle = new Button(a);
    uiBtnStyle.setText("风格: " + fkSafeStr(cfg.get("style")));
    uiBtnStyle.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            int count = stylePrompts.size();
            String[] styleKeys = new String[count];
            String[] styleValues = new String[count];
            int idx = 0;
            int selIdx = 0;
            String currentStyle = fkSafeStr(getUserConfig(uiTalker).get("style"));
            for (Object key : stylePrompts.keySet()) {
                String name = fkSafeStr(key);
                if (!isValidName(name)) continue;
                styleKeys[idx] = name;
                styleValues[idx] = name;
                if (name.equals(currentStyle)) selIdx = idx;
                idx++;
            }
            final int[] selected = {selIdx};
            new AlertDialog.Builder(a)
                .setTitle("选择风格")
                .setSingleChoiceItems(styleKeys, selIdx, new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface d, int w) { selected[0] = w; }
                })
                .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface d, int w) {
                        Map c = getUserConfig(uiTalker);
                        c.put("style", styleKeys[selected[0]]);
                        windowMap.put(uiTalker, new ArrayList());
                        saveAllConfigToFile();
                        refreshUIButtons();
                    }
                })
                .setNegativeButton("取消", null)
                .show();
        }
    });
    root.addView(uiBtnStyle);

    // 好友授权
    Button btnFriend = new Button(a);
    btnFriend.setText("好友授权 (" + friendAuthMap.size() + "人)");
    btnFriend.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) { showFriendSelector(a); }
    });
    root.addView(btnFriend);

    // 群聊授权
    Button btnGroup = new Button(a);
    btnGroup.setText("群聊授权 (" + groupAuthMap.size() + "个)");
    btnGroup.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) { showGroupSelector(a); }
    });
    root.addView(btnGroup);

    // 群成员授权
    Button btnMember = new Button(a);
    btnMember.setText("群成员授权");
    btnMember.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) { showGroupMemberAuthUI(a); }
    });
    root.addView(btnMember);

    // API管理
    Button btnApiMgr = new Button(a);
    btnApiMgr.setText("API管理 (" + apiList.size() + "个)");
    btnApiMgr.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) { showApiManagerUI(a); }
    });
    root.addView(btnApiMgr);

    // 风格管理
    Button btnStyleMgr = new Button(a);
    btnStyleMgr.setText("风格管理 (" + stylePrompts.size() + "个)");
    btnStyleMgr.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) { showStyleManagerUI(a); }
    });
    root.addView(btnStyleMgr);

    // 屏蔽词管理
    Button btnBlockMgr = new Button(a);
    btnBlockMgr.setText("屏蔽词 (" + getAllBlockList().size() + "个)");
    btnBlockMgr.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) { showBlockManagerUI(a); }
    });
    root.addView(btnBlockMgr);

    // 关闭
    Button btnClose = new Button(a);
    btnClose.setText("关闭");
    btnClose.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            if (currentDialog != null) { currentDialog.dismiss(); currentDialog = null; }
        }
    });
    root.addView(btnClose);

    scrollView.addView(root);
    currentDialog = new AlertDialog.Builder(a)
        .setTitle("⚙️ 吃不香菜🤔FkAi回复")
        .setView(scrollView)
        .setCancelable(true)
        .create();
    currentDialog.setOnDismissListener(new DialogInterface.OnDismissListener() {
        public void onDismiss(DialogInterface d) { currentDialog = null; }
    });
    currentDialog.show();
}

// ===== 好友选择器（带搜索）=====
void showFriendSelector(Activity a) {
    try {
        List friends = getFriendList();
        if (friends == null || friends.isEmpty()) { toast("好友列表为空"); return; }

        final List allNames = new ArrayList();
        final List allIds = new ArrayList();
        for (int i = 0; i < friends.size(); i++) {
            HashMap f = (HashMap) friends.get(i);
            String wxid = fkSafeStr(f.get("username"));
            if (wxid.length() == 0 || wxid.startsWith("/") || wxid.contains("com.tencent.mm")) continue;
            allIds.add(wxid);
            String nick = fkSafeStr(f.get("nickname"));
            String remark = fkSafeStr(f.get("conRemark"));
            if (nick.startsWith("/") || nick.contains("com.tencent.mm")) nick = "";
            if (remark.startsWith("/") || remark.contains("com.tencent.mm")) remark = "";
            String label = wxid;
            if (remark.length() > 0) label = nick.length() > 0 ? nick + "(" + remark + ")" : remark;
            else if (nick.length() > 0) label = nick;
            allNames.add(label);
        }
        if (allNames.isEmpty()) { toast("未能解析好友"); return; }

        final boolean[] checked = new boolean[allIds.size()];
        for (int j = 0; j < allIds.size(); j++) {
            if (friendAuthMap.containsKey(allIds.get(j))) checked[j] = true;
        }

        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        final EditText searchInput = new EditText(a);
        searchInput.setHint("搜索好友...");
        searchInput.setSingleLine(true);
        layout.addView(searchInput);

        final ScrollView listScroll = new ScrollView(a);
        final LinearLayout listContainer = new LinearLayout(a);
        listContainer.setOrientation(LinearLayout.VERTICAL);
        listScroll.addView(listContainer);
        layout.addView(listScroll);

        final AlertDialog dialog = new AlertDialog.Builder(a)
            .setTitle("好友授权 (" + allIds.size() + "人)")
            .setView(layout)
            .setPositiveButton("保存", null)
            .setNegativeButton("取消", null)
            .create();

        Runnable refreshList = new Runnable() {
    public void run() {
        listContainer.removeAllViews();
        String kw = searchInput.getText().toString().trim().toLowerCase();
        for (int i = 0; i < allIds.size(); i++) {
            String name = allNames.get(i).toLowerCase();
            String id = allIds.get(i).toLowerCase();
            if (kw.length() == 0 || name.contains(kw) || id.contains(kw)) {
                final int realIdx = i;
                TextView tv = new TextView(listContainer.getContext());
                String label = allNames.get(i);
                if (label.length() > 25) label = label.substring(0, 25) + "...";
                tv.setText((checked[realIdx] ? "● " : "○ ") + label);
                tv.setTextSize(16);
                tv.setPadding(15, 18, 15, 18);
                tv.setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        checked[realIdx] = !checked[realIdx];
                        String lbl = allNames.get(realIdx);
                        if (lbl.length() > 25) lbl = lbl.substring(0, 25) + "...";
                        ((TextView) v).setText((checked[realIdx] ? "● " : "○ ") + lbl);
                    }
                });
                listContainer.addView(tv);
            }
        }
    }
};

        searchInput.addTextChangedListener(new TextWatcher() {
            public void afterTextChanged(android.text.Editable s) { refreshList.run(); }
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}
            public void onTextChanged(CharSequence s, int start, int before, int count) {}
        });

        dialog.setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                refreshList.run();
                dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        friendAuthMap.clear();
                        for (int k = 0; k < allIds.size(); k++) {
                            if (checked[k]) friendAuthMap.put(allIds.get(k), 1);
                        }
                        saveAllConfigToFile();
                        toast("已保存: " + friendAuthMap.size() + "人");
                        dialog.dismiss();
                    }
                });
            }
        });

        dialog.show();
    } catch (Throwable e) {
        toast("失败: " + e.getMessage());
    }
}

// ===== 群聊选择器（带搜索）=====
void showGroupSelector(Activity a) {
    try {
        List groups = getGroupList();
        if (groups == null || groups.isEmpty()) { toast("群聊列表为空"); return; }

        final List allNames = new ArrayList();
        final List allIds = new ArrayList();
        for (int i = 0; i < groups.size(); i++) {
            HashMap g = (HashMap) groups.get(i);
            String roomId = fkSafeStr(g.get("username"));
            if (roomId.length() == 0 || roomId.startsWith("/") || roomId.contains("com.tencent.mm")) continue;
            String name = fkSafeStr(g.get("nickname"));
            if (name.startsWith("/") || name.contains("com.tencent.mm")) name = "";
            if (name.length() == 0) name = "未知群聊";
            allIds.add(roomId);
            allNames.add(name);
        }
        if (allNames.isEmpty()) { toast("未能解析群聊"); return; }

        final boolean[] checked = new boolean[allIds.size()];
        for (int j = 0; j < allIds.size(); j++) {
            if (groupAuthMap.containsKey(allIds.get(j))) checked[j] = true;
        }

        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        final EditText searchInput = new EditText(a);
        searchInput.setHint("搜索群聊...");
        searchInput.setSingleLine(true);
        layout.addView(searchInput);

        final ScrollView listScroll = new ScrollView(a);
        final LinearLayout listContainer = new LinearLayout(a);
        listContainer.setOrientation(LinearLayout.VERTICAL);
        listScroll.addView(listContainer);
        layout.addView(listScroll);

        final AlertDialog dialog = new AlertDialog.Builder(a)
            .setTitle("群聊授权 (" + allIds.size() + "个)")
            .setView(layout)
            .setPositiveButton("保存", null)
            .setNegativeButton("取消", null)
            .create();

        Runnable refreshList = new Runnable() {
            public void run() {
                listContainer.removeAllViews();
                String kw = searchInput.getText().toString().trim().toLowerCase();
                for (int i = 0; i < allIds.size(); i++) {
                    String name = allNames.get(i).toLowerCase();
                    String id = allIds.get(i).toLowerCase();
                    if (kw.length() == 0 || name.contains(kw) || id.contains(kw)) {
                        final int realIdx = i;
                        TextView tv = new TextView(listContainer.getContext());
                        String label = allNames.get(i);
                        if (label.length() > 25) label = label.substring(0, 25) + "...";
                        tv.setText((checked[realIdx] ? "● " : "○ ") + label);
                        tv.setTextSize(16);
                        tv.setPadding(15, 18, 15, 18);
                        tv.setOnClickListener(new View.OnClickListener() {
                            public void onClick(View v) {
                                checked[realIdx] = !checked[realIdx];
                                String lbl = allNames.get(realIdx);
                                if (lbl.length() > 25) lbl = lbl.substring(0, 25) + "...";
                                ((TextView) v).setText((checked[realIdx] ? "● " : "○ ") + lbl);
                            }
                        });
                        listContainer.addView(tv);
                    }
                }
            }
        };

        searchInput.addTextChangedListener(new TextWatcher() {
            public void afterTextChanged(android.text.Editable s) { refreshList.run(); }
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}
            public void onTextChanged(CharSequence s, int start, int before, int count) {}
        });

        dialog.setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                refreshList.run();
                dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        groupAuthMap.clear();
                        for (int k = 0; k < allIds.size(); k++) {
                            if (checked[k]) groupAuthMap.put(allIds.get(k), 1);
                        }
                        saveAllConfigToFile();
                        toast("已保存: " + groupAuthMap.size() + "个群");
                        dialog.dismiss();
                    }
                });
            }
        });

        dialog.show();
    } catch (Throwable e) {
        toast("失败: " + e.getMessage());
    }
}

// ===== 群成员授权UI =====
void showGroupMemberAuthUI(Activity a) {
    try {
        List groups = getGroupList();
        if (groups == null || groups.isEmpty()) { toast("群聊列表为空"); return; }

        final List groupNames = new ArrayList();
        final List groupIds = new ArrayList();
        for (int i = 0; i < groups.size(); i++) {
            HashMap g = (HashMap) groups.get(i);
            String roomId = fkSafeStr(g.get("username"));
            if (roomId.length() == 0 || roomId.startsWith("/") || roomId.contains("com.tencent.mm")) continue;
            String name = fkSafeStr(g.get("nickname"));
            if (name.length() == 0) name = "未知群聊";
            groupIds.add(roomId);
            groupNames.add(name);
        }
        if (groupNames.isEmpty()) { toast("未能解析群聊"); return; }

        final int[] sel = {0};
        new AlertDialog.Builder(a)
            .setTitle("选择群聊")
            .setSingleChoiceItems(groupNames.toArray(new String[0]), 0, new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int w) { sel[0] = w; }
            })
            .setPositiveButton("下一步", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int w) {
                    showGroupMemberListUI(a, groupIds.get(sel[0]), groupNames.get(sel[0]));
                }
            })
            .setNegativeButton("取消", null)
            .show();
    } catch (Throwable e) {
        toast("失败: " + e.getMessage());
    }
}

void showGroupMemberListUI(final Activity a, final String groupId, String groupName) {
    try {
        List members = getGroupMemberList(groupId);
        if (members == null || members.isEmpty()) { toast("群成员列表为空"); return; }

        final List memberNames = new ArrayList();
        final List memberIds = new ArrayList();
        for (int i = 0; i < members.size(); i++) {
            String wxid = fkSafeStr(members.get(i));
            if (wxid.length() == 0 || wxid.startsWith("/") || wxid.contains("com.tencent.mm")) continue;
            String name = wxid;
            memberIds.add(wxid);
            memberNames.add(name);
        }
        if (memberNames.isEmpty()) { toast("未能解析群成员"); return; }

        final Set existingSet = (Set) groupMemberAiAuthMap.get(groupId);
        final boolean[] checked = new boolean[memberIds.size()];
        if (existingSet != null) {
            for (int j = 0; j < memberIds.size(); j++) {
                if (existingSet.contains(memberIds.get(j))) checked[j] = true;
            }
        }

        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        final EditText searchInput = new EditText(a);
        searchInput.setHint("搜索成员...");
        searchInput.setSingleLine(true);
        layout.addView(searchInput);

        final ScrollView listScroll = new ScrollView(a);
        final LinearLayout listContainer = new LinearLayout(a);
        listContainer.setOrientation(LinearLayout.VERTICAL);
        listScroll.addView(listContainer);
        layout.addView(listScroll);

        final AlertDialog dialog = new AlertDialog.Builder(a)
            .setTitle(groupName + " 成员授权")
            .setView(layout)
            .setPositiveButton("保存", null)
            .setNegativeButton("取消", null)
            .create();

        Runnable refreshList = new Runnable() {
            public void run() {
                listContainer.removeAllViews();
                String kw = searchInput.getText().toString().trim().toLowerCase();
                for (int i = 0; i < memberIds.size(); i++) {
                    String name = memberNames.get(i).toLowerCase();
                    String id = memberIds.get(i).toLowerCase();
                    if (kw.length() == 0 || name.contains(kw) || id.contains(kw)) {
                        final int realIdx = i;
                        TextView tv = new TextView(listContainer.getContext());
                        String label = memberNames.get(i);
                        if (label.length() > 25) label = label.substring(0, 25) + "...";
                        tv.setText((checked[realIdx] ? "● " : "○ ") + label);
                        tv.setTextSize(16);
                        tv.setPadding(15, 18, 15, 18);
                        tv.setOnClickListener(new View.OnClickListener() {
                            public void onClick(View v) {
                                checked[realIdx] = !checked[realIdx];
                                String lbl = memberNames.get(realIdx);
                                if (lbl.length() > 25) lbl = lbl.substring(0, 25) + "...";
                                ((TextView) v).setText((checked[realIdx] ? "● " : "○ ") + lbl);
                            }
                        });
                        listContainer.addView(tv);
                    }
                }
            }
        };

        searchInput.addTextChangedListener(new TextWatcher() {
            public void afterTextChanged(android.text.Editable s) { refreshList.run(); }
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}
            public void onTextChanged(CharSequence s, int start, int before, int count) {}
        });

        dialog.setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                refreshList.run();
                dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        Set set = new HashSet();
                        for (int k = 0; k < memberIds.size(); k++) {
                            if (checked[k]) set.add(memberIds.get(k));
                        }
                        if (set.isEmpty()) groupMemberAiAuthMap.remove(groupId);
                        else groupMemberAiAuthMap.put(groupId, set);
                        saveAllConfigToFile();
                        toast("已保存: " + set.size() + "人授权");
                        dialog.dismiss();
                    }
                });
            }
        });

        dialog.show();
    } catch (Throwable e) {
        toast("失败: " + e.getMessage());
    }
}

// ===== 风格管理UI =====
void showStyleManagerUI(Activity a) {
    try {
        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        TextView tvInfo = new TextView(a);
        tvInfo.setText("风格数量: " + stylePrompts.size() + "\n支持添加/删除风格");
        tvInfo.setTextSize(14);
        layout.addView(tvInfo);

        final EditText inputName = new EditText(a);
        inputName.setHint("风格名称");
        inputName.setSingleLine(true);
        layout.addView(inputName);

        final EditText inputPrompt = new EditText(a);
        inputPrompt.setHint("风格描述/提示词");
        inputPrompt.setMinLines(3);
        layout.addView(inputPrompt);

        final AlertDialog dialog = new AlertDialog.Builder(a)
            .setTitle("风格管理")
            .setView(layout)
            .setPositiveButton("添加", null)
            .setNegativeButton("查看列表", null)
            .setNeutralButton("关闭", null)
            .create();

        dialog.setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        String name = inputName.getText().toString().trim();
                        String prompt = inputPrompt.getText().toString().trim();
                        if (name.length() == 0) { toast("请输入风格名称"); return; }
                        if (!isValidName(name)) { toast("风格名不能包含特殊字符"); return; }
                        if (prompt.length() == 0) { toast("请输入风格描述"); return; }
                        stylePrompts.put(name, prompt);
                        saveStylesToFile();
                        toast("已添加风格: " + name);
                        inputName.setText("");
                        inputPrompt.setText("");
                        btnStyleMgr.setText("风格管理 (" + stylePrompts.size() + "个)");
                    }
                });
                dialog.getButton(AlertDialog.BUTTON_NEGATIVE).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) { showStyleListUI(a); }
                });
                dialog.getButton(AlertDialog.BUTTON_NEUTRAL).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) { dialog.dismiss(); }
                });
            }
        });
        dialog.show();
    } catch (Throwable e) { toast("失败: " + e.getMessage()); }
}

void showStyleListUI(final Activity a) {
    final List styleNames = new ArrayList();
    for (Object key : stylePrompts.keySet()) {
        String name = fkSafeStr(key);
        if (isValidName(name)) styleNames.add(name);
    }
    if (styleNames.isEmpty()) { toast("暂无风格"); return; }
    final String[] items = new String[styleNames.size()];
    for (int i = 0; i < styleNames.size(); i++) items[i] = fkSafeStr(styleNames.get(i));
    new AlertDialog.Builder(a)
        .setTitle("风格列表 (点击删除)")
        .setItems(items, new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface d, int which) {
                String name = items[which];
                new AlertDialog.Builder(a)
                    .setTitle("删除风格: " + name)
                    .setMessage("确定删除该风格吗？")
                    .setPositiveButton("删除", new DialogInterface.OnClickListener() {
                        public void onClick(DialogInterface dd, int ww) {
                            stylePrompts.remove(name);
                            saveStylesToFile();
                            toast("已删除: " + name);
                            btnStyleMgr.setText("风格管理 (" + stylePrompts.size() + "个)");
                        }
                    })
                    .setNegativeButton("取消", null)
                    .show();
            }
        })
        .setNegativeButton("返回", null)
        .show();
}

// ===== 屏蔽词管理UI =====
void showBlockManagerUI(Activity a) {
    try {
        List blockList = getAllBlockList();
        final String[] items = new String[blockList.size()];
        for (int i = 0; i < blockList.size(); i++) items[i] = fkSafeStr(blockList.get(i));

        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        TextView tvInfo = new TextView(a);
        tvInfo.setText("当前屏蔽词 (" + items.length + "个)，点击移除");
        tvInfo.setTextSize(14);
        layout.addView(tvInfo);

        final EditText inputWord = new EditText(a);
        inputWord.setHint("输入屏蔽词");
        inputWord.setSingleLine(true);
        layout.addView(inputWord);

        final ScrollView listScroll = new ScrollView(a);
        final LinearLayout listContainer = new LinearLayout(a);
        listContainer.setOrientation(LinearLayout.VERTICAL);
        listScroll.addView(listContainer);

        for (int i = 0; i < items.length; i++) {
            final int idx = i;
            TextView tv = new TextView(a);
            tv.setText("✕ " + items[i]);
            tv.setTextSize(16);
            tv.setPadding(15, 12, 15, 12);
            tv.setOnClickListener(new View.OnClickListener() {
                public void onClick(View v) {
                    String word = items[idx];
                    blockListGlobal.remove(word);
                    saveBlockListToFile();
                    toast("已移除: " + word);
                    btnBlockMgr.setText("屏蔽词 (" + getAllBlockList().size() + "个)");
                    showBlockManagerUI(a);
                }
            });
            listContainer.addView(tv);
        }
        layout.addView(listScroll);

        final AlertDialog dialog = new AlertDialog.Builder(a)
            .setTitle("屏蔽词管理")
            .setView(layout)
            .setPositiveButton("添加", null)
            .setNegativeButton("关闭", null)
            .create();

        dialog.setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        String word = inputWord.getText().toString().trim();
                        if (word.length() == 0) { toast("请输入屏蔽词"); return; }
                        if (blockListGlobal.contains(word)) { toast("已存在: " + word); return; }
                        blockListGlobal.add(word);
                        saveBlockListToFile();
                        toast("已添加: " + word);
                        inputWord.setText("");
                        btnBlockMgr.setText("屏蔽词 (" + getAllBlockList().size() + "个)");
                        showBlockManagerUI(a);
                    }
                });
            }
        });
        dialog.show();
    } catch (Throwable e) { toast("失败: " + e.getMessage()); }
}

// ===== API管理UI =====
void showApiManagerUI(final Activity a) {
    try {
        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        TextView tvInfo = new TextView(a);
        tvInfo.setText(
            "当前API (" + apiList.size() + "个)\n" +
            "填写名称、URL、Key后，可先点“拉取模型”自动获取模型。\n" +
            "如果拉取失败，说明该接口可能不支持 /v1/models，请手动填写。"
        );
        tvInfo.setTextSize(14);
        layout.addView(tvInfo);

        final EditText inputName = new EditText(a);
        inputName.setHint("API名称，例如 OpenAI / DeepSeek / 商汤");
        inputName.setSingleLine(true);
        layout.addView(inputName);

        final EditText inputUrl = new EditText(a);
        inputUrl.setHint("API URL，例如 https://xxx.com/v1/chat/completions");
        inputUrl.setSingleLine(true);
        layout.addView(inputUrl);

        final EditText inputKey = new EditText(a);
        inputKey.setHint("API Key");
        inputKey.setSingleLine(true);
        layout.addView(inputKey);

        final EditText inputModels = new EditText(a);
        inputModels.setHint("模型列表，逗号分隔；可点下方按钮自动拉取");
        inputModels.setSingleLine(false);
        inputModels.setMinLines(2);
        inputModels.setMaxLines(4);
        layout.addView(inputModels);

        Button btnFetch = new Button(a);
        btnFetch.setText("拉取模型");
        btnFetch.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                String url = inputUrl.getText().toString().trim();
                String key = inputKey.getText().toString().trim();
                if (url.length() == 0 || key.length() == 0) {
                    toast("请先填写URL和Key");
                    return;
                }
                asyncFetchModelsToInput(a, inputUrl, inputKey, inputModels, "");
            }
        });
        layout.addView(btnFetch);

        Button btnTest = new Button(a);
        btnTest.setText("测试API");
        btnTest.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                String url = inputUrl.getText().toString().trim();
                String key = inputKey.getText().toString().trim();
                String modelsStr = inputModels.getText().toString().trim();

                if (url.length() == 0 || key.length() == 0) {
                    toast("请先填写URL和Key");
                    return;
                }

                if (modelsStr.length() == 0) {
                    toast("请先填写或拉取至少一个模型");
                    return;
                }

                asyncTestApi(a, inputUrl, inputKey, inputModels, "");
            }
        });
        layout.addView(btnTest);

        final AlertDialog dialog = new AlertDialog.Builder(a)
            .setTitle("API管理")
            .setView(layout)
            .setPositiveButton("添加API", null)
            .setNegativeButton("查看列表", null)
            .setNeutralButton("关闭", null)
            .create();

        dialog.setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        String name = inputName.getText().toString().trim();
                        String url = inputUrl.getText().toString().trim();
                        String key = inputKey.getText().toString().trim();
                        String modelsStr = inputModels.getText().toString().trim();

                        if (name.length() == 0 || url.length() == 0 || key.length() == 0) {
                            toast("请填写名称、URL、Key");
                            return;
                        }

                        Map api = new HashMap();
                        api.put("name", name);
                        api.put("url", url);
                        api.put("key", key);
                        apiList.add(api);

                        List ms = new ArrayList();
                        if (modelsStr.length() > 0) {
                            String[] models = modelsStr.split(",");
                            for (int i = 0; i < models.length; i++) {
                                String m = models[i].trim();
                                if (m.length() > 0 && !ms.contains(m)) ms.add(m);
                            }
                        }

                        apiModels.put(apiList.size() - 1, ms);
                        saveApiToFile();

                        toast("已添加API: " + name + "，模型 " + ms.size() + " 个");

                        inputName.setText("");
                        inputUrl.setText("");
                        inputKey.setText("");
                        inputModels.setText("");

                        refreshUIButtons();
                    }
                });

                dialog.getButton(AlertDialog.BUTTON_NEGATIVE).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        showApiListUI(a, dialog);
                    }
                });

                dialog.getButton(AlertDialog.BUTTON_NEUTRAL).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        dialog.dismiss();
                    }
                });
            }
        });

        dialog.show();

    } catch (Throwable e) {
        logger("showApiManagerUI异常: " + e);
        toast("失败: " + e.getMessage());
    }
}


void showApiListUI(final Activity a, final AlertDialog parentDialog) {
    if (apiList.isEmpty()) { toast("暂无API"); return; }
    final String[] items = new String[apiList.size()];
    for (int i = 0; i < apiList.size(); i++) {
        Map api = (Map) apiList.get(i);
        String name = fkSafeStr(api.get("name"));
        List ms = (List) apiModels.get(i);
        int modelCount = ms == null ? 0 : ms.size();
        items[i] = (i + 1) + ". " + name + " (" + modelCount + "个模型)";
    }
    new AlertDialog.Builder(a)
        .setTitle("API列表 (点击编辑/删除)")
        .setItems(items, new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface d, int which) {
                showApiEditUI(a, which, d);
            }
        })
        .setNegativeButton("返回", null)
        .show();
}

void showApiEditUI(final Activity a, final int apiIdx, final AlertDialog parentDialog) {
    try {
        if (apiIdx < 0 || apiIdx >= apiList.size()) return;

        final Map api = (Map) apiList.get(apiIdx);
        final List ms = (List) apiModels.get(apiIdx);
        final String oldKey = fkSafeStr(api.get("key"));

        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        TextView tvInfo = new TextView(a);
        tvInfo.setText(
            "编辑API #" + (apiIdx + 1) + "\n" +
            "Key已脱敏显示；不修改Key则保留原Key。\n" +
            "模型推荐用“管理模型列表”，避免一长串看花。"
        );
        tvInfo.setTextSize(14);
        layout.addView(tvInfo);

        final EditText inputName = new EditText(a);
        inputName.setText(fkSafeStr(api.get("name")));
        inputName.setHint("API名称");
        inputName.setSingleLine(true);
        layout.addView(inputName);

        final EditText inputUrl = new EditText(a);
        inputUrl.setText(fkSafeStr(api.get("url")));
        inputUrl.setHint("API URL");
        inputUrl.setSingleLine(true);
        layout.addView(inputUrl);

        final EditText inputKey = new EditText(a);
        inputKey.setText(maskApiKey(oldKey));
        inputKey.setHint("API Key，不修改则保留原Key");
        inputKey.setSingleLine(true);
        layout.addView(inputKey);

        String modelsStr = "";
        if (ms != null) {
            modelsStr = joinModelList(ms);
        }

        final EditText inputModels = new EditText(a);
        inputModels.setText(modelsStr);
        inputModels.setHint("模型列表，内部兼容输入框");
        inputModels.setSingleLine(false);
        inputModels.setMinLines(2);
        inputModels.setMaxLines(4);
        inputModels.setVisibility(8);
        layout.addView(inputModels);

        final TextView tvModelSummary = new TextView(a);
        tvModelSummary.setTextSize(14);
        tvModelSummary.setPadding(0, 14, 0, 14);
        layout.addView(tvModelSummary);

        bindModelSummaryWatcher(tvModelSummary, inputModels);

        Button btnManageModels = new Button(a);
        btnManageModels.setText("管理模型列表");
        btnManageModels.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                showModelsListManageUI(a, inputModels, tvModelSummary);
            }
        });
        layout.addView(btnManageModels);

        Button btnManualModels = new Button(a);
        btnManualModels.setText("手动编辑模型");
        btnManualModels.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                showManualModelsEditUI(a, inputModels, tvModelSummary);
            }
        });
        layout.addView(btnManualModels);

        Button btnFetch = new Button(a);
        btnFetch.setText("拉取模型");
        btnFetch.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                String url = inputUrl.getText().toString().trim();
                String keyText = inputKey.getText().toString().trim();
                String key = isMaskedApiKeyText(keyText) ? oldKey : keyText;

                if (url.length() == 0 || key.length() == 0) {
                    toast("请先填写URL和Key");
                    return;
                }

                asyncFetchModelsToInput(a, inputUrl, inputKey, inputModels, oldKey);
            }
        });
        layout.addView(btnFetch);

        Button btnTest = new Button(a);
        btnTest.setText("测试API");
        btnTest.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                String url = inputUrl.getText().toString().trim();
                String keyText = inputKey.getText().toString().trim();
                String key = isMaskedApiKeyText(keyText) ? oldKey : keyText;
                String modelsStr = inputModels.getText().toString().trim();

                if (url.length() == 0 || key.length() == 0) {
                    toast("请先填写URL和Key");
                    return;
                }

                if (modelsStr.length() == 0) {
                    toast("请先添加、拉取或手动填写至少一个模型");
                    return;
                }

                asyncTestApi(a, inputUrl, inputKey, inputModels, oldKey);
            }
        });
        layout.addView(btnTest);

        final AlertDialog dialog = new AlertDialog.Builder(a)
            .setTitle("编辑API #" + (apiIdx + 1))
            .setView(layout)
            .setPositiveButton("保存", null)
            .setNegativeButton("删除", null)
            .setNeutralButton("取消", null)
            .create();

        dialog.setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        String name = inputName.getText().toString().trim();
                        String url = inputUrl.getText().toString().trim();
                        String keyText = inputKey.getText().toString().trim();
                        String modelsStr = inputModels.getText().toString().trim();

                        if (name.length() == 0 || url.length() == 0 || keyText.length() == 0) {
                            toast("请填写名称、URL、Key");
                            return;
                        }

                        String finalKey = isMaskedApiKeyText(keyText) ? oldKey : keyText;

                        api.put("name", name);
                        api.put("url", url);
                        api.put("key", finalKey);

                        List newMs = parseModelCsvToList(modelsStr);
                        apiModels.put(apiIdx, newMs);

                        try {
                            for (Object k : userConfigMap.keySet()) {
                                Map uc = (Map) userConfigMap.get(k);
                                int oldApiIdx = fkToInt(uc.get("apiIndex"), 0);
                                if (oldApiIdx == apiIdx) {
                                    int oldModelIdx = fkToInt(uc.get("modelIndex"), 0);
                                    if (oldModelIdx >= newMs.size()) uc.put("modelIndex", 0);
                                }
                            }
                        } catch (Throwable e) {
                            logger("修正modelIndex异常: " + e);
                        }

                        saveApiToFile();
                        saveAllConfigToFile();

                        toast("已保存API: " + name + "，模型 " + newMs.size() + " 个");

                        refreshUIButtons();

                        try { dialog.dismiss(); } catch (Throwable e) {}
                        try { parentDialog.dismiss(); } catch (Throwable e) {}
                    }
                });

                dialog.getButton(AlertDialog.BUTTON_NEGATIVE).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        String name = fkSafeStr(api.get("name"));

                        apiList.remove(apiIdx);
                        apiModels.remove(apiIdx);

                        Map newModels = new HashMap();
                        for (int i = 0; i < apiList.size(); i++) {
                            newModels.put(i, apiModels.get(i));
                        }

                        apiModels.clear();
                        apiModels.putAll(newModels);

                        try {
                            for (Object k : userConfigMap.keySet()) {
                                Map uc = (Map) userConfigMap.get(k);
                                int oldIdx = fkToInt(uc.get("apiIndex"), 0);

                                if (oldIdx == apiIdx) {
                                    uc.put("apiIndex", 0);
                                    uc.put("modelIndex", 0);
                                } else if (oldIdx > apiIdx) {
                                    uc.put("apiIndex", oldIdx - 1);
                                }
                            }
                        } catch (Throwable e) {
                            logger("删除API后修正配置异常: " + e);
                        }

                        saveApiToFile();
                        saveAllConfigToFile();

                        toast("已删除API: " + name);

                        refreshUIButtons();

                        try { dialog.dismiss(); } catch (Throwable e) {}
                        try { parentDialog.dismiss(); } catch (Throwable e) {}
                    }
                });

                dialog.getButton(AlertDialog.BUTTON_NEUTRAL).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        dialog.dismiss();
                    }
                });
            }
        });

        dialog.show();

    } catch (Throwable e) {
        logger("showApiEditUI异常: " + e);
        toast("失败: " + e.getMessage());
    }
}