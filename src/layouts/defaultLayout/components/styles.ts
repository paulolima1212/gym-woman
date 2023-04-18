import * as Dialog from '@radix-ui/react-dialog'
import { keyframes, styled } from '../../../styles'

export const HeaderContainer = styled('div', {
  height: '7rem',
  background: '$gray-900',
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

export const MenuToggle = styled('button', {
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

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const DialogOverlay = styled(Dialog.Overlay, {
  background: '$gray-900',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 200,
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const DialogContent = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$gray-100',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
  zIndex: 201,

  img: {
    width: '300px',
    marginTop: '-15rem',
  },
})

export const ListMenu = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '5rem',
  marginTop: '2rem',

  li: {
    fontSize: '2.5rem',
    textAlign: 'center',
  },
})
