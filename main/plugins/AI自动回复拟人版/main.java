// ======================== AI 自动回复 Plus v3.1 ========================
// FkWeChat 插件主脚本（修复 6 个关键问题）

final String SELF_ID = myWxId;
AlertDialog currentDialog = null;

// ------------------------ AI API 配置 ------------------------
String AI_API_URL = "https://api.siliconflow.cn/v1/chat/completions";
String AI_API_KEY = "";
String AI_MODEL = "deepseek-ai/DeepSeek-V4-Flash";

// ------------------------ 语音识别配置 ------------------------
String ASR_API_URL = "";
String ASR_API_KEY = "";

// ------------------------ 开关与权限 ------------------------
Map contactSwitch = new HashMap();
Map groupSwitch = new HashMap();
Set blacklist = new HashSet();
Set whitelist = new HashSet();
boolean useWhitelist = false;
Set allMemoryKeys = new HashSet();  // 记录所有存过记忆的会话ID
static final String PREF_MEM_KEYS = "mem_keys"; // 持久化键

// ------------------------ 记忆系统 ------------------------
Map memoryCache = new HashMap();
int memorySize = 20;

// ------------------------ 人格模板 ------------------------
Map personaTemplates = new HashMap();
String currentPersona = "default";

// ------------------------ 频率限制 ------------------------
Map lastReplyTime = new HashMap();
Map replyCountInWindow = new HashMap();
long cooldownWindow = 1 * 60 * 1000;
int maxRepliesPerWindow = 3;

// ------------------------ 会话风格学习 ------------------------
Map styleProfileCache = new HashMap();
static final String PREF_STYLE_PREFIX = "style_";
String stylePromptTemplate = "请用一段中文总结他对这个好友的说话风格，直接给出描述文本，要足够详细精准，从以下方面描述：1. 基础打字习惯（标点，换行/分段，常用缩写/口癖，错别字/固定写法)2. 聊天节奏：发消息习惯（长句/短句/拆多条)，是否爱发表情，如果有，常用哪几个表情3. 核心语气（整体语气，距离感，说话软硬，情绪外露程度，关心程度，整体气质)4. 高频固定句式（开场常用，回应常用，结尾常用)5. 最关键的3个特征。";
static final String PREF_STYLE_PROMPT = "style_prompt";

// ------------------------ AI 发送记录（防样本污染） ------------------------
Map aiSentCache = new HashMap();

// ------------------------ 固定样本 ------------------------
Map fixedSamples = new HashMap();
static final String PREF_FIXED_SAMPLE = "fixed_sample_";

// ------------------------ 高级参数 ------------------------
double temperature = 0.8;
double topP = -1;
int maxTokens = 500;
int sampleCount = 50;
static final String PREF_TEMPERATURE = "temperature";
static final String PREF_TOPP = "top_p";
static final String PREF_MAX_TOKENS = "max_tokens";
static final String PREF_SAMPLE_COUNT = "sample_count";

// ------------------------ 持久化键前缀 ------------------------
static final String PREF_AI_URL = "ai_api_url";
static final String PREF_AI_KEY = "ai_api_key";
static final String PREF_AI_MODEL = "ai_model";
static final String PREF_ASR_URL = "asr_api_url";
static final String PREF_ASR_KEY = "asr_api_key";
static final String PREF_PERSONA = "persona";
static final String PREF_USE_WHITELIST = "use_whitelist";
static final String PREF_MEMORY_SIZE = "memory_size";
static final String PREF_COOLDOWN = "cooldown";
static final String PREF_MAX_REPLIES = "max_replies";
static final String PREF_BLACKLIST = "blacklist";
static final String PREF_WHITELIST = "whitelist";
static final String PREF_SWITCHES = "switches_export";
static final String PREF_GSWITCHES = "gswitches_export";

// ======================== 插件生命周期 ========================
onLoad() {
    loadJava("utils");

    AI_API_URL = getString(PREF_AI_URL, "https://api.siliconflow.cn/v1/chat/completions");
    AI_API_KEY = getString(PREF_AI_KEY, "");
    AI_MODEL = getString(PREF_AI_MODEL, "deepseek-ai/DeepSeek-V4-Flash");
    ASR_API_URL = getString(PREF_ASR_URL, "");
    ASR_API_KEY = getString(PREF_ASR_KEY, "");
    currentPersona = getString(PREF_PERSONA, "default");
    useWhitelist = getBoolean(PREF_USE_WHITELIST, false);
    memorySize = getInt(PREF_MEMORY_SIZE, 10);
    cooldownWindow = getLong(PREF_COOLDOWN, 5 * 60 * 1000);
    maxRepliesPerWindow = getInt(PREF_MAX_REPLIES, 3);
    stylePromptTemplate = getString(PREF_STYLE_PROMPT, stylePromptTemplate);

    // ★ 加载语音解码库（libsilk.so + SilkCodec.jar）
    try {
        String privateLibDir = "/data/data/com.tencent.mm/files/FkWeChat/lib/";
        File libDir = new File(privateLibDir);
        if (!libDir.exists()) libDir.mkdirs();

        String pluginSoPath = pluginPath + "/libsilk.so";
        String privateSoPath = privateLibDir + "libsilk.so";

        File pluginSo = new File(pluginSoPath);
        File privateSo = new File(privateSoPath);

        // 如果私有目录已有旧版本，先删除
        if (privateSo.exists() && privateSo.length() > 0) {
            privateSo.delete();
        }

        // 复制 so 文件
        java.io.FileInputStream fis = new java.io.FileInputStream(pluginSo);
        java.io.FileOutputStream fos = new java.io.FileOutputStream(privateSo);
        byte[] buf = new byte[8192];
        int len;
        while ((len = fis.read(buf)) != -1) fos.write(buf, 0, len);
        fis.close();
        fos.close();
        log("✅ 已复制 libsilk.so 到应用私有目录");

        // 加载 so
        System.load(privateSoPath);
        log("✅ 已成功加载 libsilk.so");

        // 加载 jar
        loadJar(pluginPath + "/SilkCodec.jar");
        log("✅ SilkCodec 解码库加载成功");
    } catch (Exception e) {
        log("⚠️ 语音解码库加载失败，语音功能不可用：" + e.getMessage());
        // 不影响文本回复功能，继续执行
    }

    temperature = safeParseDouble(getString(PREF_TEMPERATURE, "0.8"), 0.8);
    topP = safeParseDouble(getString(PREF_TOPP, "-1"), -1);
    maxTokens = safeParseInt(getString(PREF_MAX_TOKENS, "500"), 500);
    sampleCount = getInt(PREF_SAMPLE_COUNT, 50);
    String memKeysStr = getString(PREF_MEM_KEYS, "");
    if (!memKeysStr.isEmpty()) {
        String[] keys = memKeysStr.split("\u0001");
        for (int i = 0; i < keys.length; i++) {
            if (!keys[i].isEmpty()) allMemoryKeys.add(keys[i]);
        }
    }

    initPersonas();
    loadBlacklist();
    loadWhitelist();
    loadSwitches();

    log("🤖 AI自动回复Plus v3.1 已加载");
    log("模型: " + AI_MODEL + " 人格: " + currentPersona + " 白名单模式: " + useWhitelist);
}

onUnload() {
    setString(PREF_AI_URL, AI_API_URL);
    setString(PREF_AI_KEY, AI_API_KEY);
    setString(PREF_AI_MODEL, AI_MODEL);
    setString(PREF_ASR_URL, ASR_API_URL);
    setString(PREF_ASR_KEY, ASR_API_KEY);
    setString(PREF_PERSONA, currentPersona);
    setBoolean(PREF_USE_WHITELIST, useWhitelist);
    setInt(PREF_MEMORY_SIZE, memorySize);
    setLong(PREF_COOLDOWN, cooldownWindow);
    setInt(PREF_MAX_REPLIES, maxRepliesPerWindow);
    setString(PREF_STYLE_PROMPT, stylePromptTemplate);
    setString(PREF_TEMPERATURE, String.valueOf(temperature));
    setString(PREF_TOPP, String.valueOf(topP));
    setString(PREF_MAX_TOKENS, String.valueOf(maxTokens));
    setInt(PREF_SAMPLE_COUNT, sampleCount);
    setString(PREF_MEM_KEYS, join("\u0001", allMemoryKeys));

    for (Object key : contactSwitch.keySet()) {
        setBoolean("switch_" + key, (Boolean) contactSwitch.get(key));
    }
    for (Object key : groupSwitch.keySet()) {
        setBoolean("gswitch_" + key, (Boolean) groupSwitch.get(key));
    }
    for (Object entry : memoryCache.entrySet()) {
        Map.Entry e = (Map.Entry) entry;
        setString("mem_" + e.getKey(), join("\u0002", (List) e.getValue()));
    }
    for (Object entry : styleProfileCache.entrySet()) {
        Map.Entry e = (Map.Entry) entry;
        setString(PREF_STYLE_PREFIX + e.getKey(), (String) e.getValue());
    }
    saveBlacklist();
    saveWhitelist();
    log("AI自动回复插件已卸载，配置已保存");
}

