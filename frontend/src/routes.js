import Login from './components/Login'
import SiginUp from './components/SiginUp'
import ConfirmationSiginUp from './components/ConfirmationSiginUp'
import Welcome from './components/Welcome'
import Welcome2 from './components/Welcome2'
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
import Settings from './components/Settings'

export const routes = [
  { path: '/', component: Welcome },
  { path: '/welcome', component: Welcome2 },
  { path: '/login', component: Login },
  { path: '/signup', component: SiginUp },
  { path: '/confirmation_sigin', component: ConfirmationSiginUp },
  { path: '/profile/:username', component: Profile ,meta: {title: 'Profile', breadCrumb:{1:['home','Home','/'],2:['isActive','Profile','']}}},
  { path: '/search', component: Search },
  { path: '/404', component: Page404 },
  { path: '/collections/MyAnimeList', component: MyAnimeList, meta: {title: 'Anime', breadCrumb:{1:['home','Home','/'],2:['isActive','Anime','']}}},
  { path: '/collections/IMDb', component: IMDb },
  { path: '/collections/Rottentomatoes', component: Rottentomatoes },
  { path: '/collections/GoodReads', component: GoodReads },
  { path: '/collections/RateYourMusic', component: RateYourMusic },
  { path: '/collections/others', component: Others },
  { path: '/reset_password', component: PasswordLost },
  { path: '/settings', component: Settings}
]
