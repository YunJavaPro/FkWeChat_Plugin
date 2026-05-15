// Created by 吃不香菜
// Plugin: 关键提醒

import android.app.*;
import android.content.*;
import android.os.*;
import android.view.*;
import android.widget.*;
import java.text.*;
import java.util.*;

// ===== 全局配置 =====
int enabled = 1;
int groupEnabled = 1;
int alertSelfSend = 0;
int alertInterval = 0; // 秒，0=每次都提醒

int keywordEnabled = 1;
int targetEnabled = 1;

String targetAlertTitle = "特别关注提醒";
String targetAlertText = "你关注的人发消息了";

List categories = new ArrayList();     // Map{name,title,keywords}
List targetTalkers = new ArrayList();  // 特别关注 talker 列表

Map lastAlertMap = new HashMap();

// ===== 日志 =====
void logger(String s) {
    try { log("[关键提醒] " + s); return; } catch (Throwable e) {}
    try { print("[关键提醒] " + s); return; } catch (Throwable e) {}
}

// ===== 基础工具 =====
String safeStr(Object v) {
    if (v == null) return "";
    return String.valueOf(v).trim();
}

int toInt(Object v, int d) {
    try {
        if (v instanceof Number) return ((Number) v).intValue();
        String s = safeStr(v);
        if (s.length() == 0) return d;
        return Integer.parseInt(s);
    } catch (Throwable e) {
        return d;
    }
}

String fkField(Object obj, String name) {
    try {
        if (obj == null) return "";
        java.lang.reflect.Field f = obj.getClass().getDeclaredField(name);
        f.setAccessible(true);
        Object v = f.get(obj);
        return safeStr(v);
    } catch (Throwable e) {
        return "";
    }
}

String tryMethodStr(Object obj, String name) {
    try {
        if (obj == null) return "";
        Object v = obj.getClass().getMethod(name).invoke(obj);
        return safeStr(v);
    } catch (Throwable e) {
        return "";
    }
}

boolean readIsSend(Object msg) {
    try {
        Object v = msg.getClass().getMethod("isSend").invoke(msg);
        if (v instanceof Boolean) return ((Boolean) v).booleanValue();
        if (v instanceof Number) return ((Number) v).intValue() == 1;
    } catch (Throwable e) {}

    String iv = fkField(msg, "isSend");
    if ("true".equalsIgnoreCase(iv)) return true;
    if ("1".equals(iv)) return true;
    return false;
}

String readTalker(Object msg) {
    String v = fkField(msg, "talker");
    if (v.length() > 0) return v;

    v = tryMethodStr(msg, "getTalker");
    if (v.length() > 0) return v;

    return "";
}

String readContent(Object msg) {
    String[] fds = new String[]{"content", "rawContent", "text", "msg"};
    for (int i = 0; i < fds.length; i++) {
        String v = fkField(msg, fds[i]);
        if (v.length() > 0) return v;
    }
    return "";
}

boolean isGroupChat(String talker) {
    return talker != null && talker.endsWith("@chatroom");
}

// ===== 污染过滤 =====
boolean isPolluted(String s) {
    s = safeStr(s);
    if (s.length() == 0) return true;

    String low = s.toLowerCase();

    if (s.startsWith("/")) return true;
    if (low.indexOf("/storage/") >= 0) return true;
    if (low.indexOf("/android/") >= 0) return true;
    if (low.indexOf("com.tencent.mm") >= 0) return true;
    if (low.indexOf("micromsg") >= 0) return true;

    if (low.endsWith(".mp4")) return true;
    if (low.endsWith(".jpg")) return true;
    if (low.endsWith(".jpeg")) return true;
    if (low.endsWith(".png")) return true;
    if (low.endsWith(".gif")) return true;
    if (low.endsWith(".webp")) return true;
    if (low.endsWith(".mp3")) return true;
    if (low.endsWith(".amr")) return true;
    if (low.endsWith(".silk")) return true;
    if (low.endsWith(".json")) return true;
    if (low.endsWith(".xml")) return true;
    if (low.endsWith(".db")) return true;

    return false;
}

boolean validTalker(String talker) {
    talker = safeStr(talker);
    if (talker.length() == 0) return false;
    if (isPolluted(talker)) return false;
    return true;
}

boolean validName(String name) {
    name = safeStr(name);
    if (name.length() == 0) return false;
    if (isPolluted(name)) return false;
    return true;
}

boolean validKeyword(String kw) {
    kw = safeStr(kw);
    if (kw.length() == 0) return false;
    if (kw.length() > 80) return false;
    if (isPolluted(kw)) return false;
    return true;
}

// ===== 昵称读取 =====
String getDisplayName(String talker) {
    try {
        if (talker == null || talker.length() == 0) return "未知";

        String remark = "";
        try { remark = getUserRemark(talker); } catch (Throwable e) {}
        if (remark != null && remark.length() > 0 && validName(remark)) return remark;

        String name = "";
        try { name = getUserName(talker); } catch (Throwable e) {}
        if (name != null && name.length() > 0 && validName(name)) return name;

        return talker;
    } catch (Throwable e) {
        return talker;
    }
}