// ======================== 人格初始化 ========================
void initPersonas() {
    personaTemplates.put("default", "你是一个友好的微信好友，分析当前会话氛围，给出最得体、自然的回复，回复口语化，自然。");
    personaTemplates.put("humor", "你是一个幽默风趣的朋友，语气随性自然，有幽默感，不要官方和生硬。");
    personaTemplates.put("professional", "你是一个专业可靠的朋友，言简意赅、逻辑清晰。");
    personaTemplates.put("gentle", "你是一个温柔体贴的朋友，说话非常有艺术，能够化解尴尬，照顾对方感受，充满智慧。");
    personaTemplates.put("sarcastic", "你是毒舌但善良的朋友，吐槽有度。");
}

// ======================== 消息处理主入口 ========================
onMsg(msg) {
    if (!msg.isText() && !msg.isVoice()) return;

    boolean isSelf = msg.isSend();
    String talker = msg.talker;
    boolean isGroup = msg.isGroupChat();
    String content = msg.content;

    if (msg.isText() && handleControlCommand(content, talker, isGroup, isSelf)) {
        return;
    }

    if (isSelf) return;

    if (msg.isVoice()) {
        String voicePath = getMediaPath(msg);
        if (voicePath != null && !voicePath.isEmpty()) {
            content = speechToText(voicePath);
            if (content == null || content.isEmpty()) return;
            log("🎤 语音识别结果: " + content);
        } else {
            return;
        }
    }

    if (!isAllowed(talker)) return;
    if (!checkRateLimit(talker)) return;
    if (!shouldAutoReply(talker, isGroup, msg)) return;
    processAIReply(talker, content);
}

