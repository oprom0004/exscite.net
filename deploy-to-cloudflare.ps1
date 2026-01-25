# Cloudflare Pages 快速部署脚本 (PowerShell)

Write-Host "🚀 开始部署到 Cloudflare Pages..." -ForegroundColor Green

# 1. 检查是否有未提交的更改
$status = git status -s
if ($status) {
  Write-Host "⚠️  发现未提交的更改，正在提交..." -ForegroundColor Yellow
  git add .
  $commitMessage = Read-Host "请输入提交信息"
  git commit -m $commitMessage
}

# 2. 推送到 GitHub
Write-Host "📤 推送到 GitHub..." -ForegroundColor Cyan
git push origin main

# 3. 构建项目（可选，Cloudflare 会自动构建）
Write-Host "🔨 本地构建测试..." -ForegroundColor Cyan
npm run build

Write-Host ""
Write-Host "✅ 代码已推送到 GitHub！" -ForegroundColor Green
Write-Host ""
Write-Host "📝 下一步:" -ForegroundColor Yellow
Write-Host "1. 访问 Cloudflare Dashboard: https://dash.cloudflare.com/"
Write-Host "2. 进入 Workers & Pages → Create application → Pages"
Write-Host "3. 连接 GitHub 仓库: oprom0004/exscite.net"
Write-Host "4. 配置构建设置:"
Write-Host "   - Framework: Next.js"
Write-Host "   - Build command: npm run build"
Write-Host "   - Build output: .next"
Write-Host "5. 点击 'Save and Deploy'"
Write-Host ""
Write-Host "或者使用 Wrangler CLI 直接部署:" -ForegroundColor Magenta
Write-Host "npx wrangler pages deploy .next --project-name=exscite-net" -ForegroundColor White
Write-Host ""
