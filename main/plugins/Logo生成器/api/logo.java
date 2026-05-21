import android.app.AlertDialog;
import android.app.ProgressDialog;
import android.content.Context;
import android.graphics.*;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.widget.*;
import java.io.File;
import java.io.FileOutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.DataOutputStream;
import java.io.FileInputStream;
import android.util.Base64;

// 预设颜色（48色）
String[] presetColors = {
    "#FFFFFF", "#F0F0F0", "#D3D3D3", "#A9A9A9", "#808080", "#696969", "#404040", "#000000",
    "#FF0000", "#DC143C", "#CD5C5C", "#8B0000",
    "#FFA500", "#FF8C00", "#FF7F50",
    "#FFFF00", "#FFD700", "#DAA520", "#B8860B",
    "#00FF00", "#32CD32", "#228B22", "#006400",
    "#00FFFF", "#00CED1", "#008080",
    "#0000FF", "#4169E1", "#00008B",
    "#800080", "#9370DB", "#4B0082",
    "#FFC0CB", "#FF69B4", "#FF1493",
    "#8B4513", "#A0522D", "#D2691E", "#CD853F",
    "#E0FFFF", "#F5DEB3", "#FFF8DC", "#F5F5F5",
    "#FFE4E1", "#E6E6FA", "#FAEBD7", "#F0F8FF"
};

// 当前参数
String leftText = "";
String rightText = "";
String leftTextColor = "#FFFFFF";
String rightBgColor = "#FF0000";
String rightTextColor = "#FFFFFF";
int fontSize = 100;
boolean bgBlack = true;
boolean enableEnhance = false;

// 面板控件
EditText etLeftText, etRightText;
TextView tvLeftColor, tvRightBgColor, tvRightTextColor;
EditText etCustomColor;
SeekBar sbFontSize;
TextView tvFontSizeValue;
RadioButton rbBlack, rbWhite;
CheckBox cbEnhance;
ImageView previewIv;

// 加载网络层
loadJava("api/http");

