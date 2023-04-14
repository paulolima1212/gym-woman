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

export const MenuToggleContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  maxWidth: '30px',
  minHeight: '50px',
  cursor: 'pointer',
})

export const MenuToggle = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    status: {
      isOpen: {
        '&::before': {
          position: 'absolute',
          content: '',
          width: '30px',
          height: '3px',
          background: '$pink-300',
          transform: 'translateY(3px) rotate(-45deg)',
          transition: '0.5s',
        },
        '&::after': {
          position: 'absolute',
          content: '',
          width: '30px',
          height: '3px',
          background: '$pink-300',
          transform: 'translateY(3px) rotate(45deg)',
          transition: '0.5s',
        },
      },
      isClose: {
        '&::before': {
          position: 'absolute',
          content: '',
          width: '30px',
          height: '3px',
          background: '$pink-300',
          transform: 'translateY(-10px)',
          transition: '0.5s',
        },
        '&::after': {
          position: 'absolute',
          content: '',
          width: '30px',
          height: '3px',
          background: '$pink-300',
          transform: 'translateY(10px)',
          transition: '0.5s',
          boxShadow: '0px -10px 0px #E6538A',
        },
      },
    },
  },

  defaultVariants: {
    status: 'isClose',
  },
})