String getSenderName(Object msg, String talker) {
    try {
        String sendTalker = fkField(msg, "sendTalker");
        if (sendTalker.length() > 0 && !sendTalker.equals(talker)) {
            return getDisplayName(sendTalker);
        }

        String displayName = tryMethodStr(msg, "getDisplayName");
        if (displayName.length() > 0 && !displayName.equals(talker) && validName(displayName)) {
            return displayName;
        }

        return getDisplayName(talker);
    } catch (Throwable e) {
        return getDisplayName(talker);
    }
}

// ===== 分类默认值 =====
Map makeCat(String name, String title, String[] kws) {
    Map cat = new HashMap();
    cat.put("name", name);
    cat.put("title", title);

    List list = new ArrayList();
    for (int i = 0; i < kws.length; i++) {
        String kw = safeStr(kws[i]);
        if (validKeyword(kw) && !list.contains(kw)) list.add(kw);
    }

    cat.put("keywords", list);
    return cat;
}

void initDefaultCategories() {
    categories.clear();
    categories.add(makeCat("紧急", "⚠️ 紧急消息", new String[]{"紧急", "急急急", "十万火急", "救命"}));
    categories.add(makeCat("报错", "❌ 报错提醒", new String[]{"报错", "error", "崩溃", "闪退", "异常"}));
    categories.add(makeCat("文件", "📁 文件提醒", new String[]{"文件", "视频", "图片", "下载"}));
    categories.add(makeCat("刷屏", "🔁 刷屏提醒", new String[]{"刷屏", "111", "222", "333"}));
}

// ===== 配置保存读取 =====
void saveConfig() {
    try {
        android.content.SharedPreferences sp = hostContext.getSharedPreferences("fk_alert_plus", 0);
        android.content.SharedPreferences.Editor ed = sp.edit();

        ed.putInt("enabled", enabled);
        ed.putInt("groupEnabled", groupEnabled);
        ed.putInt("alertSelfSend", alertSelfSend);
        ed.putInt("alertInterval", alertInterval);
        ed.putInt("keywordEnabled", keywordEnabled);
        ed.putInt("targetEnabled", targetEnabled);
        ed.putString("targetAlertTitle", targetAlertTitle);
        ed.putString("targetAlertText", targetAlertText);

        org.json.JSONArray catsArr = new org.json.JSONArray();

        for (int i = 0; i < categories.size(); i++) {
            try {
                Map cat = (Map) categories.get(i);
                String name = safeStr(cat.get("name"));
                String title = safeStr(cat.get("title"));
                List kws = (List) cat.get("keywords");

                if (name.length() == 0) continue;
                if (title.length() == 0) title = name;

                org.json.JSONObject obj = new org.json.JSONObject();
                obj.put("name", name);
                obj.put("title", title);

                org.json.JSONArray kwArr = new org.json.JSONArray();

                if (kws != null) {
                    for (int k = 0; k < kws.size(); k++) {
                        String kw = safeStr(kws.get(k));
                        if (validKeyword(kw)) kwArr.put(kw);
                    }
                }

                obj.put("keywords", kwArr);
                catsArr.put(obj);
            } catch (Throwable e) {}
        }

        ed.putString("categories", catsArr.toString());

        org.json.JSONArray targetArr = new org.json.JSONArray();
        for (int i = 0; i < targetTalkers.size(); i++) {
            String t = safeStr(targetTalkers.get(i));
            if (validTalker(t)) targetArr.put(t);
        }
        ed.putString("targetTalkers", targetArr.toString());

        ed.apply();

    } catch (Throwable e) {
        logger("saveConfig异常: " + e);
    }
}

void loadConfig() {
    try {
        android.content.SharedPreferences sp = hostContext.getSharedPreferences("fk_alert_plus", 0);

        enabled = sp.getInt("enabled", 1);
        groupEnabled = sp.getInt("groupEnabled", 1);
        alertSelfSend = sp.getInt("alertSelfSend", 0);
        alertInterval = sp.getInt("alertInterval", 0);
        keywordEnabled = sp.getInt("keywordEnabled", 1);
        targetEnabled = sp.getInt("targetEnabled", 1);
        targetAlertTitle = sp.getString("targetAlertTitle", "特别关注提醒");
        targetAlertText = sp.getString("targetAlertText", "你关注的人发消息了");

        categories.clear();

        String catsJson = sp.getString("categories", "");
        if (catsJson.length() > 0) {
            org.json.JSONArray arr = new org.json.JSONArray(catsJson);
            for (int i = 0; i < arr.length(); i++) {
                org.json.JSONObject obj = arr.getJSONObject(i);

                Map cat = new HashMap();
                cat.put("name", obj.optString("name", ""));
                cat.put("title", obj.optString("title", ""));

                List kwList = new ArrayList();
                org.json.JSONArray kws = obj.optJSONArray("keywords");
                if (kws != null) {
                    for (int j = 0; j < kws.length(); j++) {
                        String kw = kws.optString(j, "");
                        if (validKeyword(kw) && !kwList.contains(kw)) kwList.add(kw);
                    }
                }

                cat.put("keywords", kwList);

                if (safeStr(cat.get("name")).length() > 0) categories.add(cat);
            }
        }

        if (categories.isEmpty()) {
            initDefaultCategories();
        }

        targetTalkers.clear();

        String targetJson = sp.getString("targetTalkers", "");
        if (targetJson.length() > 0) {
            org.json.JSONArray arr = new org.json.JSONArray(targetJson);
            for (int i = 0; i < arr.length(); i++) {
                String t = arr.optString(i, "");
                if (validTalker(t) && !targetTalkers.contains(t)) targetTalkers.add(t);
            }
        }

        saveConfig();

    } catch (Throwable e) {
        logger("loadConfig异常: " + e);
        initDefaultCategories();
    }
}

