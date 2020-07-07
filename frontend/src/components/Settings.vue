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
          <form @submit.prevent="pInfoHandler" autocomplete="off">
            <div class="columns is-centered">
              <div class="column is-one-quarter">
                <!-- NAME -->
                <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input :class="'input ' + colorStatus(infoStatus.name)" type="text" name="name" id="name" v-model="pInfoObj.name">
                  </div>
                </div>

                <!-- USERNAME -->
                <div class="field">
                  <label class="label">Username</label>
                  <div class="control">
                    <input :class="'input ' + colorStatus(infoStatus.username)" type="text" name="username" id="username" v-model="pInfoObj.username">
                  </div>
                </div>

                <!-- EMAIL -->
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input :class="'input ' + colorStatus(infoStatus.email)" type="email" name="email" id="email" v-model="pInfoObj.email">
                  </div>
                </div>
              </div>

              <div class="column is-one-quarter">
                <div class="field">
                  <label class="label">Birthdate</label>
                  <div class="control">
                    <input class="input" type="date" name="birthdate" id="birthdate" v-model="pInfoObj.birthdate">
                  </div>
                </div>

                <div :class="'select ' + colorStatus(infoStatus.name)">
                  <select name="gender" id="gender" v-model="pInfoObj.gender">
                    <option value="">Gender</option>
                    <option value="MALE">Man</option>
                    <option value="FEMALE">Woman</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
              </div>

              <div class="column is-one-quarter">

                <div class="field">
                  <label class="label">Password</label>
                  <div class="control">
                    <input :class="'input ' + colorStatus(infoStatus.name)" type="password" name="pass" id="pass" v-model="pInfoObj.pass" autocomplete="no">
                  </div>
                  <p class="help">Rules for password</p>
                </div>

                <div class="field">
                  <label class="label">Re-Type Password</label>
                  <div class="control">
                    <input class="input" type="password" name="passVerif" id="passVerif" v-model="pInfoObj.passVerif">
                  </div>
                  <p class="help"><span v-if="pInfoObj.pass === pInfoObj.passVerif" class="has-text-success">It's good !</span><span v-else class="has-text-danger">Not good !</span></p>
                </div>

              </div>
            </div>

            <input v-if="infoChangeGood === 1" class="button has-text-success" type="submit" value="Change !">
            <input v-else-if="infoChangeGood === -1" class="button has-text-danger" type="submit" value="Change !">
            <input v-else class="button" type="submit" value="Change !">
          </form>
        </div>
        <div id="linked-accounts" v-if="linkedAcc">
          <form @submit.prevent="linkedAccHandler">
            <div class="columns is-centered">
              <div class="column is-one-quarter">
            <div class="field">
              <label class="label">IMDB Token</label>
              <div class="control">
                <input class="input" type="text" name="imdb" id="imdb" v-model="linkedAccObj.imdb">
              </div>
              <p class="help"><a href="https://www.imdb.com/list/watchlist?ref_=nv_usr_wl" target="_blank" rel="noopener noreferrer"><i class="fas fa-info-circle"></i></a> Like this : ur115944803</p>
            </div>
            <div class="field">
              <label class="label">MAL Token</label>
              <div class="control">
                <input class="input" type="text" name="mal" id="mal" v-model="linkedAccObj.mal">
              </div>
              <p class="help">Use your MAL username</p>
            </div>
            <div class="field">
              <label class="label">RYM Token</label>
              <div class="control">
                <input class="input" type="text" name="rym" id="rym" v-model="linkedAccObj.rym">
              </div>
              <p class="help">Use your RYM username</p>
            </div>
              </div>
              <div class="column is-one-quarter">
            <div class="field">
              <label class="label">GoodReads Token</label>
              <div class="control">
                <input class="input" type="text" name="gd" id="gd" v-model="linkedAccObj.gd">
              </div>
              <p class="help"><a><i class="fas fa-info-circle"></i></a> Like this : 103381785-zack-drake</p>
            </div>
            <div class="field">
              <label class="label">RottentTomatoes Token</label>
              <div class="control">
                <input class="input" type="text" name="rt" id="rt" v-model="linkedAccObj.rt">
              </div>
              <p class="help"><a><i class="fas fa-info-circle"></i></a> Like this : 978507916</p>
            </div>
            <br>
            <input class="button" id="tokensubmit" type="submit" value="Change !">
              </div>
            </div>
          </form>
        </div>
        <div id="preferences" v-if="pref">
          Under construction
        </div>
        <div id="other" v-if="other">
          Under construction
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { changeTokens, changeName, changeUsername, changeEmail, changeGender, changePass } from "../services/users.js";

