const FileDemo = (function() {
    const supportedFormats = [
        { name: 'Markdown', extension: '.md', category: '文档', binary: false },
        { name: 'HTML', extension: '.html', category: '网页', binary: false },
        { name: 'Python', extension: '.py', category: '代码', binary: false },
        { name: 'JSON', extension: '.json', category: '数据', binary: false },
        { name: 'SVG', extension: '.svg', category: '图像', binary: false }
    ];

    const settings = {
        theme: 'light',
        language: 'zh-CN',
        autoSave: true,
        maxFileSize: 10485760
    };

    class FileManager {
        constructor() {
            this.files = new Map();
        }

        addFile(filename, content) {
            this.files.set(filename, content);
            console.log(`文件 ${filename} 已添加`);
        }

        getFile(filename) {
            return this.files.get(filename) || null;
        }

        deleteFile(filename) {
            return this.files.delete(filename);
        }

        listFiles() {
            return Array.from(this.files.keys());
        }

        getFileCount() {
            return this.files.size;
        }
    }

    function formatFileSize(bytes) {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    async function fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('获取数据失败:', error);
            throw error;
        }
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function init() {
        console.log('=== 文件格式演示 ===');
        console.log('支持的格式:', supportedFormats);
        console.log('设置:', settings);

        const fm = new FileManager();
        fm.addFile('readme.md', '# Hello World');
        fm.addFile('data.json', '{"key": "value"}');

        console.log('文件列表:', fm.listFiles());
        console.log('文件数量:', fm.getFileCount());
        console.log('文件大小格式化:', formatFileSize(1048576));
    }

    return {
        FileManager,
        formatFileSize,
        fetchData,
        debounce,
        init,
        supportedFormats,
        settings
    };
})();

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        FileDemo.init();
    });
} else if (typeof module !== 'undefined' && module.exports) {
    module.exports = FileDemo;
}
