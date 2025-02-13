import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { TDesignResolver } from 'unplugin-vue-components/resolvers';
import UnoCSS from 'unocss/vite'
import { ViteEjsPlugin } from "vite-plugin-ejs"

// https://vite.dev/config/
const root = process.cwd()

export default ({ mode }) => {
  let env = loadEnv(mode, root)

  return defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      UnoCSS(),
      AutoImport({
        imports: ['vue'],  // 自动导入 vue 中的 API
        dts: 'src/auto-imports.d.ts',  // 生成一个 TypeScript 声明文件，避免类型错误
      }),
      AutoImport({
        resolvers: [TDesignResolver({
          library: 'mobile-vue'
        })],
      }),
      Components({
        resolvers: [TDesignResolver({
          library: 'mobile-vue'
        })],
      }),
      ViteEjsPlugin({
        title: env.VITE_APP_TITLE
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
  })
}
