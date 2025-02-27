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
            external: ['vue', 'axios', 'vue-multiselect', 'lodash/debounce'],
            output: {
                globals: {
                    vue: 'Vue',
                    axios: 'Axios',
                    'vue-multiselect': 'VueMultiselect',
                    'lodash/debounce': 'debounce',
                },
            },
        },
    },
});