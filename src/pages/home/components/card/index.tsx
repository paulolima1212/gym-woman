import dumbrell from '../../../../assets/dumbrell.svg'
import woman from '../../../../assets/woman.jpg'
import { CardContainer, CardFilter } from './styles'

interface CardProps {
  title: string
  img01: string
  img02: string
}

export function Card({ title, img01, img02 }: CardProps) {
  return (
    <CardContainer>
      <CardFilter />
      <img className='image01' src={img01} alt='' />
      <span>{title}</span>
      <img className='image02' src={dumbrell} alt='' />
    </CardContainer>
  )
}
