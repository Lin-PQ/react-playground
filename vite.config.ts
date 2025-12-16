import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // ✨ 魔法核心：自动识别 src/pages 下的文件生成路由
    Pages({
      dirs: "src/pages",
      // 排除 components 目录，防止组件被误识别为路由页面
      exclude: ["**/components/*.tsx", "**/*.test.tsx"],
      // 默认扩展名
      extensions: ["tsx"],
    }),
    AutoImport({
      imports: ["react", "react-router-dom", "ahooks"], // 自动引入 React 和 路由钩子 不要把UI库引进来 保留对组件来源的感知
      dirs: [
        "./src/utils",
        "./src/hooks", // 自定义
      ],
      dts: "src/auto-imports.d.ts", // 自动生成类型声明文件，解决 TS 报错
      eslintrc: {
        enabled: true, // 只有第一次运行或增加了新 import 时设为 true，生成文件后可以改为 false 加快构建
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
    }),
  ],
  resolve: {
    alias: {
      // 让你能在项目中直接用 import X from '@/utils/...'
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    // 启动后自动打开浏览器
    open: true,
    port: 3000,
  },
});