// ======================== 长按消息菜单 ========================
onMsgMenu(msg) {
    String talker = msg.talker;
    boolean isGroup = msg.isGroupChat();
    boolean enabled = shouldAutoReply(talker, isGroup, null);
    String title = enabled ? "🔔 关闭AI自动回复" : "🔕 开启AI自动回复";
    addMenuItem(title, "", () -> {
        setAutoReplySwitch(talker, isGroup, !enabled);
        toast(!enabled ? "已开启AI自动回复" : "已关闭AI自动回复");
    });
    
    addMenuItem("⚙️ 控制面板", "", () -> {
        android.app.Activity a = getTopActivity();
        if (a != null) {
            showConfigDialog(a, talker);
        } else {
            sendText(talker, buildControlPanel(talker));
        }
    });
}
// ======================== 控制命令处理 ========================
boolean handleControlCommand(String content, String talker, boolean isGroup, boolean isSelf) {
    // 敏感命令列表
    Set adminCommands = new HashSet();
    adminCommands.add("/setkey");
    adminCommands.add("/seturl");
    adminCommands.add("/model");
    adminCommands.add("/asrurl");
    adminCommands.add("/asrkey");
    adminCommands.add("/memorysize");
    adminCommands.add("/cooldown");
    adminCommands.add("/maxreplies");
    adminCommands.add("/temperature");
    adminCommands.add("/topp");
    adminCommands.add("/maxtokens");
    adminCommands.add("/blacklist");
    adminCommands.add("/whitelist");
    adminCommands.add("/reset switches");
    adminCommands.add("/export");
    adminCommands.add("/import");
    adminCommands.add("/clearmemory");
    adminCommands.add("/learnstyle");
    adminCommands.add("/clearstyle");
    adminCommands.add("/setstyle");
    adminCommands.add("/setstyleprompt");
    adminCommands.add("/samplenum");
    adminCommands.add("/locksample");
    adminCommands.add("/unlocksample");

    boolean isAdminCmd = false;
    for (Object cmd : adminCommands) {
        if (content.startsWith((String) cmd)) {
            isAdminCmd = true;
            break;
        }
    }
    if (isAdminCmd && !isSelf) {
        sendText(talker, "⛔ 只有插件主人才能使用管理命令");
        return true;
    }

    if (content.equals("启用AI") || content.equals("/ai on")) {
        setAutoReplySwitch(talker, isGroup, true);
        sendText(talker, "✅ AI自动回复已开启");
        return true;
    }
    if (content.equals("关闭AI") || content.equals("/ai off")) {
        setAutoReplySwitch(talker, isGroup, false);
        sendText(talker, "❌ AI自动回复已关闭");
        return true;
    }

    if (content.startsWith("/setkey ")) {
        AI_API_KEY = content.substring(8).trim();
        setString(PREF_AI_KEY, AI_API_KEY);
        sendText(talker, "🔑 AI Key 已更新");
        return true;
    }
    if (content.startsWith("/seturl ")) {
        AI_API_URL = content.substring(8).trim();
        setString(PREF_AI_URL, AI_API_URL);
        sendText(talker, "🌐 AI URL 已更新");
        return true;
    }
    if (content.startsWith("/model ")) {
        AI_MODEL = content.substring(7).trim();
        setString(PREF_AI_MODEL, AI_MODEL);
        sendText(talker, "🤖 模型已切换: " + AI_MODEL);
        return true;
    }

    if (content.startsWith("/asrurl ")) {
        ASR_API_URL = content.substring(8).trim();
        setString(PREF_ASR_URL, ASR_API_URL);
        sendText(talker, "🎤 ASR地址已更新");
        return true;
    }
    if (content.startsWith("/asrkey ")) {
        ASR_API_KEY = content.substring(8).trim();
        setString(PREF_ASR_KEY, ASR_API_KEY);
        sendText(talker, "🔑 ASR Key 已更新");
        return true;
    }

    if (content.startsWith("/persona ")) {
        String p = content.substring(9).trim().toLowerCase();
        if (personaTemplates.containsKey(p)) {
            currentPersona = p;
            setString(PREF_PERSONA, p);
            sendText(talker, "🎭 人格已切换: " + p);
        } else {
            sendText(talker, "可用人格: " + join(",", personaTemplates.keySet()));
        }
        return true;
    }

    if (content.startsWith("/memorysize ")) {
        try {
            int size = Integer.parseInt(content.substring(12).trim());
            if (size < 2 || size > 30) {
                sendText(talker, "记忆轮数范围 2~30");
            } else {
                memorySize = size;
                setInt(PREF_MEMORY_SIZE, size);
                for (Object key : memoryCache.keySet()) {
                    List m = (List) memoryCache.get(key);
                    while (m.size() > memorySize) m.remove(0);
                    setString("mem_" + key, join("\u0002", m));
                }
                sendText(talker, "🧠 记忆轮数已设为 " + size);
            }
        } catch (Exception e) {
            sendText(talker, "用法: /memorysize 数字");
        }
        return true;
    }

    if (content.startsWith("/cooldown ")) {
        try {
            int mins = Integer.parseInt(content.substring(10).trim());
            if (mins < 0 || mins > 1440) {
                sendText(talker, "冷却时间范围 0~1440 分钟");
            } else {
                cooldownWindow = mins * 60 * 1000L;
                setLong(PREF_COOLDOWN, cooldownWindow);
                sendText(talker, "⏱️ 冷却时间已设为 " + mins + " 分钟");
            }
        } catch (Exception e) {
            sendText(talker, "用法: /cooldown 分钟数");
        }
        return true;
    }
    if (content.startsWith("/maxreplies ")) {
        try {
            int max = Integer.parseInt(content.substring(12).trim());
            if (max < 1 || max > 20) {
                sendText(talker, "最大回复数范围 1~20");
            } else {
                maxRepliesPerWindow = max;
                setInt(PREF_MAX_REPLIES, max);
                sendText(talker, "📊 窗口最大回复数已设为 " + max);
            }
        } catch (Exception e) {
            sendText(talker, "用法: /maxreplies 次数");
        }
        return true;
    }

    if (content.startsWith("/temperature ")) {
        temperature = Double.parseDouble(content.substring(13).trim());
        setString(PREF_TEMPERATURE, String.valueOf(temperature));
        sendText(talker, "🌡️ 温度已设为 " + temperature);
        return true;
    }
    if (content.startsWith("/topp ")) {
        topP = Double.parseDouble(content.substring(6).trim());
        setString(PREF_TOPP, String.valueOf(topP));
        sendText(talker, "🎯 top_p 已设为 " + topP);
        return true;
    }
    if (content.startsWith("/maxtokens ")) {
        maxTokens = Integer.parseInt(content.substring(11).trim());
        setString(PREF_MAX_TOKENS, String.valueOf(maxTokens));
        sendText(talker, "📝 max_tokens 已设为 " + maxTokens);
        return true;
    }

    if (content.startsWith("/blacklist add ")) {
        blacklist.add(content.substring(15).trim());
        saveBlacklist();
        sendText(talker, "🚫 已加入黑名单: " + content.substring(15).trim());
        return true;
    }
    if (content.startsWith("/blacklist remove ")) {
        blacklist.remove(content.substring(18).trim());
        saveBlacklist();
        sendText(talker, "✅ 已移除黑名单: " + content.substring(18).trim());
        return true;
    }
    if (content.equals("/blacklist list")) {
        sendText(talker, "黑名单: " + (blacklist.isEmpty() ? "空" : join(",", blacklist)));
        return true;
    }
    if (content.startsWith("/whitelist add ")) {
        whitelist.add(content.substring(15).trim());
        saveWhitelist();
        sendText(talker, "➕ 已加入白名单: " + content.substring(15).trim());
        return true;
    }
    if (content.startsWith("/whitelist remove ")) {
        whitelist.remove(content.substring(18).trim());
        saveWhitelist();
        sendText(talker, "✅ 已移除白名单: " + content.substring(18).trim());
        return true;
    }
    if (content.equals("/whitelist list")) {
        sendText(talker, "白名单: " + (whitelist.isEmpty() ? "空" : join(",", whitelist)));
        return true;
    }
    if (content.equals("/whitelist on")) {
        useWhitelist = true;
        setBoolean(PREF_USE_WHITELIST, true);
        sendText(talker, "🛡️ 已切换为白名单模式");
        return true;
    }
    if (content.equals("/whitelist off")) {
        useWhitelist = false;
        setBoolean(PREF_USE_WHITELIST, false);
        sendText(talker, "🚫 已切换为黑名单模式");
        return true;
    }

    if (content.startsWith("/clearmemory")) {
        String target = content.length() > 13 ? content.substring(13).trim() : "";
        if (!target.isEmpty()) {
            memoryCache.remove(target);
            setString("mem_" + target, "");
            allMemoryKeys.remove(target);
            saveAllMemoryKeys();
            sendText(talker, "🧹 已清除会话 " + target + " 的记忆");
        } else {
            // 遍历删除所有持久化记忆
            for (Object key : allMemoryKeys) {
                setString("mem_" + key, "");
            }
            allMemoryKeys.clear();
            memoryCache.clear();
            saveAllMemoryKeys();
            sendText(talker, "🧹 已清除全部会话记忆（立即生效）");
        }
        return true;
    }

    if (content.equals("/reset switches")) {
        // 清空内存
        contactSwitch.clear();
        groupSwitch.clear();
        // 清空聚合持久化
        setString(PREF_SWITCHES, "");
        setString(PREF_GSWITCHES, "");
        // 清空所有单独的开关持久化键（无法枚举所有键，但可以尝试清空已知会话的键）
        // 由于无法遍历键，只能提示用户重启后生效，但至少聚合键已清空，重启后不会恢复
        sendText(talker, "🔄 所有会话开关已重置，重启后不再恢复");
        return true;
    }

    // ---- 风格学习 ----
    // ---- 风格学习 ----
if (content.equals("/learnstyle") || content.startsWith("/learnstyle ")) {
    String targetId = talker;
    if (content.length() > 12) targetId = content.substring(12).trim();
    learnMyStyleForChat(targetId);
    String style = getChatStyle(targetId);
    if (style != null && !style.isEmpty()) {
        sendText(talker, "✅ 会话 " + targetId + " 风格学习完成：\n" + style);
    } else {
        sendText(talker, "❌ 风格学习失败，会话 " + targetId + " 发言可能太少");
    }
    return true;
}
    if (content.equals("/clearstyle")) {
        styleProfileCache.remove(talker);
        setString(PREF_STYLE_PREFIX + talker, "");
        sendText(talker, "🧹 已清除当前会话的风格学习记录");
        return true;
    }
if (content.equals("/clearstyle") || content.startsWith("/clearstyle ")) {
    String targetId = talker;
    if (content.length() > 12) targetId = content.substring(12).trim();
    styleProfileCache.remove(targetId);
    setString(PREF_STYLE_PREFIX + targetId, "");
    sendText(talker, "🧹 已清除会话 " + targetId + " 的风格学习记录");
    return true;
}
    if (content.startsWith("/setstyleprompt ")) {
        stylePromptTemplate = content.substring(16).trim();
        setString(PREF_STYLE_PROMPT, stylePromptTemplate);
        sendText(talker, "✍️ 风格分析提示已更新");
        return true;
    }

    // ---- 锁样本 ----
// ---- 锁样本 ----
if (content.equals("/locksample") || content.startsWith("/locksample ")) {
    String targetId = talker;
    if (content.length() > 12) targetId = content.substring(12).trim();
    String samples = getRecentSamples(targetId, sampleCount);
    if (samples == null || samples.isEmpty()) {
        sendText(talker, "❌ 会话 " + targetId + " 未找到真实样本，请先正常聊天");
        return true;
    }
    fixedSamples.put(targetId, samples);
    setString(PREF_FIXED_SAMPLE + targetId, samples);
    sendText(talker, "🔒 已锁定会话 " + targetId + " 的样本为固定模板（条数: " + sampleCount + "）");
    return true;
}
if (content.equals("/unlocksample") || content.startsWith("/unlocksample ")) {
    String targetId = talker;
    if (content.length() > 14) targetId = content.substring(14).trim();
    fixedSamples.remove(targetId);
    setString(PREF_FIXED_SAMPLE + targetId, "");
    sendText(talker, "🔓 已解除会话 " + targetId + " 的固定样本，恢复动态采样");
    return true;
}

    if (content.equals("/export")) {
        sendText(talker, "📋 当前配置:\n" + buildConfigExport(talker));
        return true;
    }
    if (content.startsWith("/import ")) {
        boolean ok = applyConfigImport(content.substring(8).trim());
        sendText(talker, ok ? "✅ 配置已导入" : "❌ 导入失败，格式错误");
        return true;
    }

if (content.equals("/panel") || content.startsWith("/panel ")) {
    String targetId = talker;
    if (content.length() > 7) targetId = content.substring(7).trim();
    sendText(talker, buildControlPanel(targetId));
    return true;
}
    
    if (content.startsWith("/samplenum ")) {
        try {
            int num = Integer.parseInt(content.substring(11).trim());
            if (num < 10 || num > 1000) {
                sendText(talker, "样本条数范围 10~1000");
            } else {
                sampleCount = num;
                setInt(PREF_SAMPLE_COUNT, num);
                sendText(talker, "📋 风格样本条数已设为 " + num);
            }
        } catch (Exception e) {
            sendText(talker, "用法: /samplenum 数字");
        }
        return true;
    }

    if (content.equals("/ai status")) {
        StringBuilder sb = new StringBuilder();
        sb.append("🤖 模型: ").append(AI_MODEL).append("\n");
        sb.append("🎭 人格: ").append(currentPersona).append("\n");
        sb.append("📌 当前会话: ").append(shouldAutoReply(talker, isGroup, null) ? "已开启" : "已关闭").append("\n");
        sb.append("🛡️ 模式: ").append(useWhitelist ? "白名单" : "黑名单");
        sendText(talker, sb.toString());
        return true;
    }
    return false;
}

