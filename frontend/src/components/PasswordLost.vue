<template>
  <div v-if="!feedBack">
    <h1 class="title is-3">Reset password</h1>
    <br />

    <h3 class="subtitle is-5 error" v-if="errormsg != ''">{{ errormsg }}</h3>

    <!-- Desktop & Tablet -->
    <loading
      :active.sync="isLoading"
      :can-cancel="false"  
      :is-full-page="fullPage"
    ></loading>
    <form
      @submit="submitForm"
      onsubmit="return false;"
      class="is-hidden-mobile"
      style="position: relative;width: 350px;left: 50%;transform: translateX(-50%);"
    >
      <div class="field">
        <div class="control">
          <input
            class="input"
            type="email"
            placeholder="Email"
            v-model="email"
            title="Email"
          />
        </div>
      </div> 
      <div class="field">
        <button
          type="submit"
          class="button is-primary is-fullwidth"
          :disabled="disabledOption"
          @click="submitForm"
        >
          Send
        </button>
      </div>
      <a  @click="loginOption">Already have an account ?</a> 
    </form>

    <!-- Responsive -->
    <form
      @submit="submitForm"
      onsubmit="return false;"
      class="is-hidden-tablet"
    >
      <div class="field">
        <div class="control">
          <input
            class="input"
            type="email"
            placeholder="Email"
            v-model="email"
            title="Email"
          />
        </div>
      </div> 
      <div class="field">
        <button
          type="submit"
          :disabled="disabledOption"
          class="button is-primary is-fullwidth"
          @click="submitForm"
        >
          Log in
        </button>
      </div>
       <a  @click="loginOption">Already have an account ?</a> 
    </form>
  </div>
  <div v-else>
    <p style="color:green; font-size: 20px;">
      The password is reseted successfully! A message is sent to your email account. Connected to see the message and  <a class=" is-primary is-outlined" @click="loginOption" style="text-decoration: underline">Log in</a> to do something.
    </p>
    <br />
  </div>
</template>

<script>
import { passwordLost } from "../services/users.js";
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "PasswordLost",
  components: { Loading },
  data() {
    return {
      errormsg: "",
      password: null,
      email: null,
      disabledOption: false,
      isLoading: false,
      fullPage: true,
      feedBack:false
    };
  },
  methods: {
    checkForm() {
      if (!this.password) {
        this.errormsg = "Password required.";
        return false;
      }
      if (!this.email) {
        this.errormsg = "Email required.";
        return false;
      }
      /* else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      } */

      return true;
    },
    async submitForm() {
      this.disabledOption = true; 
      this.isLoading = true;
      await passwordLost( this.email)
        .then((resp) => {
          if (resp.status === 200) { 
            setTimeout(() => {
              this.isLoading = false;
              this.disabledOption = false; 
              this.feedBack = true;
            }, 5000);
          } else {
            this.password = "";
            this.errormsg = resp;
            this.isLoading = false;
            this.disabledOption = false;
          }
        })
        .catch((error) => {
          console.log('he==',error)
          this.errormsg = error;
          this.isLoading = false;
          this.disabledOption = false;
        });
      
    },
    loginOption() {
      this.$router.push('/login')
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: brown;
}
</style>