// ===== 冷却 =====
boolean hitCooldown(String key) {
    if (alertInterval <= 0) return false;

    long now = System.currentTimeMillis();
    long last = 0L;

    try {
        Object v = lastAlertMap.get(key);
        if (v instanceof Number) last = ((Number) v).longValue();
        else if (v != null) last = Long.parseLong(String.valueOf(v));
    } catch (Throwable e) {}

    if (now - last < alertInterval * 1000L) return true;

    lastAlertMap.put(key, Long.valueOf(now));
    return false;
}

// ===== 通知跳转 =====
Intent[] buildIntents(String talker) {
    Intent home = null;
    Intent chat = null;

    try {
        home = new Intent();
        home.setComponent(new ComponentName("com.tencent.mm", "com.tencent.mm.ui.LauncherUI"));
        home.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
    } catch (Throwable e) {}

    try {
        chat = new Intent();
        chat.setComponent(new ComponentName("com.tencent.mm", "com.tencent.mm.ui.chatting.ChattingUI"));
        chat.putExtra("Chat_User", talker);
        chat.putExtra("Chat_Mode", 1);
        chat.putExtra("finish_direct", true);
        chat.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
    } catch (Throwable e) {}

    if (home != null && chat != null) return new Intent[]{home, chat};
    if (chat != null) return new Intent[]{chat};
    if (home != null) return new Intent[]{home};
    return null;
}

void sendNotify(String title, String channelTag, String talker, String sender, String content) {
    try {
        NotificationManager nm = (NotificationManager) hostContext.getSystemService(Context.NOTIFICATION_SERVICE);
        String channelId = "fk_alert_plus_" + channelTag;

        if (Build.VERSION.SDK_INT >= 26) {
            NotificationChannel ch = nm.getNotificationChannel(channelId);
            if (ch == null) {
                ch = new NotificationChannel(channelId, channelTag, NotificationManager.IMPORTANCE_HIGH);
                ch.enableLights(true);
                ch.enableVibration(true);
                ch.setLockscreenVisibility(Notification.VISIBILITY_PUBLIC);
                nm.createNotificationChannel(ch);
            }
        }

        Notification.Builder b;
        if (Build.VERSION.SDK_INT >= 26) b = new Notification.Builder(hostContext, channelId);
        else b = new Notification.Builder(hostContext);

        String body = sender + ": " + content;
        if (body.length() > 100) body = body.substring(0, 100) + "...";

        String timeStr = new SimpleDateFormat("HH:mm:ss", Locale.getDefault()).format(new Date());

        b.setContentTitle(title)
         .setContentText(body)
         .setStyle(new Notification.BigTextStyle().bigText(body))
         .setWhen(System.currentTimeMillis())
         .setShowWhen(true)
         .setAutoCancel(true)
         .setPriority(Notification.PRIORITY_HIGH)
         .setDefaults(Notification.DEFAULT_ALL)
         .setSubText(timeStr);

        try { b.setSmallIcon(android.R.drawable.ic_dialog_alert); } catch (Throwable e) {}

        Intent[] intents = buildIntents(talker);
        if (intents != null && intents.length > 0) {
            b.setContentIntent(PendingIntent.getActivities(
                hostContext,
                (int)(System.currentTimeMillis() & 0x7FFFFFFF),
                intents,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
            ));
        }

        nm.notify((int)(System.currentTimeMillis() & 0x7FFFFFFF), b.build());

    } catch (Throwable e) {
        logger("通知失败: " + e);
        try { notify(title, content); } catch (Throwable ee) {}
    }
}

// ===== 命中判断 =====
boolean isTargetTalker(String talker) {
    talker = safeStr(talker);
    if (talker.length() == 0) return false;

    for (int i = 0; i < targetTalkers.size(); i++) {
        String one = safeStr(targetTalkers.get(i));
        if (one.equals(talker)) return true;
    }

    return false;
}

String findKeywordCategory(String content) {
    try {
        String lower = safeStr(content).toLowerCase();
        if (lower.length() == 0) return "";

        for (int i = 0; i < categories.size(); i++) {
            Map cat = (Map) categories.get(i);
            List kws = (List) cat.get("keywords");
            if (kws == null) continue;

            for (int k = 0; k < kws.size(); k++) {
                String kw = safeStr(kws.get(k));
                if (kw.length() == 0) continue;
                if (lower.indexOf(kw.toLowerCase()) >= 0) {
                    return safeStr(cat.get("name"));
                }
            }
        }
    } catch (Throwable e) {
        logger("findKeywordCategory异常: " + e);
    }

    return "";
}

