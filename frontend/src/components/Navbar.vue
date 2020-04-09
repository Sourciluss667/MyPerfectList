<template>
  <div>
      <nav class="navbar is-fixed-top is-light">
        <div class="container">
          <div class="navbar-brand"><a class="navbar-item">MyPerfectList</a><a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false"><span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span></a></div>
          <div class="navbar-menu">

            <!-- MENU isConnected -->
            <div class="navbar-start" v-if="isConnected">
              <a class="navbar-item">Features</a>
              <div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link"><span class="icon"><i class="fas fa-bell"></i></span></a> <!-- DROPDOWN -->
                  <div class="navbar-dropdown"><a class="navbar-item navbar-item-dropdown">Notif</a><a class="navbar-item navbar-item-dropdown">Notif</a></div>
                </div>
            </div>

            <!-- Login/Signin !isConnected -->
            <div class="navbar-end" v-if="!isConnected">
              <div class="navbar-item">
                <div class="buttons"><a class="button is-primary is-outlined" @click="loginOption">Log in</a><a class="button is-primary is-outlined" @click="siginOption">Sign up</a></div>
              </div>
            </div>

            <!-- MENU END isConnected -->
            <div class="navbar-end" v-if="isConnected">
              <div class="navbar-item">

                <div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link">{{username}}</a> <!-- DROPDOWN -->
                  <div class="navbar-dropdown">
                    <a class="navbar-item navbar-item-dropdown"><span class="icon" style="margin-right: 5px;"><i class="fas fa-user-circle"></i></span>Profile</a>
                    <a class="navbar-item navbar-item-dropdown"><span class="icon" style="margin-right: 5px;"><i class="fas fa-cog"></i></span>Settings</a>
                    <a class="navbar-item navbar-item-dropdown has-text-danger" @click="logout"><span class="icon" style="margin-right: 5px;"><i class="fas fa-sign-out-alt"></i></span>Logout</a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </nav>

  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    isConnected: Boolean,
    username: String
  },
  methods: {
    siginOption() { 
      this.$emit("siginOption");
    },
    loginOption() {
      this.$emit("loginOption");
    },
    logout() {
      this.$emit("logout");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
