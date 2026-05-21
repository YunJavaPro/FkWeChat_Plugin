// 入口文件，只负责加载模块和分发指令
loadJava("api/http");
loadJava("api/logo");

onMsg(msg) {
    if (!msg.isText()) return;
    String sender = msg.sendTalker;
    if (!sender.equals(myWxId)) return;
    String cmd = msg.content.trim();
    // 多指令支持：logo / lg
    if (cmd.equals("logo") || cmd.equals("lg")) {
        logo(msg.talker);
    }
}