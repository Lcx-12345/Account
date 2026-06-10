#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
文件格式支持示例 - Python 版本

本脚本展示了支持的文件格式列表，并提供了一些实用功能。
"""

import json
from typing import List, Dict, Any


class FileFormatManager:
    """文件格式管理器"""
    
    def __init__(self):
        self.supported_formats = {
            'text': ['.txt', '.md', '.rst'],
            'programming': ['.py', '.js', '.ts', '.java', '.go', '.rs'],
            'web': ['.html', '.css', '.jsx', '.tsx'],
            'data': ['.json', '.yaml', '.yml', '.xml', '.csv'],
            'vector': ['.svg'],
            'config': ['.ini', '.conf', '.toml']
        }
        
        self.unsupported_formats = {
            'compressed': ['.zip', '.tar', '.gz', '.7z', '.rar'],
            'office': ['.ppt', '.pptx', '.doc', '.docx', '.xls', '.xlsx'],
            'documents': ['.pdf'],
            'images': ['.jpg', '.jpeg', '.png', '.gif', '.bmp'],
            'video': ['.mp4', '.avi', '.mov', '.mkv'],
            'audio': ['.mp3', '.wav', '.flac'],
            'executable': ['.exe', '.dll', '.so', '.dylib']
        }
    
    def get_all_supported(self) -> List[str]:
        """获取所有支持的文件格式"""
        all_formats = []
        for category in self.supported_formats.values():
            all_formats.extend(category)
        return sorted(all_formats)
    
    def get_all_unsupported(self) -> List[str]:
        """获取所有不支持的文件格式"""
        all_formats = []
        for category in self.unsupported_formats.values():
            all_formats.extend(category)
        return sorted(all_formats)
    
    def is_supported(self, filename: str) -> bool:
        """检查文件是否支持"""
        for category in self.supported_formats.values():
            for ext in category:
                if filename.lower().endswith(ext):
                    return True
        return False
    
    def get_category(self, filename: str) -> str:
        """获取文件所属类别"""
        filename_lower = filename.lower()
        
        for category, formats in self.supported_formats.items():
            for ext in formats:
                if filename_lower.endswith(ext):
                    return category
        
        for category, formats in self.unsupported_formats.items():
            for ext in formats:
                if filename_lower.endswith(ext):
                    return category
        
        return 'unknown'
    
    def to_json(self) -> str:
        """转换为JSON字符串"""
        data = {
            'supported': self.supported_formats,
            'unsupported': self.unsupported_formats,
            'description': '文件格式支持列表',
            'generated_at': '2024-01-15'
        }
        return json.dumps(data, ensure_ascii=False, indent=2)


def main():
    """主函数"""
    manager = FileFormatManager()
    
    print("=" * 50)
    print("文件格式支持检查器")
    print("=" * 50)
    
    print("\n【支持的文件格式】")
    for category, formats in manager.supported_formats.items():
        print(f"- {category}: {', '.join(formats)}")
    
    print("\n【不支持的文件格式】")
    for category, formats in manager.unsupported_formats.items():
        print(f"- {category}: {', '.join(formats)}")
    
    test_files = ['report.md', 'data.json', 'archive.zip', 'image.jpg', 'script.py']
    print("\n【文件格式检测示例】")
    for filename in test_files:
        supported = manager.is_supported(filename)
        category = manager.get_category(filename)
        status = "✓ 支持" if supported else "✗ 不支持"
        print(f"- {filename}: {status} ({category})")
    
    print("\n【JSON格式输出】")
    print(manager.to_json())


if __name__ == "__main__":
    main()