<template>
  <div class="tile is-vertical is-2">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-link">
          <h3 class="title is-4">Nav</h3>
          <h5 class="subtitle is-5">Menu 1</h5>
          <h5 class="subtitle is-5">Menu 2</h5>
          <h5 class="subtitle is-5">Menu 3</h5>
          <h5 class="subtitle is-5">Menu 4</h5>
          <h5 class="subtitle is-5">Menu 5</h5>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
