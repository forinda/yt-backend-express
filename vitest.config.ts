import { configDefaults, defineConfig } from 'vitest/config';

/// <reference types="vitest" />
import path from 'path';

export default defineConfig({
	test: {
		alias: {
			'@': path.resolve(__dirname, './src')
		},
		environment: 'node',
		exclude: [
			...configDefaults.exclude,
			'**/node_modules/**',
			'**/dist/**',
			'**/build/**',
			'**/coverage/**',
			'**/out/**',
			'**/public/**',
			'**/static/**'
		],
		globals: true,
		hookTimeout: 60000,
		setupFiles: ['./src/tests/setup.ts']
	}
});