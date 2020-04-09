<template>
  <div>
    <br /><br />
    <h1 class="title">Signup page</h1>
    <br /><br />

    <ul>
      <li class="error">{{ errormsg }}</li>
    </ul>
    <br />

    <label for="email">Email:</label><br />
    <input
      v-model="email"
      type="text"
      placeholder="Email"
      id="email"
      name="email"
    /><br /><br />
    <label for="password">Password:</label><br /><br />
    <input
      v-model="password"
      type="password"
      id="password"
      name="password"
    /><br /><br />
    <button @click="submitForm">Login</button>
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
  color:brown
}
</style>
