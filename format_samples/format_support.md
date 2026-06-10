# 我对文件格式的支持边界（实用版）

## 1) 直接支持（可在对话里“像写代码一样”生成与迭代）

共同点：纯文本、可 diff、可审阅。

- 文档：.md .txt .rst
- 网页：.html .css .js .ts
- 数据：.json .yaml .toml .csv
- 矢量：.svg
- 代码：.py .go .java .m/.h 等

对应示例位于本目录：

- sample.md / sample.html / sample.svg / sample.py / sample.json

## 2) 间接支持（可提供“可复现生成流程”，在工作区产出文件）

共同点：多数为二进制容器或需要打包/编译，直接在对话里很难稳定表达。

- .pptx/.docx/.xlsx（本质是 zip + XML 目录结构）
- .zip（压缩容器）
- .pdf（通常需要排版/渲染引擎或外部工具链）

本目录提供标准库脚本生成示例：

- generate_binary.py 生成 output/sample.pptx 与 output/sample.zip

## 3) 基本不支持（不建议让我“凭空产出最终文件”，但可以协助生成）

共同点：强依赖专用编译器、编解码器、或二进制布局严苛。

- 多媒体：.mp4 .mov .mp3
- 原生二进制：.exe .dll .so
- 专有/老旧二进制格式：.ppt（非 pptx）等

