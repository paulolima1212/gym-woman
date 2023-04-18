import { FolderNotchMinus } from '@phosphor-icons/react'
import { styled } from '../../styles'

export const MainContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

export const TitleContainer = styled('div', {
  display: 'flex',
  width: '100%',
})

export const Title = styled('h2', {
  display: 'flex',
  gap: '1rem',
  color: '$pink-300',
  fontSize: '2.4rem',
  alignItems: 'center',
  margin: '1rem auto',
  fontWeight: 'initial',

  '&::after': {
    content: '',
    flex: 1,
    minWidth: '17rem',
    height: '0.2rem',
    background: '$pink-300',
  },
})

export const Text = styled('p', {
  display: 'flex',
  fontSize: '1.4rem',
  color: '$gray-200',
  maxWidth: '80%',
  lineHeight: '140%',
  margin: '0 auto',
  padding: '1rem 0',
})

export const ContainerPlan = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
  border: 'solid 2px $pink-300',
  margin: '2rem auto',
  borderRadius: '8px',
})

export const List = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '1.6rem',
  color: '$gray-200',
  padding: '5rem 1.5rem',
  gap: '2.5rem',

  li: {
    display: 'flex',
    gap: '1rem',
  },
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '1rem 0',
  gap: '1rem',

  a: {
    color: '$gray-200',
    margin: '2rem 0',
  },
})
