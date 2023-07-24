import { defineConfig, defineGlobalStyles } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
  'html, body': {
    bg: '#2b2737',
    color: 'white',
    p: '4',
    fontFamily: 'quicksand'
  }
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          quicksand: { value: 'var(--font-quicksand), Menlo, monospace' }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: 'styled-system',
  globalCss
});
