<template>
  <div id="searchPage">

      <div class="columns is-centered">
        <div class="column is-one-third">
          <form @submit="search" onsubmit="return false;">
            <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="Search users..." v-model="searchText" title="Search here">
            </div>
          </div>

          <div class="field">
        <button type="submit" class="button is-primary is-fullwidth" @click="search">Search !</button>
      </div>
          </form>
        </div>
      </div>

    <div id="seachPreview">
      <div class="columns is-centered">
        <div class="column" id="userPreview">
          
          <div class="list is-hoverable">
            <span class="list-item">Users</span>
            <router-link class="list-item" v-for="p in previewResultUsers" :key="p.username" :to="'/profile/' + p.username">
              {{ p.username }}
            </router-link>
          </div>

        </div>
        <div class="column" id="collectionsPreview">
          
          <div class="list is-hoverable">
            <span class="list-item">Collections</span>
          </div>

        </div>
        <div class="column" id="itemsPreview">
          
          <div class="list is-hoverable">
            <span class="list-item">Items</span>
          </div>

        </div>
      </div>
    </div>


  </div>
</template>

<script>
import { userSearch } from '../services/search'

export default {
  name: 'Search',
  data () {
    return {
      searchText: '',
      previewResultUsers: [],
      previewResultCollections: [],
      previewResultItems: []
    }
  },
  watch: {
    searchText: async function (val) {
      if (val.length > 0) {
        this.previewResultUsers = await userSearch(val)
      } else {
        this.previewResultUsers = []
      }
    }
  },
  methods: {
    search () {
      // Real search
      console.log('Not implemented !')
    }
  }
}
</script>

<style>

</style>