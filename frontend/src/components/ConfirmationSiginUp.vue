<template>
  <div>
    <p style="color:green; font-size: 20px;">
      The account is created successfully! <a class=" is-primary is-outlined" @click="loginOption" style="text-decoration: underline">Log in</a> to do something.
    </p>
    <br />
  </div>
</template>

<script>
export default {
  name: "ConfirmationSiginUp",
   methods: {
    loginOption() {
      this.$router.push('/login')
    },
   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: brown;
}
</style>
