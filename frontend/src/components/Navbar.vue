<template>
  <div>
      <nav class="navbar is-fixed-top is-light">
        <div class="container">
          <div class="navbar-brand">
            <a @click="welcome">
              <figure class="image has-image-centered">
                <img src="../assets/logo.png">
              </figure>
            </a>
            <a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false"><span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span></a>
          </div>
          <div class="navbar-menu">

            <!-- MENU isConnected -->
            <div class="navbar-start" v-if="isConnected">
              <a class="navbar-item" @click="search">Search</a>
              <div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link">Collections</a> <!-- DROPDOWN -->
                <div class="navbar-dropdown">
                  <a class="navbar-item navbar-item-dropdown"  @click="myAnimeListCollection">Anime</a>
                  <a class="navbar-item navbar-item-dropdown" @click="IMDbCollection">IMDb</a>
                  <a class="navbar-item navbar-item-dropdown" @click="rottentomatoesCollection">Rottentomatoes</a>
                  <a class="navbar-item navbar-item-dropdown" @click="goodReadsCollection">GoodReads</a>
                  <a class="navbar-item navbar-item-dropdown" @click="rateYourMusicCollection">RateYourMusic</a>
                  <a class="navbar-item navbar-item-dropdown" @click="othersCollection">Others</a>
                </div>
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

                <div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link"><span class="icon"><i class="fas fa-bell"></i></span></a> <!-- DROPDOWN -->
                <div class="navbar-dropdown">
                  <a class="navbar-item navbar-item-dropdown">Notif</a>
                  <a class="navbar-item navbar-item-dropdown">Notif</a>
                </div>
              </div>

                <div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link">{{username}}</a> <!-- DROPDOWN -->
                  <div class="navbar-dropdown">
                    <a class="navbar-item navbar-item-dropdown" @click="profile"><span class="icon" style="margin-right: 5px;"><i class="fas fa-user-circle"></i></span>Profile</a>
                    <a class="navbar-item navbar-item-dropdown" @click="settings"><span class="icon" style="margin-right: 5px;"><i class="fas fa-cog"></i></span>Settings</a>
                    <a class="navbar-item navbar-item-dropdown has-text-danger" @click="logout"><span class="icon" style="margin-right: 5px;"><i class="fas fa-sign-out-alt"></i></span>Logout</a>
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
      this.$router.push('/signup')
    },
    loginOption() {
      this.$router.push('/login')
    },
    logout() {
      this.$emit("logout");
    },
    profile() {
      this.$router.push(`/profile/${this.username}`)
    },
    search() {
      this.$router.push('/search')
    },
    settings() {
      this.$router.push('/settings')
    },
    welcome() {
      this.$router.push('/')
    },
    myAnimeListCollection() {
      this.$router.push('/collections/MyAnimeList').catch(err=>{console.log('component view was already loaded',err)});
    },
    IMDbCollection() {
      this.$router.push('/collections/IMDb')
    },
    rateYourMusicCollection() {
      this.$router.push('/collections/RateYourMusic')
    },
    rottentomatoesCollection() {
      this.$router.push('/collections/Rottentomatoes')
    },
    othersCollection() {
      this.$router.push('/collections/others')
    },
    goodReadsCollection() {
      this.$router.push('/collections/GoodReads')
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
