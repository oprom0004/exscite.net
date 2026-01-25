#!/bin/bash
# Cloudflare Pages 快速部署脚本

echo "🚀 开始部署到 Cloudflare Pages..."

# 1. 检查是否有未提交的更改
if [[ -n $(git status -s) ]]; then
  echo "⚠️  发现未提交的更改，正在提交..."
  git add .
  read -p "请输入提交信息: " commit_message
  git commit -m "$commit_message"
fi

# 2. 推送到 GitHub
echo "📤 推送到 GitHub..."
git push origin main

# 3. 构建项目（可选，Cloudflare 会自动构建）
echo "🔨 本地构建测试..."
npm run build

echo ""
echo "✅ 代码已推送到 GitHub！"
echo ""
echo "📝 下一步："
echo "1. 访问 Cloudflare Dashboard: https://dash.cloudflare.com/"
echo "2. 进入 Workers & Pages → Create application → Pages"
echo "3. 连接 GitHub 仓库: oprom0004/exscite.net"
echo "4. 配置构建设置:"
echo "   - Framework: Next.js"
echo "   - Build command: npm run build"
echo "   - Build output: .next"
echo "5. 点击 'Save and Deploy'"
echo ""
echo "或者使用 Wrangler CLI 直接部署:"
echo "npx wrangler pages deploy .next --project-name=exscite-net"
echo ""
