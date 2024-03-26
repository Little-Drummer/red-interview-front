/// <reference types="vite/client" />
interface ImportMetaEnv {
  // 声明环境变量及其类型
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
