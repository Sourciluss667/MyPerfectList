<template>
  <div id="rottentomatoes-watchlist" style="position: relative; top: -90px;">
                <h3>{{ infoToDisplay }}</h3>

  </div>
</template>

<script>
export default {
  name: "RottenTomatoes",
    data () {
    return {
      infoToDisplay: ''
    }
  },
   methods: {
     mouseover: function (row) {
       row.showdetails = true
     },
     mouseleave: function (row) {
       row.showdetails = false
     }
  },
  async created () {
    
    const token = '978507916'
    let req = await fetch(`http://localhost:4200/rottentomatoes/${token}`)
    req = await req.text()
    this.infoToDisplay = req
    this.infoToDisplay = this.infoToDisplay.replace('[', '')
    this.infoToDisplay = this.infoToDisplay.replace(']', '')
    for (let index = 0; index < 100; index++) {
      this.infoToDisplay = this.infoToDisplay.replace('"', '')
      this.infoToDisplay = this.infoToDisplay.replace(',', '\n')
    }   
    this.infoToDisplay.split(',')
    this.infoToDisplay.push(req)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: brown;
}
</style>
