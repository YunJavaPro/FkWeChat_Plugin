// ==================== 关键词监听插件 v1.2 ====================
// 功能：监听指定联系人/群聊的消息，检测关键词并提醒
// 配置：支持 配置文件(config.prop) + 聊天命令(#xxx)

// ==================== 常量定义 ====================
String KEY_ENABLED = "enabled";
String KEY_TARGETS = "targets";
String KEY_KEYWORDS = "keywords";
String KEY_NOTIFY_MODE = "notify_mode";
String KEY_ADMIN_WXID = "admin_wxid";
String KEY_ALERT_GROUP = "alert_group";  // 提醒群聊ID

// ==================== 插件生命周期 ====================

onLoad() {
    log("[关键词监听] 插件加载中...");
    
    // 首次运行初始化
    if (!contains(KEY_ENABLED)) {
        initDefaultConfig();
        toast("关键词监听插件已安装！\n发送 #帮助 查看使用说明");
    }
    
    // 打印当前配置
    log("[关键词监听] 加载完成");
    logConfig();
}

onUnload() {
    log("[关键词监听] 插件已卸载");
}

// 初始化默认配置
void initDefaultConfig() {
    setBoolean(KEY_ENABLED, true);
    setString(KEY_TARGETS, "");
    setString(KEY_KEYWORDS, "");
    setString(KEY_NOTIFY_MODE, "toast");
    setString(KEY_ADMIN_WXID, "");
    setString(KEY_ALERT_GROUP, "");
    log("[关键词监听] 已初始化默认配置");
}

// ==================== 消息处理 ====================

onMsg(msg) {
    // 只处理文本消息
    if (!msg.isText()) return;
    
    String content = msg.content.trim();
    String talker = msg.talker;
    String sender = msg.sendTalker;
    boolean isGroup = msg.isGroupChat();
    boolean isSelf = msg.isSend();
    
    // 处理命令
    if (content.startsWith("#") && canHandleCommand(msg)) {
        handleCommand(msg, content, talker, isGroup);
        return;
    }

    // 检查启用状态。命令需要放在这里之前处理，避免 #关闭 后无法再用 #开启 恢复。
    if (!getBoolean(KEY_ENABLED, true)) return;
    
    // 忽略自己发的消息
    if (isSelf) return;
    
    // 检查是否在监听范围
    if (!isWatchTarget(talker)) return;
    
    // 检查关键词
    String kw = getString(KEY_KEYWORDS, "");
    if (kw.isEmpty()) return;
    
    String matched = matchKeyword(content, kw.split("\\|"));
    if (matched != null) {
        triggerAlert(msg, matched, talker, sender, isGroup);
    }
}

// ==================== 命令处理 ====================

boolean canHandleCommand(msg) {
    if (msg.isSend()) return true;

    String sender = msg.sendTalker;
    if (sender != null && sender.equals(myWxId)) return true;

    String admin = getString(KEY_ADMIN_WXID, "");
    return !admin.isEmpty() && admin.equals(sender);
}

