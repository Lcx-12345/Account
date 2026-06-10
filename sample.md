# 文件格式支持说明

本文档展示了支持和不支持的文件格式，以及相关代码示例。

## 支持的文件格式

### 文本文件
- **.txt** - 纯文本文件
- **.md** - Markdown 标记语言
- **.rst** - reStructuredText

### 编程语言
- **.py** - Python
- **.js** - JavaScript
- **.ts** - TypeScript
- **.java** - Java

### Web 相关
- **.html** - 超文本标记语言
- **.css** - 层叠样式表

### 数据格式
- **.json** - JavaScript 对象表示法
- **.yaml** - YAML 标记语言

### 矢量图形
- **.svg** - 可缩放矢量图形

## 不支持的文件格式

| 类型 | 格式 | 说明 |
|------|------|------|
| 压缩文件 | .zip, .rar, .7z | 二进制压缩包 |
| 办公文档 | .ppt, .doc, .xls | Microsoft Office |
| 文档 | .pdf | 便携式文档格式 |
| 图像 | .jpg, .png, .gif | 位图图像 |
| 视频 | .mp4, .avi, .mov | 视频文件 |

## 代码示例

### Python 示例

```python
def greet(name: str) -> str:
    """返回问候语"""
    return f"Hello, {name}!"

if __name__ == "__main__":
    print(greet("World"))
```

### JavaScript 示例

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('World'));
```

### JSON 示例

```json
{
    "name": "文件格式支持",
    "version": "1.0",
    "supported": ["html", "md", "py", "json", "svg"],
    "unsupported": ["zip", "ppt", "pdf", "jpg"],
    "description": "展示支持的文件格式"
}
```

## 总结

- **支持**：所有纯文本格式、源代码文件、JSON、SVG 等
- **不支持**：二进制文件、压缩包、多媒体文件、Office文档等

> 提示：对于不支持的格式，需要使用专门的工具进行处理。