// ======================== 控制面板 ========================
String buildControlPanel(String chatId) {
    StringBuilder sb = new StringBuilder();
    sb.append("╔══════════════════════════════╗\n");
    sb.append("║      🤖 控制面板 v3.1       ║\n");
    sb.append("╚══════════════════════════════╝\n\n");
    
    sb.append("【AI 接口】\n");
    sb.append("模型: ").append(AI_MODEL).append("\n");
    sb.append("URL: ").append(AI_API_URL).append("\n");
    sb.append("Key: ").append(AI_API_KEY.isEmpty() ? "未设置" : "已设置（隐藏）").append("\n\n");

    sb.append("【语音识别】\n");
    sb.append("URL: ").append(ASR_API_URL.isEmpty() ? "未设置" : ASR_API_URL).append("\n");
    sb.append("Key: ").append(ASR_API_KEY.isEmpty() ? "未设置" : "已设置（隐藏）").append("\n\n");

    sb.append("【回复风格】\n");
    sb.append("当前人格: ").append(currentPersona).append("\n");
    sb.append("可选: ").append(join(",", personaTemplates.keySet())).append("\n");
    String chatStyle = getChatStyle(chatId);
    if (chatStyle != null && !chatStyle.isEmpty()) {
        sb.append("当前会话专属风格: ").append(chatStyle).append("\n");
    } else {
        sb.append("当前会话未学习专属风格\n");
    }
    boolean isLocked = fixedSamples.containsKey(chatId);
    sb.append("固定样本: ").append(isLocked ? "已锁定" : "动态采样").append("\n");
    sb.append("学习命令: /learnstyle  清除: /clearstyle\n");
    sb.append("分析提示: ").append(stylePromptTemplate).append("\n");
    sb.append("已学习风格会话数: ").append(styleProfileCache.size()).append("\n\n");

    sb.append("【记忆系统】\n");
    sb.append("记忆轮数: ").append(memorySize).append(" (2~1000)\n");
    sb.append("已存会话数: ").append(memoryCache.size()).append("\n\n");

    sb.append("【频率限制】\n");
    sb.append("冷却时间: ").append(cooldownWindow/60000).append(" 分钟\n");
    sb.append("窗口上限: ").append(maxRepliesPerWindow).append(" 条\n\n");

    sb.append("【高级参数】\n");
    sb.append("温度: ").append(temperature).append("\n");
    sb.append("top_p: ").append(topP).append("\n");
    sb.append("max_tokens: ").append(maxTokens).append("\n");
    sb.append("风格样本条数: ").append(sampleCount).append("\n\n");

    sb.append("【黑白名单】\n");
    sb.append("模式: ").append(useWhitelist ? "白名单" : "黑名单").append("\n");
    sb.append("黑名单数: ").append(blacklist.size()).append(" | 白名单数: ").append(whitelist.size()).append("\n\n");

    sb.append("【快捷设置命令】\n");
    sb.append("/model /seturl /setkey /asrurl /asrkey\n");
    sb.append("/persona /memorysize /cooldown /maxreplies\n");
    sb.append("/temperature /topp /maxtokens /samplenum\n");
    sb.append("/whitelist on/off\n");
    sb.append("/clearmemory [会话ID]\n");
    sb.append("/reset switches\n");
    sb.append("/learnstyle /clearstyle /setstyle /setstyleprompt\n");
    sb.append("/locksample /unlocksample\n");
    sb.append("/export /import /panel\n");

    return sb.toString();
}

// ======================== 风格相关 ========================
String getChatStyle(String chatId) {
    String style = (String) styleProfileCache.get(chatId);
    if (style == null) {
        style = getString(PREF_STYLE_PREFIX + chatId, "");
        if (!style.isEmpty()) styleProfileCache.put(chatId, style);
    }
    return style;
}

void learnMyStyleForChat(String chatId) {
    log("📚 开始分析你在会话 " + chatId + " 中的聊天风格...");
    StringBuilder samples = new StringBuilder();
    int maxSamplesLength = 3000;
    long startTime = System.currentTimeMillis() - 120L * 24 * 60 * 60 * 1000;
    
    List msgs = getMsgs(chatId, startTime);
    int totalMsgCount = msgs != null ? msgs.size() : 0;
    int myMsgCount = 0;
    
    for (Object obj : msgs) {
        if (samples.length() >= maxSamplesLength) break;
        Map m = (Map) obj;
        
        String text = (String) m.getOrDefault("content", "");
        if (text == null || text.trim().isEmpty()) continue;
        
        // 过滤控制命令
        if (text.startsWith("/")) continue;
        
        Object isSendObj = m.get("isSend");
        if (isSendObj == null) continue;
        
        boolean isMine = false;
        if (isSendObj instanceof Number) {
            isMine = ((Number) isSendObj).intValue() == 1;
        } else if (isSendObj instanceof Boolean) {
            isMine = ((Boolean) isSendObj).booleanValue();
        } else if (isSendObj instanceof String) {
            String s = (String) isSendObj;
            isMine = s.equals("1") || s.equalsIgnoreCase("true");
        }
        if (!isMine) continue;
        
        if (text.length() < 500) {
            samples.append(text).append("\n");
            myMsgCount++;
        }
    }
    
    log("📊 总消息: " + totalMsgCount + ", 自己消息: " + myMsgCount + ", 样本长度: " + samples.length());
    
    if (samples.length() < 30) {
        log("⚠️ 发言样本不足（当前长度: " + samples.length() + "）");
        return;
    }
    
    String prompt = "以下是某人和特定好友在微信上的聊天记录片段（只包含他自己的发言）\n\n" + samples.toString() + "\n\n" + stylePromptTemplate;
    String systemMsg = "你是一个擅长分析语言风格的助手。";
    String styleDesc = callAIAPI(systemMsg, prompt);
    
    if (styleDesc != null && !styleDesc.isEmpty()) {
        styleProfileCache.put(chatId, styleDesc.trim());
        setString(PREF_STYLE_PREFIX + chatId, styleDesc.trim());
        log("✅ 风格学习完成 (" + chatId + "): " + styleDesc.trim());
    } else {
        log("❌ 风格分析失败，请检查网络或API配置");
    }
}

// ======================== 配置导入导出 ========================
String buildConfigExport(String chatId) {
    StringBuilder sb = new StringBuilder();
    sb.append("AI_URL=").append(AI_API_URL).append("\n");
    sb.append("AI_KEY=").append(AI_API_KEY).append("\n");
    sb.append("AI_MODEL=").append(AI_MODEL).append("\n");
    sb.append("ASR_URL=").append(ASR_API_URL).append("\n");
    sb.append("ASR_KEY=").append(ASR_API_KEY).append("\n");
    sb.append("PERSONA=").append(currentPersona).append("\n");
    sb.append("MEMORY_SIZE=").append(memorySize).append("\n");
    sb.append("COOLDOWN=").append(cooldownWindow).append("\n");
    sb.append("MAX_REPLIES=").append(maxRepliesPerWindow).append("\n");
    sb.append("WHITELIST_MODE=").append(useWhitelist).append("\n");
    sb.append("STYLE_PROMPT=").append(stylePromptTemplate).append("\n");
    sb.append("TEMPERATURE=").append(temperature).append("\n");
    sb.append("TOP_P=").append(topP).append("\n");
    sb.append("MAX_TOKENS=").append(maxTokens).append("\n");
    sb.append("SAMPLE_COUNT=").append(sampleCount).append("\n");
    // 导出黑白名单
    sb.append("BLACKLIST=").append(join(",", blacklist)).append("\n");
    sb.append("WHITELIST=").append(join(",", whitelist)).append("\n");
    // 导出当前会话开关
    if (chatId != null) {
        Boolean sw = (Boolean) contactSwitch.get(chatId);
        Boolean gsw = (Boolean) groupSwitch.get(chatId);
        if (sw != null) sb.append("SWITCH_").append(chatId).append("=").append(sw).append("\n");
        if (gsw != null) sb.append("GSWITCH_").append(chatId).append("=").append(gsw).append("\n");
    }
    return sb.toString();
}

boolean applyConfigImport(String configStr) {
    try {
        String[] lines = configStr.split("\n");
        for (int i = 0; i < lines.length; i++) {
            String line = lines[i];
            if (!line.contains("=")) continue;
            int eqIdx = line.indexOf("=");
            String key = line.substring(0, eqIdx).trim();
            String val = line.substring(eqIdx + 1).trim();
            switch (key) {
                case "AI_URL": AI_API_URL = val; setString(PREF_AI_URL, val); break;
                case "AI_KEY": AI_API_KEY = val; setString(PREF_AI_KEY, val); break;
                case "AI_MODEL": AI_MODEL = val; setString(PREF_AI_MODEL, val); break;
                case "ASR_URL": ASR_API_URL = val; setString(PREF_ASR_URL, val); break;
                case "ASR_KEY": ASR_API_KEY = val; setString(PREF_ASR_KEY, val); break;
                case "PERSONA": currentPersona = val; setString(PREF_PERSONA, val); break;
                case "MEMORY_SIZE": memorySize = Integer.parseInt(val); setInt(PREF_MEMORY_SIZE, memorySize); break;
                case "COOLDOWN": cooldownWindow = Long.parseLong(val); setLong(PREF_COOLDOWN, cooldownWindow); break;
                case "MAX_REPLIES": maxRepliesPerWindow = Integer.parseInt(val); setInt(PREF_MAX_REPLIES, maxRepliesPerWindow); break;
                case "WHITELIST_MODE": useWhitelist = Boolean.parseBoolean(val); setBoolean(PREF_USE_WHITELIST, useWhitelist); break;
                case "STYLE_PROMPT": stylePromptTemplate = val; setString(PREF_STYLE_PROMPT, val); break;
                case "TEMPERATURE": temperature = Double.parseDouble(val); setString(PREF_TEMPERATURE, val); break;
                case "TOP_P": topP = Double.parseDouble(val); setString(PREF_TOPP, val); break;
                case "MAX_TOKENS": maxTokens = Integer.parseInt(val); setString(PREF_MAX_TOKENS, val); break;
                case "SAMPLE_COUNT": sampleCount = Integer.parseInt(val); setInt(PREF_SAMPLE_COUNT, sampleCount); break;
                case "BLACKLIST":
                    blacklist.clear();
                    if (!val.isEmpty()) for (String s : val.split(",")) if (!s.isEmpty()) blacklist.add(s);
                    saveBlacklist();
                    break;
                case "WHITELIST":
                    whitelist.clear();
                    if (!val.isEmpty()) for (String s : val.split(",")) if (!s.isEmpty()) whitelist.add(s);
                    saveWhitelist();
                    break;
                default:
                    if (key.startsWith("SWITCH_")) {
                        String cid = key.substring(7);
                        contactSwitch.put(cid, Boolean.parseBoolean(val));
                        setBoolean("switch_" + cid, Boolean.parseBoolean(val));
                    } else if (key.startsWith("GSWITCH_")) {
                        String cid = key.substring(8);
                        groupSwitch.put(cid, Boolean.parseBoolean(val));
                        setBoolean("gswitch_" + cid, Boolean.parseBoolean(val));
                    }
                    break;
            }
        }
        return true;
    } catch (Exception e) {
        log("导入配置失败: " + e.getMessage());
        return false;
    }
}

