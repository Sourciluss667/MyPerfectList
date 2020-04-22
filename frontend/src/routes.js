import Login from './components/Login'
import SiginUp from './components/SiginUp'
import ConfirmationSiginUp from './components/ConfirmationSiginUp'
import Welcome from './components/Welcome'
import Profile from './components/Profile'
import Search from './components/Search'
import Page404 from './components/Page404'
import MyAnimeList from './components/colllections/MyAnimeList'
import IMDb from './components/colllections/IMDb'
import Rottentomatoes from './components/colllections/Rottentomatoes'
import GoodReads from './components/colllections/GoodReads'
import RateYourMusic from './components/colllections/RateYourMusic'
import Others from './components/colllections/Others'
import PasswordLost from './components/PasswordLost'

export const routes = [
  { path: '/', component: Welcome },
  { path: '/login', component: Login },
  { path: '/signup', component: SiginUp },
  { path: '/confirmation_sigin', component: ConfirmationSiginUp },
  { path: '/profile/:username', component: Profile },
  { path: '/search', component: Search },
  { path: '/404', component: Page404 },
  { path: '/collections/MyAnimeList', component: MyAnimeList },
  { path: '/collections/IMDb', component: IMDb },
  { path: '/collections/Rottentomatoes', component: Rottentomatoes },
  { path: '/collections/GoodReads', component: GoodReads },
  { path: '/collections/RateYourMusic', component: RateYourMusic },
  { path: '/collections/others', component: Others },
  { path: '/reset_password', component: PasswordLost }
]
