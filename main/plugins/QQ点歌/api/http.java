import okhttp3.*
import java.time.Duration

client = new OkHttpClient.Builder()
    .connectTimeout(Duration.ofSeconds(30))
    .callTimeout(Duration.ofSeconds(30))
    .readTimeout(Duration.ofSeconds(30))
    .build()

addHeaders(builder, header) {
    if (!header?.isEmpty()) {
        for (Map.Entry entry : header.entrySet()) {
            key = "${entry.getKey()}"
            value = "${entry.getValue()}"
            builder.addHeader(key, value)
        }
    }
}

doRequest(builder) {
    try {
        request = builder.build()
        response = client.newCall(request).execute()
        body = response?.body()?.string() ?: ""
        response.close()
        return body
    } catch (e) {
        return null
    }
}

get(
    url, callback,
    header = null
) {
    new Thread(() -> {
        builder = new Request.Builder().url(url).get()
        addHeaders(builder, header)
        result = doRequest(builder)
        callback?.onResult(result)
    }).start()
}

post(
    url, data, callback,
    header = null
) {
    new Thread(() -> {
        mediaType = "application/json"
        if (header?.containsKey("Content-Type")) {
            mediaType = String.valueOf(header.get("Content-Type"))
        }
        body = RequestBody.create(
            MediaType.parse(mediaType),
            data ?: ""
        )
        builder = new Request.Builder().url(url).post(body)
        addHeaders(builder, header)
        result = doRequest(builder)
        callback?.onResult(result)
    }).start()
}