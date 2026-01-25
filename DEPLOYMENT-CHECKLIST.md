# 部署检查清单

## 📋 部署前检查

### 代码检查
- [ ] 运行 `npm run lint` 确保没有错误
- [ ] 运行 `npm run build` 确保构建成功
- [ ] 检查所有页面是否正常显示
- [ ] 测试所有链接是否有效
- [ ] 验证移动端响应式设计

### SEO 检查
- [ ] 验证 sitemap.xml 生成正确 (`/sitemap.xml`)
- [ ] 验证 robots.txt 生成正确 (`/robots.txt`)
- [ ] 检查所有页面的 meta 标签
- [ ] 验证 JSON-LD 结构化数据
- [ ] 确认所有图片都有 alt 属性
- [ ] 检查 canonical URLs 设置

### 性能检查
- [ ] 运行 Lighthouse 测试
- [ ] 检查页面加载速度
- [ ] 验证图片优化
- [ ] 测试代码分割效果
- [ ] 检查 Core Web Vitals

### 安全检查
- [ ] 验证 HTTPS 配置
- [ ] 检查安全头部设置
- [ ] 确认环境变量配置
- [ ] 测试 CORS 设置 (如需要)
- [ ] 验证 CSP 策略 (如有)

## 🚀 部署步骤

### 方式 1: Vercel (推荐)

#### 1. 安装 Vercel CLI
```bash
npm i -g vercel
```

#### 2. 登录 Vercel
```bash
vercel login
```

#### 3. 部署
```bash
# 首次部署
vercel

# 生产环境部署
vercel --prod
```

#### 4. 配置域名
- 在 Vercel 控制台添加自定义域名
- 更新 DNS 记录指向 Vercel
- 等待 SSL 证书自动配置

### 方式 2: Netlify

#### 1. 创建 netlify.toml
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

#### 2. 部署
```bash
# 安装 Netlify CLI
npm i -g netlify-cli

# 登录
netlify login

# 部署
netlify deploy --prod
```

### 方式 3: 自托管

#### 1. 构建
```bash
npm run build
```

#### 2. 启动
```bash
npm run start
```

#### 3. 使用 PM2 (推荐)
```bash
# 安装 PM2
npm i -g pm2

# 启动应用
pm2 start npm --name "exscite-net" -- start

# 保存配置
pm2 save

# 设置开机启动
pm2 startup
```

## 🔧 部署后配置

### 1. Google Search Console

#### 添加网站
1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 添加属性 (域名或 URL 前缀)
3. 验证所有权

#### 提交 Sitemap
```
https://exscite.net/sitemap.xml
```

#### 监控项目
- 索引覆盖率
- 移动可用性
- 核心网页指标
- 搜索性能

### 2. Google Analytics 4

