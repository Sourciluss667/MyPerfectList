<template>
  <div id="imdb-watchlist" style="position: relative; top: -90px;">
    
    <loading
      :active.sync="isLoading"
      :can-cancel="false"  
      :is-full-page="true"
    ></loading>

    <section class="hero">
      <div class="hero-body has-text-left">
        <div class="content is-inline-block" v-for="row in history" :key="row.title" v-on:mouseover="mouseover(row)" v-on:mouseleave="mouseleave(row)">
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
    </section>

  </div>
</template>


<script>
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
import { getUserByUsername } from '../../services/users'


export default {
  name: "IMDb",
  components: { Loading },
  data () {
    return {
      isLoading: false,
      history: [] // {title: 'Titre', desc: 'Description', genres: [], type: "Type", year: [], poster: {h: 0, w: 0, url: ''}}
    }
  },
  methods: {
     mouseover: function (row) {
       row.showdetails = true
     },
     mouseleave: function (row) {
       row.showdetails = false
     }
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
      console.log(u)
      token = u.imdb
    } else if (nonBlock >= 2000) {
      token = 'ur115944803' // Error find user token
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
