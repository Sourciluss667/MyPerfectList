<template>
  <div>
    <div class="modal" :class="visibility">
      <div class="modal-background"></div> 
      <div class="modal-card" style="width:85%">
        <header class="modal-card-head">
          <p class="modal-card-title">All anime</p>
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
            <section class="hero is-light">
              <div class="hero-body" style="padding: 1rem 1rem;">
                <div class="container">
                  <Loading
                    :active.sync="isLoading"
                    :can-cancel="false"  
                    :is-full-page="false"
                    loader="bars"
                  ></Loading>
                  <p :style="colorMsg"  v-if="nbreAnime!=0" >{{msg}}</p>
                  <div class="columns is-multiline">
                    <div v-for="item in animeList" :key="item.anime_id"  class="column is-12-tablet is-6-desktop">
                      <div class="card">
                        <div  class="card-image" :data-eph="item.anime_id" >
                          <div  style="float:left; width:20%; margin-top:1.1%; margin-left:1.1%" >
                            <a target="_blank" :href="getURL(item.anime_url)"><img :src="getURL(item.anime_image_path)" alt=""/></a>
                          </div>
                          <div  style="margin-left:22%;padding:2%;text-align:left">
                            <div  style="display:inline-block;width: 96%;">
                              <h1 class="title is-5" style="margin-bottom:0px">{{item.anime_title}} </h1>
                              <p>Episode(s) : {{item.anime_num_episodes}}</p><br/>
                               <p>
                                <button :id="'btn-ph-id'+item.anime_id" class="button is-success" @click="clickVisible(item.anime_id)">Add</button>
                               </p>
                             
                            </div>
                          </div>
                        </div>
                        <div style="padding: 1rem 1rem;"> 
                          <div  :id="'ph-id'+item.anime_id" style="display:none">
                          <hr/>
                            <table>
                              <tr>
                                <td class="padding-ph" style="width:25%"><label>Status*</label></td>
                                <td class="padding-ph" style="width:75%">
                                  <div class="select is-primary">
                                    <select v-model="statusValue" class="inputtext height-ph" style="display:inline">
                                      <option value="0">Select status</option>
                                      <option value="1">Watching</option>
                                      <option value="2">Completed</option>
                                      <option value="3">On-Hold</option>
                                      <option value="6">Plan to Watch</option>
                                      <option value="4">Dropped</option>
                                    </select>
                                  </div>  
                                </td>
                              </tr>
                              <tr>
                                <td style="padding-left:2%"><label>Score</label></td>
                                <td style="padding-left:2%">
                                  <div class="select is-primary height-ph">
                                    <select v-model="score" id="score39198" class="inputtext">
                                      <option value="0">Select score</option>
                                      <option value="10">(10) Masterpiece</option>
                                      <option value="9">(9) Great</option>
                                      <option value="8">(8) Very Good</option>
                                      <option value="7">(7) Good</option>
                                      <option value="6">(6) Fine</option>
                                      <option value="5">(5) Average</option>
                                      <option value="4">(4) Bad</option>
                                      <option value="3">(3) Very Bad</option>
                                      <option value="2">(2) Horrible</option>
                                      <option value="1">(1) Appalling</option>
                                    </select>
                                  </div>  
                                </td>
                              </tr>
                              <tr>
                                <td class="padding-ph">
                                  <label>Eps seen</label>
                                </td>
                                <td class="padding-ph">
                                  <input v-model="numEpis"  type="number" style="width:20%" :max="item.anime_num_episodes" class="input is-primary height-ph" placeholder="">
                                  <label> / {{item.anime_num_episodes}}</label>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding-left:2%"><label>Start day</label></td>
                                <td style="padding-left:2%;width:100%!important">
                                  <div style="width:300px"> 
                                    <div class="select is-primary ">
                                      <select v-model="startMonth" class="height-ph" >
                                        <option value="00"></option>
                                        <option value="01">Jan</option><option value="02">Feb</option><option value="03">Mar</option><option value="04">Apr</option><option value="05">May</option><option value="06">Jun</option><option value="07">Jul</option><option value="08">Aug</option><option value="09">Sep</option><option value="10">Oct</option><option value="11">Nov</option><option value="12">Dec</option>
                                      </select>
                                    </div>
                                    <div class="select is-primary" style="height: 90%;">
                                      <select v-model="startDay" class="height-ph" >
                                        <option value="00"></option>
                                        <option v-for="(item, index) in listDay" :key="index" :value="item">{{item}}</option>
                                      </select>
                                    </div>
                                    <div class="select is-primary height-ph">
                                      <select v-model="startYear" class="height-ph">
                                        <option value="0000"></option> 
                                        <option v-for="(item, index) in listYear" :key="index" :value="item">{{item}}</option> 
                                      </select>
                                    </div>
                                    <a @click="putToday(1)"> Today</a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding-left:2%"><label>End day</label></td>
                                <td style="padding-left:2%;padding-top:2%">
                                  <div>
                                    <div class="select is-primary height-ph">
                                      <select v-model="endMonth" >
                                        <option value="00"></option>
                                        <option value="01">Jan</option><option value="02">Feb</option><option value="03">Mar</option><option value="04">Apr</option><option value="05">May</option><option value="06">Jun</option><option value="07">Jul</option><option value="08">Aug</option><option value="09">Sep</option><option value="10">Oct</option><option value="11">Nov</option><option value="12">Dec</option>
                                      </select>
                                    </div>
                                    <div class="select is-primary height-ph">
                                      <select v-model="endDay" >
                                        <option value="00"></option>
                                        <option v-for="(item, index) in listDay" :key="index" :value="item">{{item}}</option>
                                      </select>
                                    </div>
                                    <div class="select is-primary height-ph">
                                      <select v-model="endYear" >
                                        <option value="0000"></option>
                                        <option v-for="(item, index) in listYear" :key="index" :value="item">{{item}}</option> 
                                      </select>
                                    </div>
                                    <a @click="putToday(2)"> Today</a>
                                  </div> 
                                </td>
                              </tr>
                            
                              <tr>
                                <td></td>
                                <td>
                                  <br/>
                                  <img :id="'img-load'+item.anime_id" hidden  style="position: absolute;z-index: 4;width: 6%;margin-left: 3%;margin-top:1%" src="../../assets/loading.gif"/>
                                  <button :id="'save-ph'+item.anime_id" class="button is-success" @click="addAnime(item.anime_id)">Add</button>
                                  <button class="button" @click="cancelPanel(item.anime_id)">Cancel</button>
                                </td>
                              </tr>
                            </table> 
                          </div>  
                        </div> 
                      </div>
                    </div>
                    
                  </div>
                  <div v-if="nbreAnime==0" class="notification is-warning"> 
                      {{msg}}
                  </div> 
                </div>
              </div>
            </section>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button" @click="closeModal()">Cancel</button>
        </footer>
      </div> 
  </div>
  <div  class="modal" :class="isActiveModalAuth"  >
      <div class="modal-background"></div>
      <div class="modal-card" style="width:35%">
        <header class="modal-card-head">
          <div class="modal-card-title">
            <p><b style="font-size:20px">You must first login to be continuous</b></p>
          </div>
          <button class="delete" @click="closeModal()" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="message is-warning">
              <div class="message-body">
                <p><strong>*Vos données seront uniquement utilisées afin de communiquer avec le site MyAnimeList. Elles ne seront pas conservées directement sur notre serveur et ne seront jamais utilisées sans votre autorisation</strong></p>
              </div>
          </div>
          <p :style="colorMsg">{{msg}}<br/></p>
          <div class="field">
            <div class="control">
              <label>Username</label>
              <input :style="colorInput" class="input" v-model="usernameMAL" type="text" placeholder="">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <label>Password</label>
              <input :style="colorInput" class="input" v-model="passwordMAL" type="password" placeholder="">
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <img v-if="loading" style="position: absolute;z-index: 4;width: 6%;margin-left: 3%" src="../../assets/loading.gif"/>
          <button :disabled="loading" class="button is-success" @click="authMAL()">Go!</button>
          <button class="button" @click="closeModal()">Cancel</button>
        </footer>
      </div>
    </div> 
  </div>
   
