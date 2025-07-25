// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import styleX from 'vite-plugin-stylex';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            '@stylexjs/babel-plugin',
            {
              dev: process.env.NODE_ENV === 'development',
              genConditionalClasses: true,
              treeshakeCompensation: true,
            },
          ],
        ],
      },
    }),
    styleX(),
  ],
});