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
          linked acc
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
export default {
  name: "Settings",
  data () {
    return {
      pInformation: false,
      linkedAcc: false,
      pref: false,
      other: false
    }
  },
  created () {
    this.pInformation = true
    this.linkedAcc = false
    this.pref = false
    this.other = false
  },
  methods: {
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
