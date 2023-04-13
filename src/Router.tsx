import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { DefaultLayout } from './layouts/defaultLayout/defaultLayout'
import { Subscribe } from './pages/subscribe'
import { MoreInfo } from './pages/more'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/more' element={<MoreInfo />} />
      </Route>
    </Routes>
  )
}
