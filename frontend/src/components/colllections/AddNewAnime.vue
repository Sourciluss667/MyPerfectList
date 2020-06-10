<template>
  <div class="modal" :class="visibility">
    <div class="modal-background"></div> 
    <div class="modal-card" style="width:85%">
      <header class="modal-card-head">
        <p class="modal-card-title">Add anime</p>
        <button class="delete" @click="closeModal()" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
       <div style="display:inline-flex">
          <nav class="level">
          <!-- Left side -->
          <div class="level-left">
            <div class="level-item" style="margin-left:5%">
              <div class="field has-addons">
                <p class="control">
                  <input
                    v-model="searchValue"
                    @keyup="searchBd"
                    class="input is-focused"
                    style="width:400px"
                    type="text"
                    placeholder="Find an anime"
                  />
                </p>
                <p class="control">
                  <button class="button" @click="searchBd()">Search</button>
                </p>
              </div>
            </div>
          </div>
        </nav>
       </div>
       
        <hr/>
        <div>

        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button" @click="closeModal()">Cancel</button>
      </footer>
    </div>  
  </div> 
</template>

<script>
//import { logout, getCurrentUser } from "./services/users";

export default {
  name: "AddNewAnime",
  components: {},
  data() {
    return {
      searchValue: "",
      animeList: [],
      histories: []
    };
  },
  props: {
    visibility: String,
  },
  async created() {
    //console.log(this.isActiveModalAdd)
  },
  methods: {
    closeModal() {
      console.log('close');
      this.$emit('closeModalAdd')
    },
    searchBd() {
      this.isLoading = true;
      this.msg = "";
      const option =
        this.bdOptionValue === "animelist" ? "anime_title" : "manga_title";
      const data = this.histories.filter(
        element =>
          element[`${option}`]
            .toLowerCase()
            .indexOf(this.searchValue.toLowerCase()) != -1
      );
      this.animeList = [...data];
      this.nbreAnime = this.animeList.length;
      setTimeout(() => {
        this.isLoading = false;
        if (this.nbreAnime == 0) {
          this.msg = "No result found!";
        }
      }, 2000);
    }
  }
};
</script>
