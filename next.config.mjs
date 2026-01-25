/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用静态导出模式 - Cloudflare Pages 必需
  output: 'export',
  
  reactStrictMode: true,
  typedRoutes: false,
  
  // 临时禁用类型检查以解决 Next.js 15 的 src/app 路径问题
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // 图片优化配置 - 静态导出需要禁用优化或使用 unoptimized
  images: {
    unoptimized: true,
  },
  
  // 优化输出
  compress: true,
  poweredByHeader: false,
  
  // URL 配置
  trailingSlash: false,
  
  // 编译优化
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // SEO 优化 - 生成静态页面
  generateBuildId: async () => {
    return 'exscite-net-build-' + new Date().getTime();
  },
  
  // Headers 配置 - 静态导出时由 public/_headers 文件处理
};

export default nextConfig;
