import * as Dialog from '@radix-ui/react-dialog'
import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
import {
  DialogContent,
  DialogOverlay,
  HeaderContainer,
  HeaderContent,
  ListMenu,
  MenuToggle,
  MenuToggleContainer,
} from './styles'

export function Header() {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <HeaderContent>
        <div className='flex' onClick={() => navigate('/')}>
          <img src={logo} alt='' />
          <h1 onClick={() => navigate('/')}>Academia da Mulher</h1>
        </div>
        <MenuToggleContainer>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <MenuToggle status={'isClose'} />
            </Dialog.Trigger>
            <Dialog.Portal>
              <DialogOverlay />
              <DialogContent>
                <img src={logo} alt='' />
                <ListMenu>
                  <li>
                    <Dialog.Close asChild>
                      <Link to={'/'}> Home</Link>
                    </Dialog.Close>
                  </li>
                  <li>
                    <Dialog.Close asChild>
                      <Link to={'/'}>Planos</Link>
                    </Dialog.Close>
                  </li>
                  <li>
                    <Dialog.Close asChild>
                      <Link to={'/about'}>Sobre</Link>
                    </Dialog.Close>
                  </li>
                  <li>
                    <Dialog.Close asChild>
                      <Link to={'/'}>Galeria</Link>
                    </Dialog.Close>
                  </li>
                </ListMenu>
              </DialogContent>
            </Dialog.Portal>
          </Dialog.Root>
        </MenuToggleContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
