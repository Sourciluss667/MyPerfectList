<template>
  <div id="rateyourmusic-watchlist" style="position: relative; top: -90px;">
    
   

    <section class="hero">
      <div class="hero-body has-text-center">
       
          <h3 class="has-text-white">{{ infoToDisplay[numberArray/2 -1] }}</h3>
                <span v-html="bookTable2"></span>
          
      
      </div>
    </section>

    
                

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
    this.bookTable2 = ''
    for (let index = 0; index < this.numberArray/2 - 1; index++) {
      
      this.bookTable2 = this.bookTable2 + '<div class="row"><tr><td><img src="' + this.infoToDisplay[(this.numberArray/2 -1) + index] + '" alt="' + this.infoToDisplay[index] + '" style="width:96px;height:136px;"></td><td>' + this.infoToDisplay[index] + '</td></tr></p></div>'
      
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

