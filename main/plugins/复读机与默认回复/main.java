// Created by 吃不香菜
// Plugin: 复读机与默认回复

// ===== 默认回复 =====
String SYS_REPLY = "你好我现在有事不在，待会再与你联系";

// ===== 全局配置 =====
Map repeatMap = new HashMap();      // talker -> on
Map replyMap = new HashMap();       // talker -> replyText
Map authMap = new HashMap();        // talker -> on
List replyList = new ArrayList();   // 回复语列表，JSON保存

int authEnabled = 0;                // 0=关闭授权门槛，1=仅授权联系人触发
String uiTalker = "";

// ===== 基础工具 =====
void logger(String s) {
    try { log(s); } catch (Throwable e) {}
}

String fkSafeStr(Object v) {
    if (v == null) return "";
    return String.valueOf(v).trim();
}

String fkFieldStr(Object o, String f) {
    try {
        if (o == null) return "";
        java.lang.reflect.Field ff = o.getClass().getDeclaredField(f);
        ff.setAccessible(true);
        Object v = ff.get(o);
        if (v == null) return "";
        return String.valueOf(v).trim();
    } catch (Throwable e) {
        return "";
    }
}

boolean fkIsSend(Object msg) {
    try {
        java.lang.reflect.Field f = msg.getClass().getDeclaredField("isSend");
        f.setAccessible(true);
        Object v = f.get(msg);
        if (v instanceof Boolean) return ((Boolean) v).booleanValue();
        if (v instanceof Number) return ((Number) v).intValue() == 1;
        if (v != null) return "true".equalsIgnoreCase(String.valueOf(v));
    } catch (Throwable e) {}

    try {
        Object v = msg.getClass().getMethod("isSend").invoke(msg);
        if (v instanceof Boolean) return ((Boolean) v).booleanValue();
        if (v instanceof Number) return ((Number) v).intValue() == 1;
        if (v != null) return "true".equalsIgnoreCase(String.valueOf(v));
    } catch (Throwable e) {}

    return false;
}

void safeToast(String s) {
    try { toast(s); } catch (Throwable e) {}
}

void safeSendText(String talker, String text) {
    try {
        sendText(talker, text);
    } catch (Throwable e) {
        logger("sendText失败: " + e);
    }
}

// ===== 防污染过滤 =====
boolean isPollutedText(String text) {
    text = fkSafeStr(text);
    if (text.length() == 0) return true;

    String low = text.toLowerCase();

    if (text.startsWith("/")) return true;
    if (low.indexOf("/storage/") >= 0) return true;
    if (low.indexOf("/android/") >= 0) return true;
    if (low.indexOf("com.tencent.mm") >= 0) return true;
    if (low.indexOf("micromsg") >= 0) return true;

    if (low.endsWith(".mp4")) return true;
    if (low.endsWith(".3gp")) return true;
    if (low.endsWith(".mov")) return true;
    if (low.endsWith(".avi")) return true;
    if (low.endsWith(".jpg")) return true;
    if (low.endsWith(".jpeg")) return true;
    if (low.endsWith(".png")) return true;
    if (low.endsWith(".gif")) return true;
    if (low.endsWith(".webp")) return true;
    if (low.endsWith(".mp3")) return true;
    if (low.endsWith(".amr")) return true;
    if (low.endsWith(".silk")) return true;
    if (low.endsWith(".m4a")) return true;
    if (low.endsWith(".json")) return true;
    if (low.endsWith(".xml")) return true;
    if (low.endsWith(".db")) return true;
    if (low.endsWith(".txt")) return true;

    return false;
}

boolean validTalker(String talker) {
    talker = fkSafeStr(talker);
    if (talker.length() == 0) return false;
    if (isPollutedText(talker)) return false;
    return true;
}

boolean validName(String name) {
    name = fkSafeStr(name);
    if (name.length() == 0) return false;
    if (isPollutedText(name)) return false;
    return true;
}

boolean validReplyText(String text) {
    text = fkSafeStr(text);
    if (text.length() == 0) return false;
    if (text.length() > 500) return false;
    if (isPollutedText(text)) return false;
    return true;
}

