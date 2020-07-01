<template>
  <div class="welcome">
    <!-- <p>
        Welcome to our website !
    </p>-->
<div class="row">
  <div class="column" style="background-color:#ccc;">
    <h2>Latest book releases</h2>
    <p><span v-html="bookTable2"></span></p>
  </div>
  
  <div class="column" style="background-color:#ccc;">
    <h2>Latest movie releases</h2>
    <p><span v-html="filmTable2"></span></p>
  </div>
  
  <div class="column" style="background-color:#ccc;">
    <h2>Latest anime releases</h2>
    <p><span v-html="animeTable2"></span></p>
  </div>
  
</div>
   
  </div>
</template>

<script>
export default {
  name: "Welcome",
    data () {
    return {
      infoToDisplay: [],
      numberArray: 0,
      bookTable2: '',
      filmTable2: '',
      animeTable2: ''
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
    let req = await fetch(`http://localhost:4200/welcome/`)
    console.log("yo")
    req = await req.text()
    this.infoToDisplay = req.split(';')
    this.infoToDisplay.push(req)
    this.numberArray = this.infoToDisplay.length

    for (let index = 0; index < 101; index++) {
      if(this.infoToDisplay[(this.numberArray/2 -1) + index] === '' || this.infoToDisplay[(this.numberArray/2 -1) + index] === "undefined" || this.infoToDisplay[(this.numberArray/2 -1) + index] === null ){index =100}else{
      this.bookTable2 = this.bookTable2 + '<div class="row"><tr><td><img src="' + this.infoToDisplay[(this.numberArray/2 -1) + index] + '" alt="' + this.infoToDisplay[index] + '" style="width:96px;height:136px;"></td><td>' + this.infoToDisplay[index] + '</td></tr></p></div>'
      }
    }
    this.bookTable2.push(req)

    for (let index = 101; index < 200; index++) {
      if(this.infoToDisplay[(this.numberArray/2 -1) + index] === ''){index =200} else{
      this.filmTable2 = this.filmTable2 + '<div class="row"><tr><td><img src="' + this.infoToDisplay[(this.numberArray/2 -1) + index] + '" alt="' + this.infoToDisplay[index] + '" style="width:96px;height:136px;"></td><td>' + this.infoToDisplay[index] + '</td></tr></p></div>'
      }
    }
    this.filmTable2.push(req)

    for (let index = 201; index < 300; index++) {
      if(this.infoToDisplay[(this.numberArray/2 -1) + index] === ''){index =200}else{
      this.animeTable2 = this.animeTable2 + '<div class="row"><tr><td><img src="' + this.infoToDisplay[(this.numberArray/2 -1) + index] + '" alt="' + this.infoToDisplay[index] + '" style="width:96px;height:136px;"></td><td>' + this.infoToDisplay[index] + '</td></tr></p></div>'
      }
    }
    this.animeTable2.push(req)


    this.numberArray.push(req)
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
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
  flex: 33%;
  padding: 20px;
  outline-style: solid;
  outline-color:black;
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