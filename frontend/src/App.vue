<template>
  <div id="app">
    <section class="hero is-medium is-link is-bold is-fullheight">
      <Banner
        :username="user.username"
        :isConnected="isConnected"
        v-on:loginOption="loginOption"
        v-on:siginOption="siginOption"
        v-on:logout="logout"
      />
      <div class="card has-background-grey-darker has-text-white-ter is-2">
        <div class="tile is-ancestor has-background-grey-darker">
          <Menu v-if="isConnected" />
          <div class="tile is-vertical is-9">
            <div
              class="hero-body has-background-grey-darker has-text-white-ter"
            >
              <div class="container has-text-centered">
                <section class="body">
                  <Login v-if="isLogin" v-on:connected="connected" />
                  <SiginUp v-if="isSiginUp" v-on:loginOption="loginOption" />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-foot">
        <div class="content has-text-centered">
          <p>
            This is the footer
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import "bulma/css/bulma.css"; // Import Bulma CSS Framework
import Menu from "./components/Menu.vue";
import Banner from "./components/Banner.vue";
import Login from "./components/Login.vue";
import SiginUp from "./components/SiginUp.vue";
export default {
  name: "App",
  components: {
    Banner,
    Menu,
    Login,
    SiginUp,
  },
  data() {
    return {
      isLogin: false,
      isSiginUp: false,
      isConnected: false,
      user: {},
    };
  },
  async created() {
    if (this.$session.exists()) {
      this.isSiginUp = false;
      this.isSiginUp = false;
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
      }
    },
    siginOption() {
      if (!this.isConnected) {
        this.isSiginUp = true;
        this.isLogin = false;
      }
    },
    connected(user) {
      this.user = { ...user };
      this.isConnected = true;
      this.isLogin = false;
      this.isSiginUp = false;
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
      this.user = {};
    },
  },
};
</script>

<style></style>
