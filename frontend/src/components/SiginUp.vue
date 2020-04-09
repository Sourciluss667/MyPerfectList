<template>
  <div>
    <h1>Sign up</h1>
    <p v-if="errors.length" class="error">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors" v-bind:key="error.key">{{ error.msg }}</li>
      </ul>
    </p>
    <p style="color:green">{{successMsg}}</p>
  
      <label for="username">Username:</label><br />
      <input v-model="username" type="text" id="username" name="username" /><br />

      <label for="password">Password:</label><br />
      <input v-model="password" type="password" id="password" name="password" /><br />

      <label for="password-re">Re-enter password:</label><br />
      <input v-model="passwordConf" type="password" id="password-re" name="password" /><br />

      <label for="email">email:</label><br />
      <input v-model="email" type="email" id="email" name="email" /><br />

      <label for="birthdate">Birth date</label><br />
      <input v-model="birthdate" type="date" id="birthdate" name="birthdate" /><br />
      <button @click="submitForm">Sign Up</button>
    
  </div>
</template>

<script>
import { siginUp } from "../services/users.js";
export default {
  name: "SiginUp",
  data() {
    return {
      errors: [],
      password: null,
      email: null,
      passwordConf: null,
      username:null,
      birthdate:null,
      successMsg:''
    };
  },
  methods: {
    randomKey() {
      return Math.random();
    },
    checkForm() {
      if(!this.username){
        this.errors.push({key:this.randomKey(),msg:"Username required."});
        return false;
      }
      if(!this.password){
        this.errors.push({key:this.randomKey(),msg:"Password required."});
        return false;
      }
      if(!this.passwordConf){
        this.errors.push({key:this.randomKey(),msg:"Password confirm required."});
        return false;
      }
      if(!this.email){
        this.errors.push({key:this.randomKey(),msg:"Email required."});
        return false;
      }

      if(this.password!==this.passwordConf){
         this.errors.push({key:this.randomKey(),msg:"Password must be equal to password confirm."});
        return false;
      }
     
      /* else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      } */

      return true;
    },
    submitForm() {
      if (this.checkForm()) {

        siginUp({ email: this.email, password: this.password,username: this.username, birthdate:this.birthdate })
          .then((resp) => { 
            if (resp.status === 200) {
                resp.json().then((msg) =>{ 
                  this.successMsg=msg;
                  this.errors=[];
                  setTimeout(()=>{ this.$emit("loginOption") }, 5000);
                });
            } else {
              resp.json().then((rep) => (this.errors.push({key:this.randomKey(),msg: rep})));
            }
          })
          .catch((error) => {
            this.errors.push(error);
          });
      }
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color:brown;
}
</style>
