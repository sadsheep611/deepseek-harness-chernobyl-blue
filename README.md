# Chernobyl Blue for DeepSeek Harness

将 Typora 的 Chernobyl Blue 配色改编为 DeepSeek Harness 桌面版主题。深色模式下有蓝色光晕；浅色模式也有相应配色。光晕层不会挡住鼠标操作。

这是社区适配插件，与 DeepSeek AI、Typora 主题原作者均无官方关联。已在 DeepSeek Harness Desktop `0.2.0-rc.2` 测试。

## 安装

1. 完全退出 DeepSeek Harness。
2. 在可用的 `dsh` 终端运行：

   ```powershell
   dsh plugin --profile desktop add github:sadsheep611/deepseek-harness-chernobyl-blue#v1.0.1
   ```

   如果 Windows 终端找不到 `dsh`，可使用桌面应用安装目录内的 `resources\runtime\cli\bin\dsh.cmd`，例如：

   ```powershell
   & "<安装目录>\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop add github:sadsheep611/deepseek-harness-chernobyl-blue#v1.0.1
   ```

3. 重新打开应用，选择深色主题查看蓝色光晕。

## 卸载

完全退出应用，运行 `dsh plugin --profile desktop remove dsh-chernobyl-blue-local`，然后重新打开。若 `dsh` 不在 PATH 中，请按上面的方式改用应用自带的 `dsh.cmd`。

## 出处与许可

- 原配色与设计灵感：[obscurefreeman 的 Typora Blackout / Chernobyl 主题](https://github.com/obscurefreeman/typora_theme_blackout/releases)，原项目使用 MIT 许可。
- 用户提供的[参考视频（B 站）](https://www.bilibili.com/video/BV1yS421P7xt/)。
- 本仓库是 DeepSeek Harness 的独立适配，使用 MIT 许可，详见 [LICENSE](LICENSE)。没有打包原主题的 CSS 或图片资源。

DeepSeek Harness 仍在开发预览阶段，未来版本可能需要调整插件接口。插件只更改界面外观；系统主题选项仍可使用。
