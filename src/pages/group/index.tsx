import img01 from '../../assets/group.jpg'
import img02 from '../../assets/group1.jpg'
import {
  ButtonContainer,
  ImageContainer,
  MainContainer,
  Text,
  Title,
  TitleContainer,
} from './styles'
import { Button } from '../../components/button'

export function Group() {
  return (
    <MainContainer>
      <TitleContainer>
        <Title>Aulas em Grupo</Title>
      </TitleContainer>
      <Text>
        Os exercícios em grupo são uma ótima opção para quem deseja praticar
        atividade física de forma mais social e motivadora. Eles consistem em
        realizar exercícios em conjunto com outras pessoas, sob a orientação de
        um professor ou treinador.
      </Text>
      <ImageContainer>
        <img src={img01} alt='' />
      </ImageContainer>
      <Text>
        Um dos principais benefícios dos exercícios em grupo é a motivação.
        Quando se está em um grupo, é mais fácil manter o foco e a disciplina
        para seguir o programa de exercícios. O apoio dos colegas de treino pode
        ser uma grande ajuda para superar os momentos de desânimo e manter a
        rotina de treinamento.
      </Text>
      <ImageContainer>
        <img src={img02} alt='' />
      </ImageContainer>
      <strong>Estamos sempre juntas!</strong>
      <ButtonContainer>
        <Button title='Inscreva-se' url='subscribe' />
      </ButtonContainer>
    </MainContainer>
  )
}