String cleanReplyText(String text) {
    text = fkSafeStr(text);
    if (!validReplyText(text)) return "";
    return text;
}

// ===== UI线程 =====
android.app.Activity getAct() {
    try {
        return getTopActivity();
    } catch (Throwable e) {
        return null;
    }
}

void runUi(final Runnable r) {
    try {
        android.app.Activity a = getAct();
        if (a != null) {
            a.runOnUiThread(new Runnable() {
                public void run() {
                    try { r.run(); } catch (Throwable e) { logger("runUi内部异常: " + e); }
                }
            });
            return;
        }

        android.os.Handler h = new android.os.Handler(android.os.Looper.getMainLooper());
        h.post(new Runnable() {
            public void run() {
                try { r.run(); } catch (Throwable e) { logger("Handler UI异常: " + e); }
            }
        });

    } catch (Throwable e) {
        logger("runUi异常: " + e);
    }
}

// ===== 配置路径 =====
String getConfigDir() {
    return "/storage/emulated/0/Android/media/com.tencent.mm/FkWeChat/Plugin/复读机与默认回复/";
}

String getConfigFile() {
    return getConfigDir() + "config.json";
}

// ===== 回复语列表维护 =====
void ensureReplyList() {
    try {
        List clean = new ArrayList();

        for (int i = 0; i < replyList.size(); i++) {
            String t = cleanReplyText(replyList.get(i));
            if (t.length() > 0 && !clean.contains(t)) clean.add(t);
        }

        if (!clean.contains(SYS_REPLY)) {
            clean.add(0, SYS_REPLY);
        }

        replyList.clear();
        replyList.addAll(clean);

    } catch (Throwable e) {
        logger("ensureReplyList异常: " + e);
        replyList.clear();
        replyList.add(SYS_REPLY);
    }
}

String getCurrentReply(String talker) {
    return fkSafeStr(replyMap.get(talker));
}

boolean repeatOn(String talker) {
    return "on".equals(fkSafeStr(repeatMap.get(talker)));
}

boolean replyOn(String talker) {
    String r = getCurrentReply(talker);
    return r.length() > 0;
}

boolean authOk(String talker) {
    if (authEnabled == 0) return true;
    return "on".equals(fkSafeStr(authMap.get(talker)));
}

// ===== 配置保存/读取：JSON =====
void saveConfig() {
    try {
        ensureReplyList();

        java.io.File dir = new java.io.File(getConfigDir());
        if (!dir.exists()) dir.mkdirs();

        JSONObject root = new JSONObject();
        root.put("authEnabled", authEnabled);

        JSONArray arr = new JSONArray();
        for (int i = 0; i < replyList.size(); i++) {
            String t = cleanReplyText(replyList.get(i));
            if (t.length() > 0) arr.put(t);
        }
        root.put("replyList", arr);

        JSONObject rep = new JSONObject();
        Iterator it1 = repeatMap.keySet().iterator();
        while (it1.hasNext()) {
            String k = fkSafeStr(it1.next());
            if (validTalker(k) && "on".equals(fkSafeStr(repeatMap.get(k)))) {
                rep.put(k, "on");
            }
        }
        root.put("repeatMap", rep);

        JSONObject rp = new JSONObject();
        Iterator it2 = replyMap.keySet().iterator();
        while (it2.hasNext()) {
            String k = fkSafeStr(it2.next());
            String v = cleanReplyText(replyMap.get(k));
            if (validTalker(k) && v.length() > 0) {
                rp.put(k, v);
            }
        }
        root.put("replyMap", rp);

        JSONObject au = new JSONObject();
        Iterator it3 = authMap.keySet().iterator();
        while (it3.hasNext()) {
            String k = fkSafeStr(it3.next());
            if (validTalker(k) && "on".equals(fkSafeStr(authMap.get(k)))) {
                au.put(k, "on");
            }
        }
        root.put("authMap", au);

        java.io.FileWriter w = new java.io.FileWriter(new java.io.File(getConfigFile()), false);
        w.write(root.toString());
        w.flush();
        w.close();

    } catch (Throwable e) {
        logger("saveConfig异常: " + e);
    }
}

