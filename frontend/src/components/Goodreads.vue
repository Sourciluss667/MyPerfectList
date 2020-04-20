<template>
  <div class="goodreads">
    <p>Welcome to our website !t</p>
    <button @click="retrieverGoodreadsData">show Author Data</button>
    <h3 class="subtitle is-5 error" v-if="AuthorInfo != ''">{{ AuthorInfo }}</h3>
    <p>test</p>
  </div>
</template>

<script>
export default {
  name: "Goodreads",
  components: {},
  data() {
     return {
      AuthorInfo: '',
      password: null,
      email: null,
      disabledOption: false,
  };
  },
  methods: {
    async retrieverGoodreadsData() {
      // Goodreads API
      const goodreads = require("goodreads-api-node")
      const callbackURL = "/goodreads"
      const myCredentials = {
        key: "Ok9UBRmL17fcTvCbiLmQQ",
        secret: "1To17EVvXKaHkOxLPVqShzmwwFPT8wzGRsRZj2WfP4"
      };
      this.AuthorInfo ="non2";
      const gr = goodreads(myCredentials)     
      gr.initOAuth(callbackURL)
      gr.getBooksByAuthor("175417")
      this.AuthorInfo ="oui";
      return false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>