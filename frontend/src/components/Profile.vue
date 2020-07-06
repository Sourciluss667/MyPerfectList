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
          <img class="is-rounded" :src="userData.avatar_url" />
          <div class="icon icon-on-image is-size-1" v-if="editMode" @click="editAvatar">
            <i class="fas fa-pen"></i>
          </div>
        </figure>
        <br />
        <span class="title is-4" id="username">{{ userData.username }}</span>
        <div class="icon" style="margin-right: 5px;" v-if="editMode" @click="editUsername">
          <i class="fas fa-pen"></i>
        </div>
        <br />
        <span class="subtitle is-5" id="name">{{ userData.name }}</span>
        <div class="icon" style="margin-right: 5px;" v-if="editMode" @click="editName">
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
          <div class="icon" style="color: blue;" v-if="userData.gender === 'MALE'">
            <i class="fas fa-mars"></i>
          </div>
          <div
            class="icon"
            style="color: pink;"
            v-else-if="userData.gender === 'FEMALE'"
          >
            <i class="fas fa-venus"></i>
          </div>
          <div class="icon has-text-primary" v-else-if="userData.gender === 'OTHER'">
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
          <span class="icon" style="margin-right: 5px;" v-if="editMode" @click="editBio">
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
    <div class="column content">
      <!-- My Profile -->
        <div class="columns">
          <div class="column">
            <figure class="image is-128x128 has-image-centered">
              <img class="is-rounded" src="../assets/MAL_400x400.jpg" style="cursor: pointer;" @click="listLinks('mal')" />
            </figure>
          </div>
          <div class="column">
            <figure class="image is-128x128 has-image-centered">
              <img class="is-rounded" src="../assets/imdb.png" style="cursor: pointer;" @click="listLinks('imdb')" />
            </figure>
          </div>
        <div class="column">
            <figure class="image is-128x128 has-image-centered">
              <img class="is-rounded" src="../assets/rt.png" style="cursor: pointer;" @click="listLinks('rt')" />
            </figure>
          </div>
        <div class="column">
            <figure class="image is-128x128 has-image-centered">
              <img class="is-rounded" src="../assets/gd.jpg" style="cursor: pointer;" @click="listLinks('gd')" />
            </figure>
          </div>
        <div class="column">
            <figure class="image is-128x128 has-image-centered">
              <img class="is-rounded" src="../assets/rym-512.png" style="cursor: pointer;" @click="listLinks('rym')" />
            </figure>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import { getUserByUsername } from "../services/users";
import { changeAvatarUrl, changeName, changeUsername } from "../services/users";
import BreadCrumb from "./BreadCrumb";
export default {
  name: "Profile",
  data() {
    return {
      editMode: false,
      // Contient id, name, username, email, birthdate, gender
      userData: {},
      username: ''
    };
  },
  components: {
    BreadCrumb,
  },
  async created() {
    await this.init();
  },
  methods: { // TODO -------------------------------------------------------------------- EDIT AVATAR, EDIT GENDER
    edit () {
      this.editMode = !this.editMode;
    },
    editAvatar () {
      const url = prompt('Avatar URL :', '')
      if (url !== '') {
        this.userData.avatar_url = url
        // Save url
        changeAvatarUrl(url)
      }
    },
    editGender () {

    },
    editUsername () {
      let e = document.getElementById('username').innerHTML
      if (e != '<input class="input" type="text" name="username" id="username-input" placeholder="' + this.userData.username + '">') {
        document.getElementById('username').innerHTML = '<input class="input" type="text" name="username" id="username-input" placeholder="' + this.userData.username + '">'
      } else if (e === '<input class="input" type="text" name="username" id="username-input" placeholder="' + this.userData.username + '">') {
        const value = document.getElementById('username-input').value
        if (value != '' && value.length > 2) {
          this.userData.username = document.getElementById('username-input').value
          changeUsername(this.userData.username)
          this.$root.$emit('changeUsername', this.userData.username)
        }
        document.getElementById('username').innerHTML = `${this.userData.username}`
      }
    },
    editName () {
      let e = document.getElementById('name').innerHTML
      if (e != '<input class="input" type="text" name="name" id="name-input" placeholder="' + this.userData.name + '">') {
        document.getElementById('name').innerHTML = '<input class="input" type="text" name="name" id="name-input" placeholder="' + this.userData.name + '">'
      } else if (e === '<input class="input" type="text" name="name" id="name-input" placeholder="' + this.userData.name + '">') {
        const value = document.getElementById('name-input').value
        if (value != '' && value.length > 2) {
          this.userData.name = document.getElementById('name-input').value
          changeName(this.userData.name)
        }
        document.getElementById('name').innerHTML = `${this.userData.name}`
      }
    },
    editBio () {
      console.log('Not implemented')
    },
    listLinks (listName) {
      if (this.userData.id === this.$parent.user.id) { // My profile
        switch (listName) {
          case 'mal':
            this.$router.push('/collections/MyAnimeList')
            break;
            case 'imdb':
            this.$router.push('/collections/IMDb')
            break;
            case 'rt':
            this.$router.push('/collections/Rottentomatoes')
            break;
            case 'gd':
            this.$router.push('/collections/GoodReads')
            break;
            case 'rym':
            this.$router.push('/collections/RateYourMusic')
            break;
        }
      } else {
        switch (listName) {
          case 'mal':
            this.$router.push('/collections/MyAnimeList/' + this.userData.username)
            break;
            case 'imdb':
            this.$router.push('/collections/IMDb/' + this.userData.username)
            break;
            case 'rt':
            this.$router.push('/collections/Rottentomatoes/' + this.userData.username)
            break;
            case 'gd':
            this.$router.push('/collections/GoodReads/' + this.userData.username)
            break;
            case 'rym':
            this.$router.push('/collections/RateYourMusic/' + this.userData.username)
            break;
        }
      }
    },
    async init () {
      this.username = this.$route.params.username;
      // GET USER BY USERNAME
      this.userData = await getUserByUsername(this.username);

      if (this.userData.username != this.username) {
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
        // Verify avatar url
        if (this.userData.avatar_url === null) {
        this.userData.avatar_url = 'https://i.ibb.co/QffVtzF/default-avatar-300x300.png'
        }
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
.content {
  border: rgb(168, 168, 168) 1px solid;
}

.fa-pen {
  cursor: pointer;
}
</style>
