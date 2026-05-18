import java.io.*;
import java.net.*;
import java.util.*;
import android.util.Base64;

// 网络请求工具类
String get(String url, Map<String, String> headers) {
    try {
        HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();
        conn.setConnectTimeout(15000);
        conn.setReadTimeout(15000);
        if (headers != null) {
            for (Map.Entry<String, String> entry : headers.entrySet()) {
                conn.setRequestProperty(entry.getKey(), entry.getValue());
            }
        }
        conn.connect();
        if (conn.getResponseCode() == 200) {
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = br.readLine()) != null) sb.append(line);
            br.close();
            conn.disconnect();
            return sb.toString();
        } else {
            return null;
        }
    } catch (Exception e) {
        return null;
    }
}

String postJson(String url, String json, Map<String, String> headers) {
    try {
        HttpURLConnection conn = (HttpURLConnection) new URL(url).openConnection();
        conn.setRequestMethod("POST");
        conn.setDoOutput(true);
        conn.setConnectTimeout(15000);
        conn.setReadTimeout(15000);
        conn.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
        if (headers != null) {
            for (Map.Entry<String, String> entry : headers.entrySet()) {
                conn.setRequestProperty(entry.getKey(), entry.getValue());
            }
        }
        DataOutputStream dos = new DataOutputStream(conn.getOutputStream());
        dos.write(json.getBytes("UTF-8"));
        dos.flush();
        dos.close();
        if (conn.getResponseCode() == 200) {
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = br.readLine()) != null) sb.append(line);
            br.close();
            conn.disconnect();
            return sb.toString();
        } else {
            return null;
        }
    } catch (Exception e) {
        return null;
    }
}

// 上传图片进行画质增强（multipart/form-data）
String enhanceImage(String localPath) {
    try {
        String apiUrl = "这里填写接口地址";
        String boundary = "----FkWeChatBoundary" + System.currentTimeMillis();
        File imgFile = new File(localPath);
        URL url = new URL(apiUrl);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("POST");
        conn.setDoOutput(true);
        conn.setConnectTimeout(30000);
        conn.setReadTimeout(120000);
        conn.setRequestProperty("Content-Type", "multipart/form-data; boundary=" + boundary);

        DataOutputStream dos = new DataOutputStream(conn.getOutputStream());
        dos.writeBytes("--" + boundary + "\r\n");
        dos.writeBytes("Content-Disposition: form-data; name=\"image\"; filename=\"" + imgFile.getName() + "\"\r\n");
        dos.writeBytes("Content-Type: image/png\r\n\r\n");
        FileInputStream fis = new FileInputStream(imgFile);
        byte[] buf = new byte[4096];
        int len;
        while ((len = fis.read(buf)) != -1) dos.write(buf, 0, len);
        fis.close();
        dos.writeBytes("\r\n--" + boundary + "--\r\n");
        dos.flush();
        dos.close();

        int code = conn.getResponseCode();
        if (code != 200) return null;

        BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = br.readLine()) != null) sb.append(line);
        br.close();
        conn.disconnect();

        String json = sb.toString();
        String base64 = extractJsonString(json, "image");
        if (base64.isEmpty()) return null;

        byte[] imgBytes = Base64.decode(base64, Base64.DEFAULT);
        String outPath = pluginPath + "/enhanced_" + System.currentTimeMillis() + ".png";
        FileOutputStream fos = new FileOutputStream(outPath);
        fos.write(imgBytes);
        fos.flush();
        fos.close();
        return outPath;
    } catch (Exception e) {
        return null;
    }
}

String extractJsonString(String json, String key) {
    try {
        java.util.regex.Pattern p = java.util.regex.Pattern.compile("\"" + key + "\"\\s*:\\s*\"([^\"]*)\"");
        java.util.regex.Matcher m = p.matcher(json);
        if (m.find()) return m.group(1);
    } catch (Exception e) {}
    return "";
}