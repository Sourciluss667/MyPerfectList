<template>
<div id="page" style="position: relative; top: -90px;"> 
    <BreadCrumb/>
   
    <nav class="level">
      <!-- Left side -->
      <div class="level-left">
        <div class="level-item"> 
          <span class="tag is-link">{{counter}}</span>
        </div> 
         
        <div class="control has-icons-left">
           
        </div>
       
        <div class="level-item" style="margin-left:5%">
          <div class="field has-addons">
            <p class="control">
              <input v-model="searchValue"
                class="input is-focused"
                style="width:400px"
                type="text"
                placeholder="Find an element"
              />
            </p>
            <p class="control">
              <button class="button" @click="search()">
                Search
              </button>
            </p>
          </div>
        </div>
      </div>
 
      <!-- Right side -->
    
    </nav> 
    <section class="hero is-light">
      <div class="hero-body" style="padding: 1rem 1rem;">
        <div class="container">
          <Loading
            :active.sync="isLoading"
            :can-cancel="false"  
            :is-full-page="false"
            loader="bars"
          ></Loading>
          <div class="columns is-multiline">
            <div v-for="(item,index) in dataList" :key="index"  class="column is-12-tablet is-6-desktop">
              <div class="card" style="height: 100%">
                <div class="card-image"  >
                  
                  <div  style="margin-left:1%;text-align:left">
                    <div  style="display:inline-block;width: 87.5%;">
                      <div  style="float:left; width:20%; margin-top:1.1%" >
                        <img :src="item.imgUrl" :alt="item.name"/>
                      </div>
                      <div style="margin-left:100px">
                        <h5 style="font-weight: bold;">{{item.name}} </h5>
                      </div>
                    </div>   
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
          <div v-if="counter==0" class="notification is-warning"> 
              {{msg}}
          </div> 
        </div>
      </div>
    </section>      

  </div>
</template>

<script>
import BreadCrumb from '../BreadCrumb';  
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css"; 

export default {
  name: "RateYourMusic",
    data () {
    return {
      infoToDisplay: '',
      dataList:[],
      dataHistories:[],
      counter:0,
      searchValue:'',
      isLoading: false,
      msg:''
    }
      },
  components: { 
    BreadCrumb,
    Loading, 
  },
   methods: {
     mouseover: function (row) {
       row.showdetails = true
     },
     mouseleave: function (row) {
       row.showdetails = false
     },
    search(){
      this.isLoading=true;
      this.msg=''; 
      const data = this.dataHistories.filter(element => element.name.toLowerCase().indexOf(this.searchValue.toLowerCase())!=-1);  
      this.dataList = [...data];
      this.counter = this.dataList.length;
      setTimeout(() => {
        this.isLoading = false;  
        if(this.counter===0){
          this.msg = "No result found!"
        }
      }, 1000);
    },
  },
  async created () {
    this.isLoading=true
    const token = 'zackdrake'
    
    let req = await fetch(`http://localhost:4200/rateyourmusic/${token}`)
    req = await req.text()
     this.infoToDisplay = req.split(',')
    this.infoToDisplay.push(req)
    this.numberArray = this.infoToDisplay.length
    this.bookTable2 = ''
    let imgUrl
    let name
    for (let index = 0; index < this.numberArray/2 - 1; index++) {
      
      this.bookTable2 = this.bookTable2 + '<div class="row"><tr><td><img src="' + this.infoToDisplay[(this.numberArray/2 -1) + index] + '" alt="' + this.infoToDisplay[index] + '" style="width:96px;height:136px;"></td><td>' + this.infoToDisplay[index] + '</td></tr></p></div>'
      imgUrl = this.infoToDisplay[(this.numberArray/2-1)+index]
      name= this.infoToDisplay[index]
      this.dataList[index] = {imgUrl,name}
    }
    
    this.dataHistories = [...this.dataList]
    this.counter = this.dataList.length
    if(this.counter===0){
      this.msg = 'No result found!'
    }
    console.log(this.dataList)
    this.isLoading = false
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

