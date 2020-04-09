<template>
  <div>
    <h1 class="title is-3">Sign up</h1><br>

    <p v-if="errors.length" class="error">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors" v-bind:key="error.key">{{ error.msg }}</li>
      </ul>
    </p>

    <p style="color:green">{{successMsg}}</p>
  
    <!-- Desktop & Tablet -->
    <form @submit="submitForm" onsubmit="return false;" class="is-hidden-mobile" style="position: relative;width: 350px;left: 50%;transform: translateX(-50%);">
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Username" v-model="username" title="Username">
        </div>
      </div>
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
        <div class="control">
          <input class="input" type="password" placeholder="Confirm Password" v-model="passwordConf" title="Confirm Password">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" type="date" placeholder="Birthdate" v-model="birthdate" title="Birthdate">
        </div>
      </div>
      <div class="field">
        <button type="submit" class="button is-primary is-fullwidth" @click="submitForm">Sign up</button>
      </div><a>Already have an account ?</a>
    </form>

    <!-- Responsive -->
    <form @submit="submitForm" onsubmit="return false;" class="is-hidden-tablet">
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Username" v-model="username" title="Username">
        </div>
      </div>
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
        <div class="control">
          <input class="input" type="password" placeholder="Confirm Password" v-model="passwordConf" title="Confirm Password">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" type="date" placeholder="Birthdate" v-model="birthdate" title="Birthdate">
        </div>
      </div>
      <div class="field">
        <button type="submit" class="button is-primary is-fullwidth" @click="submitForm">Sign up</button>
      </div><a>Already have an account ?</a>
    </form>

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