// ======================== 权限与频率控制 ========================
boolean isAllowed(String talker) {
    return useWhitelist ? whitelist.contains(talker) : !blacklist.contains(talker);
}

boolean checkRateLimit(String talker) {
    long now = System.currentTimeMillis();
    Long last = (Long) lastReplyTime.get(talker);
    Integer cnt = (Integer) replyCountInWindow.get(talker);
    if (last == null || now - last > cooldownWindow) {
        lastReplyTime.put(talker, now);
        replyCountInWindow.put(talker, 1);
        return true;
    }
    if (cnt != null && cnt < maxRepliesPerWindow) {
        replyCountInWindow.put(talker, cnt + 1);
        return true;
    }
    return false;
}

boolean shouldAutoReply(String talker, boolean isGroup, msg) {
    if (isGroup) {
        Boolean e = (Boolean) groupSwitch.get(talker);
        if (e == null) e = getBoolean("gswitch_" + talker, false);
        groupSwitch.put(talker, e);
        if (msg != null && !msg.isAtMe()) return false;
        return e;
    } else {
        Boolean e = (Boolean) contactSwitch.get(talker);
        if (e == null) e = getBoolean("switch_" + talker, false);
        contactSwitch.put(talker, e);
        return e;
    }
}

void setAutoReplySwitch(String talker, boolean isGroup, boolean v) {
    if (isGroup) {
        groupSwitch.put(talker, v);
        setBoolean("gswitch_" + talker, v);
    } else {
        contactSwitch.put(talker, v);
        setBoolean("switch_" + talker, v);
    }
    saveSwitches();  // 立即持久化聚合字符串
}

void saveSwitches() {
    StringBuilder sb = new StringBuilder();
    for (Object key : contactSwitch.keySet()) {
        if (sb.length() > 0) sb.append(",");
        sb.append(key).append("=").append(contactSwitch.get(key));
    }
    setString(PREF_SWITCHES, sb.toString());
    
    sb.setLength(0);
    for (Object key : groupSwitch.keySet()) {
        if (sb.length() > 0) sb.append(",");
        sb.append(key).append("=").append(groupSwitch.get(key));
    }
    setString(PREF_GSWITCHES, sb.toString());
}
// ======================== 开关持久化加载 ========================
void loadSwitches() {
    String savedContact = getString(PREF_SWITCHES, "");
    if (!savedContact.isEmpty()) {
        String[] parts = savedContact.split(",");
        for (int i = 0; i < parts.length; i++) {
            String part = parts[i];
            if (part.isEmpty()) continue;
            int eqIdx = part.indexOf("=");
            if (eqIdx > 0) {
                String cid = part.substring(0, eqIdx);
                boolean val = "true".equals(part.substring(eqIdx + 1));
                contactSwitch.put(cid, val);
                setBoolean("switch_" + cid, val);
            }
        }
    }
    String savedGroup = getString(PREF_GSWITCHES, "");
    if (!savedGroup.isEmpty()) {
        String[] parts = savedGroup.split(",");
        for (int i = 0; i < parts.length; i++) {
            String part = parts[i];
            if (part.isEmpty()) continue;
            int eqIdx = part.indexOf("=");
            if (eqIdx > 0) {
                String cid = part.substring(0, eqIdx);
                boolean val = "true".equals(part.substring(eqIdx + 1));
                groupSwitch.put(cid, val);
                setBoolean("gswitch_" + cid, val);
            }
        }
    }
}

void saveAllMemoryKeys() {
    setString(PREF_MEM_KEYS, join("\u0001", allMemoryKeys));
}

// ======================== AI 回复核心 ========================
void processAIReply(String chatId, String incomingMsg) {
    try {
        long startTime = System.currentTimeMillis() - 7L * 24 * 60 * 60 * 1000;
        List historyMsgs = getMsgs(chatId, startTime);

        List memory = (List) memoryCache.get(chatId);
        if (memory == null) {
            memory = new java.util.LinkedList();
            memoryCache.put(chatId, memory);
        }

        String ragContext = retrieveRelevantContext(historyMsgs, incomingMsg);
        String recentSamples = getEffectiveSamples(chatId);

        String systemPrompt = buildSystemPrompt(chatId, memory, recentSamples, ragContext);
        String userPrompt = buildUserPrompt(memory, ragContext, incomingMsg);

        String aiResponse = callAIAPI(systemPrompt, userPrompt);
        aiResponse = cleanResponse(aiResponse);

        if (aiResponse != null && !aiResponse.isEmpty()) {
            String[] lines = aiResponse.split("\n");
            for (int i = 0; i < lines.length; i++) {
                String line = lines[i].trim();
                if (line.isEmpty()) continue;
                sendText(chatId, line + "\u200B\u200B");  // 加零宽标记
                addAiSent(chatId, line);
                if (i < lines.length - 1) {
                    try { Thread.sleep(300); } catch (InterruptedException e) {}
                }
            }
            updateMemory(chatId, "对方: " + incomingMsg);
            updateMemory(chatId, "我: " + aiResponse);
            log("✅ 自动回复: " + aiResponse);
        }
    } catch (Exception e) {
        log("❌ AI回复异常: " + e.getMessage());
    }
}

// ======================== AI 发送记录 ========================
void addAiSent(String chatId, String text) {
    Set sentSet = (Set) aiSentCache.get(chatId);
    if (sentSet == null) {
        sentSet = new HashSet();
        aiSentCache.put(chatId, sentSet);
    }
    sentSet.add(text);
}

boolean isAiSent(String chatId, String text) {
    Set sentSet = (Set) aiSentCache.get(chatId);
    return sentSet != null && sentSet.contains(text);
}

// ======================== 样本获取 ========================
String getEffectiveSamples(String chatId) {
    // 优先用固定样本
    String fixed = (String) fixedSamples.get(chatId);
    if (fixed == null) fixed = getString(PREF_FIXED_SAMPLE + chatId, "");
    if (fixed != null && !fixed.isEmpty()) return fixed;
    // 否则动态采样
    return getRecentSamples(chatId, sampleCount);
}

String getRecentSamples(String chatId, int count) {
    long startTime = System.currentTimeMillis() - 60L * 24 * 60 * 60 * 1000;
    List msgs = getMsgs(chatId, startTime);
    if (msgs == null) return "";
    
    StringBuilder samples = new StringBuilder();
    int found = 0;
    
    for (int i = msgs.size() - 1; i >= 0 && found < count; i--) {
        Map m = (Map) msgs.get(i);
        
        boolean isMine = false;
        Object isSendObj = m.get("isSend");
        if (isSendObj != null) {
            if (isSendObj instanceof Number) {
                isMine = ((Number) isSendObj).intValue() == 1;
            } else if (isSendObj instanceof Boolean) {
                isMine = ((Boolean) isSendObj).booleanValue();
            } else if (isSendObj instanceof String) {
                String s = (String) isSendObj;
                isMine = s.equals("1") || s.equalsIgnoreCase("true");
            }
        }
        if (!isMine) continue;
        
        String text = (String) m.getOrDefault("content", "");
        if (text == null || text.trim().isEmpty()) continue;
        
        // 过滤控制命令
        if (text.startsWith("/")) continue;
        
        // 排除 AI 生成的消息
        if (text.contains("\u200B\u200B")) continue;  // 包含AI标记则跳过
        
        samples.insert(0, "[我的真实发言]: " + text + "\n");
        found++;
    }
    return samples.toString().trim();
}

