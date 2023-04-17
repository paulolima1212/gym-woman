import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'
import { Fields, FooterContainer, SocialMedia, Title } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <Title>Contato</Title>
      <Fields>
        <div className='fields flex'>
          <span>Tel:</span>
          <strong>(21) 3636-3636</strong>
        </div>
        <div className='fields flex'>
          <span>Cel:</span>
          <strong>(21) 97234-3410</strong>
        </div>
        <div className='fields flex'>
          <span>E-mail:</span>
          <strong>academiadamulher@gmail.com</strong>
        </div>
        <div className='fields flex'>
          <span>End:</span>
          <strong>R. Raimundo de Farias - Centro, Itaboraí - RJ</strong>
        </div>
      </Fields>
      <SocialMedia>
        <a href='https://www.facebook.com/pages/Academia-da-Mulher-Fernanda-Morisco/1147590872069498'>
          <FacebookLogo size={32} color='#e6538a' weight='duotone' />
        </a>
        <a href='https://www.instagram.com/academiadamulher.itaborai/'>
          <InstagramLogo size={32} color='#e6538a' weight='duotone' />
        </a>
        <a href='https://wa.me/5521972343410'>
          <WhatsappLogo size={32} color='#e6538a' weight='duotone' />
        </a>
      </SocialMedia>
    </FooterContainer>
  )
}
