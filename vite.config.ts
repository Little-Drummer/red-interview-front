import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// export default defineConfig({
//   base: './',
//   plugins: [vue(), UnoCSS()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   },
//   server: {
//     host: '0.0.0.0',
//     proxy: {
//       '/api': {
//         // target: 'http://localhost:8080',
//         // target: 'https://redinterview.yjxw.win/api/',
//         target:  import.meta.env.VITE_API_URL,
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, '')
//       }
//     }
//   }
// })

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    base: './',
    plugins: [vue(), UnoCSS()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: '0.0.0.0',
      proxy: {
        '/api': {
          // target: 'http://localhost:8080',
          // target: 'https://redinterview.yjxw.win/api/',
          target: process.env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              const chunks = [
                'axios',
                'vue',
                'vue-router',
                'pinia',
                'element-plus',
                'swiper',
                '@vueuse'
              ]
              for (const chunk of chunks) {
                if (id.includes(`/node_modules/${chunk}`)) {
                  return chunk
                }
              }
              // 默认的vendors chunk
              return 'vendors'
            }
          }
        }
      }
    }
  })
}