void loadConfig() {
    try {
        replyList.clear();
        replyList.add(SYS_REPLY);

        java.io.File f = new java.io.File(getConfigFile());
        if (!f.exists()) {
            saveConfig();
            return;
        }

        java.io.BufferedReader r = new java.io.BufferedReader(new java.io.FileReader(f));
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = r.readLine()) != null) sb.append(line);
        r.close();

        String txt = sb.toString().trim();
        if (txt.length() == 0) {
            saveConfig();
            return;
        }

        // 新版 JSON
        if (txt.startsWith("{") && txt.indexOf("replyList") >= 0) {
            JSONObject root = new JSONObject(txt);

            authEnabled = root.optInt("authEnabled", 0);

            replyList.clear();
            JSONArray arr = root.optJSONArray("replyList");
            if (arr != null) {
                for (int i = 0; i < arr.length(); i++) {
                    String t = cleanReplyText(arr.optString(i, ""));
                    if (t.length() > 0 && !replyList.contains(t)) replyList.add(t);
                }
            }

            repeatMap.clear();
            JSONObject rep = root.optJSONObject("repeatMap");
            if (rep != null) {
                Iterator it = rep.keys();
                while (it.hasNext()) {
                    String k = fkSafeStr(it.next());
                    if (validTalker(k)) repeatMap.put(k, "on");
                }
            }

            replyMap.clear();
            JSONObject rp = root.optJSONObject("replyMap");
            if (rp != null) {
                Iterator it = rp.keys();
                while (it.hasNext()) {
                    String k = fkSafeStr(it.next());
                    String v = cleanReplyText(rp.optString(k, ""));
                    if (validTalker(k) && v.length() > 0) replyMap.put(k, v);
                }
            }

            authMap.clear();
            JSONObject au = root.optJSONObject("authMap");
            if (au != null) {
                Iterator it = au.keys();
                while (it.hasNext()) {
                    String k = fkSafeStr(it.next());
                    if (validTalker(k)) authMap.put(k, "on");
                }
            }

            ensureReplyList();
            saveConfig();
            return;
        }

        // 兼容旧版 6.73KB 配置，旧 replyMap 是 1/2/3，这里统一迁移为 SYS_REPLY
        repeatMap.clear();
        replyMap.clear();

        if (txt.length() >= 3) {
            String body = txt.substring(1, txt.length() - 1);
            String[] parts = body.split(",");

            for (int i = 0; i < parts.length; i++) {
                String p = parts[i].trim();
                if (p.length() == 0) continue;

                int colon = p.indexOf(":");
                if (colon < 0) continue;

                String key = p.substring(1, colon - 1).trim();
                String val = p.substring(colon + 1).trim();

                if (key.endsWith("_r")) {
                    String talker = key.substring(0, key.length() - 2);
                    if (validTalker(talker) && val.indexOf("on") >= 0) repeatMap.put(talker, "on");
                } else if (key.endsWith("_p")) {
                    String talker = key.substring(0, key.length() - 2);
                    if (validTalker(talker)) replyMap.put(talker, SYS_REPLY);
                }
            }
        }

        ensureReplyList();
        saveConfig();

    } catch (Throwable e) {
        logger("loadConfig异常: " + e);
        ensureReplyList();
    }
}

// ===== UI按钮 =====
android.widget.Button makeBtn(android.app.Activity a, String text, final Runnable r) {
    android.widget.Button b = new android.widget.Button(a);
    b.setText(text);
    try { b.setAllCaps(false); } catch (Throwable e) {}

    b.setOnClickListener(new android.view.View.OnClickListener() {
        public void onClick(android.view.View v) {
            try {
                r.run();
            } catch (Throwable e) {
                logger("按钮异常: " + e);
                safeToast("操作失败: " + e.getMessage());
            }
        }
    });

    return b;
}

String buildStatusText() {
    String t = uiTalker;
    if (t.length() == 0) t = "未知会话";

    String text = "";
    text += "当前会话: " + t + "\n";
    text += "授权门槛: " + (authEnabled == 1 ? "开" : "关") + "\n";
    text += "当前授权: " + ("on".equals(fkSafeStr(authMap.get(uiTalker))) ? "已授权" : "未授权") + "\n";
    text += "复读: " + (repeatOn(uiTalker) ? "开" : "关") + "\n";

    String r = getCurrentReply(uiTalker);
    if (r.length() == 0) {
        text += "默认回复: 关\n";
    } else {
        text += "默认回复: 开\n";
        text += "回复内容: " + r + "\n";
    }

    return text;
}

