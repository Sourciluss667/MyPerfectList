<template>
  <div id="imdb-watchlist" style="position: relative; top: -90px;">
    <BreadCrumb/>
    
    <nav class="level">
      <!-- Left side -->
      <div class="level-left">
        <div class="level-item"> 
          <span class="tag is-link">{{counter}}</span>
        </div> 
         
        <div class="control has-icons-left">
           
        </div>
       
        <div class="level-item" style="margin-left:5%">
          <div class="field has-addons">
            <p class="control">
              <input v-model="searchValue" 
                class="input is-focused"
                style="width:400px; padding-left: 1em;"
                type="text"
                placeholder="Find an element"
              />
            </p>
            <p class="control">
              <button class="button" @click="search()" style="padding-left: 1em;padding-right: 1em;">
                Search
              </button>
            </p>
          </div>
        </div>
      </div>
    </nav> 
  
    <section class="hero is-light">
      <div class="hero-body"  style="padding: 1rem 1rem;">
        <div class="container">
          <loading
            :active.sync="isLoading"
            :can-cancel="false"  
            :is-full-page="true"
          ></loading>
          
          <div class="columns is-multiline" >
            <div class="content column is-12-tablet is-3-desktop" v-for="row in history" :key="row.title" v-on:mouseover="mouseover(row)" v-on:mouseleave="mouseleave(row)">
              <div class="content-overlay"></div>
              <img :src="row.poster.url" class="content-image">
              <div v-if="row.showdetails" class="content-details has-text-white">
                <h3>{{ row.title }}</h3>
                <p>
                  <b>Genres</b><br><span v-for="(g, index) in row.genres" :key="g">{{ g }}{{ row.genres.length - 1 === index ? '' : ', ' }}</span><br>
                  <b>Années</b><br>{{ row.year[0] }} - {{ row.year[1] }}<br><br>
                  <b>Description</b><br>{{ row.desc.substring(0, 116) }}...<br>
                </p>
              </div> 
            </div>
          </div>
          <div v-if="counter==0" class="notification is-warning"> 
            {{msg}}
          </div> 
        </div>
      </div>
    </section> 
  </div>
</template>


<script>
// Import component
import BreadCrumb from '../BreadCrumb';
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
import { getUserByUsername } from '../../services/users'


export default {
  name: "IMDb",
  components: { Loading,BreadCrumb },
  data () {
    return {
      isLoading: false,
      dataHistories:[],
      counter:0,
      searchValue:'',
       msg:'',
      history: [] // {title: 'Titre', desc: 'Description', genres: [], type: "Type", year: [], poster: {h: 0, w: 0, url: ''}}
    }
  },
  methods: {
     mouseover: function (row) {
       row.showdetails = true
     },
     mouseleave: function (row) {
       row.showdetails = false
     },
      search(){
      this.isLoading=true;
      this.msg=''; 
      const data = this.dataHistories.filter(element => element.title.toLowerCase().indexOf(this.searchValue.toLowerCase())!=-1);  
      this.history = [...data];
      this.counter = this.history.length;
      setTimeout(() => {
        this.isLoading = false;  
        if(this.counter===0){
          this.msg = "No result found!"
        }
      }, 1000);
    },
  },
  async created () {
    let token = undefined
    this.isLoading = true
    let nonBlock = 0
    do {
      token = this.$parent.user.imdb
      nonBlock++
    } while ((token === undefined || token === null) && nonBlock < 2000)
    

    if (this.$route.params.username != undefined) {
      let u = await getUserByUsername(this.$route.params.username)
      token = u.imdb
    } else if (nonBlock >= 2000) {
      // Error find user token via parent, so use getUserByUsername with localStorage username
      let u = await getUserByUsername(localStorage.username)
      token = u.imdb
    }

    console.log('token: ' + token)
    let req = await fetch(`http://localhost:4200/imdb/${token}`)
    req = await req.json()
    let toAdd = []
    Object.keys(req).forEach(function(k){
      // req[k] = Element
      const e = req[k]
      let add = {showdetails: false, title: e.primary.title, desc: e.plot, genres: e.metadata.genres, type: e.type, year: e.primary.year, poster: {h: e.poster.height, w: e.poster.width, url: e.poster.url}}
      toAdd.push(add)
    })

    toAdd.forEach(e => {
      this.history.push(e)
    });
    this.dataHistories = [...this.history]
    this.counter = this.history.length
    if(this.counter===0){
      this.msg = 'No result found!'
    }
    this.isLoading = false
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: brown;
}

@import url(https://fonts.googleapis.com/css?family=Raleway);

*, *:before, *:after{
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing:border-box;
  box-sizing: border-box;
}

.content {
  position: relative;
  width: 250px;
  height: 350px;
  margin: auto;
  overflow: hidden;
  cursor: pointer;
}

.content .content-overlay {
  background: rgba(0,0,0,0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-overlay{
  opacity: 1;
}

.content-image{
  width: 100%;
  height: 100%;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details{
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details h3{
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p{
  color: #fff;
  font-size: 0.8em;
}

</style>
