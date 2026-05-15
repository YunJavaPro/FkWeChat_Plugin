// Created by 吃不香菜
// Plugin: 群发助手
// 长按任意消息弹出群发面板，支持文本+图片+视频

List selectedPrivateList = new ArrayList();
List selectedGroupList = new ArrayList();
String sendContent = "";
List imagePathList = new ArrayList();
List videoPathList = new ArrayList();

void onMsgMenu(Object msg) {
    Activity a = getTopActivity();
    if (a != null) {
        addMenuItem("📨 群发助手", "", () -> {
            showUI(a);
        });
    }
}

void showUI(Activity a) {
    a.runOnUiThread(new Runnable() {
        public void run() {
            try {
                ScrollView scroll = new ScrollView(a);
                LinearLayout root = new LinearLayout(a);
                root.setOrientation(LinearLayout.VERTICAL);
                root.setPadding(40, 40, 40, 40);

                Button btnFriend = new Button(a);
                btnFriend.setText("选私聊 (" + selectedPrivateList.size() + "人)");
                btnFriend.setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) { showFriendList(a); }
                });
                root.addView(btnFriend);

                TextView sp1 = new TextView(a); sp1.setText(" "); root.addView(sp1);

                Button btnGroup = new Button(a);
                btnGroup.setText("选群聊 (" + selectedGroupList.size() + "群)");
                btnGroup.setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) { showGroupList(a); }
                });
                root.addView(btnGroup);

                TextView sp2 = new TextView(a); sp2.setText(" "); root.addView(sp2);

                TextView label1 = new TextView(a);
                label1.setText("文本内容：");
                label1.setTextSize(13);
                root.addView(label1);

                final EditText et = new EditText(a);
                et.setHint("输入文本内容");
                et.setMinLines(3);
                et.setGravity(Gravity.TOP);
                root.addView(et);

                TextView sp3 = new TextView(a); sp3.setText(" "); root.addView(sp3);

                TextView label2 = new TextView(a);
                label2.setText("图片路径（文件夹/单文件/逗号分隔）：");
                label2.setTextSize(13);
                root.addView(label2);

                final EditText imgEt = new EditText(a);
                imgEt.setHint("/storage/emulated/0/Pictures/");
                imgEt.setSingleLine(true);
                root.addView(imgEt);

                TextView sp4 = new TextView(a); sp4.setText(" "); root.addView(sp4);

                TextView label3 = new TextView(a);
                label3.setText("视频路径（文件夹/单文件/逗号分隔）：");
                label3.setTextSize(13);
                root.addView(label3);

                final EditText vidEt = new EditText(a);
                vidEt.setHint("/storage/emulated/0/Movies/");
                vidEt.setSingleLine(true);
                root.addView(vidEt);

                TextView sp5 = new TextView(a); sp5.setText(" "); root.addView(sp5);

                Button btnSend = new Button(a);
                btnSend.setText("发 送");
                btnSend.setTextSize(16);
                btnSend.setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        sendContent = et.getText().toString().trim();

                        imagePathList.clear();
                        String imgPath = imgEt.getText().toString().trim();
                        if (imgPath.length() > 0) parsePath(imgPath, "图片", imagePathList);

                        videoPathList.clear();
                        String vidPath = vidEt.getText().toString().trim();
                        if (vidPath.length() > 0) parsePath(vidPath, "视频", videoPathList);

                        if (sendContent.length() == 0 && imagePathList.isEmpty() && videoPathList.isEmpty()) {
                            toast("请输入内容或添加图片/视频"); return;
                        }
                        if (selectedPrivateList.isEmpty() && selectedGroupList.isEmpty()) {
                            toast("请选择联系人"); return;
                        }

                        String info = "文本" + (sendContent.length() > 0 ? "✓" : "✗") + 
                                     " 图片" + imagePathList.size() + 
                                     " 视频" + videoPathList.size();
                        toast(info);
                        doSend();
                    }
                });
                root.addView(btnSend);

                scroll.addView(root);
                new AlertDialog.Builder(a)
                    .setTitle("📨 群发助手")
                    .setView(scroll)
                    .setCancelable(true)
                    .show();
            } catch (Throwable e) { toast("失败: " + e.getMessage()); }
        }
    });
}

void parsePath(String p, String type, List list) {
    File f = new File(p);
    if (f.isDirectory()) {
        File[] files = f.listFiles();
        if (files != null) {
            for (File file : files) {
                String name = file.getName().toLowerCase();
                boolean match = type.equals("图片")
                    ? (name.endsWith(".jpg") || name.endsWith(".jpeg") || name.endsWith(".png") || name.endsWith(".webp") || name.endsWith(".gif"))
                    : (name.endsWith(".mp4") || name.endsWith(".avi") || name.endsWith(".mov") || name.endsWith(".mkv") || name.endsWith(".3gp"));
                if (match) list.add(file.getAbsolutePath());
            }
        }
    } else if (p.contains(",")) {
        String[] arr = p.split(",");
        for (int i = 0; i < arr.length; i++) {
            String fp = arr[i].trim();
            if (fp.length() > 0 && new File(fp).exists()) list.add(fp);
        }
    } else if (f.exists()) {
        list.add(p);
    }
}

