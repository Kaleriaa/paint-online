import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    server: {
        port: 3000,
    },
    css: {
        modules: {
            generateScopedName: '[local]__[hash:base64:5]',
        },
    },
    optimizeDeps: {
        include: ['classnames'],
    },
})
