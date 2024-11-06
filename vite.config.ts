/// <reference types="vitest" />
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
	test: {
		coverage: {
			enabled: true,
			provider: 'v8',
			reporter: [ 'text', 'html' ],
			reportsDirectory: './reports/tests/unit/coverage',
		},
		reporters: [
			'default',
			[ 'html', { outputFile: './reports/tests/unit/html/index.html' } ],
		],
		environment: 'jsdom',
		globals: true,
		setupFiles: [ './src/vitest-setup.ts' ],
	},
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