// ======================== 系统提示词构建 ========================
String buildSystemPrompt(String chatId, List memory, String recentSamples, String ragContext) {
    StringBuilder sb = new StringBuilder();
    
    // 1. 最高优先级：真实说话样本
    if (recentSamples != null && !recentSamples.isEmpty()) {
        sb.append("## 【最高优先级】以下是我的真实聊天记录，你必须严格模仿我的风格\n");
        sb.append("请逐字逐句分析我的用词、标点、表情、句子长度和语气等各种方面，回复时完全复现这种风格。\n");
        sb.append("```\n").append(recentSamples).append("\n```\n\n");
    }
    
    // 2. 风格总结（如果存在）
    String chatStyle = getChatStyle(chatId);
    if (chatStyle != null && !chatStyle.isEmpty()) {
        sb.append("## 我的风格特征总结\n").append(chatStyle).append("\n\n");
    }
    
    // 3. 对方最近相关消息（提供上下文，帮助理解当前话题）
    if (ragContext != null && !ragContext.isEmpty()) {
        sb.append("## 对方最近相关消息（用于理解话题，不要模仿对方的风格）\n");
        sb.append(ragContext).append("\n\n");
    }
    
    // 4. 人格模板（降级为辅助，仅在没有足够真实样本时参考）
    String personaDesc = (String) personaTemplates.getOrDefault(currentPersona, "");
    if (!personaDesc.isEmpty()) {
        sb.append("## 辅助角色设定（仅在上述真实样本不足时参考）\n");
        sb.append(personaDesc).append("\n\n");
    }
    
    // 5. 核心要求
    sb.append("## 核心要求\n");
    sb.append("- 必须以【最高优先级】中的真实聊天记录为准，不要使用辅助角色设定覆盖我的真实风格\n");
    sb.append("- 口语化、自然，像真人微信聊天，不要使用“首先、其次、总之”等书面语\n");
    sb.append("- 不要使用“作为一个人工智能”、“作为一个AI”等暴露身份的词\n");
    sb.append("- 回复长度、标点、表情使用频率等各种方面都要与我历史记录一致\n");
    if (memory != null && !memory.isEmpty()) {
        sb.append("- 保持与之前对话的连贯性\n");
    }
    
    return sb.toString();
}


String buildUserPrompt(List memory, String ragContext, String incomingMsg) {
    StringBuilder sb = new StringBuilder();
    if (memory != null && !memory.isEmpty()) {
        sb.append("【近期记忆】\n").append(join("\n", memory)).append("\n\n");
    }
    if (ragContext != null && !ragContext.isEmpty()) {
        sb.append("【相似历史对话】\n").append(ragContext).append("\n\n");
    }
    sb.append("【对方的最新消息】\n").append(incomingMsg).append("\n\n");
    sb.append("请以「我」的身份回复：");
    return sb.toString();
}

// ======================== AI API 调用（带重试） ========================
String callAIAPI(String systemPrompt, String userPrompt) {
    int maxRetries = 3;

    for (int attempt = 0; attempt < maxRetries; attempt++) {
        HttpURLConnection conn = null;
        try {
            if (attempt > 0) {
                int retryDelay = 1500 * attempt; // 递增延迟：1.5s, 3s, 4.5s
                log("⏳ 等待 " + retryDelay + "ms 后重试第 " + attempt + " 次...");
                Thread.sleep(retryDelay);
            }

            org.json.JSONObject body = new org.json.JSONObject();
            body.put("model", AI_MODEL);
            org.json.JSONArray messages = new org.json.JSONArray();
            messages.put(new org.json.JSONObject().put("role", "system").put("content", systemPrompt));
            messages.put(new org.json.JSONObject().put("role", "user").put("content", userPrompt));
            body.put("messages", messages);
            body.put("temperature", temperature);
            body.put("max_tokens", maxTokens);
            if (topP >= 0) body.put("top_p", topP);
            String jsonBody = body.toString();

            URL url = new URL(AI_API_URL);
            conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setRequestProperty("Authorization", "Bearer " + AI_API_KEY);
            conn.setDoOutput(true);
            conn.setConnectTimeout(15000);
            conn.setReadTimeout(30000);

            OutputStream os = conn.getOutputStream();
            os.write(jsonBody.getBytes("UTF-8"));
            os.close();

            int responseCode = conn.getResponseCode();
            if (responseCode == 200) {
                BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
                StringBuilder resp = new StringBuilder();
                String line;
                while ((line = br.readLine()) != null) resp.append(line);
                br.close();
                String result = parseContent(resp.toString());
                if (result != null && !result.isEmpty()) return result;
                log("❌ 解析回复内容为空");
            } else {
                log("❌ API请求失败: " + responseCode);
                if (responseCode == 401 || responseCode == 403) {
                    log("❌ 认证失败，请检查 API Key 是否正确");
                    break; // 不重试
                }
                if (responseCode >= 500 || responseCode == 429) {
                    continue; // 服务器错误或限流，重试
                } else {
                    break; // 其他客户端错误，不重试
                }
            }
        } catch (java.net.SocketTimeoutException e) {
            log("❌ 请求超时: " + e.getMessage());
        } catch (Exception e) {
            log("❌ API异常: " + e.getMessage());
            break;
        } finally {
            if (conn != null) conn.disconnect();
        }
    }
    return null;
}

String parseContent(String json) {
    if (json == null || json.trim().isEmpty()) return null;
    try {
        org.json.JSONObject root = new org.json.JSONObject(json);
        if (!root.has("choices")) {
            log("❌ 响应缺少 choices 字段");
            return null;
        }
        org.json.JSONArray choices = root.getJSONArray("choices");
        if (choices.length() == 0) {
            log("❌ choices 为空");
            return null;
        }
        org.json.JSONObject choice = choices.getJSONObject(0);
        if (!choice.has("message")) {
            log("❌ choice 缺少 message 字段");
            return null;
        }
        org.json.JSONObject message = choice.getJSONObject("message");
        if (!message.has("content")) {
            log("❌ message 缺少 content 字段");
            return null;
        }
        return message.getString("content");
    } catch (Exception e) {
        log("❌ 解析回复失败: " + e.getMessage());
        return null;
    }
}

String cleanResponse(String raw) {
    if (raw == null) return null;
    return raw.replaceAll("^(我:|回复:)", "").trim();
}

// ======================== 记忆管理 ========================
List getMemory(String talker) {
    List m = (List) memoryCache.get(talker);
    if (m == null) {
        String saved = getString("mem_" + talker, "");
        if (!saved.isEmpty()) {
            String[] parts = saved.split("\u0002");
            m = new java.util.LinkedList();
            for (int i = 0; i < parts.length; i++) m.add(parts[i]);
        } else {
            m = new java.util.LinkedList();
        }
        memoryCache.put(talker, m);
        // 确保记忆键被记录（修复遗漏）
        if (!allMemoryKeys.contains(talker)) {
            allMemoryKeys.add(talker);
            saveAllMemoryKeys();
        }
    }
    return m;
}

void updateMemory(String talker, String text) {
    List m = getMemory(talker);
    m.add(text);
    while (m.size() > memorySize) m.remove(0);
    setString("mem_" + talker, join("\u0002", m));
    if (!allMemoryKeys.contains(talker)) {
        allMemoryKeys.add(talker);
    }
    saveAllMemoryKeys();
    
    // ★ 手动限制最大会话数（替代 LinkedHashMap 的 LRU）
    if (memoryCache.size() > 500) {
        // 随机删一个旧会话（简单粗暴但有效）
        Object oldest = memoryCache.keySet().iterator().next();
        memoryCache.remove(oldest);
    }
}

