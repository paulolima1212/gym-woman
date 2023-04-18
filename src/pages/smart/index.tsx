import { CheckCircle } from '@phosphor-icons/react'
import {
  ButtonContainer,
  ContainerPlan,
  List,
  MainContainer,
  Text,
  Title,
  TitleContainer,
} from './styles'
import { Button } from '../../components/button'
import { Link } from 'react-router-dom'

export function Smart() {
  return (
    <MainContainer>
      <TitleContainer>
        <Title>Plano Smart</Title>
      </TitleContainer>
      <Text>
        Plano ideal para quem tem pouco tempo disponível, mas não abre mão de
        uma boa forma e uma sáude impecável. Este plano oferece uma gama de
        possibilidades de treinos que combinam com sua disponibilidade.
      </Text>
      <ContainerPlan>
        <List>
          <li>
            <CheckCircle color='#e6538a' weight='duotone' />{' '}
            <span>Treinos personalizados</span>
          </li>
          <li>
            <CheckCircle color='#e6538a' weight='duotone' />{' '}
            <span>Gym Woman App</span>
          </li>
          <li>
            <CheckCircle color='#e6538a' weight='duotone' />{' '}
            <span>Mentoria e aconpanhamento</span>
          </li>
          <li>
            <CheckCircle color='#e6538a' weight='duotone' />{' '}
            <span>Treinos personalizados</span>
          </li>
          <li>
            <CheckCircle color='#e6538a' weight='duotone' />{' '}
            <span>Treine quantas vezes quiser</span>
          </li>
        </List>
      </ContainerPlan>
      <ButtonContainer>
        <Button title='Inscreva-se' url='/subscribe' />
        <Link to={'/'}>Voltar</Link>
      </ButtonContainer>
    </MainContainer>
  )
}
