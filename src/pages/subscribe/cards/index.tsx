import { useState } from 'react'
import { Button, CardContainer, HeaderCard, ListPlan } from './styles'

interface CardsProps {
  plan: 'basic' | 'smart' | 'premium'
  title: string
  price: string
}

export function Cards({ plan, title, price }: CardsProps) {
  const [selected, setSelected] = useState(false)

  function handleChangePlan() {
    setSelected((prev) => !prev)
  }

  return (
    <CardContainer>
      <HeaderCard selected={selected} plan={plan}>
        <strong>{title}</strong>
        <span>R$ {price}</span>
      </HeaderCard>
      <ListPlan>
        <li>Treine 2x na semana</li>
        <li>Treino personalizado</li>
        <li>App para acompanhamento</li>
      </ListPlan>
      <Button onClick={handleChangePlan} plan={plan}>
        Selecionar
      </Button>
    </CardContainer>
  )
}
