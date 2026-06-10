## 支持的文件格式清单

### 文本文件
- `.txt` - 纯文本文件
- `.md` - Markdown 标记语言
- `.rst` - reStructuredText
- `.csv` - 逗号分隔值表格

### 数据交换格式
- `.json` - JavaScript 对象表示法
- `.yaml` / `.yml` - YAML 标记语言
- `.xml` - 可扩展标记语言

### 编程语言
- `.py` - Python
- `.js` - JavaScript
- `.ts` - TypeScript
- `.java` - Java
- `.go` - Go
- `.rs` - Rust
- `.c` - C
- `.cpp` / `.cxx` - C++
- `.php` - PHP
- `.rb` - Ruby
- `.swift` - Swift
- `.kotlin` - Kotlin

### Web 相关
- `.html` - 超文本标记语言
- `.css` - 层叠样式表
- `.jsx` - React JSX
- `.tsx` - React TypeScript JSX

### 配置文件
- `.ini` - 初始化配置文件
- `.conf` - 配置文件
- `.toml` - TOML 配置格式

### 矢量图形
- `.svg` - 可缩放矢量图形

---

## 不支持的文件格式

### 压缩文件
- `.zip` - ZIP 压缩包
- `.tar` - TAR 归档
- `.gz` - GZIP 压缩
- `.7z` - 7-Zip 压缩
- `.rar` - RAR 压缩

### 二进制可执行文件
- `.exe` - Windows 可执行文件
- `.dll` - Windows 动态链接库
- `.so` - Linux 共享对象
- `.dylib` - macOS 动态库

### 多媒体文件
- `.jpg` / `.jpeg` - JPEG 图像
- `.png` - PNG 图像
- `.gif` - GIF 动画
- `.bmp` - BMP 图像
- `.mp4` - MP4 视频
- `.mp3` - MP3 音频
- `.avi` - AVI 视频
- `.mov` - QuickTime 视频

### 办公文档（需专门工具）
- `.ppt` / `.pptx` - PowerPoint 演示文稿
- `.doc` / `.docx` - Word 文档
- `.xls` / `.xlsx` - Excel 电子表格
- `.pdf` - PDF 文档

### 数据库文件
- `.db` - SQLite 数据库
- `.mdb` - Access 数据库

---

## 格式支持说明

| 格式类型 | 支持程度 | 说明 |
|---------|---------|------|
| 文本/代码 | 完全支持 | 可读可写，支持语法高亮 |
| JSON/YAML/XML | 完全支持 | 支持解析和生成 |
| SVG | 完全支持 | 可读可写，支持基本操作 |
| 压缩文件 | 不支持 | 无法直接读取或创建 |
| 二进制文件 | 不支持 | 无法处理 |
| 多媒体文件 | 不支持 | 无法处理 |
| Office文档 | 有限支持 | 需借助外部工具转换 |