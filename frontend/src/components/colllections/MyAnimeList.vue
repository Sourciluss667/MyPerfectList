<template>
  <div id="page"> 
    <BreadCrumb/>
    <nav class="level">
      <!-- Left side -->
      <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5"><strong>123</strong> animes</p>
        </div>
        <div class="level-item">
          <div class="field has-addons">
            <p class="control">
              <input
                class="input is-focused"
                style="width:400px"
                type="text"
                placeholder="Find an anime"
              />
            </p>
            <p class="control">
              <button class="button">
                Search
              </button>
            </p>
          </div>
        </div>
      </div>

      <!-- Right side -->
      <div class="level-right">
        <p class="level-item"><strong>All</strong></p>
        <p class="level-item"><a>Review</a></p>
        <p class="level-item"><a>Deleted</a></p>
        <p class="level-item"><a class="button is-success">Add</a></p>
      </div>
    </nav>
    <section class="hero is-light" style="margin-bottom:20px">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Primary title
          </h1>
          <h2 class="subtitle">
            Primary subtitle
          </h2>
        </div>
      </div>
    </section>
    <section class="hero is-light">
      <div class="hero-body" style="padding: 1rem 1rem;">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-6-tablet is-3-desktop" style="width: 15%;">
              <div class="card" style="height: 100%">
                <div class="card-image">
                  <a href="#"
                    ><img
                      src="https://bulma.dev/placeholder/pictures/bg_4-3.svg?primary=00d1b2"
                      alt=""
                  /></a>
                </div>
                <div class="card-content">
                  <div class="block">
                    <small class="is-size-7"
                      >25 Jun 2019 | By Dinesh Chugtai</small
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-6-tablet is-3-desktop">
              <div class="card" style="height: 100%">
                <div class="card-image">
                  <a href="#"
                    ><img
                      src="https://bulma.dev/placeholder/pictures/bg_4-3.svg?primary=00d1b2"
                      alt=""
                  /></a>
                </div>
                <div class="card-content">
                  <div class="block">
                    <small class="is-size-7"
                      >25 Jun 2018 | By Monica Hall</small
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6-tablet is-3-desktop">
              <div class="card" style="height: 100%">
                <div class="card-image">
                  <a href="#"
                    ><img
                      src="https://bulma.dev/placeholder/pictures/bg_4-3.svg?primary=00d1b2"
                      alt=""
                  /></a>
                </div>
                <div class="card-content">
                  <div class="block">
                    <small class="is-size-7">25 Jun 2018 | By Jared Dunn</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BreadCrumb from '../BreadCrumb';
import {searchAnime} from '../../services/anime'
export default {
  name: "MyAnimeList",
  props: {
    breaCrumbObject:{}
  },
  components: { 
    BreadCrumb
  },
  async created() { 
    await searchAnime('phanio');
    console.log(this.breaCrumbObject);
  },
  methods: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: brown;
}
</style>