void showFriendList(Activity a) {
    try {
        List friends = getFriendList();
        if (friends == null || friends.isEmpty()) { toast("无好友"); return; }
        List names = new ArrayList();
        List ids = new ArrayList();
        for (int i = 0; i < friends.size(); i++) {
            Map f = (Map) friends.get(i);
            String wxid = "";
            String nick = "";
            String rem = "";
            
            if (f.containsKey("wxid")) wxid = String.valueOf(f.get("wxid")).trim();
            else if (f.containsKey("username")) wxid = String.valueOf(f.get("username")).trim();
            else if (f.containsKey("id")) wxid = String.valueOf(f.get("id")).trim();
            
            if (f.containsKey("nickname")) nick = String.valueOf(f.get("nickname")).trim();
            else if (f.containsKey("nick")) nick = String.valueOf(f.get("nick")).trim();
            else if (f.containsKey("name")) nick = String.valueOf(f.get("name")).trim();
            
            if (f.containsKey("remark")) rem = String.valueOf(f.get("remark")).trim();
            else if (f.containsKey("conRemark")) rem = String.valueOf(f.get("conRemark")).trim();
            
            if (wxid.length() == 0) continue;
            
            String label = rem.length() > 0 ? nick + "(" + rem + ")" : nick;
            if (label.length() == 0) label = wxid;
            names.add(label); ids.add(wxid);
        }
        
        if (ids.isEmpty()) { toast("无法读取好友列表"); return; }
        
        ListView lv = new ListView(a);
        lv.setChoiceMode(ListView.CHOICE_MODE_MULTIPLE);
        lv.setAdapter(new ArrayAdapter(a, android.R.layout.simple_list_item_multiple_choice, names));
        for (int i = 0; i < ids.size(); i++) {
            if (selectedPrivateList.contains(ids.get(i))) lv.setItemChecked(i, true);
        }
        new AlertDialog.Builder(a).setTitle("选私聊").setView(lv)
            .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int w) {
                    selectedPrivateList.clear();
                    for (int i = 0; i < ids.size(); i++)
                        if (lv.isItemChecked(i)) selectedPrivateList.add(ids.get(i));
                    toast("已选" + selectedPrivateList.size() + "人");
                }
            })
            .setNegativeButton("取消", null)
            .show();
    } catch (Throwable e) { toast("失败: " + e.getMessage()); }
}

void showGroupList(Activity a) {
    try {
        List groups = getGroupList();
        if (groups == null || groups.isEmpty()) { toast("无群聊"); return; }
        List names = new ArrayList();
        List ids = new ArrayList();
        for (int i = 0; i < groups.size(); i++) {
            Map g = (Map) groups.get(i);
            String rid = "";
            String name = "";
            
            if (g.containsKey("roomId")) rid = String.valueOf(g.get("roomId")).trim();
            else if (g.containsKey("username")) rid = String.valueOf(g.get("username")).trim();
            else if (g.containsKey("wxid")) rid = String.valueOf(g.get("wxid")).trim();
            else if (g.containsKey("id")) rid = String.valueOf(g.get("id")).trim();
            
            if (g.containsKey("name")) name = String.valueOf(g.get("name")).trim();
            else if (g.containsKey("nickname")) name = String.valueOf(g.get("nickname")).trim();
            else if (g.containsKey("title")) name = String.valueOf(g.get("title")).trim();
            
            if (rid.length() == 0) continue;
            if (name.length() == 0) name = rid;
            
            names.add(name); ids.add(rid);
        }
        
        if (ids.isEmpty()) { toast("无法读取群聊列表"); return; }
        
        ListView lv = new ListView(a);
        lv.setChoiceMode(ListView.CHOICE_MODE_MULTIPLE);
        lv.setAdapter(new ArrayAdapter(a, android.R.layout.simple_list_item_multiple_choice, names));
        for (int i = 0; i < ids.size(); i++) {
            if (selectedGroupList.contains(ids.get(i))) lv.setItemChecked(i, true);
        }
        new AlertDialog.Builder(a).setTitle("选群聊").setView(lv)
            .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int w) {
                    selectedGroupList.clear();
                    for (int i = 0; i < ids.size(); i++)
                        if (lv.isItemChecked(i)) selectedGroupList.add(ids.get(i));
                    toast("已选" + selectedGroupList.size() + "群");
                }
            })
            .setNegativeButton("取消", null)
            .show();
    } catch (Throwable e) { toast("失败: " + e.getMessage()); }
}

void doSend() {
    final List all = new ArrayList();
    all.addAll(selectedPrivateList);
    all.addAll(selectedGroupList);
    new Thread(new Runnable() {
        public void run() {
            int ok = 0, fail = 0;
            for (int i = 0; i < all.size(); i++) {
                String t = all.get(i).toString();
                try {
                    if (sendContent.length() > 0) sendText(t, sendContent);
                    for (int j = 0; j < imagePathList.size(); j++) {
                        try { sendImage(t, imagePathList.get(j).toString()); Thread.sleep(500); } catch (Throwable e) {}
                    }
                    for (int j = 0; j < videoPathList.size(); j++) {
                        try { sendVideo(t, videoPathList.get(j).toString()); Thread.sleep(500); } catch (Throwable e) {}
                    }
                    ok++; Thread.sleep(1500);
                } catch (Throwable e) { fail++; }
            }
            final int fok = ok, ffail = fail;
            Activity a = getTopActivity();
            if (a != null) a.runOnUiThread(new Runnable() {
                public void run() { toast("完成！成功:" + fok + " 失败:" + ffail); }
            });
        }
    }).start();
    toast("开始发送，共" + all.size() + "条");
}

void onLoad() {}
void onUnload() {}
void onMsg(Object msg) {}
boolean onClickSendBtn(String text) { return false; }
void onHandleMsg(Object bean) {}