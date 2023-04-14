import { styled } from '../../styles'

export const SubscribeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  color: '$gray-100',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',

  h1: {
    marginTop: '2rem',
    marginBottom: '5rem',
  },
})

export const CardsContainer = styled('div', {
  display: 'flex',
  gap: '1rem',
})

export const BoxForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  border: 'solid 1px $pink-300',
  width: '95%',
  gap: '2rem',
  alignItems: 'center',
  padding: '2rem 1rem',
  borderRadius: '8px',
  marginBottom: '2rem',

  h2: {
    marginRight: 'auto',
    marginLeft: '1rem',
    marginBottom: '1rem',
  },
})

export const FieldContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  width: '100%',
  alignItems: 'center',

  label: {
    marginRight: 'auto',
    marginLeft: '1rem',
  },
})

export const Input = styled('input', {
  display: 'flex',
  padding: '0.8rem 0',
  width: '95%',
  border: 'solid 1px $pink-300',
  borderRadius: '5px',
  background: '$gray-900',
})

export const Button = styled('button', {
  display: 'flex',
  padding: '1rem 5rem',
  background: '$pink-300',
  borderRadius: '16px',
  marginTop: '1rem',
})
