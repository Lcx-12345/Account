"""
Python 文件示例

这是一个展示 Python 语言特性的示例文件，
包含了常用的语法和设计模式。
"""

from typing import List, Dict, Optional
from dataclasses import dataclass
from datetime import datetime


@dataclass
class User:
    id: int
    name: str
    email: str
    created_at: datetime = datetime.now()

    def greet(self) -> str:
        return f"你好，我是 {self.name}！"


class FileManager:
    def __init__(self, base_path: str = "."):
        self.base_path = base_path
        self._files: Dict[str, str] = {}

    def add_file(self, filename: str, content: str) -> None:
        self._files[filename] = content

    def get_file(self, filename: str) -> Optional[str]:
        return self._files.get(filename)

    def list_files(self) -> List[str]:
        return sorted(self._files.keys())

    def __len__(self) -> int:
        return len(self._files)

    def __repr__(self) -> str:
        return f"FileManager(files={len(self._files)})"


def fibonacci(n: int) -> List[int]:
    result = []
    a, b = 0, 1
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result


def main():
    print("=== Python 示例演示 ===")

    user = User(id=1, name="张三", email="zhangsan@example.com")
    print(user.greet())

    fm = FileManager()
    fm.add_file("readme.txt", "这是一个说明文件")
    fm.add_file("data.json", '{"key": "value"}')

    print(f"文件管理器中有 {len(fm)} 个文件")
    print("文件列表:", fm.list_files())

    print("斐波那契数列前10项:", fibonacci(10))


if __name__ == "__main__":
    main()