Map getCategoryByName(String name) {
    try {
        name = safeStr(name);
        for (int i = 0; i < categories.size(); i++) {
            Map cat = (Map) categories.get(i);
            if (name.equals(safeStr(cat.get("name")))) return cat;
        }
    } catch (Throwable e) {}
    return null;
}

// ===== 消息处理核心 =====
void handleMsgCore(Object msg, String talker, String content, boolean isSelf) {
    try {
        if (enabled != 1) return;
        if (!validTalker(talker)) return;
        if (content == null || content.length() == 0) return;

        String c = safeStr(content);
        if (c.length() == 0) return;

        // 富消息/路径污染过滤
        if (isPolluted(c)) return;
        if (c.startsWith("<msg") || c.startsWith("<xml") || c.startsWith("<appmsg")) return;

        if (isSelf && alertSelfSend != 1) return;
        if (isGroupChat(talker) && groupEnabled != 1) return;

        String sender = getSenderName(msg, talker);

        // 1. 特别关注联系人提醒
        if (targetEnabled == 1 && isTargetTalker(talker)) {
            String key = "target_" + talker;
            if (!hitCooldown(key)) {
                sendNotify(targetAlertTitle, "特别关注", talker, sender, targetAlertText);
                logger("特别关注命中: " + talker);
            }
        }

        // 2. 关键词提醒
        if (keywordEnabled == 1) {
            String catName = findKeywordCategory(c);
            if (catName.length() > 0) {
                Map cat = getCategoryByName(catName);
                String title = catName;
                if (cat != null) title = safeStr(cat.get("title"));
                if (title.length() == 0) title = catName;

                String key = "kw_" + talker + "_" + catName;
                if (!hitCooldown(key)) {
                    sendNotify(title, "关键词-" + catName, talker, sender, c);
                    logger("关键词命中: " + catName + " | " + sender);
                }
            }
        }

    } catch (Throwable e) {
        logger("handleMsgCore异常: " + e);
    }
}

// ===== Fk 消息入口 =====
void onMsg(Object msg) {
    try {
        String talker = readTalker(msg);
        String content = readContent(msg);
        boolean isSelf = readIsSend(msg);

        handleMsgCore(msg, talker, content, isSelf);

    } catch (Throwable e) {
        logger("onMsg异常: " + e);
    }
}

// ===== UI工具 =====
void runUi(final Activity a, final Runnable r) {
    try {
        if (a != null) {
            a.runOnUiThread(new Runnable() {
                public void run() {
                    try { r.run(); } catch (Throwable e) { logger("runUi内部异常: " + e); }
                }
            });
        } else {
            r.run();
        }
    } catch (Throwable e) {
        logger("runUi异常: " + e);
    }
}

Button makeBtn(Activity a, String text, final Runnable r) {
    Button b = new Button(a);
    b.setText(text);
    try { b.setAllCaps(false); } catch (Throwable e) {}

    b.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            try { r.run(); } catch (Throwable e) { logger("按钮异常: " + e); }
        }
    });

    return b;
}

String joinList(List list, String sep) {
    StringBuilder sb = new StringBuilder();
    try {
        for (int i = 0; i < list.size(); i++) {
            String s = safeStr(list.get(i));
            if (s.length() == 0) continue;
            if (sb.length() > 0) sb.append(sep);
            sb.append(s);
        }
    } catch (Throwable e) {}
    return sb.toString();
}

List parseCsv(String text) {
    List out = new ArrayList();
    try {
        String[] arr = safeStr(text).split("[,，\\s]+");
        for (int i = 0; i < arr.length; i++) {
            String one = safeStr(arr[i]);
            if (one.length() > 0 && !out.contains(one)) out.add(one);
        }
    } catch (Throwable e) {}
    return out;
}

