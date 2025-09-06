import react from '@vitejs/plugin-react-swc';
import { defineConfig, type PluginOption } from 'vite';
import svgr from 'vite-plugin-svgr';

import ClosePlugin from './plugins/close';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '#': '/src',
    },
  },
  plugins: [react() as PluginOption, svgr(), ClosePlugin()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  }
});
