import { Button, CardContainer, HeaderCard, ListPlan } from './styles'

interface CardsProps {
  plan: 'basic' | 'smart' | 'premium'
  title: string
  price: string
}

export function Cards({ plan, title, price }: CardsProps) {
  return (
    <CardContainer>
      <HeaderCard plan={plan}>
        <strong>{title}</strong>
        <span>R$ {price}</span>
      </HeaderCard>
      <ListPlan>
        <li>Treine 2x na semana</li>
        <li>Treino personalizado</li>
        <li>App para acompanhamento</li>
      </ListPlan>
      <Button plan={plan}>Selecionar</Button>
    </CardContainer>
  )
}