// ===== 主设置 UI =====
void showSettings(final Activity a) {
    try {
        if (a == null) return;

        runUi(a, new Runnable() {
            public void run() {
                try {
                    ScrollView sv = new ScrollView(a);
                    LinearLayout root = new LinearLayout(a);
                    root.setOrientation(LinearLayout.VERTICAL);
                    root.setPadding(36, 36, 36, 36);
                    sv.addView(root);

                    final TextView status = new TextView(a);
                    status.setText(buildStatusText());
                    status.setTextSize(15);
                    status.setPadding(0, 0, 0, 20);
                    root.addView(status);

                    root.addView(makeBtn(a, "总开关: " + (enabled == 1 ? "开" : "关"), new Runnable() {
                        public void run() {
                            enabled = enabled == 1 ? 0 : 1;
                            saveConfig();
                            status.setText(buildStatusText());
                        }
                    }));

                    root.addView(makeBtn(a, "关键词提醒: " + (keywordEnabled == 1 ? "开" : "关"), new Runnable() {
                        public void run() {
                            keywordEnabled = keywordEnabled == 1 ? 0 : 1;
                            saveConfig();
                            status.setText(buildStatusText());
                        }
                    }));

                    root.addView(makeBtn(a, "特别关注提醒: " + (targetEnabled == 1 ? "开" : "关"), new Runnable() {
                        public void run() {
                            targetEnabled = targetEnabled == 1 ? 0 : 1;
                            saveConfig();
                            status.setText(buildStatusText());
                        }
                    }));

                    root.addView(makeBtn(a, "群聊提醒: " + (groupEnabled == 1 ? "开" : "关"), new Runnable() {
                        public void run() {
                            groupEnabled = groupEnabled == 1 ? 0 : 1;
                            saveConfig();
                            status.setText(buildStatusText());
                        }
                    }));

                    root.addView(makeBtn(a, "自己消息提醒: " + (alertSelfSend == 1 ? "开" : "关"), new Runnable() {
                        public void run() {
                            alertSelfSend = alertSelfSend == 1 ? 0 : 1;
                            saveConfig();
                            status.setText(buildStatusText());
                        }
                    }));

                    root.addView(makeBtn(a, "重复间隔: " + (alertInterval == 0 ? "每次提醒" : alertInterval + "秒"), new Runnable() {
                        public void run() {
                            showIntervalUI(a);
                        }
                    }));

                    root.addView(makeBtn(a, "关键词分类管理", new Runnable() {
                        public void run() {
                            showCategoryListUI(a);
                        }
                    }));

                    root.addView(makeBtn(a, "特别关注联系人", new Runnable() {
                        public void run() {
                            showTargetTalkerUI(a);
                        }
                    }));

                    root.addView(makeBtn(a, "特别关注提醒文案", new Runnable() {
                        public void run() {
                            showTargetTextUI(a);
                        }
                    }));

                    new AlertDialog.Builder(a)
                        .setTitle("关键提醒设置")
                        .setView(sv)
                        .setNegativeButton("关闭", null)
                        .show();

                } catch (Throwable e) {
                    logger("showSettings UI异常: " + e);
                }
            }
        });

    } catch (Throwable e) {
        logger("showSettings异常: " + e);
    }
}

String buildStatusText() {
    String text = "";
    text += "总开关: " + (enabled == 1 ? "开" : "关") + "\n";
    text += "关键词提醒: " + (keywordEnabled == 1 ? "开" : "关") + "\n";
    text += "特别关注提醒: " + (targetEnabled == 1 ? "开" : "关") + "\n";
    text += "群聊提醒: " + (groupEnabled == 1 ? "开" : "关") + "\n";
    text += "自己消息: " + (alertSelfSend == 1 ? "提醒" : "不提醒") + "\n";
    text += "重复间隔: " + (alertInterval == 0 ? "每次提醒" : alertInterval + "秒") + "\n";
    text += "关键词分类: " + categories.size() + "个\n";
    text += "特别关注: " + targetTalkers.size() + "个\n";
    return text;
}

// ===== 重复间隔 UI =====
void showIntervalUI(final Activity a) {
    try {
        final String[] items = new String[]{"每次都提醒", "10秒", "30秒", "60秒", "300秒"};
        final int[] values = new int[]{0, 10, 30, 60, 300};

        int cur = 0;
        for (int i = 0; i < values.length; i++) {
            if (alertInterval == values[i]) cur = i;
        }

        final int[] selected = new int[]{cur};

        new AlertDialog.Builder(a)
            .setTitle("重复提醒间隔")
            .setSingleChoiceItems(items, cur, new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int which) {
                    selected[0] = which;
                }
            })
            .setPositiveButton("保存", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int w) {
                    alertInterval = values[selected[0]];
                    saveConfig();
                }
            })
            .setNegativeButton("取消", null)
            .show();

    } catch (Throwable e) {
        logger("showIntervalUI异常: " + e);
    }
}

// ===== 恢复默认分类 =====
void resetDefaultCategories() {
    try {
        categories.clear();
        categories.add(makeCat("紧急", "⚠️ 紧急消息", new String[]{"紧急", "急急急", "十万火急", "救命"}));
        categories.add(makeCat("报错", "❌ 报错提醒", new String[]{"报错", "error", "崩溃", "闪退", "异常"}));
        categories.add(makeCat("文件", "📁 文件提醒", new String[]{"文件", "视频", "图片", "下载"}));
        categories.add(makeCat("刷屏", "🔁 刷屏提醒", new String[]{"刷屏", "111", "222", "333"}));
        categories.add(makeCat("试验", "🧪 试验提醒", new String[]{"一次性", "乱码", "污染", "搞不了"}));
        saveConfig();
    } catch (Throwable e) {
        logger("resetDefaultCategories异常: " + e);
    }
}

