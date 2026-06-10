# 格式示例与说明

本目录用于演示我在对话中“直接生成/编辑”的常见文本类文件，以及通过脚本“间接生成”的二进制类文件（如 pptx、zip）。

## 直接支持（文本类）

这些格式本质是纯文本，我可以直接生成、修改、审阅与 diff：

- Markdown：sample.md
- HTML：sample.html
- SVG：sample.svg
- Python：sample.py
- JSON：sample.json

## 间接支持（需要生成流程的二进制类）

这些格式通常是二进制，无法在对话中以“可读、可 diff 的源文本”形式稳定表达，但可以通过脚本在工作区生成：

- PowerPoint：output/sample.pptx（用标准库 zipfile 打包 Office Open XML 结构）
- Zip 压缩包：output/sample.zip

生成方式：

```bash
python /workspace/format_samples/generate_binary.py
```

## 不支持（直接生成层面）

以下类型不适合在对话中直接“以原始文件形态”生成/编辑（尤其是需要严格二进制布局或专用编译器/打包器的场景）：

- 传统二进制 Office 老格式（.ppt/.doc/.xls）
- 多媒体容器（.mp4/.mov/.mp3）
- 需要特定编译/链接的产物（.exe/.dylib/.so 等）

但我仍然可以提供生成脚本、构建命令、或可复现的构建流程，帮助你产出这些文件。

