import { styled } from '../../styles'

export const MainContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  strong: {
    fontSize: '1.6rem',
    color: '$pink-300',
    maxWidth: '90%',
    margin: '0 auto 2rem',
    textAlign: 'center',
  },
})

export const TitleContainer = styled('div', {
  display: 'flex',
  width: '100%',
  gap: '1rem',
  justifyContent: 'center',
})

export const Title = styled('h2', {
  display: 'flex',
  gap: '1rem',
  color: '$pink-300',
  fontSize: '2.4rem',
  alignItems: 'center',

  '&::after': {
    content: '',
    flex: 1,
    minWidth: '18rem',
    height: '0.3rem',
    background: '$pink-300',
  },
})

export const Text = styled('p', {
  display: 'flex',
  fontSize: '1.2rem',
  color: '$gray-200',
  maxWidth: '90%',
  margin: '0 auto',
  padding: '1rem 0',
})

export const ImageContainer = styled('div', {
  display: 'flex',
  maxWidth: '90%',
  maxHeight: '20.7rem',
  margin: '2rem auto',

  img: {
    width: '100%',
    objectFit: 'contain',
  },
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '1rem 0',
})
