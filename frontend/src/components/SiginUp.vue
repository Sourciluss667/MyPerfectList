<template>
  <div style="margin-top:-10%">
    <h1 class="title is-3">Sign up</h1>

    <p v-if="errors.length" class="error">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors" v-bind:key="error.key">{{ error.msg }}</li>
      </ul>
    </p>

     
    <loading
      :active.sync="isLoading"
      :can-cancel="false"  
      :is-full-page="fullPage"
    ></loading> 
     
  
    <!-- Desktop & Tablet -->
    <form @submit="submitForm" onsubmit="return false;" class="is-hidden-mobile" style="position: relative;width: 350px;left: 50%;transform: translateX(-50%);">
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Username" v-model="username" title="Username">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" type="text" placeholder="Fullname" v-model="name" title="Fullname">
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
        <button type="submit" :disabled="disabledOption" class="button is-primary is-fullwidth" @click="submitForm">Sign up</button>
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
          <input class="input" type="text" placeholder="Fullname" v-model="name" title="Fullname">
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
        <button type="submit" :disabled="disabledOption" class="button is-primary is-fullwidth" @click="submitForm">Sign up</button>
      </div><a>Already have an account ?</a>
    </form>

  </div>
</template>

<script>
import { siginUp } from "../services/users.js";
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "SiginUp",
  components: { Loading },
  data() {
    return {
      errors: [],
      password: null,
      email: null,
      passwordConf: null,
      username:null,
      name:null,
      birthdate:null,
      successMsg:'',
      disabledOption:false,
      isLoading: false,
      fullPage: true,
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
      if(!this.name){
        this.errors.push({key:this.randomKey(),msg:"Name required."});
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
    async submitForm() {
      this.disabledOption = true;
      if (this.checkForm()) {
      this.isLoading = true;
      await  siginUp({ email: this.email, password: this.password,username: this.username, birthdate:this.birthdate, name:this.name })
          .then((resp) => { 
            if (resp.status === 200) { 
              console.log('dafa == ',resp.data);
                  this.errors=[];
                  this.init();  
                  this.successMsg=resp.data;

                  setTimeout(() => {
                    this.isLoading = false;
                    this.disabledOption = false;
                    this.$router.push("/confirmation_sigin");
                  }, 5000);
            } else {
              this.password="";
              this.passwordConf="";
              this.isLoading = false;
              this.disabledOption = false;
              this.errors.push({key:this.randomKey(),msg: resp.data});
            }
          })
          .catch((error) => {
            this.errors.push(error);
            this.disabledOption = false;
            this.isLoading = false; 
          });
      }else{
        this.disabledOption = false;
      }   
    },
    init(){
      this.errors=[];
      this.password="";
      this.email="";
      this.passwordConf="";
      this.username="";
      this.name="";
      this.birthdate="";
      this.successMsg="";
      this.disabledOption=false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color:brown;
}
</style>
