import { styled } from '../../../styles'

export const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: '$gray-100',
  width: '11.6rem',
  height: '17.8rem',
  alignItems: 'center',
  color: '$black',
  borderRadius: '5px',
  filter: 'drop-shadow(-2px 2px 2px rgba(255, 124, 173, 0.5))',
  padding: '0 1rem',
})

export const HeaderCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: '$pink-300',
  width: '95%',
  height: '5rem',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '-2.5rem',
  borderRadius: '6px',
  gap: '0.6rem',
  color: '$gray-100',
  boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.25)',

  strong: {
    fontSize: '1.3rem',
  },

  span: {
    fontSize: '1.3rem',
  },
})

export const ListPlan = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
  marginTop: '2rem',
})

export const Button = styled('button', {
  display: 'flex',
  padding: '1rem 2rem',
  background: '$pink-300',
  borderRadius: '16px',
  marginTop: 'auto',
  marginBottom: '1rem',
  color: '$gray-100',
  fontWeight: 'bold',
  filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))',
})
