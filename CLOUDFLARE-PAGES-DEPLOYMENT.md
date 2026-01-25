# 📦 Cloudflare Pages 部署指南

## 🚀 快速部署步骤

### 方法一：通过 Cloudflare Dashboard（推荐）

#### 1. 准备工作
确保你的代码已推送到 GitHub：
```bash
git status  # 确认所有更改已提交
git push origin main
```

#### 2. 登录 Cloudflare Dashboard
访问：https://dash.cloudflare.com/

#### 3. 创建 Pages 项目
1. 进入 **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
2. 选择你的 GitHub 账号并授权 Cloudflare 访问
3. 选择仓库：`oprom0004/exscite.net`

#### 4. 配置构建设置
```
Project name: exscite-net
Production branch: main

Build settings:
  Framework preset: Next.js
  Build command: npm run build
  Build output directory: .next
  Root directory: /
```

#### 5. 环境变量（可选）
如果需要设置环境变量：
- `NODE_VERSION`: 18.17.0 或更高

#### 6. 部署
点击 **Save and Deploy**，等待构建完成（约 2-5 分钟）

---

### 方法二：通过 Wrangler CLI

#### 1. 安装 Wrangler
```bash
npm install -g wrangler
# 或
npm install --save-dev wrangler
```

#### 2. 登录 Cloudflare
```bash
wrangler login
```

#### 3. 构建项目
```bash
npm run build
```

#### 4. 部署到 Cloudflare Pages
```bash
npx wrangler pages deploy .next --project-name=exscite-net
```

---

## 🔧 部署后配置

### 1. 自定义域名设置

#### 在 Cloudflare Dashboard 中：
1. 进入你的 Pages 项目
2. **Custom domains** → **Set up a custom domain**
3. 添加域名：`exscite.net`
4. 按照提示更新 DNS 记录

#### DNS 配置（如果使用 Cloudflare DNS）：
```
Type: CNAME
Name: @ (或 exscite.net)
Target: exscite-net.pages.dev
Proxy status: Proxied (橙色云朵)
```

### 2. HTTPS 设置
Cloudflare Pages 自动提供免费 SSL/TLS 证书：
- ✅ 自动 HTTPS 重定向
- ✅ HTTP/2 支持
- ✅ 免费 Universal SSL

### 3. 性能优化
在 **Settings** → **Speed** 中启用：
- ✅ Auto Minify (JS, CSS, HTML)
- ✅ Brotli Compression
- ✅ Early Hints

---

## 📊 构建输出验证

### 成功构建的标志：
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (5/5)
✓ Collecting build traces
✓ Finalizing page optimization

Route (app)                                                Size     First Load JS
┌ ○ /                                                      1.2 kB         85.3 kB
├ ○ /digital-high-voltage-power-supply-cost                2.8 kB         87.9 kB
├ ○ /high-voltage-variable-dc-technology-safety            2.5 kB         87.6 kB
├ ○ /hv-dc-power-supply-applications-capacitor-charging    2.7 kB         87.8 kB
├ ○ /programmable-high-voltage-dc-supply-600v-1000v        3.1 kB         88.2 kB
├ ○ /robots.txt                                            0 B            0 B
└ ○ /sitemap.xml                                           0 B            0 B

○  (Static)  automatically rendered as static HTML (uses no initial props)
```

---

## 🔍 故障排查

### 问题 1: 构建失败 - "Module not found"
**解决方案**：
```bash
# 删除 node_modules 和锁文件
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 问题 2: 图片加载失败
**解决方案**：
确保所有静态资源在 `public/` 目录中，且路径正确：
- ✅ `/favicon.svg`
- ✅ `/logo.svg`
- ✅ `/etm-6050c.mp4`
- ✅ `/manifest.json`

### 问题 3: 404 页面不显示
**解决方案**：
确保 `src/app/not-found.tsx` 已正确配置为客户端组件（包含 `'use client'`）

### 问题 4: SEO 元数据未生效
**解决方案**：
- 检查 `src/app/layout.tsx` 中的 `metadata` 导出
- 验证 `sitemap.ts` 和 `robots.ts` 生成正确

---

## 🌐 部署后验证清单

访问你的部署 URL（例如：`https://exscite-net.pages.dev`）并验证：

### SEO 验证
- [ ] 打开浏览器开发者工具 → Network → 检查状态码
- [ ] 访问 `/sitemap.xml` - 应显示 XML 站点地图
- [ ] 访问 `/robots.txt` - 应显示爬虫规则
- [ ] 查看页面源代码 - 验证 `<meta>` 标签和 JSON-LD

### 功能验证
- [ ] 导航栏：所有链接正常工作
- [ ] 首页视频：自动播放、循环
- [ ] 响应式设计：在移动设备上正常显示
- [ ] 404 页面：访问不存在的页面显示自定义 404
- [ ] 外部链接：导航栏 "Check Stock & Pricing" 按钮指向 variabledcpowersupply.com

### 性能验证
使用 Lighthouse 或 PageSpeed Insights：
```
目标分数：
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: 100
```

### 安全验证
- [ ] HTTPS 证书有效
- [ ] 安全头已设置（检查 `public/_headers`）
- [ ] 无混合内容警告

---

## 🔄 后续更新流程

### 自动部署（推荐）
Cloudflare Pages 已配置自动部署：
```bash
git add .
git commit -m "Your update message"
git push origin main
```
推送后，Cloudflare 自动：
1. 检测到新提交
2. 触发构建
3. 运行 `npm install` 和 `npm run build`
4. 部署到生产环境（约 2-3 分钟）

### 手动触发重新部署
在 Cloudflare Dashboard 中：
1. 进入 Pages 项目
2. **Deployments** 标签
3. 点击 **Retry deployment** 或 **Create deployment**

---

## 📈 监控和分析

### Cloudflare Analytics
免费内置分析：
- 访问量统计
- 地理分布
- 响应时间
- 带宽使用

### 集成第三方分析（可选）
在 `src/app/layout.tsx` 中添加：
- Google Analytics 4
- Plausible Analytics
- Umami Analytics

---

## 💰 费用估算

**Cloudflare Pages 免费套餐：**
- ✅ 无限请求
- ✅ 无限带宽
- ✅ 500 次构建/月
- ✅ 1 次并发构建
- ✅ 自定义域名
- ✅ 免费 SSL 证书

**对于本项目**：完全免费 ✅

---

## 🆘 支持资源

- **Cloudflare Pages 文档**：https://developers.cloudflare.com/pages/
- **Next.js on Cloudflare**：https://developers.cloudflare.com/pages/framework-guides/nextjs/
- **Cloudflare Community**：https://community.cloudflare.com/

---

## 📝 部署检查表

在部署前确认：
- [x] 代码已推送到 GitHub
- [x] `package.json` 中的依赖版本正确
- [x] `next.config.mjs` 已优化
- [x] `public/_headers` 配置安全头
- [x] SEO 文件（sitemap, robots）正常生成
- [x] 所有图片和视频在 `public/` 目录
- [x] `.gitignore` 排除了 `node_modules` 和 `.next`

---

**准备好了吗？** 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/) 开始部署！ 🚀
