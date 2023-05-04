// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx';

export default defineConfig({
  presets: [
    presetAttributify({ /* preset options */}),
    presetUno(),
    presetRemToPx(),
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
});
