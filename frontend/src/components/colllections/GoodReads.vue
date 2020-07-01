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
    /*
    let nonBlock = 0
    let token = 0
    do {
      token = this.$parent.user.gr
      nonBlock++
    } while ((token === undefined || token === null) && nonBlock < 2000)

    if (this.$route.params.username != undefined) {
      let u = await getUserByUsername(this.$route.params.username)
      token = u.imdb
    } else if (nonBlock >= 2000) {
      // Error find user token via parent, so use getUserByUsername with localStorage username
      let u = await getUserByUsername(localStorage.username)
      token = u.imdb
    }
    */

    let req = await fetch(`http://localhost:4200/goodreads/${token}`)
    req = await req.text()
    this.infoToDisplay = req.split(';')
    this.infoToDisplay.push(req)
    this.numberArray = this.infoToDisplay.length
    for (let index = 0; index < this.numberArray/2 - 1; index++) {
      
      this.bookTable2 = this.bookTable2 + '<div class="row"><tr><td><img src="' + this.infoToDisplay[(this.numberArray/2 -1) + index] + '" alt="' + this.infoToDisplay[index] + '" style="width:96px;height:136px;"></td><td>' + this.infoToDisplay[index] + '</td></tr></p></div>'
      
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
<style>
* {
  box-sizing: border-box;
}

/* Container for flexboxes */
.row {
  display: flex;
  flex-wrap: wrap;
}

/* Create four equal columns */
.column {
  flex: 25%;
  padding: 20px;
}

/* On screens that are 992px wide or less, go from four columns to two columns */
@media screen and (max-width: 992px) {
  .column {
    flex: 50%;
  }
}

/* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .row {
    flex-direction: column;
  }
}
</style>
