<template>
  <div style="margin-bottom: 1.5rem;">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li v-for="item in dataList" :key="item[0]">
          <a
            v-if="item[0] === 'isActive'"
            class="is-active"
            aria-current="page"
            href="#"
            >{{ item[1] }}</a
          >
          <a v-else :href="item[2]">{{ item[0] }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  props: {},
  data() {
    return {
      dataList: {},
    };
  },
  created() {
    //get meta data to make the breadcrumb, ex: ['key','name', 'path of the page']
    this.dataList = { ...this.$route.meta.breadCrumb };
    this.dataList = Object.values(this.dataList);
  }, 
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a.is-active {
  color: #363636;
  cursor: default;
  pointer-events: none;
}
</style>