// ===== 特别关注联系人 =====
void showTargetTalkerUI(final Activity a) {
    try {
        List friends = null;

        try {
            friends = getFriendList();
        } catch (Throwable e) {
            friends = null;
            logger("getFriendList失败: " + e);
        }

        if (friends == null || friends.isEmpty()) {
            Toast.makeText(a, "联系人列表为空", Toast.LENGTH_SHORT).show();
            return;
        }

        final List allIds = new ArrayList();
        final List allNames = new ArrayList();

        for (int i = 0; i < friends.size(); i++) {
            try {
                Object obj = friends.get(i);
                if (!(obj instanceof HashMap)) continue;

                HashMap f = (HashMap) obj;

                String wxid = safeStr(f.get("username"));
                if (!validTalker(wxid)) continue;

                String nick = safeStr(f.get("nickname"));
                String remark = safeStr(f.get("conRemark"));

                if (!validName(nick)) nick = "";
                if (!validName(remark)) remark = "";

                String label = wxid;

                if (remark.length() > 0) {
                    if (nick.length() > 0) {
                        label = nick + "(" + remark + ")";
                    } else {
                        label = remark;
                    }
                } else if (nick.length() > 0) {
                    label = nick;
                }

                allIds.add(wxid);
                allNames.add(label);

            } catch (Throwable e) {
                logger("解析好友异常: " + e);
            }
        }

        if (allIds.isEmpty()) {
            Toast.makeText(a, "未能解析好友", Toast.LENGTH_SHORT).show();
            return;
        }

        final java.util.HashSet selected = new java.util.HashSet();

        for (int i = 0; i < targetTalkers.size(); i++) {
            String id = safeStr(targetTalkers.get(i));
            if (validTalker(id)) selected.add(id);
        }

        LinearLayout root = new LinearLayout(a);
        root.setOrientation(LinearLayout.VERTICAL);
        root.setPadding(20, 20, 20, 20);

        TextView tip = new TextView(a);
        tip.setText("特别关注联系人\n搜索后点选联系人，保存后生效。");
        tip.setTextSize(14);
        tip.setPadding(0, 0, 0, 10);
        root.addView(tip);

        final EditText search = new EditText(a);
        search.setHint("搜索好友昵称 / wxid");
        search.setSingleLine(true);
        root.addView(search);

        final TextView count = new TextView(a);
        count.setTextSize(14);
        count.setPadding(0, 10, 0, 10);
        root.addView(count);

        final ListView listView = new ListView(a);
        listView.setChoiceMode(ListView.CHOICE_MODE_MULTIPLE);
        root.addView(listView);

        final List visibleIds = new ArrayList();
        final List visibleNames = new ArrayList();

        final Runnable[] refresh = new Runnable[1];

        refresh[0] = new Runnable() {
            public void run() {
                try {
                    visibleIds.clear();
                    visibleNames.clear();

                    String kw = search.getText().toString().trim().toLowerCase();

                    ArrayList display = new ArrayList();

                    for (int i = 0; i < allIds.size(); i++) {
                        String id = safeStr(allIds.get(i));
                        String name = safeStr(allNames.get(i));

                        String lowId = id.toLowerCase();
                        String lowName = name.toLowerCase();

                        if (kw.length() > 0 && lowId.indexOf(kw) < 0 && lowName.indexOf(kw) < 0) {
                            continue;
                        }

                        visibleIds.add(id);
                        visibleNames.add(name);

                        String showName = name;
                        if (showName.length() > 28) {
                            showName = showName.substring(0, 28) + "...";
                        }

                        display.add(showName + "\n" + id);
                    }

                    ArrayAdapter adapter = new ArrayAdapter(
                        a,
                        android.R.layout.simple_list_item_multiple_choice,
                        display
                    );

                    listView.setAdapter(adapter);

                    for (int i = 0; i < visibleIds.size(); i++) {
                        String id = safeStr(visibleIds.get(i));
                        listView.setItemChecked(i, selected.contains(id));
                    }

                    count.setText(
                        "总计 " + allIds.size() +
                        " 人 / 当前显示 " + visibleIds.size() +
                        " 人 / 已选 " + selected.size() + " 人"
                    );

                } catch (Throwable e) {
                    logger("刷新特别关注搜索列表异常: " + e);
                }
            }
        };

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            public void onItemClick(AdapterView parent, View view, int position, long id) {
                try {
                    if (position < 0 || position >= visibleIds.size()) return;

                    String wxid = safeStr(visibleIds.get(position));

                    if (selected.contains(wxid)) {
                        selected.remove(wxid);
                    } else {
                        selected.add(wxid);
                    }

                    listView.setItemChecked(position, selected.contains(wxid));

                    count.setText(
                        "总计 " + allIds.size() +
                        " 人 / 当前显示 " + visibleIds.size() +
                        " 人 / 已选 " + selected.size() + " 人"
                    );

                } catch (Throwable e) {
                    logger("特别关注点选异常: " + e);
                }
            }
        });

        search.addTextChangedListener(new android.text.TextWatcher() {
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}

            public void onTextChanged(CharSequence s, int start, int before, int count) {
                try {
                    refresh[0].run();
                } catch (Throwable e) {}
            }

            public void afterTextChanged(android.text.Editable s) {}
        });

        final AlertDialog dialog = new AlertDialog.Builder(a)
            .setTitle("特别关注联系人")
            .setView(root)
            .setPositiveButton("保存", null)
            .setNeutralButton("清空", null)
            .setNegativeButton("取消", null)
            .create();

        dialog.setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                try {
                    refresh[0].run();

                    dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(new View.OnClickListener() {
                        public void onClick(View v) {
                            try {
                                targetTalkers.clear();

                                Iterator it = selected.iterator();
                                while (it.hasNext()) {
                                    String one = safeStr(it.next());
                                    if (validTalker(one) && !targetTalkers.contains(one)) {
                                        targetTalkers.add(one);
                                    }
                                }

                                saveConfig();

                                Toast.makeText(
                                    a,
                                    "已保存特别关注: " + targetTalkers.size() + "人",
                                    Toast.LENGTH_SHORT
                                ).show();

                                dialog.dismiss();

                            } catch (Throwable e) {
                                logger("保存特别关注异常: " + e);
                                Toast.makeText(a, "保存失败: " + e.getMessage(), Toast.LENGTH_SHORT).show();
                            }
                        }
                    });

                    dialog.getButton(AlertDialog.BUTTON_NEUTRAL).setOnClickListener(new View.OnClickListener() {
                        public void onClick(View v) {
                            try {
                                selected.clear();
                                targetTalkers.clear();
                                saveConfig();
                                refresh[0].run();
                                Toast.makeText(a, "已清空特别关注", Toast.LENGTH_SHORT).show();
                            } catch (Throwable e) {
                                logger("清空特别关注异常: " + e);
                            }
                        }
                    });

                } catch (Throwable e) {
                    logger("特别关注弹窗onShow异常: " + e);
                }
            }
        });

        dialog.show();

    } catch (Throwable e) {
        logger("showTargetTalkerUI异常: " + e);
        try {
            Toast.makeText(a, "打开失败: " + e.getMessage(), Toast.LENGTH_SHORT).show();
        } catch (Throwable ee) {}
    }
}

