import Login from "./components/Login";
import SiginUp from "./components/SiginUp";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import Goodreads from "./components/Goodreads";
import Page404 from "./components/Page404";
import Search from "./components/Search"

export const routes = [
  { path: '/', component: Welcome },
  { path: '/login', component: Login },
  { path: '/signup', component: SiginUp },
  { path: '/goodreads', component: Goodreads },
  { path: '/profile/:username', component: Profile },
  { path: '/search', component: Search },
  { path: '/404', component: Page404 }
]