// ===== 主设置UI =====
void showMainUI() {
    try {
        if (android.os.Looper.myLooper() != android.os.Looper.getMainLooper()) {
            runUi(new Runnable() {
                public void run() {
                    showMainUI();
                }
            });
            return;
        }

        ensureReplyList();

        final android.app.Activity a = getAct();
        if (a == null) {
            safeToast("无法获取窗口");
            return;
        }

        android.widget.ScrollView sv = new android.widget.ScrollView(a);
        android.widget.LinearLayout root = new android.widget.LinearLayout(a);
        root.setOrientation(android.widget.LinearLayout.VERTICAL);
        root.setPadding(36, 36, 36, 36);
        sv.addView(root);

        final android.widget.TextView status = new android.widget.TextView(a);
        status.setText(buildStatusText());
        status.setTextSize(15);
        status.setPadding(0, 0, 0, 20);
        root.addView(status);

        root.addView(makeBtn(a, "复读开关", new Runnable() {
            public void run() {
                if (!validTalker(uiTalker)) {
                    safeToast("当前会话为空");
                    return;
                }

                if (repeatOn(uiTalker)) {
                    repeatMap.remove(uiTalker);
                    safeToast("复读已关闭");
                } else {
                    repeatMap.put(uiTalker, "on");
                    safeToast("复读已开启");
                }

                saveConfig();
                status.setText(buildStatusText());
            }
        }));

        root.addView(makeBtn(a, "默认回复开关", new Runnable() {
            public void run() {
                if (!validTalker(uiTalker)) {
                    safeToast("当前会话为空");
                    return;
                }

                if (replyOn(uiTalker)) {
                    replyMap.remove(uiTalker);
                    safeToast("默认回复已关闭");
                } else {
                    replyMap.put(uiTalker, SYS_REPLY);
                    safeToast("默认回复已开启");
                }

                saveConfig();
                status.setText(buildStatusText());
            }
        }));

        root.addView(makeBtn(a, "默认回复设置", new Runnable() {
            public void run() {
                showReplySelectUI();
            }
        }));

        root.addView(makeBtn(a, "回复语管理", new Runnable() {
            public void run() {
                showReplyManageUI();
            }
        }));

        root.addView(makeBtn(a, "授权门槛: " + (authEnabled == 1 ? "开" : "关"), new Runnable() {
            public void run() {
                if (authEnabled == 1) authEnabled = 0;
                else authEnabled = 1;

                saveConfig();
                safeToast("授权门槛已" + (authEnabled == 1 ? "开启" : "关闭"));
                status.setText(buildStatusText());
            }
        }));

        root.addView(makeBtn(a, "授权/取消当前联系人", new Runnable() {
            public void run() {
                if (!validTalker(uiTalker)) {
                    safeToast("当前会话为空");
                    return;
                }

                if ("on".equals(fkSafeStr(authMap.get(uiTalker)))) {
                    authMap.remove(uiTalker);
                    safeToast("已取消授权当前联系人");
                } else {
                    authMap.put(uiTalker, "on");
                    safeToast("已授权当前联系人");
                }

                saveConfig();
                status.setText(buildStatusText());
            }
        }));

        root.addView(makeBtn(a, "联系人授权", new Runnable() {
            public void run() {
                showFriendAuthSelector(a);
            }
        }));

        new android.app.AlertDialog.Builder(a)
            .setTitle("复读机与默认回复")
            .setView(sv)
            .setNegativeButton("关闭", null)
            .show();

    } catch (Throwable e) {
        logger("showMainUI异常: " + e);
        safeToast("打开UI失败: " + e.getMessage());
    }
}

