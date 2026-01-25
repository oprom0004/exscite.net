# Public 静态资源文件夹

这个文件夹用于存放 Next.js 项目的静态资源文件。

## 📁 文件说明

### 当前文件
- `favicon.ico` - 网站图标（浏览器标签页显示）
- `logo.svg` - HighVolt.SYS Logo（SVG 格式）

### 建议添加的文件

#### SEO 相关
```
public/
├── favicon.ico          # 16x16, 32x32 图标
├── apple-touch-icon.png # 180x180 iOS 图标
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── favicon-16x16.png
├── favicon-32x32.png
└── manifest.json        # PWA 配置
```

#### 社交媒体分享图片
```
public/
├── og-image.png         # 1200x630 Open Graph 图片
└── twitter-image.png    # 1200x600 Twitter Card 图片
```

#### 其他资源
```
public/
├── robots.txt           # 搜索引擎爬虫规则（可选，我们使用 app/robots.ts）
├── sitemap.xml          # 站点地图（可选，我们使用 app/sitemap.ts）
└── fonts/               # 自定义字体文件
```

## 🔗 访问方式

public 文件夹中的文件可以直接通过根路径访问：

```tsx
// 在代码中引用
<Image src="/logo.svg" alt="Logo" />

// 浏览器直接访问
https://exscite.net/logo.svg
```

## ⚠️ 注意事项

1. **不要**将敏感信息放在这个文件夹
2. **不要**放置过大的文件（影响加载速度）
3. 图片建议使用现代格式（WebP, AVIF）
4. 为图片添加适当的压缩

## 🎨 Logo 使用

项目 Logo (`logo.svg`) 包含：
- HighVolt.SYS 品牌标识
- 闪电符号（代表高压电）
- 工业风格配色

可用于：
- 网站 Header
- Footer
- 社交媒体
- 文档

---

**提示**: 如果需要添加真实的 favicon 或其他图片，请替换 `favicon.ico` 文件。
