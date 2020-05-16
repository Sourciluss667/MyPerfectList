<template>
  <div>
    <p>IMDb collections</p>
    RECHERCHER CECI : IMDbReactInitialState.push
    {{ history }}


  </div>
</template>


<script>

export default {
  name: "IMDb",
  data () {
    return {
      history
    }
  },
  methods: {
     
  },
  async created () {
    const token = 'ur115944803'
    this.history = await fetch(`http://localhost:4200/imdb/${token}`)
    this.history = await this.history.text()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: brown;
}
</style>