void logo(String talker) {
    new Handler(Looper.getMainLooper()).post(() -> {
        Context ctx = hostContext;
        LinearLayout root = new LinearLayout(ctx);
        root.setOrientation(LinearLayout.VERTICAL);
        root.setPadding(30, 30, 30, 30);
        root.setBackgroundColor(Color.parseColor("#F5F5F5"));

        // 标题
        TextView title = new TextView(ctx);
        title.setText("Logo生成器");
        title.setTextSize(18);
        title.setGravity(Gravity.CENTER);
        title.setPadding(0, 0, 0, 20);
        root.addView(title);

        // 左侧文字
        TextView leftLabel = new TextView(ctx);
        leftLabel.setText("左侧文字");
        leftLabel.setTextSize(14);
        root.addView(leftLabel);
        etLeftText = new EditText(ctx);
        etLeftText.setHint("左侧文字 (如: 腾讯)");
        root.addView(etLeftText);

        // 左侧文字颜色
        LinearLayout leftColorRow = new LinearLayout(ctx);
        leftColorRow.setOrientation(LinearLayout.HORIZONTAL);
        leftColorRow.setGravity(Gravity.CENTER_VERTICAL);
        leftColorRow.setPadding(0, 8, 0, 8);
        TextView leftLabel2 = new TextView(ctx);
        leftLabel2.setText("左侧文字颜色:");
        leftLabel2.setTextSize(14);
        leftLabel2.setLayoutParams(new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1));
        leftColorRow.addView(leftLabel2);
        tvLeftColor = new TextView(ctx);
        tvLeftColor.setText("  ");
        tvLeftColor.setTextSize(24);
        tvLeftColor.setBackgroundColor(Color.parseColor(leftTextColor));
        tvLeftColor.setPadding(8, 8, 8, 8);
        leftColorRow.addView(tvLeftColor);
        root.addView(leftColorRow);

        // 右侧文字
        TextView rightLabel = new TextView(ctx);
        rightLabel.setText("右侧文字 (高亮内)");
        rightLabel.setTextSize(14);
        rightLabel.setPadding(0, 16, 0, 0);
        root.addView(rightLabel);
        etRightText = new EditText(ctx);
        etRightText.setHint("右侧文字 (如: 视频)");
        root.addView(etRightText);

        // 右侧高亮背景颜色
        LinearLayout rightBgColorRow = new LinearLayout(ctx);
        rightBgColorRow.setOrientation(LinearLayout.HORIZONTAL);
        rightBgColorRow.setGravity(Gravity.CENTER_VERTICAL);
        rightBgColorRow.setPadding(0, 8, 0, 8);
        TextView rightBgLabel = new TextView(ctx);
        rightBgLabel.setText("右侧高亮背景色:");
        rightBgLabel.setTextSize(14);
        rightBgLabel.setLayoutParams(new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1));
        rightBgColorRow.addView(rightBgLabel);
        tvRightBgColor = new TextView(ctx);
        tvRightBgColor.setText("  ");
        tvRightBgColor.setTextSize(24);
        tvRightBgColor.setBackgroundColor(Color.parseColor(rightBgColor));
        tvRightBgColor.setPadding(8, 8, 8, 8);
        rightBgColorRow.addView(tvRightBgColor);
        root.addView(rightBgColorRow);

        // 右侧文字颜色
        LinearLayout rightTextColorRow = new LinearLayout(ctx);
        rightTextColorRow.setOrientation(LinearLayout.HORIZONTAL);
        rightTextColorRow.setGravity(Gravity.CENTER_VERTICAL);
        rightTextColorRow.setPadding(0, 8, 0, 8);
        TextView rightTextLabel = new TextView(ctx);
        rightTextLabel.setText("右侧文字颜色:");
        rightTextLabel.setTextSize(14);
        rightTextLabel.setLayoutParams(new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1));
        rightTextColorRow.addView(rightTextLabel);
        tvRightTextColor = new TextView(ctx);
        tvRightTextColor.setText("  ");
        tvRightTextColor.setTextSize(24);
        tvRightTextColor.setBackgroundColor(Color.parseColor(rightTextColor));
        tvRightTextColor.setPadding(8, 8, 8, 8);
        rightTextColorRow.addView(tvRightTextColor);
        root.addView(rightTextColorRow);

        // 自定义颜色输入框（应用到右侧背景）
        TextView customLabel = new TextView(ctx);
        customLabel.setText("自定义右侧背景颜色");
        customLabel.setTextSize(14);
        customLabel.setPadding(0, 16, 0, 0);
        root.addView(customLabel);
        etCustomColor = new EditText(ctx);
        etCustomColor.setHint("输入十六进制颜色，如 #FF5733");
        root.addView(etCustomColor);

        // 背景颜色选择（黑白）
        TextView bgLabel = new TextView(ctx);
        bgLabel.setText("画布背景");
        bgLabel.setTextSize(14);
        bgLabel.setPadding(0, 16, 0, 0);
        root.addView(bgLabel);
        
        LinearLayout bgRow = new LinearLayout(ctx);
        bgRow.setOrientation(LinearLayout.HORIZONTAL);
        rbBlack = new RadioButton(ctx);
        rbBlack.setText("黑色");
        rbWhite = new RadioButton(ctx);
        rbWhite.setText("白色");
        bgRow.addView(rbBlack);
        bgRow.addView(rbWhite);
        root.addView(bgRow);

        // 字体大小
        LinearLayout sizeRow = new LinearLayout(ctx);
        sizeRow.setOrientation(LinearLayout.VERTICAL);
        sizeRow.setPadding(0, 16, 0, 0);
        TextView sizeLabel = new TextView(ctx);
        sizeLabel.setText("字体大小: 100px");
        sizeLabel.setTextSize(14);
        sizeRow.addView(sizeLabel);
        sbFontSize = new SeekBar(ctx);
        sbFontSize.setMax(200);
        sbFontSize.setProgress(100);
        sizeRow.addView(sbFontSize);
        root.addView(sizeRow);

        // 画质增强开关
        cbEnhance = new CheckBox(ctx);
        cbEnhance.setText("画质增强 (API)");
        cbEnhance.setChecked(enableEnhance);
        cbEnhance.setPadding(0, 16, 0, 0);
        root.addView(cbEnhance);

        // 预览区域
        TextView previewLabel = new TextView(ctx);
        previewLabel.setText("预览");
        previewLabel.setTextSize(14);
        previewLabel.setPadding(0, 16, 0, 0);
        root.addView(previewLabel);

        previewIv = new ImageView(ctx);
        previewIv.setLayoutParams(new LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, 400));
        previewIv.setBackgroundColor(Color.WHITE);
        previewIv.setScaleType(ImageView.ScaleType.FIT_CENTER);
        root.addView(previewIv);

        // 按钮行
        LinearLayout btnRow = new LinearLayout(ctx);
        btnRow.setOrientation(LinearLayout.HORIZONTAL);
        btnRow.setGravity(Gravity.CENTER);
        btnRow.setPadding(0, 30, 0, 0);

        Button closeBtn = new Button(ctx);
        closeBtn.setText("关闭");
        closeBtn.setPadding(30, 12, 30, 12);
        btnRow.addView(closeBtn);

        Button genBtn = new Button(ctx);
        genBtn.setText("生成并发送");
        genBtn.setPadding(30, 12, 30, 12);
        genBtn.setBackgroundColor(Color.parseColor("#FFA500"));
        btnRow.addView(genBtn);

        root.addView(btnRow);

        AlertDialog dialog = new AlertDialog.Builder(ctx)
            .setView(root)
            .create();
        dialog.getWindow().setType(WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY);
        dialog.setCanceledOnTouchOutside(true);

        // 实时刷新预览函数
        Runnable updatePreview = () -> {
            String lText = etLeftText.getText().toString().trim();
            String rText = etRightText.getText().toString().trim();
            if (lText.isEmpty()) lText = "腾讯";
            if (rText.isEmpty()) rText = "视频";
            
            tvLeftColor.setBackgroundColor(Color.parseColor(leftTextColor));
            tvRightBgColor.setBackgroundColor(Color.parseColor(rightBgColor));
            tvRightTextColor.setBackgroundColor(Color.parseColor(rightTextColor));
            
            int bgColor = rbBlack.isChecked() ? Color.BLACK : Color.WHITE;
            
            String path = generateLogo(lText, rText, leftTextColor, rightBgColor, rightTextColor, fontSize, bgColor, false);
            if (path != null) {
                Bitmap bmp = BitmapFactory.decodeFile(path);
                if (bmp != null) {
                    previewIv.setImageBitmap(bmp);
                }
            }
        };

        // 监听器设置
        etLeftText.addTextChangedListener(new SimpleTextWatcher(updatePreview));
        etRightText.addTextChangedListener(new SimpleTextWatcher(updatePreview));
        
        etCustomColor.addTextChangedListener(new android.text.TextWatcher() {
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                String colorStr = s.toString().trim();
                if (!colorStr.isEmpty()) {
                    try {
                        if (colorStr.startsWith("#")) {
                            Color.parseColor(colorStr);
                            rightBgColor = colorStr;
                            updatePreview.run();
                        }
                    } catch (Exception e) {}
                }
            }
            public void afterTextChanged(android.text.Editable s) {}
        });
        
        sbFontSize.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                fontSize = progress;
                sizeLabel.setText("字体大小: " + progress + "px");
                updatePreview.run();
            }
            public void onStartTrackingTouch(SeekBar seekBar) {}
            public void onStopTrackingTouch(SeekBar seekBar) {}
        });
        
        rbBlack.setOnCheckedChangeListener((buttonView, isChecked) -> {
            if (isChecked) {
                rbWhite.setChecked(false);
                updatePreview.run();
            }
        });
        rbWhite.setOnCheckedChangeListener((buttonView, isChecked) -> {
            if (isChecked) {
                rbBlack.setChecked(false);
                updatePreview.run();
            }
        });

        tvLeftColor.setOnClickListener(v -> {
            showColorPicker(ctx, tvLeftColor, color -> {
                leftTextColor = color;
                updatePreview.run();
            });
        });
        tvRightBgColor.setOnClickListener(v -> {
            showColorPicker(ctx, tvRightBgColor, color -> {
                rightBgColor = color;
                updatePreview.run();
            });
        });
        tvRightTextColor.setOnClickListener(v -> {
            showColorPicker(ctx, tvRightTextColor, color -> {
                rightTextColor = color;
                updatePreview.run();
            });
        });

        closeBtn.setOnClickListener(v -> dialog.dismiss());

        //  核心修复：点击后立即关闭面板 
        genBtn.setOnClickListener(v -> {
            String lText = etLeftText.getText().toString().trim();
            String rText = etRightText.getText().toString().trim();
            if (lText.isEmpty() || rText.isEmpty()) {
                sendText(talker, "请填写完整文字");
                return;
            }

            // 立刻关闭面板
            dialog.dismiss();

            // 然后开始显示加载圈和后台处理
            ProgressDialog pd = new ProgressDialog(hostContext);
            pd.setMessage("生成中...");
            pd.setCancelable(true);
            pd.setCanceledOnTouchOutside(true);
            pd.getWindow().setType(WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY);
            pd.show();

            new Thread(() -> {
                try {
                    boolean enhance = cbEnhance.isChecked();
                    new Handler(Looper.getMainLooper()).post(() -> pd.setMessage("正在生成图片..."));
                    
                    int bgColor = rbBlack.isChecked() ? Color.BLACK : Color.WHITE;
                    
                    String rawPath = generateLogo(lText, rText, leftTextColor, rightBgColor, rightTextColor, fontSize, bgColor, true);
                    if (rawPath == null) {
                        new Handler(Looper.getMainLooper()).post(() -> {
                            sendText(talker, "生成失败");
                            if (pd != null && pd.isShowing()) pd.dismiss();
                        });
                        return;
                    }
                    String finalPath = rawPath;
                    if (enhance) {
                        new Handler(Looper.getMainLooper()).post(() -> pd.setMessage("画质增强中，请稍候..."));
                        String enhancedPath = enhanceImage(rawPath);
                        if (enhancedPath != null) {
                            finalPath = enhancedPath;
                            new File(rawPath).delete();
                            Runnable deleteTask = () -> {
                                try { Thread.sleep(30000); } catch (Exception e) {}
                                new File(finalPath).delete();
                            };
                            new Thread(deleteTask).start();
                        } else {
                            new Handler(Looper.getMainLooper()).post(() -> sendText(talker, "增强失败，已发送原图"));
                        }
                    }
                    new Handler(Looper.getMainLooper()).post(() -> pd.setMessage("正在发送图片..."));
                    sendImage(talker, finalPath, true);
                    
                    if (!enhance) {
                        Runnable deleteTask = () -> {
                            try { Thread.sleep(60000); } catch (Exception e) {}
                            new File(rawPath).delete();
                        };
                        new Thread(deleteTask).start();
                    }
                } catch (Exception e) {
                    new Handler(Looper.getMainLooper()).post(() -> sendText(talker, "发生错误"));
                } finally {
                    new Handler(Looper.getMainLooper()).post(() -> {
                        if (pd != null && pd.isShowing()) {
                            try { pd.dismiss(); } catch (Exception e) {}
                        }
                    });
                }
            }).start();
        });

        dialog.show();
        rbBlack.setChecked(true);
        updatePreview.run();
    });
}

