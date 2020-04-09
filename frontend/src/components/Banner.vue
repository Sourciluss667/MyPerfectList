<template>
  <div class="hero-head is-fluid">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img
              src="https://bulma.io/images/bulma-type-white.png"
              alt="Logo"
            />
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" v-if="isConnected">
              notification
            </a>
           
            <a class="navbar-item" v-if="isConnected">
              Settings
            </a>
             <a class="navbar-item" v-if="isConnected">
             username: {{username}}
            </a>
            <span class="navbar-item">
              <a  @click="siginOption" class="button is-primary is-inverted" v-if="!isConnected">
                <span>Sign Up</span>
              </a>
              <a class="navbar-item"> </a>
              <a @click="loginOption" class="button is-primary is-inverted" v-if="!isConnected">
                <span>Login</span>
              </a>
              <a @click="logout" class="button is-primary is-inverted" v-if="isConnected">
                <span>Logout</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    isConnected: Boolean,
    username: String
  },
  methods: {
    siginOption() { 
      this.$emit("siginOption")
    },
    loginOption() {
      this.$emit("loginOption")
    },
    logout() {
      this.$emit("logout")
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
