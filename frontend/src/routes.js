import Login from './components/Login'
import SiginUp from './components/SiginUp'
import ConfirmationSiginUp from './components/ConfirmationSiginUp'
import Welcome from './components/Welcome'
import Profile from './components/Profile'
import Search from './components/Search'
import Page404 from './components/Page404'

export const routes = [
  { path: '/', component: Welcome },
  { path: '/login', component: Login },
  { path: '/signup', component: SiginUp },
  { path: '/confirmation_sigin', component: ConfirmationSiginUp },
  { path: '/profile/:username', component: Profile },
  { path: '/search', component: Search },
  { path: '/404', component: Page404 }
]
