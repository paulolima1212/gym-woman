import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      purple: '#B400A2',
      'gray-50': '#F0F0F0',
      'gray-100': '#E0E0E0',
      'gray-200': '#C2C2C2',
      'gray-300': '#A3A3A3',
      'gray-400': '#858585',
      'gray-500': '#666666',
      'gray-600': '#4D4D4D',
      'gray-700': '#333333',
      'gray-800': '#1A1A1A',
      'gray-900': '#0A0A0A',
      'pink-300': '#E6538A',
      'pink-200': '#FF7CAD',
    },
    fontSizes: {
      'title-xl': '2.5rem',
      'title-md': '1.6rem',
      'regular-xl': '2rem',
      'regular-md': '1.6rem',
      'regular-sm': '1.4rem',
    },
  },
})
