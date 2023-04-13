import { styled } from '../../../../styles'

export const FooterContainer = styled('footer', {
  width: '100%',
  minHeight: '15rem',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  color: '$gray-100',
  marginBottom: '2rem ',
})

export const Title = styled('h2', {
  color: '$pink-200',
  fontSize: '2.5rem',
  marginBottom: '2rem',
})

export const Fields = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  alignItems: 'center',
  paddingBottom: '2rem',

  '.fields': {
    gap: '0.8rem',
  },
})

export const SocialMedia = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-around',
  minHeight: '5rem',
})
