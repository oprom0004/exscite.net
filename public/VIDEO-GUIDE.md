# 📹 视频使用指南

## 当前视频

### etm-6050c.mp4
- **位置**: `/public/etm-6050c.mp4`
- **使用页面**: 首页 Hero 区域
- **显示方式**: 自动播放、循环、静音

## 🎬 视频设置

### 当前配置
```tsx
<video 
  autoPlay      // 自动播放
  loop          // 循环播放
  muted         // 静音（允许自动播放）
  playsInline   // 移动端内联播放
/>
```

### 视频特性
- ✅ 自动播放（静音模式）
- ✅ 无限循环
- ✅ 移动端友好
- ✅ 工业技术风格边框
- ✅ 技术标注叠加层
- ✅ 呼吸灯效果（RECORDING 指示）

## 📐 视频规格建议

### 尺寸
- **推荐**: 1920x1080 (16:9) 或 800x600 (4:3)
- **最大**: 不超过 10MB（优化加载速度）
- **格式**: MP4 (H.264 编码)

### 优化
```bash
# 使用 FFmpeg 压缩视频
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k output.mp4

# 生成 WebM 格式（更好的压缩）
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 output.webm
```

## 🎨 视频样式

### 边框和效果
- 工业风格边框
- 顶部黄色警示条（hazard-stripe）
- 底部技术标注栏
- 悬停时轻微放大效果

### 覆盖信息
- **左下**: FIG 2.0-HV / VIDEO DEMO
- **右下**: 🔴 RECORDING（呼吸灯动画）

## 🔄 切换显示模式

### 使用视频
```tsx
<HeroSection 
  useVideo={true}
  videoSrc="/etm-6050c.mp4"
/>
```

### 使用 SVG 插图
```tsx
<HeroSection 
  useVideo={false}
  illustrationVariant="power-supply"
/>
```

## 📱 其他页面也可使用

### 示例：选型指南页面
```tsx
<HeroSection 
  title="..."
  subtitle="..."
  useVideo={true}
  videoSrc="/etm-6050c.mp4"
/>
```

### 不同页面使用不同视频
```
public/
├── etm-6050c.mp4          # 首页
├── safety-demo.mp4        # 安全技术页
├── application-demo.mp4   # 应用案例页
└── testing-demo.mp4       # 测试场景页
```

## 🎯 最佳实践

### DO ✅
- 使用高质量但经过压缩的视频
- 保持视频长度在 10-30 秒
- 确保静音自动播放
- 提供清晰的产品展示
- 使用专业的拍摄角度

### DON'T ❌
- 不要使用超大视频文件（>20MB）
- 不要使用带声音的自动播放
- 不要使用模糊或低质量的视频
- 不要使用无关的内容
- 不要忘记移动端优化

## 🔊 添加音频控制（可选）

如果需要用户可控制音频：

```tsx
<video 
  autoPlay 
  loop 
  muted 
  playsInline
  controls        // 添加播放控制条
/>
```

## 📊 性能优化

### Lazy Loading（懒加载）
对于非首屏视频：
```tsx
<video 
  loading="lazy"
  preload="metadata"
/>
```

### 多格式支持
```tsx
<video>
  <source src="/video.webm" type="video/webm" />
  <source src="/video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

## 🌐 SEO 考虑

- 视频文件名要有意义（如 `etm-6050c.mp4`）
- 添加 `alt` 属性的替代内容
- 考虑为视频添加字幕文件（.vtt）
- 生成视频缩略图作为 poster

## 📈 监控建议

- 监控视频加载时间
- 检查不同设备的播放性能
- 测试移动端数据使用量
- 收集用户反馈

---

**当前状态**: ✅ 视频已集成到首页 Hero 区域  
**文件**: `/public/etm-6050c.mp4`  
**自动播放**: 是（静音模式）
