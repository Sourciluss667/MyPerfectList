<template>
  <div>
    <h1 class="title is-3">Log in</h1><br>

    <h3 class="subtitle is-5 error" v-if="errormsg != ''">{{ errormsg }}</h3>

    <!-- Desktop & Tablet -->
    <form @submit="submitForm" onsubmit="return false;" class="is-hidden-mobile" style="position: relative;width: 350px;left: 50%;transform: translateX(-50%);">
      <div class="field">
        <div class="control">
          <input class="input" type="email" placeholder="Email" v-model="email" title="Email">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" type="password" placeholder="Password" v-model="password" title="Password">
        </div>
      </div>
      <div class="field">
        <button type="submit" class="button is-primary is-fullwidth" @click="submitForm">Log in</button>
      </div><a>Lost your password ?</a>
    </form>

    <!-- Responsive -->
    <form @submit="submitForm" onsubmit="return false;" class="is-hidden-tablet">
      <div class="field">
        <div class="control">
          <input class="input" type="email" placeholder="Email" v-model="email" title="Email">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" type="password" placeholder="Password" v-model="password" title="Password">
        </div>
      </div>
      <div class="field">
        <button type="submit" class="button is-primary is-fullwidth" @click="submitForm">Log in</button>
      </div><a>Lost your password ?</a>
    </form>


  </div>
</template>

<script>
import { login } from "../services/users.js";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      errormsg: "",
      password: null,
      email: null,
    };
  },
  methods: {
    randomKey() {
      return Math.random();
    },
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
    submitForm() {
      if (this.checkForm()) {
        login({ email: this.email, password: this.password })
          .then((resp) => {
            if (resp.status === 200) {  
             //  if (response.status === 200 && 'token' in response.body) {
              this.$session.start()
             // Vue.http.headers.common['Authorization'] = 'Bearer ' + response.body.token
             // this.$router.push('/user_space')
           
                resp.json().then((user) => {
                  this.$session.set('sessionId', user);
                  this.$emit("connected",user);
                  });
            } else {
              this.password = '';
              resp.json().then((rep) => (this.errormsg = rep.msg));
            }
          })
          .catch((error) => {
            this.errormsg = error;
          });
      }
    },
    validEmail: function() {
      /*   var re = new RegExp("/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/");
      return re.test(email); */
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color:brown;
}
</style>
