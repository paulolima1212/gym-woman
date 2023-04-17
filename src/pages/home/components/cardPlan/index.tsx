import { Button } from '../../../../components/button'
import { ButtonContainer, CardPlanContainer, Title } from './styles'

interface CardPlanProps {
  title: 'Basic' | 'Smart' | 'Premium'
  url: string
  image: string
}

export function CardPlan({ image, title, url }: CardPlanProps) {
  return (
    <CardPlanContainer style={{ backgroundImage: `url("${image}")` }}>
      <Title>{title}</Title>
      <ButtonContainer>
        <Button title='Saiba mais' url={url} />
      </ButtonContainer>
    </CardPlanContainer>
  )
}
