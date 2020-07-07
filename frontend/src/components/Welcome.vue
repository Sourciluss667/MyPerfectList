<template>
  <div class="welcome">
    <div style="margin-bottom: 10%;">
      <div class="title">WELCOME !</div>
      <p>
        Welcome to our website !<br />
        This website it's useful when you watch lot of media content and save that on multiples website like IMDb or MyAnimeList !<br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br> Itaque tempora officia expedita minima maiores soluta sed sequi quia?<br> Sit illum, delectus quam magnam totam accusamus ipsa placeat quidem labore corporis.
      </p>
    </div>

    <div class="title">NEW RELEASES</div>
    <div class="columns">
      <div class="column">
        <div class="title">Movies</div>

        <div :class="'columns ' + (() => { return (index % 2 === 0) ? 'has-background-light' : 'has-background-white' })() " v-for="(movie, index) in data.movies" :key="'movie-' + index" :id="'movie-' + index" style="height: 186px;">
          <div class="column is-one-quarter">
            <figure class="image is-96x96">
              <img :src="movie.img">
            </figure>
          </div>
          
          <div class="column">
            <div class="label">{{ movie.title }}</div>
            <div><i class="fas fa-calendar-alt"></i> {{ movie.releaseDate }}</div>
            <div><i class="far fa-clock"></i> {{ movie.runtime }}</div>
            <div><a v-on:click="showSynopsis('movie', index)">Synopsis</a></div>
            <div :id="'movie-synopsis-' + index" style="display: none;">
              <span v-html="movie.synopsis"></span>
            </div>
          </div>
        </div>

      </div>
      <div class="column">
        <div class="title">Animes</div>

        <div :class="'columns ' + (() => { return (index % 2 === 0) ? 'has-background-light' : 'has-background-white' })() " v-for="(anime, index) in data.animes" :key="'anime-' + index" :id="'anime-' + index" style="height: 186px;">
          <div class="column is-one-quarter">
            <figure class="image is-96x96">
              <img :src="anime.img">
            </figure>
          </div>
          
          <div class="column">
            <div class="label">{{ anime.title }}</div>
            <div><i class="far fa-play-circle"></i> {{ anime.count }} eps</div>
            <div><a v-on:click="showSynopsis('anime', index)">Synopsis</a></div>
            <div :id="'anime-synopsis-' + index" style="display: none;">
              <span v-html="anime.synopsis"></span>
            </div>
          </div>
        </div>

      </div>
      <div class="column">
        <div class="title">Books</div>

        <div :class="'columns ' + (() => { return (index % 2 === 0) ? 'has-background-light' : 'has-background-white' })() " v-for="(book, index) in data.books" :key="'book-' + index" :id="'book-' + index" style="height: 186px;">
          <div class="column is-one-quarter">
            <figure class="image is-96x96">
              <img :src="book.img">
            </figure>
          </div>
          
          <div class="column">
            <div class="label">{{ book.title }}</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
    data () {
    return {
      data: {}
    }
  },
  methods: {
    showSynopsis (category, id) {
      let e = document.getElementById(category + '-synopsis-' + id)
      if (e.style.display === 'none') {
        e.style.display = 'inline-block'
      } else {
        e.style.display = 'none'
      }

      e = document.getElementById(category + '-' + id)
      if (e.style.height === '186px') {
        e.style.height = 'auto'
      } else {
        e.style.height = '186px'
      }
      
    }
  },
  async created () {
    let req = await fetch(`http://localhost:4200/welcome/`)
    let json = await req.json()
    console.log(json)
    this.data = json
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>