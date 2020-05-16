<template>
  <div id="imdb-watchlist">

    <div class="columns is-centered">
        <div class="column">
        <div class="list is-hoverable">
          <span class="list-item">Titre</span>
        </div>
        <div class="list-item" v-for="row in history" :key="row.title">
          {{ row.title }}
        </div>
      </div>

      <div class="column">
        <div class="list is-hoverable">
          <span class="list-item">Type</span>
        </div>
        <div class="list-item" v-for="row in history" :key="row.title">
          {{ row.type }}
        </div>
      </div>

      <div class="column">
        <div class="list is-hoverable">
          <span class="list-item">Year</span>
        </div>
        <div class="list-item" v-for="row in history" :key="row.title">
          {{ row.year }}
        </div>
      </div>

      <div class="column">
        <div class="list is-hoverable">
          <span class="list-item">Genres</span>
        </div>
        <div class="list-item" v-for="row in history" :key="row.title">
          {{ row.genres }}
        </div>
      </div>

      <div class="column">
        <div class="list is-hoverable">
          <span class="list-item">Description</span>
        </div>
        <div class="list-item" v-for="row in history" :key="row.title">
          {{ row.desc }}
        </div>
      </div>

    </div>

  </div>
</template>


<script>

export default {
  name: "IMDb",
  data () {
    return {
      history: [] // {title: 'Titre', desc: 'Description', genres: [], type: "Type", year: [], poster: {h: 0, w: 0, url: ''}}
    }
  },
  methods: {
     
  },
  async created () {
    const token = 'ur115944803'
    let req = await fetch(`http://localhost:4200/imdb/${token}`)
    req = await req.json()
    let toAdd = []
    Object.keys(req).forEach(function(k){
      // req[k] = Element
      const e = req[k]
      let add = {title: e.primary.title, desc: e.plot, genres: e.metadata.genres, type: e.type, year: e.primary.year, poster: {h: e.poster.height, w: e.poster.width, url: e.poster.url}}
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
