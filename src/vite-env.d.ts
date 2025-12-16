/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client-react" />
/// <reference types="vite-plugin-svgr/client" />

// 定义环境变量的类型
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_TITLE: string;
  // 如果有其他变量，继续在这里加...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
