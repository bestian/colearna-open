import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue(),
    vueI18n({
      include: path.resolve(__dirname, './path/to/src/locales/**')
    })
  ],
  resolve: {
    alias: {
      {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
        '@': '/src', // 這裡確保'@'指向的是你的'src'目錄
      },
  },
});
