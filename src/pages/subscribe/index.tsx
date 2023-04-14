import { Cards } from './cards'
import {
  BoxForm,
  Button,
  CardsContainer,
  FieldContainer,
  Input,
  SubscribeContainer,
} from './styles'

export function Subscribe() {
  return (
    <SubscribeContainer>
      <h1>Escolha seu plano</h1>
      <CardsContainer>
        <Cards />
        <Cards />
        <Cards />
      </CardsContainer>
      <BoxForm>
        <h2>Preencha seus dados:</h2>
        <FieldContainer>
          <label htmlFor=''>Nome</label>
          <Input type='text' />
        </FieldContainer>
        <FieldContainer>
          <label htmlFor=''>CPF</label>
          <Input type='text' />
        </FieldContainer>
        <FieldContainer>
          <label htmlFor=''>Data Nasc.</label>
          <Input type='text' />
        </FieldContainer>
        <FieldContainer>
          <label htmlFor=''>E-mail</label>
          <Input type='text' />
        </FieldContainer>
        <FieldContainer>
          <label htmlFor=''>Telefone</label>
          <Input type='text' />
        </FieldContainer>
        <Button>Confirmar</Button>
        <a href='/'>Voltar</a>
      </BoxForm>
    </SubscribeContainer>
  )
}
