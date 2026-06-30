import { defineConfig } from 'vite';

export default defineConfig({
  
  base: '/quiz-app-v2/',

  server: {

    open: true

  },

  test: {

    environment: 'jsdom',

    globals: true,

    setupFiles: [

      './tests/setup.js'

    ],

    coverage: {

      provider: 'v8',

      reporter: [

        'text',

        'html'

      ]

    }

  }

});