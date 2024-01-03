// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno({
      dark: 'class'
    }),
  ],
  transformers: [
    transformerDirectives(),
  ]
})