void handleCommand(msg, content, talker, isGroup) {
    String cmd = content.trim();
    
    // 帮助
    if (cmd.equals("#帮助") || cmd.equals("#help")) {
        showHelp(talker);
        return;
    }
    
    // 开关
    if (cmd.equals("#开启")) {
        setBoolean(KEY_ENABLED, true);
        sendText(talker, "✅ 监听已开启");
        return;
    }
    if (cmd.equals("#关闭")) {
        setBoolean(KEY_ENABLED, false);
        sendText(talker, "❌ 监听已关闭");
        return;
    }
    
    // 状态
    if (cmd.equals("#状态") || cmd.equals("#配置")) {
        showStatus(talker);
        return;
    }
    
    // 添加监听
    if (cmd.startsWith("#监听 ")) {
        String arg = cmd.substring(4).trim();
        if (arg.equals("全部") || arg.equals("*")) {
            setString(KEY_TARGETS, "*");
            sendText(talker, "✅ 已设置监听所有消息");
        } else {
            addWatchTarget(talker, arg);
        }
        return;
    }
    
    // 取消监听
    if (cmd.startsWith("#取消监听 ")) {
        String arg = cmd.substring(6).trim();
        removeWatchTarget(talker, arg);
        return;
    }
    
    // 监听列表
    if (cmd.equals("#监听列表")) {
        showWatchList(talker);
        return;
    }
    
    // 添加关键词
    if (cmd.startsWith("#关键词 ")) {
        String arg = cmd.substring(5).trim();
        addKeyword(talker, arg);
        return;
    }
    
    // 删除关键词
    if (cmd.startsWith("#删词 ")) {
        String arg = cmd.substring(4).trim();
        removeKeyword(talker, arg);
        return;
    }
    
    // 关键词列表
    if (cmd.equals("#词列表")) {
        showKeywordList(talker);
        return;
    }
    
    // 设置模式
    if (cmd.startsWith("#模式 ")) {
        String mode = cmd.substring(4).trim();
        setMode(talker, mode);
        return;
    }
    
    // 设置管理员
    if (cmd.equals("#设管理员")) {
        if (isGroup) {
            sendText(talker, "⚠️ 请在私聊中设置管理员");
        } else {
            setString(KEY_ADMIN_WXID, msg.sendTalker);
            sendText(talker, "✅ 已设为管理员");
        }
        return;
    }
    
    // 取消管理员
    if (cmd.equals("#取消管理员")) {
        setString(KEY_ADMIN_WXID, "");
        sendText(talker, "✅ 已取消管理员");
        return;
    }
    
    // 设置提醒群
    if (cmd.equals("#设提醒群")) {
        if (isGroup) {
            setString(KEY_ALERT_GROUP, talker);
            sendText(talker, "✅ 已设为提醒群");
        } else {
            sendText(talker, "⚠️ 请在群聊中设置提醒群");
        }
        return;
    }
    
    // 取消提醒群
    if (cmd.equals("#取消提醒群")) {
        setString(KEY_ALERT_GROUP, "");
        sendText(talker, "✅ 已取消提醒群");
        return;
    }
    
    // 搜索联系人
    if (cmd.startsWith("#查找 ")) {
        String keyword = cmd.substring(4).trim();
        searchContact(talker, keyword);
        return;
    }
    
    // 清空配置
    if (cmd.equals("#清空")) {
        clearConfig(talker);
        return;
    }
    
    // 未知命令
    sendText(talker, "❓ 未知命令，发送 #帮助 查看");
}

// ==================== 监听目标管理 ====================

boolean isWatchTarget(String talker) {
    String targets = getString(KEY_TARGETS, "");
    if (targets.isEmpty()) return false;
    if (targets.equals("*")) return true;
    
    for (String t : targets.split("\\|")) {
        if (t.equals(talker)) return true;
    }
    return false;
}

void addWatchTarget(String replyTo, String input) {
    // 尝试通过名称查找wxid
    String wxid = findWxid(input);
    String target = (wxid != null) ? wxid : input;
    
    String current = getString(KEY_TARGETS, "");

    if (current.equals("*")) {
        sendText(replyTo, "⚠️ 当前已监听所有消息，无需单独添加目标");
        return;
    }
    
    // 检查重复
    if (!current.isEmpty()) {
        for (String item : current.split("\\|")) {
            if (item.equals(target)) {
                sendText(replyTo, "⚠️ 该目标已在监听列表中");
                return;
            }
        }
        setString(KEY_TARGETS, current + "|" + target);
    } else {
        setString(KEY_TARGETS, target);
    }
    
    sendText(replyTo, "✅ 已添加监听：" + getDisplayName(target));
}