void showColorPicker(Context ctx, TextView colorView, java.util.function.Consumer<String> onColorSelected) {
    AlertDialog colorDialog = new AlertDialog.Builder(ctx)
        .setTitle("选择颜色")
        .create();
    colorDialog.getWindow().setType(WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY);

    LinearLayout grid = new LinearLayout(ctx);
    grid.setOrientation(LinearLayout.VERTICAL);
    grid.setPadding(20, 20, 20, 20);

    int cols = 6;
    LinearLayout row = null;
    for (int i = 0; i < presetColors.length; i++) {
        if (i % cols == 0) {
            row = new LinearLayout(ctx);
            row.setOrientation(LinearLayout.HORIZONTAL);
            grid.addView(row);
        }
        Button btn = new Button(ctx);
        btn.setBackgroundColor(Color.parseColor(presetColors[i]));
        btn.setTag(presetColors[i]);
        btn.setPadding(10, 10, 10, 10);
        LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(0, 60, 1);
        lp.setMargins(4, 4, 4, 4);
        btn.setLayoutParams(lp);
        btn.setOnClickListener(b -> {
            String color = (String) b.getTag();
            colorView.setBackgroundColor(Color.parseColor(color));
            colorDialog.dismiss();
            onColorSelected.accept(color);
        });
        row.addView(btn);
    }

    colorDialog.setView(grid);
    colorDialog.show();
}