#### 创建属性
1. 访问 [Google Analytics](https://analytics.google.com)
2. 创建新属性
3. 获取测量 ID (G-XXXXXXXXXX)

#### 添加到网站
```typescript
// src/app/layout.tsx
// 在 <head> 中添加
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 3. Bing Webmaster Tools

#### 添加网站
1. 访问 [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. 添加网站
3. 验证所有权

#### 提交 Sitemap
```
https://exscite.net/sitemap.xml
```

### 4. 其他搜索引擎

#### Yandex
- [Yandex Webmaster](https://webmaster.yandex.com)

#### Baidu (如需要)
- [百度站长平台](https://ziyuan.baidu.com)

## 📊 监控设置

### 1. 性能监控

#### Vercel Analytics (如使用 Vercel)
```bash
npm install @vercel/analytics
```

```typescript
// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

#### Web Vitals 监控
```typescript
// src/app/layout.tsx
export function reportWebVitals(metric) {
  console.log(metric);
  // 发送到分析服务
}
```

### 2. 错误监控

#### Sentry (可选)
```bash
npm install @sentry/nextjs
```

配置 Sentry 以监控生产环境错误。

### 3. 正常运行时间监控

推荐服务:
- [UptimeRobot](https://uptimerobot.com)
- [Pingdom](https://www.pingdom.com)
- [StatusCake](https://www.statuscake.com)

## 🔒 安全配置

### 1. 环境变量

创建 `.env.local` (不要提交到 Git):
```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# 其他敏感配置
# ...
```

### 2. 安全头部

已在 `next.config.mjs` 中配置:
- Strict-Transport-Security
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

### 3. HTTPS

确保:
- [ ] 强制 HTTPS 重定向
- [ ] SSL 证书有效
- [ ] HSTS 已启用

## 📈 SEO 提交

### 1. 搜索引擎提交

#### Google
```
https://www.google.com/ping?sitemap=https://exscite.net/sitemap.xml
```

#### Bing
```
https://www.bing.com/ping?sitemap=https://exscite.net/sitemap.xml
```

### 2. 目录提交 (可选)

- Google My Business
- Yelp (如适用)
- 行业相关目录

### 3. 社交媒体

- [ ] 创建 Facebook 页面
- [ ] 创建 Twitter 账号
- [ ] 创建 LinkedIn 页面
- [ ] 其他相关平台

## 🧪 测试清单

### 本地测试
```bash
# 构建测试
npm run build
npm run start

# 访问测试
http://localhost:3000
http://localhost:3000/sitemap.xml
http://localhost:3000/robots.txt
```

### 在线测试工具

#### SEO 测试
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org)
- [SEO Site Checkup](https://seositecheckup.com)

#### 性能测试
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)
- [WebPageTest](https://www.webpagetest.org)

#### 移动端测试
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Responsive Design Checker](https://responsivedesignchecker.com)

#### 安全测试
- [Mozilla Observatory](https://observatory.mozilla.org)
- [Security Headers](https://securityheaders.com)
- [SSL Labs](https://www.ssllabs.com/ssltest/)

## 📝 部署后任务

### 第一天
- [ ] 验证所有页面正常访问
- [ ] 提交 sitemap 到搜索引擎
- [ ] 设置 Google Analytics
- [ ] 设置 Search Console
- [ ] 运行 Lighthouse 测试
- [ ] 检查移动端显示

### 第一周
- [ ] 监控错误日志
- [ ] 检查 Analytics 数据
- [ ] 验证搜索引擎索引
- [ ] 优化发现的问题
- [ ] 收集用户反馈

### 第一个月
- [ ] 分析流量来源
- [ ] 检查关键词排名
- [ ] 优化 SEO 策略
- [ ] 更新内容
- [ ] A/B 测试

## 🔄 持续维护

### 每周
- [ ] 检查 Search Console 错误
- [ ] 监控网站正常运行时间
- [ ] 查看 Analytics 数据
- [ ] 检查安全更新

### 每月
- [ ] 更新依赖包
- [ ] 分析 SEO 表现
- [ ] 优化页面性能
- [ ] 更新内容
- [ ] 备份数据

### 每季度
- [ ] 全面 SEO 审计
- [ ] 竞争对手分析
- [ ] 用户体验优化
- [ ] 技术栈更新
- [ ] 战略调整

## 🆘 故障排除

### 常见问题

#### 1. 构建失败
```bash
# 清理缓存
rm -rf .next node_modules
npm install
npm run build
```

#### 2. 页面 404
- 检查文件路径
- 验证 `page.tsx` 文件名
- 检查 Next.js 配置

#### 3. 样式不显示
- 检查 Tailwind 配置
- 验证 CSS 导入
- 清理构建缓存

#### 4. SEO 数据不显示
- 检查 metadata 配置
- 验证 sitemap 生成
- 查看页面源代码

## 📞 支持资源

### 官方文档
- [Next.js 文档](https://nextjs.org/docs)
- [Vercel 文档](https://vercel.com/docs)
- [Google Search Central](https://developers.google.com/search)

### 社区支持
- [Next.js Discord](https://nextjs.org/discord)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)
- [GitHub Issues](https://github.com/vercel/next.js/issues)

---

**检查清单版本**: 1.0.0  
**最后更新**: 2026-01-25  
**状态**: ✅ 准备部署