// ===== 恢复默认分类 =====
void resetDefaultCategories() {
    try {
        categories.clear();
        categories.add(makeCat("紧急", "⚠️ 紧急消息", new String[]{"紧急", "急急急", "十万火急", "救命"}));
        categories.add(makeCat("报错", "❌ 报错提醒", new String[]{"报错", "error", "崩溃", "闪退", "异常"}));
        categories.add(makeCat("文件", "📁 文件提醒", new String[]{"文件", "视频", "图片", "下载"}));
        categories.add(makeCat("刷屏", "🔁 刷屏提醒", new String[]{"刷屏", "111", "222", "333"}));
        categories.add(makeCat("试验", "🧪 试验提醒", new String[]{"一次性", "乱码", "污染", "搞不了"}));
        saveConfig();
    } catch (Throwable e) {
        logger("resetDefaultCategories异常: " + e);
    }
}

// ===== 关键词分类列表 =====
void showCategoryListUI(final Activity a) {
    try {
        if (a == null) return;

        final String[] items = new String[categories.size()];
        for (int i = 0; i < categories.size(); i++) {
            Map cat = (Map) categories.get(i);
            String name = safeStr(cat.get("name"));
            List kws = (List) cat.get("keywords");
            String kwText = joinList(kws, ", ");
            items[i] = name + "  |  " + kwText;
        }

        new AlertDialog.Builder(a)
            .setTitle("关键词分类")
            .setItems(items, new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int which) {
                    showCategoryActionUI(a, which);
                }
            })
            .setPositiveButton("新增分类", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int w) {
                    showEditCategoryUI(a, -1);
                }
            })
            .setNeutralButton("恢复默认", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int w) {
                    new AlertDialog.Builder(a)
                        .setTitle("恢复默认分类")
                        .setMessage("将清空当前所有分类并恢复默认分类，是否继续？")
                        .setPositiveButton("恢复", new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dd, int ww) {
                                resetDefaultCategories();
                                Toast.makeText(a, "已恢复默认分类", Toast.LENGTH_SHORT).show();
                            }
                        })
                        .setNegativeButton("取消", null)
                        .show();
                }
            })
            .setNegativeButton("关闭", null)
            .show();

    } catch (Throwable e) {
        logger("showCategoryListUI异常: " + e);
    }
}

// ===== 分类操作：编辑 / 删除 =====
void showCategoryActionUI(final Activity a, final int idx) {
    try {
        if (idx < 0 || idx >= categories.size()) return;

        Map cat = (Map) categories.get(idx);
        final String catName = safeStr(cat.get("name"));

        new AlertDialog.Builder(a)
            .setTitle(catName)
            .setItems(new String[]{"编辑", "删除"}, new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int which) {
                    if (which == 0) {
                        showEditCategoryUI(a, idx);
                    } else if (which == 1) {
                        new AlertDialog.Builder(a)
                            .setTitle("删除分类")
                            .setMessage("确定删除分类：" + catName + " ?")
                            .setPositiveButton("删除", new DialogInterface.OnClickListener() {
                                public void onClick(DialogInterface dd, int w) {
                                    try {
                                        if (idx >= 0 && idx < categories.size()) {
                                            categories.remove(idx);
                                            saveConfig();
                                            Toast.makeText(a, "已删除分类", Toast.LENGTH_SHORT).show();
                                        }
                                    } catch (Throwable e) {
                                        logger("删除分类异常: " + e);
                                    }
                                }
                            })
                            .setNegativeButton("取消", null)
                            .show();
                    }
                }
            })
            .setNegativeButton("取消", null)
            .show();

    } catch (Throwable e) {
        logger("showCategoryActionUI异常: " + e);
    }
}