void removeWatchTarget(String replyTo, String input) {
    String wxid = findWxid(input);
    String target = (wxid != null) ? wxid : input;
    
    String current = getString(KEY_TARGETS, "");
    if (current.isEmpty()) {
        sendText(replyTo, "⚠️ 监听列表为空");
        return;
    }

    if (current.equals("*")) {
        if (input.equals("全部") || input.equals("*")) {
            setString(KEY_TARGETS, "");
            sendText(replyTo, "✅ 已取消监听所有消息");
        } else {
            sendText(replyTo, "⚠️ 当前为监听所有消息，使用 #取消监听 全部 关闭");
        }
        return;
    }
    
    StringBuilder sb = new StringBuilder();
    boolean found = false;
    
    for (String item : current.split("\\|")) {
        if (item.equals(target)) {
            found = true;
        } else {
            if (sb.length() > 0) sb.append("|");
            sb.append(item);
        }
    }
    
    if (found) {
        setString(KEY_TARGETS, sb.toString());
        sendText(replyTo, "✅ 已移除：" + getDisplayName(target));
    } else {
        sendText(replyTo, "⚠️ 未找到该目标");
    }
}

void showWatchList(String replyTo) {
    String targets = getString(KEY_TARGETS, "");
    
    if (targets.isEmpty()) {
        sendText(replyTo, "📋 监听列表为空\n\n使用 #监听 [名称/wxid] 添加");
        return;
    }
    if (targets.equals("*")) {
        sendText(replyTo, "📋 监听模式：所有消息");
        return;
    }
    
    String[] list = targets.split("\\|");
    StringBuilder sb = new StringBuilder("📋 监听列表：\n\n");
    
    for (int i = 0; i < list.length; i++) {
        sb.append(i + 1).append(". ").append(getDisplayName(list[i])).append("\n");
        sb.append("   ").append(list[i]).append("\n");
    }
    
    sendText(replyTo, sb.toString());
}

// ==================== 关键词管理 ====================

String matchKeyword(String content, String[] keywords) {
    String lower = content.toLowerCase();
    for (String kw : keywords) {
        if (!kw.isEmpty() && lower.contains(kw.toLowerCase())) {
            return kw;
        }
    }
    return null;
}

void addKeyword(String replyTo, String input) {
    String current = getString(KEY_KEYWORDS, "");
    String[] newKeywords = input.split("\\|");
    
    // 获取现有关键词列表
    List existingList = new ArrayList();
    if (!current.isEmpty()) {
        for (String item : current.split("\\|")) {
            existingList.add(item.toLowerCase());
        }
    }
    
    // 添加新关键词，跳过重复的
    StringBuilder added = new StringBuilder();
    StringBuilder skipped = new StringBuilder();
    
    for (String kw : newKeywords) {
        kw = kw.trim();
        if (kw.isEmpty()) continue;
        
        if (existingList.contains(kw.toLowerCase())) {
            if (skipped.length() > 0) skipped.append("、");
            skipped.append(kw);
        } else {
            if (current.isEmpty()) {
                current = kw;
            } else {
                current = current + "|" + kw;
            }
            existingList.add(kw.toLowerCase());
            if (added.length() > 0) added.append("、");
            added.append(kw);
        }
    }
    
    // 保存
    setString(KEY_KEYWORDS, current);
    
    // 返回结果
    StringBuilder result = new StringBuilder();
    if (added.length() > 0) {
        result.append("✅ 已添加：").append(added);
    }
    if (skipped.length() > 0) {
        if (result.length() > 0) result.append("\n");
        result.append("⚠️ 已存在：").append(skipped);
    }
    if (result.length() == 0) {
        result.append("⚠️ 未输入有效关键词");
    }
    
    sendText(replyTo, result.toString());
}

