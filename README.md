# EVA Civil Website

一个以人类共生、灵性觉醒与智慧科技为核心的非营利组织网站。

## 项目描述

EVA Civil 是一个国际非营利组织，旨在汇聚全球志愿者、研究者、创新者与支持者，共同推动灵性与科技的共生、全人类文明的觉醒，以及建立公平、开放、透明的全球合作网络。

## 技术栈

- **Next.js 14** - React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **React** - 用户界面库

## 功能特性

- 🌿 响应式设计，适配各种设备
- ✨ 现代化 UI 设计，符合品牌调性
- 🎯 平滑滚动导航
- 📱 移动端优化
- 🎨 渐变背景和视觉效果
- 🔗 交互式按钮和链接

## 页面结构

1. **首屏** - 愿景口号与视觉意象
2. **关于我们** - 组织介绍与使命
3. **愿景与使命** - 详细说明组织目标
4. **我们的行动** - 四大重点方向
5. **加入我们** - 参与方式
6. **联系方式** - 联系信息
7. **页脚** - 版权信息

## 快速开始

### 环境要求

- Node.js 18+ 
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 项目结构

```
src/
├── app/
│   ├── layout.tsx      # 根布局
│   ├── page.tsx        # 主页面
│   └── globals.css     # 全局样式
├── components/
│   └── Navigation.tsx  # 导航组件
└── ...
```

## 自定义配置

### 修改内容

编辑 `src/app/page.tsx` 文件来修改页面内容。

### 修改样式

使用 Tailwind CSS 类名来修改样式，或编辑 `src/app/globals.css` 文件。

### 修改元数据

编辑 `src/app/layout.tsx` 文件中的 `metadata` 对象。

## 部署

### Vercel (推荐)

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署

### 其他平台

构建项目后，将 `out` 目录部署到任何静态托管服务。

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 许可证

© 2025 EVA Civil. All rights reserved.
