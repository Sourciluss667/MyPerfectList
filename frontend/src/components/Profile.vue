<template>
    <div id="profile" class="columns">
        <div class="column is-one-quarter has-background-light">
            <figure class="image is-128x128 has-image-centered">
                <img class="is-rounded" src="../assets/default.png">
            </figure>
            <br>
            <h4 class="title is-4">{{ userData.username }}</h4>
            <br>
            <h5 class="subtitle is-5">{{ userData.name }}</h5>


        </div>
        <div class="column" style="background: green;">
            Content
        </div>
    </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    // Contient id, name, username, email, birthdate, gender
    userData: {}
  },
  methods: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}
</style>
