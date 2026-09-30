# Chernobyl Blue for DeepSeek Harness

将 Typora 的 Chernobyl Blue 配色改编为 DeepSeek Harness 桌面版主题。浅色和深色模式均带有蓝色光晕，始终跟随并水平居中于聊天输入框下方。光晕层不会挡住鼠标操作。权限、模型和其他共用菜单支持半透明毛玻璃：背景模糊，菜单文字保持清晰；浅色和深色模式均适用。

这是社区适配插件，与 DeepSeek AI、Typora 主题原作者均无官方关联。已在 DeepSeek Harness Desktop `0.2.0-rc.2` 测试。

## 桌面端安装

1. 打开 DeepSeek Harness 桌面应用。
2. 在左侧导航栏打开“插件”（Plugins）页面，点击“添加插件”（Add plugin）。
3. 在插件来源输入框中粘贴下面这一行，然后点击安装：

   ```text
   github:sadsheep611/deepseek-harness-chernobyl-blue#v1.0.5
   ```

4. 安装完成后点击“立即启用”（Enable now）。如果页面提示重启应用，请按提示重启。
5. 浅色和深色模式的蓝色光晕会保持在聊天输入框下方。

桌面端插件页会调用应用自带的安装器，不需要另外安装 Node.js、pnpm 或命令行工具。

## 卸载

在左侧“插件”（Plugins）页面的“已安装”（Installed）列表中找到 Chernobyl Blue，选择卸载并确认；若页面要求重启，请重启应用。

## 出处与许可

- 原配色与设计灵感：[obscurefreeman 的 Typora Blackout / Chernobyl 主题](https://github.com/obscurefreeman/typora_theme_blackout/releases)，原项目使用 MIT 许可。
- 用户提供的[参考视频（B 站）](https://www.bilibili.com/video/BV1yS421P7xt/)。
- 本仓库是 DeepSeek Harness 的独立适配，使用 MIT 许可，详见 [LICENSE](LICENSE)。没有打包原主题的 CSS 或图片资源。

DeepSeek Harness 仍在开发预览阶段，未来版本可能需要调整插件接口。插件只更改界面外观；系统主题选项仍可使用。