String generateLogo(String leftText, String rightText, String leftColorStr, String rightBgStr, String rightTextColorStr, int fontSize, int bgColor, boolean saveToFile) {
    try {
        int width = 800;
        int height = 300;
        int padding = 40;
        int gap = 30;
        int rectPadding = 30;

        Bitmap bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
        Canvas canvas = new Canvas(bitmap);
        canvas.drawColor(bgColor);

        Paint paint = new Paint();
        paint.setAntiAlias(true);
        paint.setTextSize(fontSize);
        paint.setSubpixelText(true);
        paint.setFakeBoldText(true);

        float leftW = paint.measureText(leftText);
        float rightW = paint.measureText(rightText);
        float rectW = rightW + rectPadding * 2;
        float rectH = fontSize + rectPadding * 2;
        float totalW = leftW + gap + rectW + gap * 2;
        float startX = (width - totalW) / 2;
        float textY = height / 2 - (paint.descent() + paint.ascent()) / 2;
        float rectY = height / 2 - rectH / 2;

        paint.setColor(Color.parseColor(leftColorStr));
        canvas.drawText(leftText, startX, textY, paint);

        float rectStartX = startX + leftW + gap;
        paint.setColor(Color.parseColor(rightBgStr));
        canvas.drawRoundRect(rectStartX, rectY, rectStartX + rectW, rectY + rectH, 20, 20, paint);

        paint.setColor(Color.parseColor(rightTextColorStr));
        float textStartX = rectStartX + rectPadding;
        canvas.drawText(rightText, textStartX, textY, paint);

        if (saveToFile) {
            String path = pluginPath + "/logo_" + System.currentTimeMillis() + ".png";
            FileOutputStream fos = new FileOutputStream(path);
            bitmap.compress(Bitmap.CompressFormat.PNG, 100, fos);
            fos.close();
            bitmap.recycle();
            return path;
        } else {
            String path = pluginPath + "/preview_temp.png";
            FileOutputStream fos = new FileOutputStream(path);
            bitmap.compress(Bitmap.CompressFormat.PNG, 100, fos);
            fos.close();
            bitmap.recycle();
            return path;
        }
    } catch (Exception e) {
        return null;
    }
}

class SimpleTextWatcher implements android.text.TextWatcher {
    Runnable callback;
    SimpleTextWatcher(Runnable callback) { this.callback = callback; }
    public void beforeTextChanged(CharSequence s, int start, int count, int after) {}
    public void onTextChanged(CharSequence s, int start, int before, int count) {}
    public void afterTextChanged(android.text.Editable s) { callback.run(); }
}