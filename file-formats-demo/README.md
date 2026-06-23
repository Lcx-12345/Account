# 文件格式演示

本目录包含各种文件格式的示例，分为支持和不支持两类。

## 目录结构

```
file-formats-demo/
├── supported/          # 支持直接生成的文件格式
│   ├── demo.md         # Markdown 文档
│   ├── demo.html       # HTML 网页
│   ├── demo.css        # CSS 样式表
│   ├── demo.js         # JavaScript 脚本
│   ├── demo.py         # Python 代码
│   ├── demo.json       # JSON 数据
│   ├── demo.yaml       # YAML 数据
│   ├── demo.xml        # XML 数据
│   ├── demo.csv        # CSV 表格数据
│   ├── demo.svg        # SVG 矢量图形
│   └── demo-presentation.html  # HTML 演示文稿（PPT替代）
└── unsupported/        # 不支持直接生成的文件格式说明
    └── README.md       # 详细说明文档
```

## 支持的文件格式

| 格式 | 扩展名 | 类型 | 示例文件 |
|------|--------|------|----------|
| Markdown | .md | 文档 | [demo.md](supported/demo.md) |
| HTML | .html | 网页 | [demo.html](supported/demo.html) |
| CSS | .css | 样式表 | [demo.css](supported/demo.css) |
| JavaScript | .js | 代码 | [demo.js](supported/demo.js) |
| Python | .py | 代码 | [demo.py](supported/demo.py) |
| JSON | .json | 数据 | [demo.json](supported/demo.json) |
| YAML | .yaml | 数据 | [demo.yaml](supported/demo.yaml) |
| XML | .xml | 数据 | [demo.xml](supported/demo.xml) |
| CSV | .csv | 表格 | [demo.csv](supported/demo.csv) |
| SVG | .svg | 图像 | [demo.svg](supported/demo.svg) |
| 演示文稿 | .html | 演示 | [demo-presentation.html](supported/demo-presentation.html) |

## 不支持的文件格式

以下二进制文件格式无法直接生成，详细说明请查看 [unsupported/README.md](unsupported/README.md)：

- **压缩格式**: ZIP, RAR, 7Z
- **办公文档**: PPT/PPTX, Word/DOCX, Excel/XLSX, PDF
- **位图图像**: PNG, JPEG, GIF
- **音视频**: MP3, MP4
- **数据库**: SQLite
- **可执行文件**: EXE, BIN 等

## 特点

### 文本格式的优势
- 易于版本控制（Git 友好）
- 人类可读、可编辑
- 跨平台兼容性好
- 文件体积小

### 二进制格式的替代方案
- 使用纯文本格式作为替代
- 使用脚本语言生成二进制文件
- 使用专门的转换工具
