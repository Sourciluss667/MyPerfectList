<template>
  <div id="goodreads-watchlist" style="position: relative; top: -90px;">


    
    <span v-html="bookTable2"></span>
    
    

  </div>
</template>
<script>
export default {
  name: "GoodReads",
    data () {
    return {
      infoToDisplay: [],
      numberArray: 0,
      bookTable2: ''
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
    const token = '103381785-zack-drake'
    let req = await fetch(`http://localhost:4200/goodreads/${token}`)
    req = await req.text()
    this.infoToDisplay = req.split(';')
    this.infoToDisplay.push(req)
    this.numberArray = this.infoToDisplay.length
    for (let index = 0; index < this.numberArray/2 - 1; index++) {
      
      this.bookTable2 = this.bookTable2 + '<tr><td><img src="' + this.infoToDisplay[(this.numberArray/2 -1) + index] + '" alt="' + this.infoToDisplay[index] + '" style="width:96px;height:136px;"></td><td>' + this.infoToDisplay[index] + '</td></tr></p>'
      
    }
    
    this.bookTable2.push(req)
    this.numberArray.push(req)
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: brown;
}
</style>
