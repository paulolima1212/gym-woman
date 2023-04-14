import { styled } from '../../../../styles'

export const CardContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  maxHeight: '10rem',
  maxWidth: '10rem',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',

  '.image01': {
    position: 'absolute',
    height: '10rem',
    width: '10rem',
    objectFit: 'cover',
    borderRadius: '8px',
  },

  '.image02': {
    position: 'absolute',
    maxHeight: '2.5rem',
    maxWidth: '2.5rem',
    bottom: '0.1rem',
  },

  span: {
    position: 'absolute',
    bottom: '-2.5rem',
    color: 'white',
  },
})

export const CardFilter = styled('div', {
  width: '10rem',
  height: '10rem',
  position: 'absolute',
  zIndex: '100',
  background: 'rgba(230, 83, 138, 0.55)',
  borderRadius: '8px',
})
