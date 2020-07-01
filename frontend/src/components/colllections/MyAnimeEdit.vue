<template> 
  <div>  
     <div class="modal" :class="visibility">
      <div class="modal-background"></div>
      <div class="modal-card" >
        <header class="modal-card-head">
          <div class="modal-card-title">
            <p><b style="font-size:20px">Edit - {{anime.anime_title}}</b></p>
          </div>
          <button class="delete" @click="closeModal()" aria-label="close"></button>
        </header>
        <section class="modal-card-body">  
          <p :style="colorMsg">{{msg}}<br/></p>
          <table>
            <tr>
              <td class="padding-ph" style="width:30%"><label>Status*</label></td>
              <td class="padding-ph" style="width:70%">
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
                <label>Episodes Watched</label>
              </td>
              <td class="padding-ph">
                <input type="number" style="width:20%" :max="anime.anime_num_episodes" v-model="numEpis" class="input is-primary height-ph" placeholder="">
                <label> / {{anime.anime_num_episodes}}</label>
              </td>
            </tr>
            <tr>
              <td style="padding-left:2%"><label>Start day</label></td>
              <td style="padding-left:2%;">
                <div  style="width:350px">
                  <div class="select is-primary ">
                    <select v-model="startMonth" class="height-ph" >
                      <option value="00"></option>
                      <option value="01">Jan</option><option value="02">Feb</option><option value="03">Mar</option><option value="04">Apr</option><option value="05">May</option><option value="06">Jun</option><option value="07">Jul</option><option value="08">Aug</option><option value="09">Sep</option><option value="10">Oct</option><option value="11">Nov</option><option value="12">Dec</option>
                    </select>
                  </div>
                  <div class="select is-primary" >
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
                  <a @click="putToday(1)"> Insert today</a>
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
                  <a @click="putToday(2)"> Insert today</a>
                </div> 
              </td>
            </tr>
          
            <tr>
              <td></td>
              <td style="padding-left:2%">
                <br/>
                <div style="position:relative">
                  <img v-if="loading" style="position: absolute;z-index: 4;width: 6%;margin-left: 5%;margin-top:3%" src="../../assets/loading.gif"/>
                  <button :disabled="loading" class="button is-success" @click="editAnime()">Edit</button>
                </div>
                <button class="button" @click="closeModal()" style="margin-left:20%;margin-top: -11.5%;">Cancel</button>
              </td>
            </tr>
          </table> 
       </section>
        <footer class="modal-card-foot"> 
          
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
                <p><strong>*Vos données seront uniquement utilisées afin de communiquer avec le site MyAnimeList. Elles ne seront pas conservées directement sur notre serveur et ne seront jamais utilisées sans votre autorisation.</strong></p>
              </div>
          </div>
          <p :style="colorMsg">{{msg}}<br/></p>
          <div class="field">
            <div class="control">
              <input :style="colorInput" class="input" v-model="usernameMAL" type="text" placeholder="">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input :style="colorInput" class="input" v-model="passwordMAL" type="password" placeholder="">
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <img v-if="loading" style="position: absolute;z-index: 4;width: 6%;margin-left: 5%;margin-top:3%" src="../../assets/loading.gif"/>
          <button :disabled="loading" class="button is-success" @click="authMAL()">Go!</button>
          <button class="button" @click="closeModal()">Cancel</button>
        </footer>
      </div>
    </div>
  </div> 
</template>

<script>
import { saveAnime,authMALJwt } from "../../services/anime";
export default {
  name: "MyAnimeEdit",
  data(){
    return {
      msg:'', 
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
      loading:false
    }
  },
  props: {
    visibility: String,
    anime: Object
  }, 
  watch: {
    anime: async function() { 
      if(this.anime!=null){ 
        console.log(this.anime)
      // const malSessionToken = await localStorage.getItem('MAL_SESSION_ID_TOKEN')
        const userToken = await localStorage.getItem('MAL_USER_TOKEN')
        const malPassword = await localStorage.getItem('MAL_PS_ID_TOKEN') 
        if(userToken && malPassword){
          this.statusValue = this.anime.status
          this.score = this.anime.score
          this.numEpis = this.anime.num_watched_episodes 
        }else{
          this.isActiveModalAuth='is-active'
        }
      }else{
        await this.$emit('closeModalEdit') 
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
    async editAnime(){
      
      //const malSessionToken = await localStorage.getItem('MAL_SESSION_ID_TOKEN')
      // const malLogToken = await localStorage.getItem('MAL_LOG_TOKEN')
      const userToken = await localStorage.getItem('MAL_USER_TOKEN')
      const malPassword = await localStorage.getItem('MAL_PS_ID_TOKEN')
      const idAnime = this.anime.anime_id
      const obj ={
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
        numEpisodes: this.anime.anime_num_episodes,
        add: false
      }
      console.log(this.statusValue)
      if(!this.statusValue || this.statusValue===0){
        this.msg = 'The status is required'
        return 
      }   
      if(userToken && malPassword){
        this.loading=true
        const result= await saveAnime(obj)
        this.colorMsg='color:red'
        this.loading = false
        if(result.etat){ 
          this.colorMsg='color:green'
          this.msg = result.msg 
        }else{
          this.msg = result.msg
        }
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
        this.loading=true
        const result = await authMALJwt(this.usernameMAL,this.passwordMAL, 0) 
        console.log(result)
        this.loading = false
        if(result){
          this.msg='Authentification success'
          this.colorMsg='color:green'
          this.isActiveModalAuth = '' 
          await this.$emit('openModalAdd')
        }else{ 
          this.msg = 'Echec of authentification, try again'
          this.colorMsg='color:red'
        }
      }else{
        this.colorInput='border-color:red'
      }
    },
    closeModal() {
      console.log('close');
      this.isActiveModalAuth=''
      this.$emit('closeModalEdit')
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .height-ph{
    height:90%;

  }
  .padding-ph{
    padding:2%
  }
</style>
