import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src')
        }
    },
    // 使用代理
    server: {
        proxy: {
            '/api': {
                target: 'https://api.shop.eduwork.cn',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    plugins: [vue(), WindiCSS()]
})
