import img01 from '../../assets/aerobic.jpg'
import img02 from '../../assets/aerobic2.jpg'
import {
  ButtonContainer,
  ImageContainer,
  MainContainer,
  Text,
  Title,
  TitleContainer,
} from './styles'
import { Button } from '../../components/button'
import { Link } from 'react-router-dom'

export function Aerobic() {
  return (
    <MainContainer>
      <TitleContainer>
        <Title>Aeróbico</Title>
      </TitleContainer>
      <Text>
        Os exercícios aeróbicos são uma modalidade de atividade física que
        envolve movimentos rítmicos e contínuos, que elevam a frequência
        cardíaca e mantêm o corpo em movimento por um período prolongado. Esses
        exercícios são conhecidos por seus inúmeros benefícios para a saúde,
        tanto física quanto mental.
      </Text>
      <ImageContainer>
        <img src={img01} alt='' />
      </ImageContainer>
      <Text>
        Um dos principais benefícios dos exercícios aeróbicos é o aumento da
        capacidade cardiovascular. Eles ajudam a fortalecer o coração e os
        pulmões, melhorando a circulação sanguínea e aumentando a capacidade de
        transporte de oxigênio para as células do corpo. Isso pode prevenir
        doenças cardíacas e melhorar a qualidade de vida das pessoas que os
        praticam.
      </Text>
      <ImageContainer>
        <img src={img02} alt='' />
      </ImageContainer>
      <strong>Melhore 1% todos os dias.</strong>
      <ButtonContainer>
        <Button title='Inscreva-se' url='/subscribe' />
        <Link to={'/'}>Voltar</Link>
      </ButtonContainer>
    </MainContainer>
  )
}
