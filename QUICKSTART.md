# 快速入门指南

## 🚀 5 分钟启动项目

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 3. 构建生产版本

```bash
npm run build
```

### 4. 启动生产服务器

```bash
npm run start
```

## 📁 项目结构速览

```
src/
├── app/                    # 页面路由
│   ├── page.tsx           # 首页
│   ├── layout.tsx         # 全局布局
│   ├── sitemap.ts         # SEO: Sitemap
│   ├── robots.ts          # SEO: Robots.txt
│   └── [页面目录]/
│       └── page.tsx       # 各个页面
└── components/            # 可复用组件
    ├── Navigation.tsx     # 导航栏
    ├── Footer.tsx         # 页脚
    └── HeroSection.tsx    # Hero 区块
```

## 🎯 主要页面

| 路由 | 文件位置 | 说明 |
|------|---------|------|
| `/` | `src/app/page.tsx` | 首页 |
| `/programmable-high-voltage-dc-supply-600v-1000v` | `src/app/programmable-high-voltage-dc-supply-600v-1000v/page.tsx` | 选型指南 |
| `/high-voltage-variable-dc-technology-safety` | `src/app/high-voltage-variable-dc-technology-safety/page.tsx` | 安全技术 |
| `/hv-dc-power-supply-applications-capacitor-charging` | `src/app/hv-dc-power-supply-applications-capacitor-charging/page.tsx` | 应用案例 |
| `/digital-high-voltage-power-supply-cost` | `src/app/digital-high-voltage-power-supply-cost/page.tsx` | 成本分析 |

## ✏️ 如何添加新页面

### 方法 1: 创建新的页面目录

```bash
# 1. 创建页面目录
mkdir -p src/app/new-page

# 2. 创建页面文件
touch src/app/new-page/page.tsx
```

### 方法 2: 编辑页面模板

```typescript
// src/app/new-page/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '页面标题',
  description: '页面描述',
  // ... 其他 SEO 元数据
};

export default function NewPage() {
  return (
    <div>
      <h1>新页面内容</h1>
    </div>
  );
}
```

### 方法 3: 更新 Sitemap

```typescript
// src/app/sitemap.ts
// 添加新页面到 sitemap 数组中
{
  url: `${baseUrl}/new-page`,
  lastModified: currentDate,
  changeFrequency: 'monthly',
  priority: 0.8,
}
```

## 🎨 修改样式

### 全局样式
编辑 `src/app/globals.css`

### Tailwind 配置
编辑 `tailwind.config.ts`

### 自定义颜色
```typescript
// tailwind.config.ts
colors: {
  'hv-yellow': '#FACC15',
  'hv-red': '#EF4444',
  'hv-black': '#0A0A0A',
}
```

## 🔧 常用命令

```bash
# 开发
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
npm run start        # 启动生产服务器
npm run lint         # 代码检查

# 部署
vercel               # 部署到 Vercel
```

## 📊 SEO 检查

### 本地测试
1. 访问 `http://localhost:3000/sitemap.xml`
2. 访问 `http://localhost:3000/robots.txt`
3. 查看页面源代码,检查 meta 标签

### 在线工具
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## 🐛 常见问题

### Q: 页面没有显示?
A: 检查文件名是否为 `page.tsx`,目录结构是否正确。

### Q: 样式没有生效?
A: 确保 Tailwind CSS 类名正确,检查 `tailwind.config.ts` 配置。

### Q: 构建失败?
A: 运行 `npm run lint` 检查代码错误。

### Q: 如何修改网站标题?
A: 编辑 `src/app/layout.tsx` 中的 `metadata` 对象。

## 📚 更多资源

- [完整文档](./README.md)
- [SEO 优化报告](./SEO-OPTIMIZATION.md)
- [Next.js 官方文档](https://nextjs.org/docs)

---

**需要帮助?** 查看完整的 [README.md](./README.md) 文档。
