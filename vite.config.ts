import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import svgr from "vite-plugin-svgr";
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  server: {
    host: true,
    port: 5173,
  },
  plugins: [
    react(),
    svgr(),
    tsconfigPaths(),
    viteStaticCopy({
      targets: [
        {
          src: './src/assets/*',
          dest: 'assets',
        },
      ],
    }),
  ],
  build: {
    target: "esnext",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: "assets/[name].[hash]].js"
      },
    },
  },
});
