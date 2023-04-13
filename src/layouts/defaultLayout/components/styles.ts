import { styled } from '../../../styles'

export const HeaderContainer = styled('div', {
  height: '7rem',
  background: '$gray-700',
  display: 'flex',
  alignItems: 'center',
  padding: '0 2.5rem',
})

export const HeaderContent = styled('header', {
  width: '100%',
  display: 'flex',
  gap: '2rem',
  justifyContent: 'space-between',
  alignItems: 'center',

  h1: {
    fontSize: '2rem',
    fontFamily: 'Cormorant Upright',
  },

  color: '$pink-300',

  nav: {
    display: 'flex',
    gap: '1.5rem',
    fontSize: '1.5rem',
  },

  div: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '-1.5rem',
  },

  img: {
    maxWidth: '8rem',
    maxHeight: '6.4rem',
  },
})
