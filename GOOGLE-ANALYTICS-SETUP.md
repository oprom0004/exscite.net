# 📊 Google Analytics 4 (GA4) 集成指南

## ✅ 已完成集成

Google Analytics 4 跟踪代码已成功添加到网站中。

---

## 🎯 集成详情

### GA4 Measurement ID
```
G-CJB3M9CERL
```

### 集成位置
**文件**: `src/app/layout.tsx`

使用 Next.js 的 `<Script>` 组件优化加载：

```tsx
import Script from "next/script";

// 在 <body> 标签内
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-CJB3M9CERL"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-CJB3M9CERL');
  `}
</Script>
```

### 加载策略说明
- **`strategy="afterInteractive"`** - 页面交互后加载
- 不阻塞页面首次渲染
- 优化 Core Web Vitals 性能指标

---

## 📈 GA4 将跟踪的数据

### 自动跟踪事件
- ✅ **页面浏览** (Page Views)
- ✅ **会话时长** (Session Duration)
- ✅ **跳出率** (Bounce Rate)
- ✅ **用户来源** (Traffic Sources)
- ✅ **地理位置** (Geographic Location)
- ✅ **设备类型** (Device Type)
- ✅ **浏览器信息** (Browser)
- ✅ **屏幕分辨率** (Screen Resolution)

### 页面路径
所有页面都会被自动跟踪：
- `/` - 首页
- `/programmable-high-voltage-dc-supply-600v-1000v` - Selection Guide
- `/high-voltage-variable-dc-technology-safety` - Tech & Safety
- `/hv-dc-power-supply-applications-capacitor-charging` - Applications
- `/digital-high-voltage-power-supply-cost` - Cost Analysis

---

## 🔍 验证 GA4 是否正常工作

### 方法 1：实时报告（推荐）

1. 访问 [Google Analytics](https://analytics.google.com/)
2. 选择你的 GA4 属性
3. 点击左侧菜单 **报告** → **实时**
4. 打开你的网站：`https://exscite-net.pages.dev`
5. 应该在 1-2 分钟内看到实时访问数据

### 方法 2：浏览器开发者工具

1. 打开网站并按 `F12` 打开开发者工具
2. 切换到 **Network** (网络) 标签
3. 刷新页面
4. 搜索 `google-analytics` 或 `gtag`
5. 应该看到类似请求：
   ```
   https://www.googletagmanager.com/gtag/js?id=G-CJB3M9CERL
   https://www.google-analytics.com/g/collect?...
   ```

### 方法 3：浏览器控制台

1. 打开网站并按 `F12`
2. 切换到 **Console** (控制台) 标签
3. 输入：
   ```javascript
   dataLayer
   ```
4. 应该看到数组输出，包含跟踪事件

### 方法 4：Google Tag Assistant

1. 安装 Chrome 扩展：[Tag Assistant](https://tagassistant.google.com/)
2. 访问你的网站
3. 点击扩展图标
4. 应该看到 GA4 标签被检测到

---

## 📊 重要指标说明

### Core Web Vitals
GA4 会自动跟踪网站性能指标：
- **LCP** (Largest Contentful Paint) - 最大内容绘制
- **FID** (First Input Delay) - 首次输入延迟
- **CLS** (Cumulative Layout Shift) - 累积布局偏移

这些指标会影响 Google 搜索排名！

### 用户参与度
- **会话时长** - 用户停留时间
- **每个会话页面数** - 浏览深度
- **跳出率** - 单页访问比例

### 转化跟踪
- 外部链接点击（到 variabledcpowersupply.com）
- 页面浏览深度
- 导航点击

---

## 🎯 自定义事件跟踪（可选）

如果需要跟踪特定行为，可以添加自定义事件：

### 示例：跟踪外部链接点击

```typescript
// 在组件中
const handleExternalLinkClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'External Link',
      event_label: 'variabledcpowersupply.com',
      value: 1
    });
  }
};

<a href="https://variabledcpowersupply.com" onClick={handleExternalLinkClick}>
  Check Stock & Pricing
</a>
```

### 示例：跟踪视频播放

```typescript
<video 
  onPlay={() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'video_play', {
        event_category: 'Video',
        event_label: 'Hero Video',
      });
    }
  }}
>
  <source src="/etm-6050c.mp4" type="video/mp4" />
</video>
```

---

## 🔐 隐私和合规

### GDPR 和 Cookie 同意
当前实现使用默认设置。如果目标用户在欧盟，建议：

1. **添加 Cookie 同意横幅**
2. **更新隐私政策**
3. **配置 GA4 隐私设置**：
   ```javascript
   gtag('consent', 'default', {
     'analytics_storage': 'denied',
     'ad_storage': 'denied'
   });
   ```

### IP 匿名化
GA4 默认启用 IP 匿名化，符合隐私要求。

---

## 📅 数据收集时间线

- **实时报告**: 立即显示（1-2 分钟延迟）
- **标准报告**: 24-48 小时处理
- **完整数据**: 3-5 天完全处理

---

## 🆘 常见问题

### Q: GA4 数据未显示？
**A: 检查以下项目：**
1. 部署是否成功（代码已上线）
2. 浏览器是否阻止跟踪（广告拦截器）
3. GA4 属性 ID 是否正确 (`G-CJB3M9CERL`)
4. 等待 1-2 分钟后检查实时报告

### Q: 影响网站性能吗？
**A:** 不会！使用 `strategy="afterInteractive"` 确保：
- 不阻塞首次内容绘制
- 异步加载
- 不影响 Core Web Vitals

### Q: 需要配置什么吗？
**A:** 不需要！部署后自动工作。可选：
- 在 GA4 中设置转化目标
- 配置受众群体
- 设置自定义报告

### Q: 如何查看数据？
**A:** 访问 [Google Analytics](https://analytics.google.com/)
- 使用创建此 Measurement ID 的 Google 账号登录
- 选择对应的 GA4 属性

---

## 📚 相关文档

- **Google Analytics 4**: https://analytics.google.com/
- **GA4 帮助中心**: https://support.google.com/analytics/
- **Next.js Script 优化**: https://nextjs.org/docs/app/building-your-application/optimizing/scripts
- **Core Web Vitals**: https://web.dev/vitals/

---

## ✅ 完成清单

- [x] 添加 GA4 跟踪代码到 layout.tsx
- [x] 使用 Next.js Script 组件优化加载
- [x] 配置 strategy="afterInteractive"
- [x] 推送到 GitHub
- [ ] 部署到 Cloudflare Pages
- [ ] 验证实时数据跟踪
- [ ] 查看 GA4 报告

---

## 🎉 完成！

Google Analytics 4 已成功集成到网站中。部署后会自动开始收集数据！

**查看数据** 👉 [Google Analytics Dashboard](https://analytics.google.com/)
