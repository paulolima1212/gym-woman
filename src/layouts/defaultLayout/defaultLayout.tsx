import { Outlet } from 'react-router-dom'
import { DefaultLayoutContainer } from './styles'
import { Header } from './components/header'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  )
}
