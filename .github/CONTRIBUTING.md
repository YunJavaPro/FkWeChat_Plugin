# 贡献指南

欢迎并感谢您为 FkWeChat 插件仓库贡献插件！请参考以下指南快速提交您的代码。

## 1. 提交插件的两种方式

### 方式 A：网页端直接提交
1. 在本仓库的 `main/plugins/` 目录下，点击右上角的 `Add file` -> `Create new file`。
2. 在输入框填入您的插件名和文件名，例如：`my_plugin/main.java`。
3. 粘贴代码后，点击页面底部的 `Propose new file`。
4. 重复此操作，把 `info.prop` 和 `README.md` 也加到这个文件夹里。
5. 全部传完后，点击 `Create pull request` 即可。

### 方式 B：使用 Git 本地提交
1. **Fork** 本仓库并 **Clone** 到本地。
2. 在 `main/plugins/` 下新建您的插件文件夹。
3. 放入代码文件后，提交 (Commit) 并推送 (Push) 到您的个人仓库。
4. 回到本仓库主页，点击 `New pull request`。

## 2. 插件目录与文件规范

提交的插件必须符合以下结构（**文件夹请使用纯英文或拼音**，勿用中文）：

```text
main/plugins/
  └── your_plugin_name/      <-- 你的插件文件夹
      ├── main.java          <-- 必填：核心逻辑代码
      ├── info.prop          <-- 必填：插件配置信息
      └── README.md          <-- 可选：插件图文使用说明
```

### info.prop 内容模板

系统会自动读取该文件展示在网页上，请确保使用 **UTF-8** 编码格式，内容参考如下：

```properties
name=插件名称
author=作者名
version=1.0.0
desc=简要描述 (可选)
```

## 3. 提交 PR 注意事项

- 提交 Pull Request 时，输入框会自动出现一个模板，请根据提示勾选完成清单 `[x]`。
- 建议的标题格式：`feat: 增加 [你的插件名] 插件`。
- 提交后，请等待维护者 Review 代码，合并后您的插件就会自动出现在 网站/接口 上！