void removeKeyword(String replyTo, String keyword) {
    String current = getString(KEY_KEYWORDS, "");
    if (current.isEmpty()) {
        sendText(replyTo, "⚠️ 关键词列表为空");
        return;
    }
    
    StringBuilder sb = new StringBuilder();
    boolean found = false;
    
    for (String item : current.split("\\|")) {
        if (item.equalsIgnoreCase(keyword)) {
            found = true;
        } else {
            if (sb.length() > 0) sb.append("|");
            sb.append(item);
        }
    }
    
    if (found) {
        setString(KEY_KEYWORDS, sb.toString());
        sendText(replyTo, "✅ 已删除关键词：" + keyword);
    } else {
        sendText(replyTo, "⚠️ 未找到该关键词");
    }
}

void showKeywordList(String replyTo) {
    String keywords = getString(KEY_KEYWORDS, "");
    
    if (keywords.isEmpty()) {
        sendText(replyTo, "🏷️ 关键词为空\n\n使用 #关键词 [词] 添加");
        return;
    }
    
    String[] list = keywords.split("\\|");
    StringBuilder sb = new StringBuilder("🏷️ 关键词列表：\n\n");
    
    for (int i = 0; i < list.length; i++) {
        sb.append(i + 1).append(". ").append(list[i]).append("\n");
    }
    
    sendText(replyTo, sb.toString());
}

// ==================== 提醒触发 ====================

void triggerAlert(msg, keyword, talker, sender, isGroup) {
    String mode = getString(KEY_NOTIFY_MODE, "toast");
    String admin = getString(KEY_ADMIN_WXID, "");
    String alertGroup = getString(KEY_ALERT_GROUP, "");
    
    // 构建提醒消息
    StringBuilder alert = new StringBuilder();
    alert.append("🔔 关键词触发\n\n");
    
    if (isGroup) {
        alert.append("群聊：").append(getDisplayName(talker)).append("\n");
        alert.append("发送：").append(getGroupMemberName(talker, sender)).append("\n");
    } else {
        alert.append("联系人：").append(getDisplayName(sender)).append("\n");
    }
    
    String content = msg.content;
    if (content.length() > 80) content = content.substring(0, 80) + "...";
    alert.append("内容：").append(content).append("\n");
    alert.append("关键词：【").append(keyword).append("】\n");
    alert.append("时间：").append(formatTime(msg.createTime));
    
    String text = alert.toString();
    
    // 根据模式发送提醒
    if (isNotifyMode(mode, "toast")) {
        toast("触发关键词：" + keyword);
    }
    if (isNotifyMode(mode, "log")) {
        log(text);
    }
    if (isNotifyMode(mode, "admin") && !admin.isEmpty()) {
        sendText(admin, text);
    }
    if (isNotifyMode(mode, "self")) {
        // 发送给自己
        String myId = getMyWxId();
        if (myId != null && !myId.isEmpty()) {
            sendText(myId, text);
        }
    }
    if (isNotifyMode(mode, "group") && !alertGroup.isEmpty()) {
        sendText(alertGroup, text);
    }
    if (isNotifyMode(mode, "at") && isGroup) {
        // 在原群聊中@发送者提醒
        String atMsg = "@" + getGroupMemberName(talker, sender) + " ⚠️ 你触发了关键词【" + keyword + "】";
        sendText(talker, atMsg);
    }
}

boolean isNotifyMode(String mode, String targetMode) {
    return mode.equals("all") || mode.equals(targetMode);
}

// ==================== 提醒模式设置 ====================

void setMode(String replyTo, String mode) {
    // 验证模式是否有效
    String[] validModes = {"toast", "log", "admin", "self", "group", "at", "all"};
    boolean isValid = false;
    
    for (String v : validModes) {
        if (v.equals(mode)) {
            isValid = true;
            break;
        }
    }
    
    if (isValid) {
        setString(KEY_NOTIFY_MODE, mode);
        
        String desc = getModeDescription(mode);
        String hint = getModeHint(mode);
        sendText(replyTo, "✅ 提醒模式：" + desc + (hint.isEmpty() ? "" : "\n\n" + hint));
    } else {
        sendText(replyTo, "⚠️ 可用模式：\n\n" +
            "toast - 弹窗提示\n" +
            "log - 仅记录日志\n" +
            "admin - 私聊发给管理员\n" +
            "self - 发给自己\n" +
            "group - 发送到提醒群\n" +
            "at - 在原群@发送者\n" +
            "all - 以上全部");
    }
}

