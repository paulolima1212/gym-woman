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
          <strong>(21) 9888-8888</strong>
        </div>
        <div className='fields flex'>
          <span>Cel:</span>
          <strong>(21) 9999-9999</strong>
        </div>
        <div className='fields flex'>
          <span>E-mail:</span>
          <strong>gymwoman@gmail.com</strong>
        </div>
        <div className='fields flex'>
          <span>End:</span>
          <strong>
            Rua vinte e dois, n 1999, Joaquin de Oliveira - Itaborai
          </strong>
        </div>
      </Fields>
      <SocialMedia>
        <FacebookLogo size={32} color='#e6538a' weight='duotone' />
        <InstagramLogo size={32} color='#e6538a' weight='duotone' />
        <WhatsappLogo size={32} color='#e6538a' weight='duotone' />
      </SocialMedia>
    </FooterContainer>
  )
}