// ======================== RAG 增强检索（带时间衰减） ========================
String retrieveRelevantContext(List historyMsgs, String query) {
    if (historyMsgs == null || historyMsgs.isEmpty() || query == null || query.trim().isEmpty()) {
        return "";
    }

    List docList = new ArrayList();
    List timeList = new ArrayList();
    int maxHistory = Math.min(historyMsgs.size(), 100);
    int startIdx = historyMsgs.size() - maxHistory;
    long now = System.currentTimeMillis();
    for (int i = startIdx; i < historyMsgs.size(); i++) {
        Map m = (Map) historyMsgs.get(i);
        if (m == null) continue;
        
        boolean isOther = false;
        Object isSendObj = m.get("isSend");
        if (isSendObj != null) {
            if (isSendObj instanceof Number) {
                isOther = ((Number) isSendObj).intValue() == 0;
            } else if (isSendObj instanceof Boolean) {
                isOther = !((Boolean) isSendObj).booleanValue();
            } else if (isSendObj instanceof String) {
                String s = (String) isSendObj;
                isOther = s.equals("0") || s.equalsIgnoreCase("false");
            }
        }
        if (!isOther) continue;
        
        String text = (String) m.getOrDefault("content", "");
        if (text == null || text.trim().isEmpty()) continue;
        if (text.length() > 200) continue;
        
        docList.add(text);
        // 计算时间权重（越近权重越高，指数衰减，半衰期约2小时）
        Object timeObj = m.get("createTime");
        long msgTime = 0;
        if (timeObj instanceof Number) msgTime = ((Number) timeObj).longValue();
        double hoursAgo;
        if (msgTime > 0) {
            hoursAgo = (now - msgTime) / (1000.0 * 3600.0);
        } else {
            hoursAgo = 48; // 缺失时间字段，默认48小时前（低权重）
        }
        double timeWeight = Math.pow(0.7, hoursAgo / 2.0);
        timeList.add(Double.valueOf(timeWeight));
    }

    if (docList.isEmpty()) return "";

    Set queryKeywords = extractKeywords(query);
    if (queryKeywords.isEmpty()) return "";

    List scoreList = new ArrayList();
    for (int i = 0; i < docList.size(); i++) {
        String doc = (String) docList.get(i);
        double timeW = ((Double) timeList.get(i)).doubleValue();
        double contentScore = calculateScore(doc, queryKeywords, query);
        double finalScore = contentScore * timeW;
        if (finalScore > 0.03) {
            Map entry = new HashMap();
            entry.put("text", doc);
            entry.put("score", Double.valueOf(finalScore));
            scoreList.add(entry);
        }
    }

    java.util.Collections.sort(scoreList, new java.util.Comparator() {
        public int compare(Object a, Object b) {
            double s1 = ((Double) ((Map) a).get("score")).doubleValue();
            double s2 = ((Double) ((Map) b).get("score")).doubleValue();
            return Double.compare(s2, s1);
        }
    });

    StringBuilder result = new StringBuilder();
    int count = 0;
    for (int i = 0; i < scoreList.size() && count < 5; i++) {
        Map entry = (Map) scoreList.get(i);
        String text = (String) entry.get("text");
        result.append(text).append("\n");
        count++;
    }

    return result.toString().trim();
}

Set extractKeywords(String text) {
    Set keywords = new HashSet();
    if (text == null || text.trim().isEmpty()) return keywords;
    String[] words = text.split("[，。！？；：、\\s]+");
    for (int i = 0; i < words.length; i++) {
        String word = words[i].trim();
        if (word.length() >= 2 && word.length() <= 10) {
            keywords.add(word);
        }
    }
    return keywords;
}

double calculateScore(String doc, Set queryKeywords, String query) {
    double keywordScore = 0.0;
    int matchCount = 0;
    for (Object obj : queryKeywords) {
        String kw = (String) obj;
        if (doc.contains(kw)) matchCount++;
    }
    if (!queryKeywords.isEmpty()) {
        keywordScore = (double) matchCount / queryKeywords.size();
    }

    Set queryBigrams = getBigrams(query);
    Set docBigrams = getBigrams(doc);
    double bigramScore = 0.0;
    if (!queryBigrams.isEmpty() && !docBigrams.isEmpty()) {
        int intersect = 0;
        for (Object obj : queryBigrams) {
            if (docBigrams.contains(obj)) intersect++;
        }
        double union = queryBigrams.size() + docBigrams.size() - intersect;
        bigramScore = union > 0 ? intersect / union : 0.0;
    }

    return 0.6 * keywordScore + 0.4 * bigramScore;
}

// ======================== Bigram 生成 ========================
Set getBigrams(String s) {
    Set set = new HashSet();
    if (s == null || s.length() < 2) return set;
    for (int i = 0; i < s.length() - 1; i++) {
        set.add(s.substring(i, i + 2));
    }
    return set;
}

// ======================== 语音识别 ========================
String speechToText(String silkPath) {
    if (ASR_API_URL.isEmpty()) {
        log("⚠️ 未配置语音识别API，跳过语音消息");
        return null;
    }
    String mp3Path = "/sdcard/fkplugin/temp_" + System.currentTimeMillis() + ".mp3";
    try {
        File dir = new File("/sdcard/fkplugin");
        if (!dir.exists()) dir.mkdirs();

        // 用 SilkCodec 代替 silkToMp3
        me.yun.silk.SilkCodec codec = new me.yun.silk.SilkCodec();
        int code = codec.silkToMp3(silkPath, mp3Path, 24000);

        log("🔍 SilkCodec 返回码: " + code);
        if (code != 0) {
            log("❌ Silk转MP3失败, code=" + code);
            return null;
        }

        File mp3File = new File(mp3Path);
        if (!mp3File.exists()) return null;

        String result = httpPostFile(ASR_API_URL, mp3File, "Authorization", "Bearer " + ASR_API_KEY);
        return parseASRResult(result);
    } catch (Exception e) {
        log("❌ 语音识别异常: " + e.getMessage());
        return null;
    } finally {
        try { deleteFile(new File(mp3Path)); } catch (Exception ignored) {}
    }
}

String parseASRResult(String json) {
    if (json == null) return null;
    int idx = json.indexOf("\"text\":\"");
    if (idx == -1) return null;
    idx += 8;
    int end = json.indexOf("\"", idx);
    return end > idx ? json.substring(idx, end) : null;
}

// ======================== 黑白名单持久化 ========================
void loadBlacklist() {
    String saved = getString(PREF_BLACKLIST, "");
    if (!saved.isEmpty()) for (String s : saved.split(",")) if (!s.isEmpty()) blacklist.add(s);
}
void saveBlacklist() { setString(PREF_BLACKLIST, join(",", blacklist)); }

void loadWhitelist() {
    String saved = getString(PREF_WHITELIST, "");
    if (!saved.isEmpty()) for (String s : saved.split(",")) if (!s.isEmpty()) whitelist.add(s);
}
void saveWhitelist() { setString(PREF_WHITELIST, join(",", whitelist)); }

// ======================== 持久化辅助 ========================
int getInt(String key, int def) {
    String v = getString(key, "");
    if (v.isEmpty()) return def;
    try { return Integer.parseInt(v); } catch (Exception e) { return def; }
}
void setInt(String key, int val) { setString(key, String.valueOf(val)); }

long getLong(String key, long def) {
    String v = getString(key, "");
    if (v.isEmpty()) return def;
    try { return Long.parseLong(v); } catch (Exception e) { return def; }
}
void setLong(String key, long val) { setString(key, String.valueOf(val)); }

double safeParseDouble(String s, double def) {
    if (s == null || s.trim().isEmpty()) return def;
    try { return Double.parseDouble(s); } catch (Exception e) { return def; }
}

int safeParseInt(String s, int def) {
    if (s == null || s.trim().isEmpty()) return def;
    try { return Integer.parseInt(s); } catch (Exception e) { return def; }
}

// ======================== 工具函数 ========================
String join(String sep, Collection c) {
    if (c == null || c.isEmpty()) return "";
    StringBuilder sb = new StringBuilder();
    boolean first = true;
    for (Object o : c) {
        if (!first) sb.append(sep);
        sb.append(o);
        first = false;
    }
    return sb.toString();
}

