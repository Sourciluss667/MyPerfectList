<template>
  <div id="page" style="position: relative; top: -90px;">
    <BreadCrumb />
    <div id="profile" class="columns">
      <div class="column is-one-quarter has-background-light">
        <div class="has-text-left" v-if="userData.id === $parent.user.id">
          <!-- Ne s'affiche que son propre profil -->
          <button class="button is-warning" @click="edit">
            <span class="icon" style="margin-right: 5px;">
              <i class="fas fa-pen"></i> </span
            >Edit
          </button>
        </div>
        <br />
        <figure class="image is-128x128 has-image-centered">
          <img class="is-rounded" src="../assets/default.png" />
          <div class="icon icon-on-image is-size-1" v-if="editMode">
            <i class="fas fa-pen"></i>
          </div>
        </figure>
        <br />
        <span class="title is-4">{{ userData.username }}</span>
        <div class="icon" style="margin-right: 5px;" v-if="editMode">
          <i class="fas fa-pen"></i>
        </div>
        <br />
        <span class="subtitle is-5">{{ userData.name }}</span>
        <div class="icon" style="margin-right: 5px;" v-if="editMode">
          <i class="fas fa-pen"></i>
        </div>
        <br />
        <div v-if="editMode">
          <div class="icon" style="color: blue;">
            <i class="fas fa-mars"></i>
          </div>
          <div class="icon" style="color: pink;">
            <i class="fas fa-venus"></i>
          </div>
          <div class="icon has-text-primary">
            <i class="fas fa-venus-mars"></i>
          </div>
        </div>
        <div v-else>
          <div class="icon" style="color: blue;" v-if="userData.gender === 'M'">
            <i class="fas fa-mars"></i>
          </div>
          <div
            class="icon"
            style="color: pink;"
            v-else-if="userData.gender === 'F'"
          >
            <i class="fas fa-venus"></i>
          </div>
          <div class="icon has-text-primary" v-else>
            <i class="fas fa-venus-mars"></i>
          </div>
        </div>
        <br />
        <p>
          <span class="has-text-weight-bold">Bio :</span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
          inventore quae placeat dolorum a voluptates nemo quaerat laboriosam
          amet earum repellendus sit pariatur dolor voluptate libero, dicta nam
          ipsum eaque.
          <span class="icon" style="margin-right: 5px;" v-if="editMode">
            <i class="fas fa-pen"></i>
          </span>
        </p>
        <br />
        <span>
          <span class="has-text-weight-bold">Birthdate :</span>
          {{ userData.birthdate }}
        </span>
        <br />
        <span>
          <span class="has-text-weight-bold">Member since :</span>
          {{ userData.inscriptiondate }}
        </span>
        <br />
        <br />
        <a>Report this profile</a>
        <br />
      </div>
      <div class="column" style="background: green;">Content</div>
    </div>
  </div>
</template>

<script>
import { getUserByUsername } from "../services/users";
import BreadCrumb from "./BreadCrumb";
export default {
  name: "Profile",
  data() {
    return {
      editMode: false,
      // Contient id, name, username, email, birthdate, gender
      userData: {},
    };
  },
  components: {
    BreadCrumb,
  },
  async created() {
    await this.init();
  },
  methods: {
    edit() {
      this.editMode = !this.editMode;
    },
    async init() {
      const username = this.$route.params.username;
      // GET USER BY USERNAME
      this.userData = await getUserByUsername(username);

      if (this.userData.username != username) {
        console.log("error find profile");
        this.$router.push("/404");
      } else {
        // TEMPORAIRE, BESOIN DE RAJOUTER DATE D'INSCRIPTION
        this.userData.inscriptiondate = new Date(
          this.userData.birthdate
        ).toLocaleDateString();
        // Format date from string to Date object
        this.userData.birthdate = new Date(
          this.userData.birthdate
        ).toLocaleDateString();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.has-image-centered {
  margin-left: auto;
  margin-right: auto;
}

.icon-on-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
