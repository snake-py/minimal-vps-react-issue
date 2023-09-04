import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import circleDependency from 'vite-plugin-circular-dependency';
import ssr from 'vite-plugin-ssr/plugin';

console.log(
    process.env.IS_STORYBOOK ? 'Vite uses plugin set for storybook' : 'Vite uses plugin set for app'
);

const plugins = process.env.IS_STORYBOOK
    ? [(react(), circleDependency({}))]
    : [
          (react(), circleDependency({})),
          ssr({
              prerender: true,
          }),
      ];

// https://vitejs.dev/config/
export default defineConfig({
    plugins,

    build: {
        sourcemap: 'inline',
    },
});
