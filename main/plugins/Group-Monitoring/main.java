// ==================== 群成员监控 v2.0.0 ====================
// 实时监控：基于系统消息检测进退群

String KEY_ENABLED = "gm_enabled"
String PRE = "gm_watch_"
String KEY_NOTIFY = "gm_notify"
String KEY_AT_JOIN = "gm_at_join"

onLoad() {
    if (!configContains(KEY_ENABLED)) {
        setBoolean(KEY_ENABLED, false)
        setBoolean(KEY_NOTIFY, true)
        setBoolean(KEY_AT_JOIN, false)
    }
    loadJava("views/helper")
    loadJava("views/ui")
}

onUnload() {
}

void onMsg(Object msg) {
    String content = msg.content
    if (content == null || content.isEmpty()) return
    
    // 检查是否包含群成员变动的 XML 特征
    if (!content.contains("sysmsgtemplate")) return
    
    if (!msg.isGroupChat()) return
    
    // 检查总开关
    boolean enabled = getBoolean(KEY_ENABLED, false)
    boolean groupWatched = getBoolean(PRE + msg.talker, false)
    
    if (!enabled) {
        return
    }
    
    if (!groupWatched) {
        return
    }
    
    // 处理成员变动
    handleMemberChange(msg.talker, content)
}

void onMsgMenu(Object msg) {
    addMenuItem("群监控", "", () -> { showMainPanel(); })
}
