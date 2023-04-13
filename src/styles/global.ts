import { globalCss } from './index'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    fontSize: '62.5%',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    userSelect: 'none',
    background: '$gray-900',
    fontFamily: 'Asap Condensed',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  'button, a, li': {
    all: 'unset',
  },

  button: {
    cursor: 'pointer',
  },

  '.flex': {
    display: 'flex',
  },
})
