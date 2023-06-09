import {
  AboutUs,
  CardsContainer,
  HomeContainer,
  Plans,
  Title,
  TitleContainer,
  TitlePlan,
} from './styles'
import logoLight from '../../assets/logo-gym-removebg-preview.png'
import group from '../../assets/group.jpg'
import gain from '../../assets/gain.jpg'
import aerobic from '../../assets/aerobic.jpg'
import woman from '../../assets/woman.jpg'
import { Card } from './components/card'
import { Button } from '../../components/button'
import { CardPlan } from './components/cardPlan'
import { Footer } from './components/footer'
import { Link } from 'react-router-dom'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export function Home() {
  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    initial: 1,
    slides: {
      origin: 'center',
      perView: 2,
      spacing: 15,
    },
  })

  return (
    <HomeContainer>
      <img className='img-principal' src={woman} alt='' />
      <TitleContainer>
        <Title>
          CONSTRUA A TUA <span>MELHOR VERSÃO!</span>
        </Title>
        <p>
          Comece hoje <br /> a contruir o seu futuro, <br />
          com o corpo e a mente <br /> que você merece.
        </p>
        <Button title='Inscreva-se' url='subscribe' />
      </TitleContainer>
      <CardsContainer>
        <Link to={'/muscle'}>
          <Card title='Musculação' img01={gain} img02='' />
        </Link>
        <Link to={'/aerobic'}>
          <Card title='Aeróbico' img01={aerobic} img02='' />
        </Link>
        <Link to={'/group'}>
          <Card title='Aulas em grupo' img01={group} img02='' />
        </Link>
      </CardsContainer>
      <AboutUs>
        <h2>Sobre nós</h2>
        <div className='flex'>
          <p>
            Uma academia só para mulheres pode ser uma opção interessante para
            aquelas que buscam um ambiente mais confortável e seguro para se
            exercitar. Muitas mulheres podem sentir-se intimidadas ao frequentar
            academias mistas, especialmente se estiverem começando uma rotina de
            exercícios ou se sentindo inseguras sobre o próprio corpo. Pensando
            nisso, criamos um espaço onde qualquer mulher sinta-se a vontade em
            treinar, melhorar sua saúde física e mental, em um ambiente
            exclusivo. <br />
            <Link to={'/about'}>Saiba mais...</Link>
          </p>
        </div>
        <img src={logoLight} alt='' />
      </AboutUs>
      <Plans>
        <TitlePlan>Planos</TitlePlan>
        <div ref={sliderRef} className='keen-slider'>
          <div className='keen-slider__slide number-slide1'>
            <CardPlan title='Basic' url='/basic' image={woman} />
          </div>
          <div className='keen-slider__slide number-slide2'>
            <CardPlan title='Smart' url='/smart' image={group} />
          </div>
          <div className='keen-slider__slide number-slide3'>
            <CardPlan title='Premium' url='/premium' image={aerobic} />
          </div>
        </div>
      </Plans>
      <Footer />
    </HomeContainer>
  )
}
