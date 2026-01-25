# 🚀 立即部署到 Cloudflare Pages

## ⚡ 快速开始（3 步）

### 步骤 1：访问 Cloudflare Dashboard
👉 **https://dash.cloudflare.com/**

### 步骤 2：创建 Pages 项目
1. 点击 **Workers & Pages**
2. 点击 **Create application**
3. 选择 **Pages** 标签
4. 点击 **Connect to Git**

### 步骤 3：配置并部署
```
Repository: oprom0004/exscite.net
Branch: main

Build settings:
  Framework: Next.js (Static HTML Export)
  Build command: npm run build:cf
  Build output directory: out            ← 重要！静态导出模式
  Node version: 18.17.0
```

**关键配置说明：**
- `build:cf` - 构建并清理缓存文件
- `out` - 静态导出输出目录（不是 .next）

点击 **Save and Deploy** → 等待 2-5 分钟 ✅

---

## 🎯 部署后你会得到

✅ **免费的生产环境 URL**：`https://exscite-net.pages.dev`  
✅ **自动 HTTPS**：免费 SSL 证书  
✅ **全球 CDN**：Cloudflare 边缘网络  
✅ **自动部署**：每次推送到 main 分支自动更新  
✅ **无限流量**：完全免费

---

## 📊 期望的构建输出

```
✓ Compiled successfully
✓ Collecting page data
✓ Generating static pages (5/5)

Route (app)                                          Size
┌ ○ /                                                1.2 kB
├ ○ /digital-high-voltage-power-supply-cost          2.8 kB
├ ○ /high-voltage-variable-dc-technology-safety      2.5 kB
├ ○ /hv-dc-power-supply-applications-...             2.7 kB
└ ○ /programmable-high-voltage-dc-supply-...         3.1 kB

Deploy complete! 🎉
```

---

## 🌐 自定义域名（可选）

在 Cloudflare Pages 项目中：
1. 进入 **Custom domains**
2. 添加你的域名（如 `exscite.net`）
3. 按照提示更新 DNS（如果使用 Cloudflare DNS，会自动完成）

---

## 🔄 后续更新

每次更新代码：
```bash
git add .
git commit -m "Your update"
git push origin main
```

Cloudflare 自动检测并重新部署！ ⚡

---

## 📝 验证清单

部署完成后，访问你的 URL 并检查：
- [ ] 首页加载正常
- [ ] 导航栏工作
- [ ] 视频自动播放
- [ ] 移动端响应式
- [ ] `/sitemap.xml` 可访问
- [ ] `/robots.txt` 可访问
- [ ] Favicon 显示正常 ⚡

---

## 🆘 遇到问题？

### 构建失败
检查 **Deployments** → **View build log**

### 常见错误
1. **Module not found**: `npm install` 后重新推送
2. **Build timeout**: 构建命令应该是 `npm run build`
3. **404 on routes**: 确保 `next.config.mjs` 中没有 `output: 'export'`

### 详细文档
查看 `CLOUDFLARE-PAGES-DEPLOYMENT.md` 获取完整指南

---

**准备好了？** 点击这里开始 👉 **[Cloudflare Dashboard](https://dash.cloudflare.com/)** 🚀