</template>

<script>
  import Loading from "vue-loading-overlay";
  import { getSuggestionAnime, saveAnime,authMALJwt } from "../../services/anime";

  export default {
    name: "AddNewAnime",
    components: {Loading},
    data() {
      return {
        searchValue: "",
        nbreAnime:0,
        isLoading:false,
        animeList: [],
        histories: [],
        msg:'',
        idAnime:'',
        statusValue: 0,
        score: 0,
        numEpis:'',
        startYear:'',
        startMonth:'',
        startDay:'',
        endYear:'',
        endMonth:'',
        endDay:'',
        numWatchedTimes:'',
        rewatchValue:'',
        isActiveModalAuth:"",
        usernameMAL:'',
        passwordMAL:'',
        colorInput:'', 
        colorMsg:'',
        listDay:[],
        listMonth:[],
        listYear:[],
        loading: false
      };
    },
    props: {
      visibility: String,
    },
    watch: {
      visibility: async function() {
        this.msg=''
        if(this.visibility){
          // const malSessionToken = await localStorage.getItem('MAL_SESSION_ID_TOKEN')
          const userToken = await localStorage.getItem('MAL_USER_TOKEN')
          const malPassword = await localStorage.getItem('MAL_PS_ID_TOKEN') 
        if(userToken && malPassword){
            this.isLoading = true
            const data = await getSuggestionAnime({userToken,malPassword})
            
            if(data.statusCode===200){
              console.log(data)
              this.animeList = [...data.dataResult]
              this.histories = [...data.dataResult]
              this.nbreAnime = this.animeList.length 
              setTimeout(() => {
                this.isLoading = false; 
              }, 1000);
            }else{
              this.msg = data.msg
              this.isLoading = false;
              setTimeout(() => { 
                 this.$emit('closeModalAdd')
                 this.isActiveModalAuth='is-active'
              }, 500);
            }
          }else{
            this.$emit('closeModalAdd')
            this.isActiveModalAuth='is-active'
          }
        }
      
      }
    }, 
    async created() { 
      for (let index = 1; index < 31; index++) {
        this.listDay[index-1] = index<10? '0'+index:index+'';
      } 
      const dt = new Date() 
      const end = dt.getFullYear() -30
      let i =0;
      for (let index =dt.getFullYear() ; index >=end ; index--) {
        this.listYear[i] = ''+index;
        i++
      } 
    },
    methods: {
      
      getURL(url){  
        return url.split('\\').join('')
      },
      closeModal() {
        console.log('close');
        this.isActiveModalAuth=''
        this.$emit('closeModalAdd')
      },
      searchBd() {
        this.isLoading = true;
        this.msg = "";
        const data = this.histories.filter(
          element =>
            element.anime_title
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
      },
      clickVisible(idPanel){   
        document.getElementById('ph-id'+idPanel).setAttribute("style", "display:contents")
        document.getElementById('btn-ph-id'+idPanel).setAttribute("style", "visibility:hidden")
      },
      cancelPanel(idPanel){
        document.getElementById('ph-id'+idPanel).setAttribute("style", "display:none")
        document.getElementById('btn-ph-id'+idPanel).setAttribute("style", "visibility:visible")
      },
      async addAnime(idAnime){
        //const malSessionToken = await localStorage.getItem('MAL_SESSION_ID_TOKEN')
        // const malLogToken = await localStorage.getItem('MAL_LOG_TOKEN')
        const userToken = await localStorage.getItem('MAL_USER_TOKEN')
        const malPassword = await localStorage.getItem('MAL_PS_ID_TOKEN')
        this.idAnime = idAnime
        const obj = {
          idAnime,
          status: this.statusValue+'',
          score: this.score+'',
          numEpis: this.numEpis+'',
          startYear: this.startYear+'',
          startMonth: this.startMonth+'',
          startDay: this.startDay+'',
          endYear: this.endYear+'',
          endMonth: this.endMonth+'',
          endDay: this.endDay+'',
          numWatchedTimes: this.numWatchedTimes,
          rewatchValue: this.rewatchValue,
        // malSessionToken,
        //  malLogToken,
          userToken,
          malPassword,
          numEpisodes: 0,
          add: true
        }
        console.log(this.statusValue)
        if(!this.statusValue || this.statusValue===0){
          this.msg = 'The status is required'
          return 
        }   
        if(userToken && malPassword){
          document.getElementById('img-load'+idAnime).removeAttribute('hidden');
          document.getElementById('save-ph'+idAnime).setAttribute('disabled', true);
          const result= await saveAnime(obj)
          this.colorMsg='color:red'
          document.getElementById('img-load'+idAnime).setAttribute('hidden','true');
          document.getElementById('save-ph'+idAnime).setAttribute('disabled', false);
          if(result.etat){
            this.colorMsg='color:green'
            this.initData()
            this.animeList = this.animeList.filter(e => e.anime_id!=idAnime)
            this.histories = [...this.animeList]
            this.cancelPanel(idAnime)
          }
          this.msg = result.msg
          console.log('result==',result) 
        }else{ 
          await this.$emit('closeModalAdd')
          this.isActiveModalAuth='is-active'
        } 
      },
      async authMAL(){
        this.colorInput=''
        this.msg=''
        if(this.usernameMAL && this.passwordMAL){
          this.loading = true
          const result = await authMALJwt(this.usernameMAL,this.passwordMAL, 0) 
          console.log(result)
          this.loading = false
          if(result){
            setTimeout(() => {
              this.msg='Authentification success'
              this.colorMsg='color:green'
              this.isActiveModalAuth = ''
              this.$emit('openModalAdd') 
            }, 500);
           
          }else{
            this.msg = 'Echec of authentification, try again'
            this.colorMsg='color:red'
          }
        }else{
          this.colorInput='border-color:red'
          this.colorMsg='border-color:red' 
          this.msg ='Required fields!'
        }
      },
      putToday(disctint){
        const dt = new Date()
        const month = dt.getMonth()+1
        if(disctint===1){ 
          this.startDay= dt.getDate()<10? '0'+ dt.getDate(): dt.getDate()
          this.startMonth = month<10? '0'+ month: month
          this.startYear = dt.getFullYear()+''
        }else{ 
          this.endDay= dt.getDate()<10? '0'+ dt.getDate(): dt.getDate()
          this.endMonth = month<10? '0'+ month: month
          this.endYear = dt.getFullYear() + ''
        }
      },
      initData(){
        this.score=''
        this.status=''
        this.numEpis=''
        this.startMonth=''
        this.startYear=''
        this.startDay=''
        this.endMonth=''
        this.endYear=''
        this.endDay=''
      }
    }
  };
</script>
<style scoped>
  .height-ph{
    height:90%;

  }
  .padding-ph{
    padding:2%
  }
</style>
