// uno.config.ts
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()],
  rules: [
    // [/^m-([.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
    // [/^p-(\d+)$/, ([_, num]) => ({ padding: `${num}px` })]
  ],
  theme: {
    colors: {
      colorBg: '#fff',
      borderColor: 'rgba(0, 0, 0, 0.08)',
      colorPrimaryLabel: '#333',
      colorTertiaryLabel: 'rgba(51, 51, 51, 0.6)',
      colorActiveBg: 'rgba(0, 0, 0, 0.03)'
    }
  }
  // ...UnoCSS选项
})
