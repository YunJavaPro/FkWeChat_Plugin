// Created by 雲上升
// Plugin: 快捷操作

kick(talker, atList) {
   deleteGroupMember(talker, atList)
   toast("已执行")
}

onMsg(msg) {
    content = msg.content
    if (msg.sendTalker == myWxId) {
        if(content.startsWith("踢")
          && !msg.atList.isEmpty()) {
            kick(msg.talker, msg.atList)
        }
    }
}

onMsgMenu(msg) {
   if(msg.isGroupChat() && !msg.isSend()) {
        addMenuItem("踢", "icon/kick.png", () -> {
            kick(msg.talker, msg.sendTalker)
        })
   }
}