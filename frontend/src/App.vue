<template>
  <div id="app">
    <div class="container is-fluid">
      <!-- HEADER -->
      <Navbar
        :username="user.username"
        :isConnected="isConnected"
        v-on:loginOption="loginOption"
        v-on:siginOption="siginOption"
        v-on:logout="logoutOption"
        v-on:profileOption="profileOption"
      />

      <!-- BODY -->
      <section class="section is-medium">
        <div class="container has-text-centered">
          <!-- Contenu affiché -->
          <!-- METTRE NOUVEAU COMPOSANTS ICI AVEC UN V-IF -->
          <!-- METTRE NOUVEAU COMPOSANTS ICI AVEC UN V-IF -->
          <!-- METTRE NOUVEAU COMPOSANTS ICI AVEC UN V-IF -->
          <Welcome v-if="showWelcome" />
          <Login v-if="isLogin" v-on:connected="connected" />
          <SiginUp v-if="isSiginUp" v-on:loginOption="loginOption" />
          <Profile v-if="isProfile" :userData="user" />
        </div>
      </section>

      <!-- Footer -->
      <nav class="navbar is-fixed-bottom is-light">
        <div class="navbar-start">
          <div class="navbar-item">
            Made by
            <span
              class="icon"
              style="margin-left: 5px;cursor: pointer;"
              title="Quentin, Komi, Benjamin"
              ><i class="fas fa-user-friends"></i
            ></span>
          </div>
        </div>
        <div class="navbar-brand">
          <div class="navbar-item">© MyPerfectList</div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <a
              target="_blank"
              href="https://github.com/Sourciluss667/MyPerfectList"
              ><span class="icon"><i class="fab fa-github-alt"></i></span
            ></a>
          </div>
          <div class="navbar-item">
            <a target="_blank" href="https://discord.gg/Mu3c7d5"
              ><span class="icon"><i class="fab fa-discord"></i></span
            ></a>
          </div>
          <div class="navbar-item">
            <a target="_blank" href="https://www.intechinfo.fr/"
              ><span class="icon"><i class="fas fa-graduation-cap"></i></span
            ></a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import "bulma/css/bulma.css"; // Import Bulma CSS Framework
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SiginUp from "./components/SiginUp";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import { logout, getCurrentUser } from "./services/users";

export default {
  name: "App",
  components: {
    Navbar,
    Login,
    SiginUp,
    Welcome,
    Profile,
  },
  data() {
    return {
      isLogin: false,
      isSiginUp: false,
      isConnected: false,
      isProfile: false,
      user: {},
      showWelcome: false,
    };
  },
  async created() {
    // Init app (verif if connected)
    const user = await getCurrentUser();
    console.log(user);
    if (user) {
      this.user = { ...user };
    } else {
      this.init();
    }
  },
  methods: {
    loginOption() {
      if (!this.isConnected) {
        this.isLogin = true;
        this.isSiginUp = false;
        this.showWelcome = false;
      }
    },
    siginOption() {
      if (!this.isConnected) {
        this.isSiginUp = true;
        this.isLogin = false;
        this.showWelcome = false;
      }
    },
    connected(user) {
      this.user = { ...user };
      this.isConnected = true;
      this.isLogin = false;
      this.isSiginUp = false;
      this.showWelcome = false;
    },
    logoutOption() { 
       logout();
      this.init();
      logout()
    },
    profileOption() {
      this.isProfile = true;
      this.isLogin = false;
      this.isSiginUp = false;
      this.showWelcome = false;
    },
    init() {
      this.isLogin = false;
      this.isSiginUp = false;
      this.isConnected = false;
      this.isProfile = false;
      this.showWelcome = true;
      this.user = {};
    },
  },
};
</script>

<style>
/* HIDE SCROLLBAR ALL NAVIGATORS */
body {
  overflow: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow: -moz-hidden-unscrollable;
}

::-webkit-scrollbar {
  display: none;
  width: 0px;
  background: transparent;
}
</style>
