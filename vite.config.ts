import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	plugins: [react(), svgr(), vanillaExtractPlugin()],
	server: {
		port: 3030,
		proxy: {
			'/api/v1': {
				target: 'https://bus.rsup.io',
				changeOrigin: true
				// configure: (proxy, options) => {
				// }
			}
		}
	}
});