// ===== 默认回复选择 =====
void showReplySelectUI() {
    try {
        if (android.os.Looper.myLooper() != android.os.Looper.getMainLooper()) {
            runUi(new Runnable() {
                public void run() {
                    showReplySelectUI();
                }
            });
            return;
        }

        ensureReplyList();

        final android.app.Activity a = getAct();
        if (a == null) {
            safeToast("无法获取窗口");
            return;
        }

        if (!validTalker(uiTalker)) {
            safeToast("当前会话为空");
            return;
        }

        final String[] items = new String[replyList.size() + 1];
        items[0] = "关闭默认回复";

        int cur = 0;
        String now = getCurrentReply(uiTalker);

        for (int i = 0; i < replyList.size(); i++) {
            String t = fkSafeStr(replyList.get(i));
            items[i + 1] = t;
            if (now.length() > 0 && now.equals(t)) cur = i + 1;
        }

        final int[] selected = new int[1];
        selected[0] = cur;

        new android.app.AlertDialog.Builder(a)
            .setTitle("选择默认回复")
            .setSingleChoiceItems(items, cur, new android.content.DialogInterface.OnClickListener() {
                public void onClick(android.content.DialogInterface d, int which) {
                    selected[0] = which;
                }
            })
            .setPositiveButton("保存", new android.content.DialogInterface.OnClickListener() {
                public void onClick(android.content.DialogInterface d, int w) {
                    if (selected[0] == 0) {
                        replyMap.remove(uiTalker);
                        safeToast("默认回复已关闭");
                    } else {
                        String text = fkSafeStr(replyList.get(selected[0] - 1));
                        if (!validReplyText(text)) {
                            safeToast("回复语无效，可能是污染路径");
                            return;
                        }
                        replyMap.put(uiTalker, text);
                        safeToast("已设置默认回复");
                    }

                    saveConfig();
                }
            })
            .setNegativeButton("取消", null)
            .show();

    } catch (Throwable e) {
        logger("showReplySelectUI异常: " + e);
        safeToast("打开失败: " + e.getMessage());
    }
}

// ===== 回复语管理 =====
void showReplyManageUI() {
    try {
        if (android.os.Looper.myLooper() != android.os.Looper.getMainLooper()) {
            runUi(new Runnable() {
                public void run() {
                    showReplyManageUI();
                }
            });
            return;
        }

        ensureReplyList();

        final android.app.Activity a = getAct();
        if (a == null) {
            safeToast("无法获取窗口");
            return;
        }

        android.widget.LinearLayout root = new android.widget.LinearLayout(a);
        root.setOrientation(android.widget.LinearLayout.VERTICAL);
        root.setPadding(30, 30, 30, 20);

        android.widget.TextView tip = new android.widget.TextView(a);
        tip.setText("回复语管理\n系统默认回复固定保留。\n新增内容会过滤路径、mp4、图片、com.tencent.mm 等污染项。");
        tip.setTextSize(14);
        tip.setPadding(0, 0, 0, 12);
        root.addView(tip);

        final android.widget.EditText input = new android.widget.EditText(a);
        input.setHint("输入新的回复语");
        input.setSingleLine(false);
        input.setMinLines(2);
        input.setMaxLines(4);
        root.addView(input);

        android.widget.Button addBtn = makeBtn(a, "添加回复语", new Runnable() {
            public void run() {
                String text = cleanReplyText(input.getText().toString());
                if (text.length() == 0) {
                    safeToast("回复语无效，可能是路径/视频/图片污染");
                    return;
                }

                if (!replyList.contains(text)) replyList.add(text);
                input.setText("");
                saveConfig();
                safeToast("已添加");
                showReplyManageUI();
            }
        });
        root.addView(addBtn);

        android.widget.TextView listTitle = new android.widget.TextView(a);
        listTitle.setText("\n当前回复语，点击可删除非系统回复：");
        listTitle.setTextSize(15);
        listTitle.setPadding(0, 18, 0, 8);
        root.addView(listTitle);

        for (int i = 0; i < replyList.size(); i++) {
            final String text = fkSafeStr(replyList.get(i));
            android.widget.TextView tv = new android.widget.TextView(a);

            if (SYS_REPLY.equals(text)) {
                tv.setText("● 系统默认：" + text);
            } else {
                tv.setText("○ " + text);
            }

            tv.setTextSize(15);
            tv.setPadding(8, 14, 8, 14);

            tv.setOnClickListener(new android.view.View.OnClickListener() {
                public void onClick(android.view.View v) {
                    if (SYS_REPLY.equals(text)) {
                        safeToast("系统默认回复不能删除");
                        return;
                    }

                    replyList.remove(text);

                    Iterator it = replyMap.keySet().iterator();
                    List removeKeys = new ArrayList();
                    while (it.hasNext()) {
                        Object k = it.next();
                        if (text.equals(fkSafeStr(replyMap.get(k)))) {
                            removeKeys.add(k);
                        }
                    }

                    for (int x = 0; x < removeKeys.size(); x++) {
                        replyMap.remove(removeKeys.get(x));
                    }

                    saveConfig();
                    safeToast("已删除回复语");
                    showReplyManageUI();
                }
            });

            root.addView(tv);
        }

        new android.app.AlertDialog.Builder(a)
            .setTitle("回复语管理")
            .setView(root)
            .setNegativeButton("关闭", null)
            .show();

    } catch (Throwable e) {
        logger("showReplyManageUI异常: " + e);
        safeToast("打开失败: " + e.getMessage());
    }
}