String getModeDescription(String mode) {
    switch (mode) {
        case "toast": return "弹窗提示";
        case "log": return "仅日志";
        case "admin": return "通知管理员";
        case "self": return "发给自己";
        case "group": return "发送提醒群";
        case "at": return "原群@提醒";
        case "all": return "全部方式";
        default: return mode;
    }
}

String getModeHint(String mode) {
    switch (mode) {
        case "admin": return "💡 请先使用 #设管理员 设置管理员";
        case "group": return "💡 请先在提醒群中使用 #设提醒群";
        case "at": return "💡 将在触发群聊中@发送者";
        case "self": return "💡 将发送消息给自己";
        default: return "";
    }
}

// ==================== 状态显示 ====================

void showStatus(String replyTo) {
    boolean enabled = getBoolean(KEY_ENABLED, true);
    String targets = getString(KEY_TARGETS, "");
    String keywords = getString(KEY_KEYWORDS, "");
    String mode = getString(KEY_NOTIFY_MODE, "toast");
    String admin = getString(KEY_ADMIN_WXID, "");
    String alertGroup = getString(KEY_ALERT_GROUP, "");
    
    StringBuilder sb = new StringBuilder();
    sb.append("⚙️ 当前配置\n");
    sb.append("════════════\n\n");
    sb.append("状态：").append(enabled ? "✅ 开启" : "❌ 关闭").append("\n\n");
    
    sb.append("📋 监听目标：");
    if (targets.isEmpty()) sb.append("未设置\n");
    else if (targets.equals("*")) sb.append("全部消息\n");
    else sb.append(targets.split("\\|").length).append("个\n");
    
    sb.append("🏷️ 关键词：");
    if (keywords.isEmpty()) sb.append("未设置\n");
    else sb.append(keywords.split("\\|").length).append("个\n");
    
    sb.append("📢 模式：").append(getModeDescription(mode)).append("\n");
    
    sb.append("👤 管理员：");
    if (admin.isEmpty()) sb.append("未设置\n");
    else sb.append(getDisplayName(admin)).append("\n");
    
    if (mode.equals("group") || mode.equals("all")) {
        sb.append("📢 提醒群：");
        if (alertGroup.isEmpty()) sb.append("未设置\n");
        else sb.append(getDisplayName(alertGroup)).append("\n");
    }
    
    sb.append("\n════════════\n");
    sb.append("发送 #帮助 查看命令");
    
    sendText(replyTo, sb.toString());
}

void logConfig() {
    log("[关键词监听] 状态：" + (getBoolean(KEY_ENABLED, true) ? "开启" : "关闭"));
    log("[关键词监听] 监听：" + getString(KEY_TARGETS, "无"));
    log("[关键词监听] 关键词：" + getString(KEY_KEYWORDS, "无"));
    log("[关键词监听] 模式：" + getString(KEY_NOTIFY_MODE, "toast"));
}

// ==================== 搜索功能 ====================

