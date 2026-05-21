// Created by 雲上升
// Plugin: Cdn捕捉

void onCdnDownload(data) {
    String msg = "[ CDN 下载 ]\n";
    msg += "方法: " + data.methodName + "\n";
    msg += "业务: " + getFileTypeName(data.fileType) + " (" + data.fileType + ")\n";
    msg += "链接: " + data.url + "\n";
    msg += "路径: " + data.savePath + "\n";

    if (!data.aeskey.equals("")) {
        msg += "AES密钥: " + data.aeskey + "\n";
    }
    if (!data.snsCipherKey.equals("")) {
        msg += "SNS密钥: " + data.snsCipherKey + "\n";
    }

    if (!data.feedId.equals("")) {
        msg += "来源: 视频号(FeedId: " + data.feedId + ")\n";
    }
    
    String chatInfo = data.chatType == 1 ? "私聊" : (data.chatType == 2 ? "群聊" : "其他");
    msg += "场景: " + chatInfo + " | 预期大小: " + formatSize(data.expectFileSize) + "\n";
    
    if (data.isSilentTask)
        msg += "状态: 系统静默预加载\n";
    if (data.is_resume_task)
        msg += "状态: 断点续传中\n";
    
    msg += "---------------------------------";
    log(msg);
}

void onCdnUpload(data) {
    String msg = "[ CDN 上传 ]\n";
    msg += "方法: " + data.methodName + "\n";
    msg += "类型: " + getFileTypeName(data.fileType) + "\n";
    msg += "目标: " + data.toUser + "\n";
    msg += "路径: " + data.filePath + "\n";

    if (!data.thumbfilePath.equals("")) {
        msg += "缩略图: " + data.thumbfilePath + "\n";
    }

    msg += "文件MD5: " + data.filemd5 + "\n";
    
    if (!data.forwardFileid.equals("")) {
        msg += "转发识别: 该任务为转发/秒传\n";
        msg += "转发ID: " + data.forwardFileid + "\n";
        msg += "转发Key: " + data.forwardAeskey + "\n";
    }
    if (data.trySafeCdn)
        msg += "安全: 已开启 SafeCDN 模式\n";
    if (data.bizSnsPreUpload)
        msg += "状态: 朋友圈资源预上传\n";
    
    msg += "---------------------------------";
    log(msg);
}

String getFileTypeName(int type) {
    switch (type) {
        case 1: return "高清图";
        case 2: return "普通图";
        case 3: return "缩略图";
        case 4: return "视频";
        case 5: return "通用文件";
        case 6: return "小视频";
        case 15: return "聊天语音";
        case 20201: return "视频号图片";
        case 20202: return "朋友圈视频";
        case 20302: return "视频号视频";
        case 20303: return "APP文件";
        default: return "未知类型";
    }
}

String formatSize(long size) {
    if (size <= 0) return "未知";
    if (size < 1024) return size + " B";
    if (size < 1024 * 1024) return (size / 1024) + " KB";
    return String.format("%.2f MB", (double)size / (1024 * 1024));
}