// ===== 联系人授权：只用 getFriendList，按法克欸欸逻辑 =====
void showFriendAuthSelector(final android.app.Activity a) {
    try {
        if (a == null) {
            safeToast("无法获取窗口");
            return;
        }

        List friends = null;
        try {
            friends = getFriendList();
        } catch (Throwable e) {
            logger("getFriendList失败: " + e);
            safeToast("拉取联系人失败");
            return;
        }

        if (friends == null || friends.isEmpty()) {
            safeToast("好友列表为空");
            return;
        }

        final List allNames = new ArrayList();
        final List allIds = new ArrayList();

        for (int idx = 0; idx < friends.size(); idx++) {
            try {
                Object obj = friends.get(idx);
                if (!(obj instanceof HashMap)) continue;

                HashMap f = (HashMap) obj;

                String wxid = fkSafeStr(f.get("username"));
                if (!validTalker(wxid)) continue;

                String nick = fkSafeStr(f.get("nickname"));
                String remark = fkSafeStr(f.get("conRemark"));

                if (!validName(nick)) nick = "";
                if (!validName(remark)) remark = "";

                String label = wxid;

                if (remark.length() > 0) {
                    if (nick.length() > 0) label = nick + "(" + remark + ")";
                    else label = remark;
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
            safeToast("未能解析好友");
            return;
        }

        final boolean[] checked = new boolean[allIds.size()];
        for (int j = 0; j < allIds.size(); j++) {
            String wxid = fkSafeStr(allIds.get(j));
            if ("on".equals(fkSafeStr(authMap.get(wxid)))) checked[j] = true;
        }

        android.widget.LinearLayout layout = new android.widget.LinearLayout(a);
        layout.setOrientation(android.widget.LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        android.widget.TextView tip = new android.widget.TextView(a);
        tip.setText("联系人授权\n来源：getFriendList\n已过滤路径、com.tencent.mm 等污染项。");
        tip.setTextSize(14);
        tip.setPadding(0, 0, 0, 10);
        layout.addView(tip);

        final android.widget.EditText searchInput = new android.widget.EditText(a);
        searchInput.setHint("搜索好友");
        searchInput.setSingleLine(true);
        layout.addView(searchInput);

        final android.widget.TextView countView = new android.widget.TextView(a);
        countView.setTextSize(14);
        countView.setPadding(0, 10, 0, 10);
        layout.addView(countView);

        final android.widget.ScrollView listScroll = new android.widget.ScrollView(a);
        final android.widget.LinearLayout listContainer = new android.widget.LinearLayout(a);
        listContainer.setOrientation(android.widget.LinearLayout.VERTICAL);
        listScroll.addView(listContainer);
        layout.addView(listScroll);

        final Runnable refreshList = new Runnable() {
            public void run() {
                try {
                    listContainer.removeAllViews();

                    String kw = searchInput.getText().toString().trim().toLowerCase();

                    int shown = 0;
                    int selected = 0;

                    for (int i = 0; i < allIds.size(); i++) {
                        if (checked[i]) selected++;

                        String name = fkSafeStr(allNames.get(i));
                        String id = fkSafeStr(allIds.get(i));

                        String nameLower = name.toLowerCase();
                        String idLower = id.toLowerCase();

                        if (kw.length() == 0 || nameLower.indexOf(kw) >= 0 || idLower.indexOf(kw) >= 0) {
                            shown++;

                            final int realIdx = i;

                            android.widget.TextView tv = new android.widget.TextView(listContainer.getContext());

                            String label = fkSafeStr(allNames.get(i));
                            if (label.length() > 25) label = label.substring(0, 25) + "...";

                            tv.setText((checked[realIdx] ? "● " : "○ ") + label);
                            tv.setTextSize(16);
                            tv.setPadding(15, 18, 15, 18);

                            tv.setOnClickListener(new android.view.View.OnClickListener() {
                                public void onClick(android.view.View v) {
                                    try {
                                        checked[realIdx] = !checked[realIdx];

                                        String lbl = fkSafeStr(allNames.get(realIdx));
                                        if (lbl.length() > 25) lbl = lbl.substring(0, 25) + "...";

                                        ((android.widget.TextView) v).setText((checked[realIdx] ? "● " : "○ ") + lbl);
                                    } catch (Throwable e) {
                                        logger("好友点选异常: " + e);
                                    }
                                }
                            });

                            listContainer.addView(tv);
                        }
                    }

                    countView.setText("总计 " + allIds.size() + " 人 / 当前显示 " + shown + " 人 / 已选 " + selected + " 人");

                } catch (Throwable e) {
                    logger("刷新好友授权列表异常: " + e);
                }
            }
        };

        searchInput.addTextChangedListener(new android.text.TextWatcher() {
            public void afterTextChanged(android.text.Editable s) {
                try { refreshList.run(); } catch (Throwable e) {}
            }

            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}

            public void onTextChanged(CharSequence s, int start, int before, int count) {}
        });

        final android.app.AlertDialog dialog = new android.app.AlertDialog.Builder(a)
            .setTitle("联系人授权 (" + allIds.size() + "人)")
            .setView(layout)
            .setPositiveButton("保存", null)
            .setNegativeButton("取消", null)
            .create();

        dialog.setOnShowListener(new android.content.DialogInterface.OnShowListener() {
            public void onShow(android.content.DialogInterface d) {
                try {
                    refreshList.run();

                    dialog.getButton(android.app.AlertDialog.BUTTON_POSITIVE).setOnClickListener(new android.view.View.OnClickListener() {
                        public void onClick(android.view.View v) {
                            try {
                                // 只更新好友列表范围内的授权，保留当前会话/群聊等非好友授权
                                for (int k = 0; k < allIds.size(); k++) {
                                    authMap.remove(allIds.get(k));
                                }

                                for (int k = 0; k < allIds.size(); k++) {
                                    if (checked[k]) {
                                        authMap.put(allIds.get(k), "on");
                                    }
                                }

                                saveConfig();
                                safeToast("已保存授权");
                                dialog.dismiss();

                            } catch (Throwable e) {
                                logger("保存好友授权异常: " + e);
                                safeToast("保存失败: " + e.getMessage());
                            }
                        }
                    });

                } catch (Throwable e) {
                    logger("好友授权弹窗onShow异常: " + e);
                }
            }
        });

        dialog.show();

    } catch (Throwable e) {
        logger("showFriendAuthSelector异常: " + e);
        safeToast("好友授权失败: " + e.getMessage());
    }
}

// ===== 命令处理：兼容原脚本 =====
boolean handleCommand(String talker, String clean, boolean me) {
    try {
        String lower = clean.toLowerCase();

        if (lower.equals("复读ui") || lower.equals("默认回复ui") || lower.equals("回复ui") || lower.equals("/replyui")) {
            if (!me) return true;
            uiTalker = talker;
            showMainUI();
            return true;
        }

        if (lower.equals("授权开关")) {
            if (!me) return true;
            if (authEnabled == 1) authEnabled = 0;
            else authEnabled = 1;
            saveConfig();
            safeToast("授权门槛已" + (authEnabled == 1 ? "开启" : "关闭"));
            return true;
        }

        if (lower.equals("授权当前")) {
            if (!me) return true;
            if (validTalker(talker)) {
                authMap.put(talker, "on");
                saveConfig();
                safeToast("已授权当前联系人");
            }
            return true;
        }

        if (lower.equals("取消授权")) {
            if (!me) return true;
            authMap.remove(talker);
            saveConfig();
            safeToast("已取消授权当前联系人");
            return true;
        }

        if (lower.equals("复读开关")) {
            if (!me) return true;
            if (repeatOn(talker)) {
                repeatMap.remove(talker);
                safeToast("复读已关闭");
            } else {
                repeatMap.put(talker, "on");
                safeToast("复读已开启");
            }
            saveConfig();
            return true;
        }

        if (lower.equals("默认回复")) {
            if (!me) return true;
            if (replyOn(talker)) {
                replyMap.remove(talker);
                safeToast("默认回复已关闭");
            } else {
                replyMap.put(talker, SYS_REPLY);
                safeToast("默认回复已开启");
            }
            saveConfig();
            return true;
        }

        if (lower.equals("回复列表")) {
            if (!me) return true;
            ensureReplyList();

            String msgText = "";
            for (int i = 0; i < replyList.size(); i++) {
                msgText += (i + 1) + ". " + fkSafeStr(replyList.get(i)) + "\n";
            }

            String cur = getCurrentReply(talker);
            if (cur.length() == 0) msgText += "当前: 未启用";
            else msgText += "当前: " + cur;

            safeToast(msgText);
            return true;
        }

        if (lower.startsWith("默认回复 ")) {
            if (!me) return true;
            ensureReplyList();

            try {
                int n = Integer.parseInt(clean.substring(5).trim());
                if (n < 1 || n > replyList.size()) {
                    safeToast("序号范围 1~" + replyList.size());
                    return true;
                }

                String text = fkSafeStr(replyList.get(n - 1));
                if (!validReplyText(text)) {
                    safeToast("回复语无效，可能是污染路径");
                    return true;
                }

                replyMap.put(talker, text);
                saveConfig();
                safeToast("已设置默认回复");

            } catch (Throwable e) {
                safeToast("格式: 默认回复 数字");
            }

            return true;
        }

    } catch (Throwable e) {
        logger("handleCommand异常: " + e);
    }

    return false;
}

// ===== 消息入口 =====
void onMsg(Object msg) {
    try {
        String talker = fkFieldStr(msg, "talker");
        String content = fkFieldStr(msg, "content");
        if (content.length() == 0) content = fkFieldStr(msg, "rawContent");

        if (!validTalker(talker)) return;
        if (content.length() == 0) return;

        boolean me = fkIsSend(msg);
        String clean = content.trim();
        if (clean.length() == 0) return;

        uiTalker = talker;

        // 命令优先
        if (handleCommand(talker, clean, me)) return;

        // 自己发的普通消息不触发
        if (me) return;

        // 授权门槛
        if (!authOk(talker)) return;

        // 复读优先
        if (repeatOn(talker)) {
            safeSendText(talker, clean);
            return;
        }

        String reply = getCurrentReply(talker);
        if (validReplyText(reply)) {
            safeSendText(talker, reply);
        }

    } catch (Throwable e) {
        logger("onMsg异常: " + e);
    }
}

// ===== Fk长按菜单入口 =====
void onMsgMenu(Object msg) {
    try {
        String t = fkFieldStr(msg, "talker");
        if (t.length() == 0) t = fkFieldStr(msg, "fromUser");
        if (t.length() == 0) t = fkFieldStr(msg, "username");

        if (validTalker(t)) uiTalker = t;

        showMainUI();

    } catch (Throwable e) {
        logger("onMsgMenu异常: " + e);
        safeToast("长按菜单异常: " + e.getMessage());
    }
}

// ===== 可选设置入口 =====
void openSettings() {
    showMainUI();
}

// ===== 生命周期 =====
void onLoad() {
    loadConfig();
    ensureReplyList();
    logger("[复读机与默认回复] 已加载");
}

void onUnload() {
    saveConfig();
    logger("[复读机与默认回复] 已卸载");
}

// 兼容 Wa 卸载名
void onUnLoad() {
    saveConfig();
}

// Wa入口占位
void onHandleMsg(Object msgInfoBean) {}
