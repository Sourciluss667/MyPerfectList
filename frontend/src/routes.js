import Login from "./components/Login";
import SiginUp from "./components/SiginUp";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";

export const routes = [
  { path: '/', component: Welcome },
  { path: '/login', component: Login },
  { path: '/signup', component: SiginUp },
  { path: '/profile/:user', component: Profile }
]