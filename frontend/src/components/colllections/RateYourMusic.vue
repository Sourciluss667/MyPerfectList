<template>
  <div id="rateyourmusic-watchlist" style="position: relative; top: -90px;">
    
    <h3>{{ infoToDisplay[numberArray/2 -1] }}</h3>
                <span v-html="bookTable2"></span>

  </div>
</template>

<script>
export default {
  name: "RateYourMusic",
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
    const token = 'zackdrake'
    let req = await fetch(`http://localhost:4200/rateyourmusic/${token}`)
    req = await req.text()
     this.infoToDisplay = req.split(',')
    this.infoToDisplay.push(req)
    this.numberArray = this.infoToDisplay.length
    for (let index = 0; index < this.numberArray/2 - 1; index++) {
      
      this.bookTable2 = this.bookTable2 + '<tr><td><img src="' + this.infoToDisplay[(this.numberArray/2 -1) + index] + '" alt="' + this.infoToDisplay[index] + '" style="width:96px;height:136px;"></td><td>' + this.infoToDisplay[index] + '</td></tr></p>'
      
    }
    
    this.bookTable2.push(req)
    this.numberArray.push(req)
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
