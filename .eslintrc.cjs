module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    // 1. ESLint 推荐的基础规则
    'eslint:recommended',
    // 2. TypeScript 推荐规则
    'plugin:@typescript-eslint/recommended',
    // 3. React Hooks 规则 (检查依赖项数组等)
    'plugin:react-hooks/recommended',

    // ✨ 4. 集成 unplugin-auto-import 生成的配置
    // (如果你的控制台报错找不到这个文件，请先运行一次 pnpm dev)
    './.eslintrc-auto-import.json',

    // ✨ 5. Prettier 插件 (必须放在最后！)
    // 关闭所有和 Prettier 冲突的 ESLint 格式化规则
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    // Vite 默认规则：React 组件只能导出组件
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    // 👇 练功房专属宽松配置 👇

    // 允许使用 any (有时候为了测试不想写复杂类型)
    '@typescript-eslint/no-explicit-any': 'warn',

    // 允许定义了变量但没使用 (比如写了 props 但没用) -> 设为 warn 不阻断编译
    '@typescript-eslint/no-unused-vars': 'warn',

    // 允许非空断言 (data!.id)
    '@typescript-eslint/no-non-null-assertion': 'off',

    // 强制 Prettier 的规则作为 ESLint 错误抛出
    'prettier/prettier': 'error',
  },
};
