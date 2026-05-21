# FkWeChat 插件仓库

## API

### 获取插件列表

```
GET https://YunJavaPro.github.io/FkWeChat_Plugin/api/plugins.json
```

返回格式：
```json
[
  {
    "author": "作者名",
    "name": "插件名称",
    "description": "插件描述",
    "downloadUrl": "下载链接",
    "version": "版本号",
    "readme": "插件说明"
  }
]
```

## 贡献插件

1. Fork 此仓库
2. 在 `main/plugins/` 目录下创建文件夹，命名为插件名
3. 在该文件夹中添加核心文件 (`main.java` 和 `info.prop`)
4. 提交 Pull Request
