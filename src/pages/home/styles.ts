import { styled } from '../../styles'

export const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  position: 'relative',

  '.img-principal': {
    width: '100%',
  },
})

export const CardsContainer = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '1.5rem',
  justifyContent: 'space-around',
})

export const TitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  position: 'absolute',
  top: '1.2rem',
  right: '0',
  gap: '1.5rem',
  padding: '0 1rem',

  p: {
    textAlign: 'right',
    color: '$gray-100',
    lineHeight: '1.5rem',
  },
})

export const Title = styled('h2', {
  color: '$gray-300',

  span: {
    color: '$pink-200',
  },
})

export const AboutUs = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '10rem',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 4rem',

  h2: {
    color: '$pink-200',
    marginBottom: '2rem',
    fontSize: '2.5rem',
  },

  p: {
    color: '$gray-300',
    fontSize: '1.5rem',
    lineHeight: '2.5rem',
  },

  a: {
    color: '$white',
  },

  img: {
    opacity: '0.2',
    width: '70%',
    position: 'absolute',
    top: '40rem',
  },
})

export const Plans = styled('section', {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  marginTop: '2rem',
  marginBottom: '2rem',
  flexDirection: 'column',
  background: 'rgba(230, 83, 138, 0.74)',
  boxShadow:
    'inset 0px -4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)',

  '.card': {
    width: '70%',
    height: '70%',
  },
})

export const TitlePlan = styled('h2', {
  color: '$gray-100',
  marginBottom: '2rem',
  fontSize: '2.5rem',
})