function parseDate(str) {
  let s = str.split('/')
  // 0 = day, 1 = month, 2 = year
  return `${s[2]}-${s[1]}-${s[0]}`
}

export default {
  name: "Settings",
  data () {
    return {
      pInformation: false,
      linkedAcc: false,
      pref: false,
      other: false,
      linkedAccObj: {imdb: '', mal: '', rym: '', gd: '', rt: ''},
      pInfoObj: {name: '', username: '', email: '', birthdate: '', gender: '', pass: '', passVerif: ''},
      parentUserLoaded: false,
      infoChangeGood: 0,
      infoStatus: {name: '', username: '', email: '', gender: '', pass: ''}
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
      // tokens
      this.linkedAccObj.imdb = this.$parent.user.imdb
      this.linkedAccObj.mal = this.$parent.user.myanimelist
      this.linkedAccObj.rym = this.$parent.user.rateyourmusic
      this.linkedAccObj.gd = this.$parent.user.goodreads
      this.linkedAccObj.rt = this.$parent.user.rottentomatoes

      // pInfo
      this.pInfoObj.name = this.$parent.user.name
      this.pInfoObj.username = this.$parent.user.username
      this.pInfoObj.email = this.$parent.user.email
      this.pInfoObj.birthdate = new Date(this.$parent.user.birthdate).toLocaleDateString()
      this.pInfoObj.birthdate = parseDate(this.pInfoObj.birthdate)
      this.pInfoObj.gender = this.$parent.user.gender

      this.parentUserLoaded = true
    }
  },
  methods: {
    async linkedAccHandler () {
      // Send new token to backend with JSON obj
      const res = await changeTokens(this.linkedAccObj)
      if (res.status === 200) {
        document.getElementById('tokensubmit').classList.add('has-text-success')
      } else {
        document.getElementById('tokensubmit').classList.add('has-text-danger')
      }
    },
    colorStatus (statusCode) {
      if (statusCode === 200) return 'has-text-success'
      else if (statusCode === '') return ''
      else return 'has-text-danger'
    },
    async pInfoHandler () {
      let status = {name: '', username: '', email: '', gender: '', pass: ''}
      if (this.pInfoObj.name != this.$parent.user.name) {
        const r = await changeName(this.pInfoObj.name)
        status.name = r.status
      }
      if (this.pInfoObj.username != this.$parent.user.username) {
        const r = await changeUsername(this.pInfoObj.username)
        status.username = r.status
        if (r.status === 200) {
          this.$root.$emit('changeUsername', this.pInfoObj.username)
        }
      }
      if (this.pInfoObj.email != this.$parent.user.email) {
        const r = await changeEmail(this.pInfoObj.email)
        status.email = r.status
      }
      if (this.pInfoObj.gender != this.$parent.user.gender) {
        const r = await changeGender(this.pInfoObj.gender)
        status.gender = r.status
      }
      if (this.pInfoObj.pass != '' && this.pInfoObj.pass === this.pInfoObj.passVerif) {
        const r = await changePass(this.pInfoObj.pass, this.pInfoObj.passVerif)
        status.pass = r.status
      }

      this.infoChangeGood = 1
      
      for (const value of Object.entries(status)) {
        console.log(value)
        if (value[1] != 200 && value[1] != '') this.infoChangeGood = -1
      }

      this.infoStatus = status
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
