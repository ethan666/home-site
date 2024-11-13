import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'

// https://vite.dev/config/
export default defineConfig({
  base: '/home-site/',
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    Inspect(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-import.d.ts',
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/element/index.scss" as *;`,
        api: 'modern-compiler',
      },
    },
  },
  server: {
    // 如果使用docker-compose开发模式，设置为false
    // open: true,
    port: 8000,
    host: '0.0.0.0',
    // proxy: process.env.VITE_PROXY
    //   ? proxy(JSON.parse(process.env.VITE_PROXY))
    //   : {},
    proxy: {
      // 把key的路径代理到target位置
      '/basic-api': {
        // 需要代理的路径   例如 '/api'
        target: 'http://localhost:3000', // 代理到 目标路径
        changeOrigin: true,
        rewrite: path => path.replace(/^\/basic-api/, ''),
      },
    },
  },
})
