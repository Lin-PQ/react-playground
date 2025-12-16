# React 18 Playground 🧪

[https://react.dev/](https://react.dev/)
[https://vitejs.dev/](https://vitejs.dev/)
[https://www.typescriptlang.org/](https://www.typescriptlang.org/)
[https://ant.design/](https://ant.design/)
[https://tailwindcss.com/](https://tailwindcss.com/)

一个基于 **Vite + React 18** 的现代化前端“练功房”脚手架。
专为快速验证想法、练习 Hooks、测试组件库特性而设计。零配置路由，新建文件即页面，让你专注于代码本身。

## ✨ 核心特性

- **⚡️ 极速构建**: 基于 Vite 5，秒级启动，热更新飞快。
- **📂 自动路由 (核心)**: 基于文件系统的路由生成 (`vite-plugin-pages`)，告别繁琐的 Router 配置。
- **🎨 样式方案**: Ant Design 5 (CSS-in-JS) + Tailwind CSS 原子类，开发效率倍增。
- **🦾 强类型**: 全量 TypeScript 配置，配合 `tsc` 严格模式。
- **📥 自动引入**: 集成 `unplugin-auto-import`，自动引入 React Hooks、Ahooks，少写 Import。
- **🔌 网络请求**: 封装 Axios + 拦截器，集成 Mock 数据方案 (`axios-mock-adapter`)。
- **🐻 全局状态**: 集成 Zustand，极简的全局状态管理。
- **🛠 规范工程**: ESLint + Prettier + Husky + Commitlint，代码风格自动统一。

## 🚀 快速开始

### 1\. 安装依赖

本项目使用 [pnpm](https://pnpm.io/) 进行包管理：

```bash
# 安装依赖
pnpm install

# 初始化 husky (第一次拉取项目需要)
pnpm prepare
```

### 2\. 启动开发

```bash
pnpm dev
```

浏览器访问 `http://localhost:3000` 即可看到自动生成的练习目录。

## 📖 核心功能指南

### 1\. 自动路由 (File-system Routing)

这是本项目的核心功能。你**不需要**手动修改路由配置文件。

- **规则**: `src/pages` 目录下的任何 `.tsx` 文件都会自动生成对应的路由。
- **示例**:

| 文件路径                        | 自动生成的路由 URL | 说明                    |
| :------------------------------ | :----------------- | :---------------------- |
| `src/pages/index.tsx`           | `/`                | 首页 (已配置为练习列表) |
| `src/pages/demo.tsx`            | `/demo`            | 普通页面                |
| `src/pages/hooks/use-state.tsx` | `/hooks/use-state` | 多级路由                |

**如何新建一个练习？**
只需在 `src/pages` 下新建一个文件（例如 `MyTest.tsx`），保存后浏览器访问 `/my-test` 即可，或者刷新首页，它会自动出现在列表中。

### 2\. 自动引入 (Auto Imports)

不需要手动 `import` React 的核心 Hooks 和 `ahooks`，直接使用即可：

```tsx
// ❌ 不需要写这行
// import React, { useState, useEffect } from 'react';
// import { useRequest } from 'ahooks';

const Demo = () => {
  // ✅ 直接用，TS 会自动推断类型
  const [count, setCount] = useState(0);
  const { data } = useRequest(fetchApi);

  return <div>{count}</div>;
};
```

### 3\. 数据模拟 (Mock)

本地开发默认开启 Mock。

1.  定义 Mock 规则：`src/mock/index.ts`
2.  定义 API：`src/api/*.ts`
3.  组件调用：

<!-- end list -->

```tsx
import { useRequest } from 'ahooks';

import { getUser } from '@/api/user';

const { data, loading } = useRequest(getUser);
```

### 4\. 全局状态 (Zustand)

定义 Store (`src/store/useUserStore.ts`):

```tsx
export const useUserStore = create((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
}));
```

使用:

```tsx
const bears = useUserStore((state) => state.bears);
```

## 📂 目录结构

```text
├── .husky/              # Git Hooks 配置
├── src/
│   ├── api/             # API 接口定义
│   ├── components/      # 全局公共组件
│   ├── layouts/         # 全局布局 (Header, Menu...)
│   ├── mock/            # Mock 数据配置
│   ├── pages/           # 页面文件 (自动生成路由) 👈 练习代码写这里
│   ├── store/           # Zustand store
│   ├── utils/           # 工具库 (request, etc.)
│   ├── App.tsx          # 根组件 (路由入口)
│   ├── main.tsx         # 项目入口
│   └── vite-env.d.ts    # 类型声明
├── .eslintrc.cjs        # ESLint 配置
├── .prettierrc          # Prettier 配置
├── tailwind.config.js   # Tailwind 配置
├── tsconfig.json        # TypeScript 配置
└── vite.config.ts       # Vite 配置
```

## 🛠 常用命令

- `pnpm dev`: 启动开发服务器
- `pnpm build`: 打包生产环境代码
- `pnpm preview`: 预览打包后的产物
- `pnpm lint`: 检查代码规范
- `pnpm format`: 格式化所有代码
