import muscle2 from '../../assets/muscle2.jpg'
import muscle1 from '../../assets/muscle1.jpg'
import {
  ButtonContainer,
  ImageContainer,
  MainContainer,
  Text,
  Title,
  TitleContainer,
} from './styles'
import { Button } from '../../components/button'

export function Muscle() {
  return (
    <MainContainer>
      <TitleContainer>
        <Title>Musculação</Title>
      </TitleContainer>
      <Text>
        Os benefícios da musculação são muitos e variados. Em primeiro lugar,
        ela ajuda a aumentar a força e resistência muscular, o que é importante
        para a realização de tarefas cotidianas, práticas esportivas e até mesmo
        para a prevenção de lesões. Além disso, a musculação pode contribuir
        para a melhoria da postura corporal e prevenção de dores nas costas.
      </Text>
      <ImageContainer>
        <img src={muscle1} alt='' />
      </ImageContainer>
      <Text>
        Outro benefício da musculação é a melhoria da composição corporal, ou
        seja, a redução do percentual de gordura e aumento da massa muscular
        magra. Isso é especialmente importante para quem deseja emagrecer ou
        melhorar a estética do corpo. A musculação também pode contribuir para o
        aumento da densidade óssea, o que é importante para a prevenção da
        osteoporose.
      </Text>
      <ImageContainer>
        <img src={muscle2} alt='' />
      </ImageContainer>
      <strong>
        Não é apenas um corpo bonito, é você saudável em qualquer idade.
      </strong>
      <ButtonContainer>
        <Button title='Inscreva-se' url='/subscribe' />
      </ButtonContainer>
    </MainContainer>
  )
}
