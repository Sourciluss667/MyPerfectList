<template>
  <div id="page" style="position: relative; top: -90px;"> 
    <BreadCrumb/>
   
    <nav class="level">
      <!-- Left side -->
      <div class="level-left">
        <div class="level-item"> 
          <span class="tag is-link">{{nbreAnime}}</span>
        </div> 
         
        <div class="control has-icons-left">
          <div class="select">
            <select v-model="bdOptionValue" @change="selectOption()" >
              <option value="">--option--</option>
              <option value="animelist">Anime</option>
              <option value="mangalist">Mangas</option>
            </select>
          </div>
          <div class="icon is-small is-left">
            <i class="fas fa-list"></i>
          </div>
        </div>
       
        <div class="level-item" style="margin-left:5%">
          <div class="field has-addons">
            <p class="control">
              <input v-model="searchValue" @keyup="searchBd"
                class="input is-focused"
                style="width:400px"
                type="text"
                placeholder="Find an anime"
              />
            </p>
            <p class="control">
              <button class="button" @click="searchBd()">
                Search
              </button>
            </p>

            
          </div>
        </div>
      </div>

      <!-- Right side -->
      <div class="level-right">
        <p class="level-item"><a class="button is-success" @click="addNewAnime()">Add New</a></p> 
        <p class="level-item">
          <a class="button" @click="modalPop()" ><i class="fas fa-user-tag"></i></a>
          <span :style="hiddenIcon" title="Click to add your anime username!" style="position: absolute;margin-left: 2%;margin-top: -1.1%;"><i style="color:red" class="fa fa-question-circle"></i></span>
        </p>
      </div>
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
            <div v-for="item in animeList" :key="item.id"  class="column is-12-tablet is-6-desktop">
              <div class="card" style="height: 100%">
                <div v-if="bdOptionValue==='animelist'"  class="card-image" :data-eph="item.id"  @mouseover="makeButtonVisible(item.anime_id)" @mouseout="makeButtonDisapear(item.anime_id)" >
                  <div  style="float:left; width:20%; margin-top:1.1%" >
                    <a :href="getPath(item.video_url)"><img :src="item.anime_image_path" alt=""/></a>
                  </div>
                  <div  style="margin-left:20%;padding-top:2%;text-align:left">
                    <div  style="display:inline-block;width: 87.5%;">
                      <h1 class="title is-5">{{item.anime_title}} <a v-if="item.has_video" target="_blank" :href="getPath(item.video_url)"><i class="fas fa-play-circle"></i></a></h1>
                      <p>Score : {{item.score}}</p>
                      <p>Type : {{item.anime_media_type_string}}</p>
                      <p>Progress : {{item.num_watched_episodes}}/{{item.anime_num_episodes}}</p>
                    </div>  
                    <div  style="display:inline-block">
                      <div class="dropdown" @click="dropdownEvent(item.anime_id)"  :id="'ph-id'+item.anime_id" style="visibility: hidden">
                        <div class="dropdown-trigger">
                          <button class="button" aria-haspopup="true" :aria-controls="'dropdown-menu'+item.anime_id">
                            <span><i class="fas fa-share-square"></i></span> 
                          </button>
                        </div>
                        <div class="dropdown-menu" :id="'dropdown-menu'+item.anime_id" role="menu">
                          <div class="dropdown-content">
                            <a href="javascript:void(0)" @click="shareWithFacebookFriend(item.video_url)" class="dropdown-item">
                              <i class="fab fa-facebook"></i> facebook
                            </a>
                            <a href="javascript:void(0)" @click="shareWithTwitterFriend(item.video_url)" class="dropdown-item">
                              <i class="fab fa-twitter"></i> twitter
                            </a>
                            <a href="javascript:void(0)" @click="doCopy(item.video_url)" class="dropdown-item">
                               <i class="fas fa-link"></i> copy link
                            </a> 
                          </div>
                        </div>
                      </div>  
                    </div>
                  </div>
                </div>
                <div v-if="bdOptionValue==='mangalist'" class="card-image"  @mouseover="makeButtonVisible(item.manga_id)" @mouseout="makeButtonDisapear(item.manga_id)" >
                  <div  style="float:left; width:20%; margin-top:1.1%" >
                    <a :href="getPath(item.manga_url)"><img :src="item.manga_image_path" alt=""/></a>
                  </div>
                  <div style="margin-left:20%;padding-top:2%;text-align:left">
                    <div  style="display:inline-block;width: 87.5%;vertical-align:top">  
                      <a  target="_blank" :href="getPath(item.manga_url)"><h1 class="title is-5">{{item.manga_title}}</h1></a>
                      <p>Score : {{item.score}}</p>
                      <p>Type : {{item.manga_media_type_string}}</p>
                      <p>Progress : {{item.num_read_chapters}}/{{item.manga_num_chapters}}</p>
                    </div>
                    <div  style="display:inline-block;vertical-align: bottom;margin-top: 21.5%;">
                      <div class="dropdown"  @click="dropdownEvent(item.manga_id)" :id="'ph-id'+item.manga_id" style="visibility: hidden">
                        <div class="dropdown-trigger">
                          <button class="button" aria-haspopup="true" :aria-controls="'dropdown-menu'+item.manga_id">
                            <span><i class="fas fa-share-square"></i></span> 
                          </button>
                        </div>
                        <div class="dropdown-menu" :id="'dropdown-menu'+item.manga_id" role="menu">
                          <div class="dropdown-content">
                            <a href="javascript:void(0)" @click="shareWithFacebookFriend(item.manga_url)" class="dropdown-item">
                              <i class="fab fa-facebook"></i> facebook
                            </a>
                            <a href="javascript:void(0)" @click="shareWithTwitterFriend(item.manga_url)" class="dropdown-item">
                              <i class="fab fa-twitter"></i> twitter
                            </a>
                            <a href="javascript:void(0)" @click="doCopy(item.manga_url)" class="dropdown-item">
                               <i class="fas fa-link"></i> copy link
                            </a> 
                          </div>
                        </div>
                      </div>  
                    </div>
                  
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

    <div  class="modal" :class="isActiveModalAuth"  >
      <div class="modal-background"></div>
      <div class="modal-card" style="width:30%">
        <header class="modal-card-head">
          <p class="modal-card-title">MyAnimeList's username </p>
          <button class="delete" @click="closeModal()" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
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
          <button class="button is-success" @click="authMAL()">Go!</button>
          <button class="button" @click="closeModal()">Cancel</button>
        </footer>
      </div>
    </div>
    <div  class="modal" :class="isActiveModal" >
      <div class="modal-background"></div>
      <div class="modal-card" style="width:30%">
        <header class="modal-card-head">
          <p class="modal-card-title">MyAnimeList's username </p>
          <button class="delete" @click="closeModal()" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <div class="control">
              <input :style="colorInput" class="input" v-model="usernameMAL" type="text" placeholder="">
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="goSearch()">Go!</button>
          <button class="button" @click="closeModal()">Cancel</button>
        </footer>
      </div>
    </div> 
    <AddNewAnime :visibility="isActiveModalAdd" v-on:closeModalAdd="closeModal"/>
  </div>