// ===== 编辑分类 =====
void showEditCategoryUI(final Activity a, final int idx) {
    try {
        final boolean isNew = idx < 0;

        String oldName = "";
        String oldTitle = "";
        String oldKws = "";

        if (!isNew && idx >= 0 && idx < categories.size()) {
            Map cat = (Map) categories.get(idx);
            oldName = safeStr(cat.get("name"));
            oldTitle = safeStr(cat.get("title"));
            oldKws = joinList((List) cat.get("keywords"), ",");
        }

        LinearLayout root = new LinearLayout(a);
        root.setOrientation(LinearLayout.VERTICAL);
        root.setPadding(30, 30, 30, 20);

        final EditText nameEt = new EditText(a);
        nameEt.setHint("分类名，例如 紧急");
        nameEt.setSingleLine(true);
        nameEt.setText(oldName);
        root.addView(nameEt);

        final EditText titleEt = new EditText(a);
        titleEt.setHint("通知标题，例如 ⚠️ 紧急消息");
        titleEt.setSingleLine(true);
        titleEt.setText(oldTitle);
        root.addView(titleEt);

        final EditText kwsEt = new EditText(a);
        kwsEt.setHint("关键词，用逗号或空格分隔");
        kwsEt.setSingleLine(false);
        kwsEt.setMinLines(3);
        kwsEt.setText(oldKws);
        root.addView(kwsEt);

        new AlertDialog.Builder(a)
            .setTitle(isNew ? "新增分类" : "编辑分类")
            .setView(root)
            .setPositiveButton("保存", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int w) {
                    try {
                        String name = safeStr(nameEt.getText().toString());
                        String title = safeStr(titleEt.getText().toString());
                        List kwsRaw = parseCsv(kwsEt.getText().toString());

                        if (name.length() == 0) {
                            Toast.makeText(a, "分类名不能为空", Toast.LENGTH_SHORT).show();
                            return;
                        }

                        List kws = new ArrayList();
                        for (int i = 0; i < kwsRaw.size(); i++) {
                            String kw = safeStr(kwsRaw.get(i));
                            if (validKeyword(kw) && !kws.contains(kw)) kws.add(kw);
                        }

                        if (title.length() == 0) title = name;

                        Map cat = new HashMap();
                        cat.put("name", name);
                        cat.put("title", title);
                        cat.put("keywords", kws);

                        if (isNew) {
                            categories.add(cat);
                        } else if (idx >= 0 && idx < categories.size()) {
                            categories.set(idx, cat);
                        }

                        saveConfig();
                        Toast.makeText(a, "已保存", Toast.LENGTH_SHORT).show();

                    } catch (Throwable e) {
                        logger("保存分类异常: " + e);
                    }
                }
            })
            .setNegativeButton("取消", null)
            .show();

    } catch (Throwable e) {
        logger("showEditCategoryUI异常: " + e);
    }
}

// ===== 特别关注提醒文案 UI =====
void showTargetTextUI(final Activity a) {
    try {
        LinearLayout root = new LinearLayout(a);
        root.setOrientation(LinearLayout.VERTICAL);
        root.setPadding(30, 30, 30, 20);

        TextView tip = new TextView(a);
        tip.setText("特别关注提醒文案\n命中特别关注联系人时使用。");
        tip.setTextSize(14);
        tip.setPadding(0, 0, 0, 12);
        root.addView(tip);

        final EditText titleEt = new EditText(a);
        titleEt.setHint("通知标题");
        titleEt.setSingleLine(true);
        titleEt.setText(targetAlertTitle);
        root.addView(titleEt);

        final EditText textEt = new EditText(a);
        textEt.setHint("通知正文");
        textEt.setSingleLine(false);
        textEt.setMinLines(2);
        textEt.setMaxLines(4);
        textEt.setText(targetAlertText);
        root.addView(textEt);

        new AlertDialog.Builder(a)
            .setTitle("特别关注提醒文案")
            .setView(root)
            .setPositiveButton("保存", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int w) {
                    try {
                        String title = safeStr(titleEt.getText().toString());
                        String text = safeStr(textEt.getText().toString());

                        if (title.length() == 0) title = "特别关注提醒";
                        if (text.length() == 0) text = "你关注的人发消息了";

                        targetAlertTitle = title;
                        targetAlertText = text;

                        saveConfig();

                        Toast.makeText(a, "已保存", Toast.LENGTH_SHORT).show();

                    } catch (Throwable e) {
                        logger("保存特别关注文案异常: " + e);
                    }
                }
            })
            .setNegativeButton("取消", null)
            .show();

    } catch (Throwable e) {
        logger("showTargetTextUI异常: " + e);
    }
}

void onMsgMenu(msg) {
    try {
        addMenuItem("关键提醒设置", "", () -> {
            final Activity a = getTopActivity();
            if (a != null) {
                a.runOnUiThread(new Runnable() {
                    public void run() {
                        showSettings(a);
                    }
                });
            }
        });
    } catch (Throwable e) {
        logger("onMsgMenu异常: " + e);
    }
}

// ===== 设置入口备用 =====
void openSettings() {
    try {
        Activity a = getTopActivity();
        if (a != null) showSettings(a);
        else Toast.makeText(hostContext, "请先打开微信界面", Toast.LENGTH_SHORT).show();
    } catch (Throwable e) {
        logger("openSettings异常: " + e);
    }
}

// ===== 生命周期 =====
void onLoad() {
    loadConfig();
    logger("已加载");
}

void onUnload() {
    saveConfig();
}
