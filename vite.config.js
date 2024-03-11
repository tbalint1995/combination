import { defineConfig, splitVendorChunkPlugin } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    build: {
        target: 'esnext',
        sourcemap: true
    },
    server: {
        host:'0.0.0.0',
        hmr: {
            host: 'localhost'
        },
        watch: {
            usePolling: true
        },
    },
    plugins: [
        laravel({
            input: [
                'resources/sass/applicationFormExport.scss',
                'resources/sass/app.scss',
                'resources/js/app.js'
            ],
            refresh: true
        }),
        vue(),
        splitVendorChunkPlugin()
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.vue']
    }
});