void searchContact(String replyTo, String keyword) {
    List result = getContact(keyword);
    
    if (result == null || result.isEmpty()) {
        sendText(replyTo, "🔍 未找到匹配结果");
        return;
    }
    
    StringBuilder sb = new StringBuilder("🔍 搜索结果：\n\n");
    int count = Math.min(result.size(), 10);
    
    for (int i = 0; i < count; i++) {
        Map contact = (Map) result.get(i);
        String wxid = (String) contact.get("userName");
        String nickname = (String) contact.get("nickName");
        String remark = (String) contact.get("remark");
        
        sb.append(i + 1).append(". ");
        if (remark != null && !remark.isEmpty()) {
            sb.append(remark).append(" (").append(nickname).append(")");
        } else {
            sb.append(nickname != null ? nickname : "未知");
        }
        sb.append("\n   wxid: ").append(wxid).append("\n");
    }
    
    if (result.size() > 10) {
        sb.append("\n...共 ").append(result.size()).append(" 条结果");
    }
    
    sb.append("\n\n使用 #监听 [wxid] 添加");
    sendText(replyTo, sb.toString());
}

// ==================== 清空配置 ====================

void clearConfig(String replyTo) {
    setString(KEY_TARGETS, "");
    setString(KEY_KEYWORDS, "");
    setString(KEY_ADMIN_WXID, "");
    setString(KEY_ALERT_GROUP, "");
    setBoolean(KEY_ENABLED, true);
    setString(KEY_NOTIFY_MODE, "toast");
    sendText(replyTo, "✅ 配置已清空");
}

// ==================== 帮助信息 ====================

void showHelp(String replyTo) {
    String help = "📖 关键词监听插件\n" +
        "════════════\n\n" +
        "【开关】\n" +
        "#开启 / #关闭\n" +
        "#状态 - 查看配置\n\n" +
        "【监听目标】\n" +
        "#监听 [名称/wxid] - 添加\n" +
        "#监听 全部 - 监听所有\n" +
        "#取消监听 [名称/wxid]\n" +
        "#监听列表\n\n" +
        "【关键词】\n" +
        "#关键词 [词] - 添加\n" +
        "#关键词 a|b|c - 批量添加\n" +
        "#删词 [词] - 删除\n" +
        "#词列表\n\n" +
        "【提醒设置】\n" +
        "#模式 [模式名] - 设置\n" +
        "#设管理员 / #取消管理员\n" +
        "#设提醒群 / #取消提醒群\n\n" +
        "【其他】\n" +
        "#查找 [名称] - 搜索\n" +
        "#清空 - 重置配置\n\n" +
        "════════════\n" +
        "提醒模式：\n" +
        "toast - 弹窗提示\n" +
        "log - 仅日志\n" +
        "admin - 发给管理员\n" +
        "self - 发给自己\n" +
        "group - 发到提醒群\n" +
        "at - 原群@发送者\n" +
        "all - 以上全部";
    
    sendText(replyTo, help);
}

// ==================== 辅助函数 ====================

String findWxid(String name) {
    // 搜索群聊
    List groups = getGroupList();
    if (groups != null) {
        for (Object obj : groups) {
            Map g = (Map) obj;
            String nick = (String) g.get("nickName");
            if (nick != null && nick.contains(name)) {
                return (String) g.get("userName");
            }
        }
    }
    
    // 搜索好友
    List friends = getFriendList();
    if (friends != null) {
        for (Object obj : friends) {
            Map f = (Map) obj;
            String nick = (String) f.get("nickName");
            String remark = (String) f.get("remark");
            if ((nick != null && nick.contains(name)) ||
                (remark != null && remark.contains(name))) {
                return (String) f.get("userName");
            }
        }
    }
    
    return null;
}

String getDisplayName(String wxid) {
    if (wxid == null || wxid.isEmpty()) return "未知";
    
    String remark = getUserRemark(wxid);
    if (remark != null && !remark.isEmpty()) return remark;
    
    String name = getUserName(wxid);
    if (name != null && !name.isEmpty()) return name;
    
    return wxid;
}

String getGroupMemberName(String groupId, String wxid) {
    String name = getUserName(groupId, wxid);
    if (name != null && !name.isEmpty()) return name;
    return getDisplayName(wxid);
}

String formatTime(long ts) {
    return new java.text.SimpleDateFormat("HH:mm:ss").format(new java.util.Date(ts));
}
