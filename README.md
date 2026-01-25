# Exscite.net - High Voltage DC Power Supply Technical Hub

一个 SEO 优化的 Next.js 技术文档网站,专注于高压直流电源供应系统(600V-1000V)。

## 🚀 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **部署**: 支持静态导出和服务器端渲染

## 📁 项目结构

```
exscite.net/
├── src/
│   ├── app/                                          # Next.js App Router
│   │   ├── layout.tsx                                # 根布局
│   │   ├── page.tsx                                  # 首页
│   │   ├── globals.css                               # 全局样式
│   │   ├── sitemap.ts                                # 自动生成 sitemap.xml
│   │   ├── robots.ts                                 # 自动生成 robots.txt
│   │   ├── programmable-high-voltage-dc-supply-600v-1000v/
│   │   │   └── page.tsx                              # 选型指南页面
│   │   ├── high-voltage-variable-dc-technology-safety/
│   │   │   └── page.tsx                              # 安全技术页面
│   │   ├── hv-dc-power-supply-applications-capacitor-charging/
│   │   │   └── page.tsx                              # 应用案例页面
│   │   └── digital-high-voltage-power-supply-cost/
│   │       └── page.tsx                              # 成本分析页面
│   └── components/                                   # React 组件
│       ├── Navigation.tsx                            # 导航栏
│       ├── Footer.tsx                                # 页脚
│       ├── HeroSection.tsx                           # Hero 区块
│       ├── IndustrialCard.tsx                        # 工业卡片
│       └── StructuredData.tsx                        # JSON-LD 结构化数据
├── next.config.mjs                                   # Next.js 配置
├── tailwind.config.ts                                # Tailwind 配置
├── tsconfig.json                                     # TypeScript 配置
└── package.json                                      # 项目依赖
```

## 🎯 SEO 优化特性

### 1. **元数据优化**
- ✅ 每个页面都有独立的 `metadata` 配置
- ✅ 完整的 Open Graph 标签
- ✅ Twitter Card 支持
- ✅ 规范链接 (canonical URLs)
- ✅ 关键词优化

### 2. **结构化数据 (JSON-LD)**
- ✅ 所有页面都包含 Schema.org 结构化数据
- ✅ 使用 `Article` 和 `TechArticle` 类型
- ✅ 包含作者、发布日期、修改日期等信息

### 3. **自动生成的 SEO 文件**
- ✅ `sitemap.xml` - 自动生成站点地图
- ✅ `robots.txt` - 搜索引擎爬虫指令

### 4. **性能优化**
- ✅ 服务器端渲染 (SSR)
- ✅ 自动代码分割
- ✅ 图片优化 (AVIF/WebP)
- ✅ 压缩输出
- ✅ 移除生产环境 console 日志

### 5. **安全头部**
- ✅ Strict-Transport-Security
- ✅ X-Frame-Options
- ✅ X-Content-Type-Options
- ✅ Referrer-Policy

## 🛠️ 开发命令

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# 代码检查
npm run lint
```

## 📄 页面列表

1. **首页** (`/`)
   - 高压直流电源总览
   - 数字控制技术介绍
   - 关键电压范围说明

2. **选型指南** (`/programmable-high-voltage-dc-supply-600v-1000v`)
   - 600V vs 1000V 对比
   - 精度要求分析
   - 推荐型号

3. **安全技术** (`/high-voltage-variable-dc-technology-safety`)
   - 放电电路
   - 电弧检测
   - 电气隔离

4. **应用案例** (`/hv-dc-power-supply-applications-capacitor-charging`)
   - 电容充电
   - 光伏模拟
   - EV 组件老化测试

5. **成本分析** (`/digital-high-voltage-power-supply-cost`)
   - 绝缘溢价
   - 模拟 vs 数字对比
   - TCO 分析

## 🎨 设计系统

### 颜色方案
```css
--hv-yellow: #FACC15  /* 主要强调色 */
--hv-red: #EF4444     /* 警告/危险色 */
--hv-black: #0A0A0A   /* 背景色 */
```

### 排版
- 主字体: Inter (Google Fonts)
- 代码字体: Monospace
- 响应式设计,支持移动端

## 📊 SEO 检查清单

- [x] 所有页面都有唯一的 title 和 description
- [x] 使用语义化 HTML 标签 (h1, h2, article, section)
- [x] 图片都有 alt 属性
- [x] 内部链接使用 Next.js Link 组件
- [x] 外部链接使用 rel="noopener noreferrer"
- [x] 移动端友好 (响应式设计)
- [x] 快速加载时间
- [x] 结构化数据标记
- [x] Sitemap 和 Robots.txt

## 🚀 部署

### Vercel (推荐)
```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### 其他平台
项目支持标准的 Next.js 部署流程,可以部署到:
- Netlify
- AWS Amplify
- Cloudflare Pages
- 自托管服务器

## 📈 性能指标目标

- Lighthouse SEO 分数: 100
- 首次内容绘制 (FCP): < 1.5s
- 最大内容绘制 (LCP): < 2.5s
- 累积布局偏移 (CLS): < 0.1

## 🔗 相关链接

- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Google Search Console](https://search.google.com/search-console)

## 📝 许可证

Private - All rights reserved

---

**维护者**: HighVolt.SYS  
**最后更新**: 2026-01-25
