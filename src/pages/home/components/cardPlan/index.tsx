import { Button } from '../../../../components/button'
import { ButtonContainer, CardPlanContainer, Title } from './styles'

export function CardPlan() {
  return (
    <CardPlanContainer>
      <Title>Premium</Title>
      <ButtonContainer>
        <Button title='Saiba mais' url='#' />
      </ButtonContainer>
    </CardPlanContainer>
  )
}
