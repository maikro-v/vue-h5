import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
    presets: [presetUno()],
    theme: {
      colors: {
        // 'primary': '#409EFF'
      },
    },
    shortcuts: {
      "flex-center": "flex justify-center items-center",
      "flex-x-center": "flex justify-center",
      "flex-y-center": "flex items-center",
      "wh-full": "w-full h-full",
      "flex-x-between": "flex items-center justify-between",
      "flex-x-end": "flex items-center justify-end",
      "absolute-lt": "absolute left-0 top-0",
      "absolute-rt": "absolute right-0 top-0 ",
      "fixed-lt": "fixed left-0 top-0"
    },
})