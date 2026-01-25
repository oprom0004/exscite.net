# 🎯 Cloudflare Pages Dashboard 配置指南

## ⚠️ 重要提示

**构建命令必须在 Cloudflare Dashboard 中配置，不能在 `wrangler.toml` 中配置。**

Cloudflare Pages 的 `wrangler.toml` 只支持这些配置：
- ✅ `name` - 项目名称
- ✅ `compatibility_date` - 兼容性日期
- ✅ `pages_build_output_dir` - 构建输出目录
- ❌ `[build]` - **不支持**（会导致部署失败）
- ❌ `[env.production]` - **不支持**（使用 Dashboard 配置环境变量）

---

## 📝 正确的部署配置步骤

### 步骤 1：访问 Cloudflare Dashboard
👉 **https://dash.cloudflare.com/**

### 步骤 2：首次创建项目

1. 点击 **Workers & Pages**
2. 点击 **Create application**
3. 选择 **Pages** 标签
4. 点击 **Connect to Git**
5. 授权 GitHub 并选择仓库：`oprom0004/exscite.net`
6. 配置项目：

```
Project name: exscite-net
Production branch: main

Build settings:
  Framework preset: Next.js
  Build command: npm run build:cf        ← 使用清理版本！
  Build output directory: .next
  Root directory: / (留空或输入/)
```

7. **Environment variables (optional)**：
   - 如需环境变量，点击 **Add variable**
   - 例如：`NODE_VERSION = 18`

8. 点击 **Save and Deploy**

---

### 步骤 3：修改现有项目配置

如果项目已创建但配置错误：

1. 进入你的 Pages 项目：`exscite-net`
2. 点击 **Settings** 标签
3. 选择 **Builds & deployments**
4. 找到 **Build configuration**
5. 点击右侧的 **Edit configuration**
6. 修改：

```diff
Framework preset: Next.js
- Build command: npm run build          ❌ 旧的
+ Build command: npm run build:cf       ✅ 新的（清理缓存）
Build output directory: .next
Root directory: /
```

7. 点击 **Save**
8. 返回 **Deployments** 标签
9. 点击最新部署右侧的 **•••** → **Retry deployment**

---

## 🔧 关键配置说明

### 1. Build command: `npm run build:cf`

**为什么用 `build:cf` 而不是 `build`？**

```json
// package.json
{
  "scripts": {
    "build": "next build",                                    // 标准构建
    "build:cf": "next build && node scripts/clean-build.js",  // Cloudflare 优化
  }
}
```

`build:cf` 会在构建后自动清理超过 25MB 的缓存文件：
- 删除 `.next/cache/` 目录（~50-70 MB）
- 删除 `.next/trace` 文件
- 最终输出 ~20-30 MB（符合 Cloudflare 限制）

### 2. Build output directory: `.next`

Next.js 的构建输出目录，**不要修改**。

### 3. Root directory

- 默认：`/`（项目根目录）
- 如果项目在子目录，填写子目录路径

---

## 🌐 环境变量配置

### 在 Dashboard 中设置环境变量：

1. 进入项目 **Settings** → **Environment variables**
2. 选择环境：
   - **Production** - 生产环境
   - **Preview** - 预览环境（Pull Request）
3. 点击 **Add variable**
4. 输入变量名和值

**常用环境变量：**
```
NODE_VERSION = 18
NEXT_PUBLIC_API_URL = https://api.example.com
```

**注意：**
- 环境变量更改后，需要重新部署才会生效
- 以 `NEXT_PUBLIC_` 开头的变量会暴露给客户端

---

## 🔄 重新部署

### 自动部署（推荐）
每次推送到 `main` 分支，Cloudflare 自动触发部署。

### 手动部署
1. 进入 **Deployments** 标签
2. 点击最新部署的 **•••** 菜单
3. 选择 **Retry deployment**
4. 等待 2-5 分钟

---

## 📊 查看构建日志

如果部署失败：

1. 进入 **Deployments** 标签
2. 点击失败的部署
3. 查看 **Build logs**
4. 找到错误信息：
   - `Error: Pages only supports files up to 25 MiB` → 使用 `npm run build:cf`
   - `Configuration file for Pages projects does not support "build"` → 不要在 `wrangler.toml` 中配置构建
   - `Module not found` → 检查 `package.json` 依赖

---

## ✅ 部署成功检查清单

部署完成后，你会看到：

```
✓ Compiled successfully
✓ Generating static pages (10/10)
✓ Finalizing page optimization

Deploy complete! 🎉

Your site is live at:
https://exscite-net.pages.dev
```

**验证部署：**
- [ ] 访问 `https://exscite-net.pages.dev`
- [ ] 首页加载正常
- [ ] 导航栏工作
- [ ] 视频自动播放
- [ ] Favicon 显示正确 ⚡
- [ ] `/sitemap.xml` 可访问
- [ ] `/robots.txt` 可访问
- [ ] 移动端响应式正常

---

## 🆘 常见错误和解决方案

### 错误 1: "Configuration file does not support [build]"
**原因**：在 `wrangler.toml` 中添加了不支持的配置  
**解决**：删除 `[build]` 和 `[env]` 配置，只保留：
```toml
name = "exscite-net"
compatibility_date = "2026-01-20"
pages_build_output_dir = ".next"
```

### 错误 2: "Pages only supports files up to 25 MiB"
**原因**：构建输出中有超过 25MB 的文件（通常是缓存）  
**解决**：使用 `npm run build:cf` 而不是 `npm run build`

### 错误 3: "Module not found"
**原因**：依赖未正确安装  
**解决**：检查 `package.json`，确保所有依赖都在 `dependencies` 或 `devDependencies` 中

### 错误 4: Build timeout
**原因**：构建时间超过 20 分钟（免费套餐限制）  
**解决**：优化构建脚本，移除不必要的操作

---

## 📚 相关文档

- **Cloudflare Pages 官方文档**: https://developers.cloudflare.com/pages/
- **Next.js on Cloudflare**: https://developers.cloudflare.com/pages/framework-guides/nextjs/
- **项目修复指南**: `CLOUDFLARE-FIX-25MB-ERROR.md`
- **快速部署**: `DEPLOY-NOW.md`

---

## 🎉 配置完成！

现在你的 Cloudflare Pages 项目已正确配置。每次推送到 GitHub 都会自动部署！

**开始部署** 👉 [Cloudflare Dashboard](https://dash.cloudflare.com/)
