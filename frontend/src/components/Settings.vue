<template>
  <div id="settings">
    <div class="columns">
      <div class="column is-one-quarter has-background-grey-lighter" id="settings-menu">
        <aside class="menu">
          <p class="menu-label">Account Settings</p>
          <ul class="menu-list">
            <li>
              <a @click="pInfoState" :class="{ 'has-background-light' : pInformation == true }">Personal Information</a>
            </li>
            <li>
              <a @click="lAccState" :class="{ 'has-background-light' : linkedAcc == true }">Linked accounts</a>
            </li>
            <li>
              <a @click="prefState" :class="{ 'has-background-light' : pref == true }">Preferences</a>
            </li>
            <li>
              <a @click="otherState" :class="{ 'has-background-light' : other == true }">Other</a>
            </li>
          </ul>
        </aside>
      </div>

      <div class="column has-background-white-bis" id="settings-content">
        <div id="personal-information" v-if="pInformation">
          perso
        </div>
        <div id="linked-accounts" v-if="linkedAcc">
          <form @submit.prevent="linkedAccHandler">
            <label for="imdb">IMDB Token : </label><input type="text" name="imdb" placeholder="ex: ur115944803" id="imdb" v-model="linkedAccObj.imdb"><br>
            <label for="mal">MAL Token : </label><input type="text" name="mal" placeholder="ex: xxxxxxxxx" id="mal" v-model="linkedAccObj.mal"><br>
            <label for="rym">RYM Token : </label><input type="text" name="rym" placeholder="ex: xxxxxxxxx" id="rym" v-model="linkedAccObj.rym"><br>
            <label for="gd">GoodReads Token : </label><input type="text" name="gd" placeholder="ex: xxxxxxxxx" id="gd" v-model="linkedAccObj.gd"><br>
            <label for="rt">RottentTomatoes Token : </label><input type="text" name="rt" placeholder="ex: xxxxxxxxx" id="rt" v-model="linkedAccObj.rt"><br><br>
            <input type="submit" value="Change !">
          </form>
        </div>
        <div id="preferences" v-if="pref">
          pref
        </div>
        <div id="other" v-if="other">
          other
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { changeTokens } from "../services/users.js";

export default {
  name: "Settings",
  data () {
    return {
      pInformation: false,
      linkedAcc: false,
      pref: false,
      other: false,
      linkedAccObj: {imdb: '', mal: '', rym: '', gd: '', rt: ''},
      parentUserLoaded: false
    }
  },
  created () {
    this.pInformation = true
    this.linkedAcc = false
    this.pref = false
    this.other = false
  },
  updated () {
    if (!this.parentUserLoaded) {
      this.linkedAccObj.imdb = this.$parent.user.imdb
      this.linkedAccObj.mal = this.$parent.user.myanimelist
      this.linkedAccObj.rym = this.$parent.user.rateyourmusic
      this.linkedAccObj.gd = this.$parent.user.goodreads
      this.linkedAccObj.rt = this.$parent.user.rottentomatoes
      this.parentUserLoaded = true
    }
  },
  methods: {
    async linkedAccHandler () {
      // Send new token to backend with JSON obj
      const res = await changeTokens(this.linkedAccObj)
      if (res.status === 200) {
        console.log('TOKENS CHANGE !')
      }
    },
    pInfoState () {
      this.pInformation = true
      this.linkedAcc = false
      this.pref = false
      this.other = false
    },
    lAccState () {
      this.pInformation = false
      this.linkedAcc = true
      this.pref = false
      this.other = false
    },
    prefState () {
      this.pInformation = false
      this.linkedAcc = false
      this.pref = true
      this.other = false
    },
    otherState () {
      this.pInformation = false
      this.linkedAcc = false
      this.pref = false
      this.other = true
    }
  }
};
</script>

<style scoped>
</style>
