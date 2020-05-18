<template>
  <div id="imdb-watchlist" style="position: relative; top: -90px;">
    
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
export default {
  name: "RateYourMusic",
   methods: {
     mouseover: function (row) {
       row.showdetails = true
     },
     mouseleave: function (row) {
       row.showdetails = false
     }
  },
  async created () {
    const token = 'zackdrake'
    let req = await fetch(`http://localhost:4200/rateyourmusic/${token}`)
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: brown;
}
</style>