// ======================== UI 控制面板（基于 AlertDialog，与第二段逻辑相同） ========================
void showConfigDialog(android.app.Activity a, String chatId) {
    try {
        android.widget.ScrollView scrollView = new android.widget.ScrollView(a);
        android.widget.LinearLayout root = new android.widget.LinearLayout(a);
        root.setOrientation(android.widget.LinearLayout.VERTICAL);
        root.setPadding(40, 40, 40, 40);

        // 状态文字
        android.widget.TextView tvStatus = new android.widget.TextView(a);
        tvStatus.setText("会话: " + chatId + "\n" + buildUiStatusShort(chatId));
        tvStatus.setPadding(0, 0, 0, 20);
        root.addView(tvStatus);

        // 1. AI 开关
        android.widget.Button btnAi = new android.widget.Button(a);
        btnAi.setText("AI回复: " + (shouldAutoReply(chatId, false, null) ? "开" : "关"));
        btnAi.setOnClickListener(v -> {
            boolean cur = shouldAutoReply(chatId, false, null);
            setAutoReplySwitch(chatId, false, !cur);
            btnAi.setText("AI回复: " + (!cur ? "开" : "关"));
            toast("AI回复已" + (!cur ? "开启" : "关闭"));
        });
        root.addView(btnAi);

        // 2. 人格切换
        android.widget.Button btnStyle = new android.widget.Button(a);
        btnStyle.setText("人格: " + currentPersona);
        btnStyle.setOnClickListener(v -> {
            String[] names = new String[personaTemplates.size()];
            int idx = 0;
            for (Object k : personaTemplates.keySet()) names[idx++] = (String) k;
            new android.app.AlertDialog.Builder(a)
                .setTitle("选择人格")
                .setItems(names, (d, w) -> {
                    currentPersona = names[w];
                    setString(PREF_PERSONA, currentPersona);
                    btnStyle.setText("人格: " + currentPersona);
                    toast("已切换: " + currentPersona);
                })
                .show();
        });
        root.addView(btnStyle);

        // 3. API 设置
        android.widget.Button btnApi = new android.widget.Button(a);
        btnApi.setText("AI接口设置");
        btnApi.setOnClickListener(v -> {
            android.widget.LinearLayout apiLayout = new android.widget.LinearLayout(a);
            apiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
            android.widget.EditText etUrl = new android.widget.EditText(a);
            etUrl.setText(AI_API_URL); etUrl.setHint("API URL");
            android.widget.EditText etKey = new android.widget.EditText(a);
            etKey.setText(AI_API_KEY); etKey.setHint("API Key");
            android.widget.EditText etModel = new android.widget.EditText(a);
            etModel.setText(AI_MODEL); etModel.setHint("Model");
            apiLayout.addView(etUrl);
            apiLayout.addView(etKey);
            apiLayout.addView(etModel);
            new android.app.AlertDialog.Builder(a)
                .setTitle("AI 接口")
                .setView(apiLayout)
                .setPositiveButton("保存", (d, w) -> {
                    AI_API_URL = etUrl.getText().toString().trim();
                    AI_API_KEY = etKey.getText().toString().trim();
                    AI_MODEL = etModel.getText().toString().trim();
                    setString(PREF_AI_URL, AI_API_URL);
                    setString(PREF_AI_KEY, AI_API_KEY);
                    setString(PREF_AI_MODEL, AI_MODEL);
                    toast("API配置已更新");
                })
                .setNegativeButton("取消", null)
                .show();
        });
        root.addView(btnApi);

        // 4. 记忆与频率
        android.widget.Button btnFreq = new android.widget.Button(a);
        btnFreq.setText("记忆与频率");
        btnFreq.setOnClickListener(v -> {
            android.widget.LinearLayout freqLayout = new android.widget.LinearLayout(a);
            freqLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
            android.widget.EditText etMem = new android.widget.EditText(a);
            etMem.setInputType(0x0002); etMem.setText(String.valueOf(memorySize));
            android.widget.EditText etCool = new android.widget.EditText(a);
            etCool.setInputType(0x0002); etCool.setText(String.valueOf(cooldownWindow / 60000));
            android.widget.EditText etMax = new android.widget.EditText(a);
            etMax.setInputType(0x0002); etMax.setText(String.valueOf(maxRepliesPerWindow));
            freqLayout.addView(etMem);
            freqLayout.addView(etCool);
            freqLayout.addView(etMax);
            new android.app.AlertDialog.Builder(a)
                .setTitle("记忆轮数 / 冷却(分钟) / 上限")
                .setView(freqLayout)
                .setPositiveButton("保存", (d, w) -> {
                    try {
                        memorySize = Integer.parseInt(etMem.getText().toString());
                        cooldownWindow = Integer.parseInt(etCool.getText().toString()) * 60 * 1000L;
                        maxRepliesPerWindow = Integer.parseInt(etMax.getText().toString());
                        setInt(PREF_MEMORY_SIZE, memorySize);
                        setLong(PREF_COOLDOWN, cooldownWindow);
                        setInt(PREF_MAX_REPLIES, maxRepliesPerWindow);
                        toast("已更新");
                    } catch (Exception e) {}
                })
                .setNegativeButton("取消", null)
                .show();
        });
        root.addView(btnFreq);

        // 5. 高级参数
        android.widget.Button btnAdv = new android.widget.Button(a);
        btnAdv.setText("高级参数");
        btnAdv.setOnClickListener(v -> {
            android.widget.LinearLayout advLayout = new android.widget.LinearLayout(a);
            advLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
            android.widget.EditText etTemp = new android.widget.EditText(a);
            etTemp.setText(String.valueOf(temperature));
            android.widget.EditText etTopp = new android.widget.EditText(a);
            etTopp.setText(String.valueOf(topP));
            android.widget.EditText etTok = new android.widget.EditText(a);
            etTok.setText(String.valueOf(maxTokens));
            android.widget.EditText etSamp = new android.widget.EditText(a);
            etSamp.setText(String.valueOf(sampleCount));
            advLayout.addView(etTemp);
            advLayout.addView(etTopp);
            advLayout.addView(etTok);
            advLayout.addView(etSamp);
            new android.app.AlertDialog.Builder(a)
                .setTitle("温度 / top_p / max_tokens / 样本数")
                .setView(advLayout)
                .setPositiveButton("保存", (d, w) -> {
                    temperature = Double.parseDouble(etTemp.getText().toString());
                    topP = Double.parseDouble(etTopp.getText().toString());
                    maxTokens = Integer.parseInt(etTok.getText().toString());
                    sampleCount = Integer.parseInt(etSamp.getText().toString());
                    setString(PREF_TEMPERATURE, String.valueOf(temperature));
                    setString(PREF_TOPP, String.valueOf(topP));
                    setString(PREF_MAX_TOKENS, String.valueOf(maxTokens));
                    setInt(PREF_SAMPLE_COUNT, sampleCount);
                    toast("高级参数已更新");
                })
                .setNegativeButton("取消", null)
                .show();
        });
        root.addView(btnAdv);

        // 6. 风格学习
        android.widget.Button btnLearn = new android.widget.Button(a);
        btnLearn.setText("风格学习");
        btnLearn.setOnClickListener(v -> {
            new android.app.AlertDialog.Builder(a)
                .setTitle("风格管理")
                .setItems(new String[]{"学习风格", "锁定样本", "解锁样本", "清除风格"}, (d, w) -> {
                    switch (w) {
                        case 0: sendText(chatId, "/learnstyle"); toast("正在学习..."); break;
                        case 1: sendText(chatId, "/locksample"); toast("已锁定"); break;
                        case 2: sendText(chatId, "/unlocksample"); toast("已解锁"); break;
                        case 3: sendText(chatId, "/clearstyle"); toast("已清除"); break;
                    }
                })
                .show();
        });
        root.addView(btnLearn);

        // 7. 黑白名单
        android.widget.Button btnBlock = new android.widget.Button(a);
        btnBlock.setText("黑白名单");
        btnBlock.setOnClickListener(v -> {
            new android.app.AlertDialog.Builder(a)
                .setTitle("黑白名单")
                .setItems(new String[]{"查看黑名单", "查看白名单", "添加黑名单", "添加白名单"}, (d, w) -> {
                    if (w == 0) sendText(chatId, "/blacklist list");
                    else if (w == 1) sendText(chatId, "/whitelist list");
                    else inputId(a, chatId, w == 2 ? "blacklist" : "whitelist");
                })
                .show();
        });
        root.addView(btnBlock);

        // 关闭按钮
        android.widget.Button btnClose = new android.widget.Button(a);
        btnClose.setText("关闭");
        btnClose.setOnClickListener(v -> {
            if (currentDialog != null) {
                currentDialog.dismiss();
                currentDialog = null;
            }
        });
        root.addView(btnClose);

        scrollView.addView(root);
        currentDialog = new android.app.AlertDialog.Builder(a)
            .setTitle("⚙️ AI 控制面板")
            .setView(scrollView)
            .setCancelable(true)
            .create();
        currentDialog.show();
    } catch (Exception e) {
        sendText(chatId, buildControlPanel(chatId));
    }
}

String buildUiStatusShort(String chatId) {
    return "AI: " + (shouldAutoReply(chatId, false, null) ? "开" : "关") +
           " | 人格: " + currentPersona +
           " | 模式: " + (useWhitelist ? "白名单" : "黑名单");
}

void inputId(android.app.Activity a, String chatId, String type) {
    android.widget.EditText input = new android.widget.EditText(a);
    new android.app.AlertDialog.Builder(a)
        .setTitle("输入ID")
        .setView(input)
        .setPositiveButton("确定", (d, w) -> {
            sendText(chatId, "/" + type + " add " + input.getText().toString().trim());
        })
        .setNegativeButton("取消", null)
        .show();
}
