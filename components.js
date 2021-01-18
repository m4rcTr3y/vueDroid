const Start = {
   name:'Start',
   data(){
     return{
       time:0
     }
   },
   methods:{
     Home: function(){
       var vm = this;
       setTimeout(function(){
         router.push('/home');
       }, 3000);
     }
   },
   computed:{
     
     
   },
   created(){
     this.Home();
   },
   template: `
       <div class="start">
          
          <i class="logo fa fab fa-android"></i>
          <h1>VueDroid</h1>
           <span class="loader"></span>
          <p>Powered by Vuejs</p>
       </div>
   `
};

const Home = {
   data(){
     return{
      Time: '',
      Htime: '',
      menuOpen: false
     }  
   },
   methods:{
     UpdateTime:function(){
        var vm = this;
        setInterval(function(){
           vm.Time = vm.$root.Time(); 
           vm.Htime = vm.$root.Time(true); 
            
        },1000);
     },
    drag(e){
      
    }
   
   },
   created(){
      this.UpdateTime();
   },
   template: `
       <div class="droid">
          <div class="notif">
           
            <i class="fa fa-wifi"></i>
            <i class="fa fa-bluetooth"></i>
            
            <span v-html="Time" class="time"></span> 
          </div>
          <div class="droidM">
             <span v-html="Htime" class="htime"></span>
             <button class="appdrawer" v-on:click="menuOpen = !menuOpen"><i class="fa fa-bars"></i></button>
             
          </div>
          <transition name="menu">
           <div class="appmenu" v-if="menuOpen == true" >
              <div class="menu-nav" v-on:touchmove="drag">
                <button> <i class="fa fa-list"></i> </button>
                <button v-on:click="menuOpen = false"> <i class="fa fa-close"></i> </button> 
              </div>
              <ul class="apps" >
              
                <li class="appItem" v-for="item in $parent.apps" > <i v-bind:class="item.icon"></i> <span>{{item.name}}</span></li>
              </ul>
           </div>
          </transition>
       </div>
   
   `
};