</template> 
<script>

import BreadCrumb from '../BreadCrumb';
import {searchAnime,searchAnimeUsingToken,getCookie,authMALJwt} from '../../services/anime';
// Import component
import AddNewAnime from './AddNewAnime';
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "MyAnimeList", 
  data() {
    return {
      animeList:[],
      histories:[],
      nbreAnime:0,
      searchValue:"",
      bdOptionValue:"",
      msg:"",
      isActiveModal:"",
      usernameMAL:"",
      passwordMAL:"",
      colorInput:"",
      isLoading:false,
      hiddenIcon:'', 
      isActiveModalAuth:"",
      isActiveModalAdd: ""
    };
  },
  components: { 
    BreadCrumb,
    Loading,
    AddNewAnime
  },
  async created() {  
    console.log(localStorage.getItem('name'))
      const token = await getCookie('token');
      console.log('ddd ='+token)
      this.bdOptionValue='animelist';
      if(token){
        this.isLoading=true;
        const res = await  searchAnimeUsingToken(token, this.bdOptionValue);
        this.animeList = [...res];
        this.histories = [...res];
        this.nbreAnime = this.animeList.length; 
        setTimeout(() => {
          this.isLoading = false; 
        }, 2000);
        this.hiddenIcon='visibility:hidden'; 
      }else{
        this.isActiveModal='is-active';
        this.msg ="Please! selected an option, anime or mangas to display the list.";
      }

   
  },
  methods: {
    getPath(video_url){
      console.log(video_url);
      return 'https://myanimelist.net'+video_url;
    },
    searchBd(){
      this.isLoading=true;
      this.msg='';
      const option = this.bdOptionValue==='animelist'? 'anime_title':'manga_title';
      const data = this.histories.filter(element => element[`${option}`].toLowerCase().indexOf(this.searchValue.toLowerCase())!=-1);  
      this.animeList = [...data];
      this.nbreAnime = this.animeList.length;
      setTimeout(() => {
        this.isLoading = false;  
        if(this.nbreAnime==0){
          this.msg = "No result found!"
        }
      }, 2000);

      
      
    },
   async goSearch(){
      this.bdOptionValue='animelist';
      this.msg='';
      console.log(this.usernameMAL)
      if(this.usernameMAL){
        this.isActiveModal='';
        this.isLoading=true;
        const res = await  searchAnime(this.usernameMAL, this.bdOptionValue);
        this.animeList = [...res];
        this.histories = [...res];
        this.nbreAnime = this.animeList.length;
        this.nbreAnime = this.animeList.length; 
        setTimeout(() => {
          this.isLoading = false; 
          this.hiddenIcon='visibility:hidden'; 
          if(this.nbreAnime==0){
            this.msg = "No result found!";
          }
        }, 2000);
        
      }else{
        this.colorInput='border-color:red';
      }
    },
    searchReview(){
      this.isLoading=true;
      this.msg='';
      const option = this.bdOptionValue==='animelist'? 'is_rewatching':'is_rereading';
      const data = this.histories.filter(element => element[`${option}`]);  
      this.animeList = [...data];
      this.nbreAnime = this.animeList.length;
      setTimeout(() => {
        this.isLoading = false;
        
        let dropdown =document.querySelectorAll('.dropdown'); 
        dropdown.forEach(el=>{
          el.removeEventListener('click', function(e){e.stopPropagation();}, true);  
        }); 
        if(this.nbreAnime==0){
          this.msg = "No result found!";
        }
      }, 2000); 
    },
    async selectOption(){
      console.log(this.bdOptionValue)
      this.nbreAnime = 0;
      this.animeList = [];
      this.histories = [];
      this.searchValue="";
      const token = await getCookie('token');
      console.log('ddd ='+token) 
      this.msg='';
      if(token){
        if(this.bdOptionValue.trim().length>0){
          this.isLoading=true;
          const res = await  searchAnimeUsingToken(token, this.bdOptionValue);
          this.animeList = [...res];
          this.histories = [...res];
          this.nbreAnime = this.animeList.length;
          setTimeout(() => {
            this.isLoading = false; 
            if(this.nbreAnime==0){
              this.msg = "No result found!";
            }
          }, 2000);
        }else{
          this.msg ="Please select one option.";
        }
        this.hiddenIcon='visibility:hidden';
      }else{
        this.msg ="Please set your anime username.";
        this.hiddenIcon = '';
      }
      console.log(this.histories);
    },
    modalPop(){
      this.isActiveModal = "is-active";
    },
    closeModal(){
      this.isActiveModal="";
      this.isActiveModalAuth="";
      this.isActiveModalAdd = ""
    },
    addNew(){
      this.isActiveModalAdd = "is-active";

      //window.open('https://myanimelist.net/login.php?from=%2Fanime%2F5114%2FFullmetal_Alchemist__Brotherhood','','top=0,left=0,width='+(screen.width/2)+',height='+(screen.height/2)+', toolbar=no, menubar=no, scrollbars=yes, resize=no, location=no, directories=no, status=no');
    },
    addNewAnime(){
      this.isActiveModalAdd = "is-active";
    },
    authMAL(){
      if(this.usernameMAL && this.passwordMAL){
        authMALJwt(this.usernameMAL,this.passwordMAL)
      }else{
        this.colorInput='border-color:red';
      }
    },
    makeButtonVisible(idCard){   
     document.getElementById('ph-id'+idCard).setAttribute("style", "visibility:visible")
    },
    makeButtonDisapear(idCard){
     document.getElementById('ph-id'+idCard).setAttribute("style", "visibility:hidden")
    },
    shareWithFacebookFriend(URL){ 
      const path = this.getPath(URL);
      window.open('https://www.facebook.com/sharer/sharer.php?u='+path,'','top=0,left=0,width='+(screen.width/2)+',height='+(screen.height/2)+', toolbar=no, menubar=no, scrollbars=yes, resize=no, location=no, directories=no, status=no')
    },
    shareWithTwitterFriend(URL){ 
      const path = this.getPath(URL);
      window.open('https://twitter.com/intent/tweet?text='+path,'','top=0,left=0,width='+(screen.width/2)+',height='+(screen.height/2)+', toolbar=no, menubar=no, scrollbars=yes, resize=no, location=no, directories=no, status=no')
    },
    doCopy(URL){ 
      const path = this.getPath(URL);  
      navigator.clipboard.writeText(path).then(function() {
        console.log('cool')
      }, function() {
    /* clipboard write failed */
      });
       
    },
    dropdownEvent(idEl){
      //alert('cool')
      let el = document.getElementById('ph-id'+idEl) 
      el.classList.toggle('is-active');
      /* let dropdown =document.querySelectorAll('.dropdown'); 
      dropdown.forEach(el=>{
          el.addEventListener('click', function(event) {
          event.stopPropagation(); 
          el.classList.toggle('is-active');
        }); 
      }); */
    } 
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: brown;
}
</style>
