// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],  // Add the Vue plugin here
    build: {
        lib: {
            entry: 'src/index.js',
            name: 'FahadSelect',
            fileName: (format) => `fahad-select.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
