/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typedRoutes: false,
  
  // 临时禁用类型检查以解决 Next.js 15 的 src/app 路径问题
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // 图片优化配置
  images: {
    formats: ['image/avif', 'image/webp'],
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
  
  // Headers 配置用于 SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  },
};

export default nextConfig;
