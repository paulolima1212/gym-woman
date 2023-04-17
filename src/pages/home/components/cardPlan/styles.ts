import { styled } from '../../../../styles'

export const CardPlanContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '17rem',
  height: '27.6rem',
  borderRadius: '0px 26px 0px 26px',
  gap: '2rem',
  overflow: 'hidden',
  position: 'relative',

  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
})

export const Title = styled('h2', {
  marginBottom: '2rem',
  marginTop: '1rem',
  fontSize: '1.5rem',
  color: '$gray-100',
  textAlign: 'center',
  zIndex: '10',
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',
  width: '100%',
  alignItems: 'center',
  zIndex: '11',
  marginBottom: '2rem',
})
