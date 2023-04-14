import logo from '../../../assets/logo.png'
import {
  HeaderContainer,
  HeaderContent,
  MenuToggle,
  MenuToggleContainer,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div className='flex'>
          <img src={logo} alt='' />
          <h1>Academia da Mulher</h1>
        </div>
        <MenuToggleContainer>
          <MenuToggle status={'isClose'} />
        </MenuToggleContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
