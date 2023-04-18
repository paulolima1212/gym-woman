import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { DefaultLayout } from './layouts/defaultLayout/defaultLayout'
import { Subscribe } from './pages/subscribe'
import { MoreInfo } from './pages/more'
import { Muscle } from './pages/muscle'
import { Aerobic } from './pages/aerobic'
import { Group } from './pages/group'
import { Premium } from './pages/premium'
import { Basic } from './pages/basic'
import { Smart } from './pages/smart'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/about' element={<MoreInfo />} />
        <Route path='/muscle' element={<Muscle />} />
        <Route path='/aerobic' element={<Aerobic />} />
        <Route path='/group' element={<Group />} />
        <Route path='/premium' element={<Premium />} />
        <Route path='/basic' element={<Basic />} />
        <Route path='/smart' element={<Smart />} />
      </Route>
    </Routes>
  )
}
