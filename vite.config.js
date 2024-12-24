import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/task-1-react-prodect/', // اسم الـ repository الخاص بك
});
