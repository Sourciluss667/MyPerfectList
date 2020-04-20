<template>
  <div>
    <p>RateYourMusic collections</p>
  </div>
</template>

<script>
export default {
  name: "ConfirmationSiginUp",
  methods: {
    loginOption() {
      this.$router.push("/login");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: brown;
}
</style>
