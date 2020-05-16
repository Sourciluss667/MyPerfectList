<template>
  <div id="app">
    <div class="container is-fluid">
      <!-- HEADER -->
      <Navbar
        :username="user.username"
        :isConnected="isConnected"
        v-on:logout="logoutOption"
      />

      <!-- BODY -->
      <section class="section is-medium">
         
        <div class="container has-text-centered"> 
          <!-- Contenu affiché -->
          <!-- METTRE NOUVEAU COMPOSANTS ICI AVEC UN V-IF -->
          <!-- METTRE NOUVEAU COMPOSANTS ICI AVEC UN V-IF -->
          <!-- METTRE NOUVEAU COMPOSANTS ICI AVEC UN V-IF -->

          <router-view></router-view>
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

import { logout, getCurrentUser } from "./services/users";

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      isConnected: false,
      user: {},
      params:{}
    };
  },
  async created() {
    // Init app (verif if connected)
    const user = await getCurrentUser();

    if (user) {
      this.user = { ...user };
      this.isConnected = true;
    } else {
      this.init();
    }
  },
  methods: {
    connected(user) {
      this.user = { ...user };
      this.isConnected = true;
      if (this.$router.currentRoute.path != "/") this.$router.push("/");
    },
    logoutOption() {
      logout();
      this.init();
    },
    init() {
      this.isConnected = false;
      this.user = {};
      if (this.$router.currentRoute.path != "/") this.$router.push("/");
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
