loadJava("api/http")
loadJava("api/music")

onMsg(msg) {
    content = msg.content
    if (msg.sendTalker.equals(myWxId)) {
        if (content.startsWith("点歌")) {
            music(msg.talker, content.substring(2))
        }
   }
}