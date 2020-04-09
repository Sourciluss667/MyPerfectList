<template>
  <div id="app">
    <div class="container is-fluid">
      <!-- HEADER -->
      <Navbar
          :username="user.username"
          :isConnected="isConnected"
          v-on:loginOption="loginOption"
          v-on:siginOption="siginOption"
          v-on:logout="logout"
      />

      <!-- BODY -->
      <section class="section is-medium">
        <div class="container has-text-centered">
          <!-- Contenu affiché -->
          <Welcome v-if="showWelcome" />
          <Login v-if="isLogin" v-on:connected="connected" />
          <SiginUp v-if="isSiginUp" v-on:loginOption="loginOption" />

        </div>
      </section>

      <!-- FOOTER -->
      <footer class="footer">
        <div class="container">
          <div class="columns">
            <div class="column is-4 has-text-centered is-hidden-tablet"><a class="title is-4" href="#">MyPerfectList</a></div>
            <div class="column is-4">
              <div class="level"><a class="level-item" href="#">Features</a><a class="level-item" href="#">Enterprise</a></div>
            </div>
            <div class="column is-4 has-text-centered is-hidden-mobile"><a class="title is-4" href="#">MyPerfectList</a></div>
            <div class="column is-4 has-text-right">
              <div class="level"><a class="level-item" href="#">Support</a><a class="level-item" href="#">ICO</a></div>
            </div>
          </div>
          <p class="subtitle has-text-centered is-6">&copy; 2020 MyPerfectList. All right reserved.</p>
        </div>
      </footer>
    </div>

  </div>
</template>

<script>
import "bulma/css/bulma.css"; // Import Bulma CSS Framework
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SiginUp from "./components/SiginUp";
import Welcome from "./components/Welcome"

export default {
  name: "App",
  components: {
    Navbar,
    Login,
    SiginUp,
    Welcome
  },
  data() {
    return {
      isLogin: false,
      isSiginUp: false,
      isConnected: false,
      user: {},
      showWelcome: true
    };
  },
  async created() {
    if (this.$session.exists()) {
      this.isSiginUp = false;
      this.isSiginUp = false;
      this.showWelcome = false;
      this.isConnected = true;
      this.user = { ...this.$session.get("sessionId") };
    }
  },
  beforeCreate: function() {
    if (!this.$session.exists()) {
      // this.$router.push('/')
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
    logout() {
      this.$session.destroy();
      this.init();
      //  this.$router.push('/')
    },
    init() {
      this.isLogin = false;
      this.isSiginUp = false;
      this.isConnected = false;
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
