// uno.config.ts
import { defineConfig, presetWind } from 'unocss'
import presetAttributify from '@unocss/preset-attributify'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [presetAttributify(), presetWind()],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      main: '#1a1f24',
      primary: '#006ce5'
    },
    breakpoints: {
      md: '962px',
      lg: '1200px'
    }
  },
  shortcuts: {
    'section-title':
      'text-center text-3xl font-bold select-none mb-6 text-#1A1D24',
    'seciton-content': 'md:max-w-1200px md:mx-auto lt-md:mx-15px select-none'
  }
})
