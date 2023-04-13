import { useNavigate } from 'react-router-dom'
import { ButtonContainer } from './styles'

interface ButtonProps {
  title: string
  url: string
}

export function Button({ title, url }: ButtonProps) {
  const navigate = useNavigate()

  function gotoSubscribe() {
    navigate(url)
  }
  return <ButtonContainer onClick={gotoSubscribe}>{title}</ButtonContainer>
}
