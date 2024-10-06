import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [react(), svgr(), vanillaExtractPlugin(), tsconfigPaths()],
	server: {
		open: true,
		port: 3035,
		proxy: {
			'/api/v1': {
				target: 'https://bus.rsup.io',
				changeOrigin: true
			}
		}
	}
});
