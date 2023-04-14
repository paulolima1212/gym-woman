import { Button, CardContainer, HeaderCard, ListPlan } from './styles'

export function Cards() {
  return (
    <CardContainer>
      <HeaderCard>
        <strong>Basico</strong>
        <span>R$ 59,90</span>
      </HeaderCard>
      <ListPlan>
        <li>Treine 2x na semana</li>
        <li>Treino personalizado</li>
        <li>App para acompanhamento</li>
      </ListPlan>
      <Button>Selecionar</Button>
    </CardContainer>
  )
}
