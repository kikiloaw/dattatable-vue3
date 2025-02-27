import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: './index.js',
            name: 'FahadSelect',
            fileName: 'fahad-select',
        },
        rollupOptions: {
            external: ['vue', 'axios', 'lodash'], // Change to 'lodash'
            output: {
                globals: {
                    vue: 'Vue',
                    axios: 'Axios',
                    lodash: '_', // lodash global namespace
                },
            },
        },
    },
});