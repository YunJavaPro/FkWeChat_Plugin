// 隐藏悬浮窗 for FkWeChat
// 目标：持续隐藏/移除 FkWeChat 自带“快捷工具”悬浮窗。
// 优化版：分阶段轮询 + 限频日志，降低长期消耗。
// 证据链：fc.a case10 -> qc.c(activity, Chat_User, 1) -> a2.f2.setContent -> WindowManager.addView；tc.i.b() 负责 removeView。

boolean running = false;
Thread worker = null;
long startTime = 0L;
long lastErrorLog = 0L;
// 不输出周期保活日志，减少本地 log 冗余。

void logLimited(String where, Throwable e) {
    try {
        long now = System.currentTimeMillis();
        if (now - lastErrorLog > 10000L) {
            lastErrorLog = now;
            log(where + ": " + String.valueOf(e));
        }
    } catch (Throwable ignored) {}
}

void writeDisableConfig() {
    try {
        // float_auto_expand 是已在 FastKV 中确认的展开状态 key；关闭它可避免进入页面后自动展开。
        setBoolean("float_auto_expand", false);
        setBoolean("float_remember_pos", false);
        setBoolean("float_auto_edge", false);
        setInt("float_last_x", -20000);
        setInt("float_last_y", -20000);
        setInt("float_ball_size", 1);
        setInt("float_panel_width", 1);
        setInt("float_panel_height", 1);
    } catch (Throwable e) {
        logLimited("写入悬浮窗禁用配置失败", e);
    }
}

void hideOnce() {
    writeDisableConfig();

    try {
        // 模块自己的移除逻辑：removeView + 清空 WindowManager/View/LayoutParams。
        Class c = Class.forName("tc.i");
        java.lang.reflect.Method m = c.getDeclaredMethod("b", new Class[0]);
        m.setAccessible(true);
        m.invoke(null, new Object[0]);
    } catch (Throwable e) {
        logLimited("调用 tc.i.b 移除悬浮窗失败", e);
    }

    try {
        // 兜底：如果窗口刚好被重建，则立即隐藏、禁点、移出屏幕。
        Class c = Class.forName("tc.i");
        java.lang.reflect.Field viewF = null;

        try {
            viewF = c.getDeclaredField("f14582b");
            viewF.setAccessible(true);
            Object v = viewF.get(null);
            if (v instanceof android.view.View) {
                android.view.View av = (android.view.View) v;
                av.setVisibility(android.view.View.GONE);
                av.setAlpha(0.0f);
                av.setEnabled(false);
                av.setClickable(false);
            }
        } catch (Throwable e) {
            logLimited("隐藏悬浮窗 View 失败", e);
        }

        try {
            java.lang.reflect.Field lpF = c.getDeclaredField("f14583c");
            lpF.setAccessible(true);
            Object lp = lpF.get(null);
            if (lp instanceof android.view.WindowManager.LayoutParams) {
                android.view.WindowManager.LayoutParams p = (android.view.WindowManager.LayoutParams) lp;
                p.x = -20000;
                p.y = -20000;
                p.width = 1;
                p.height = 1;
                p.alpha = 0.0f;
                p.flags = p.flags | 0x00000008 | 0x00000010; // NOT_FOCUSABLE | NOT_TOUCHABLE

                try {
                    java.lang.reflect.Field wmF = c.getDeclaredField("f14581a");
                    wmF.setAccessible(true);
                    Object wm = wmF.get(null);
                    Object fv = viewF != null ? viewF.get(null) : null;
                    if (wm instanceof android.view.WindowManager && fv instanceof android.view.View) {
                        ((android.view.WindowManager) wm).updateViewLayout((android.view.View) fv, p);
                    }
                } catch (Throwable e) {
                    logLimited("更新悬浮窗 LayoutParams 失败", e);
                }
            }
        } catch (Throwable e) {
            logLimited("处理悬浮窗 LayoutParams 失败", e);
        }
    } catch (Throwable e) {
        logLimited("兜底隐藏悬浮窗失败", e);
    }
}

long currentSleepMs() {
    long elapsed = System.currentTimeMillis() - startTime;
    if (elapsed < 5000L) return 80L;       // 刚进页面：高频压制，减少闪现
    if (elapsed < 30000L) return 300L;     // 前 30 秒：中频保持
    return 1000L;                          // 长时间停留：低频保活，降低耗电
}

void onLoad() {
    running = true;
    startTime = System.currentTimeMillis();
    hideOnce();

    worker = new Thread(new Runnable() {
        public void run() {
            while (running) {
                try {
                    hideOnce();
                    Thread.sleep(currentSleepMs());
                } catch (Throwable e) {
                    logLimited("隐藏线程异常", e);
                    try { Thread.sleep(500L); } catch (Throwable ignored) {}
                }
            }
        }
    });
    worker.setName("HideFloatWindow");
    worker.setDaemon(true);
    worker.start();

    log("隐藏悬浮窗已启动：分阶段隐藏 FK 快捷工具悬浮窗");
}

void onUnload() {
    running = false;
    try { if (worker != null) worker.interrupt(); } catch (Throwable ignored) {}
    hideOnce();
    log("隐藏悬浮窗已停止");
}