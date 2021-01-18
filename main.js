let routes =[
  {path:'/', component: Start},
  {path:'/home',component: Home}
];

let router = new VueRouter({routes});


let app = new Vue({
     el:'#app',
     data:{
        time: 5,
        apps: [
           {name:'tumblr',icon:'fa fa-tumblr'},
           {name:'facebook',icon:'fa fa-facebook'},
           {name:'instagram', icon:'fa fa-instagram'},
           {name:'twitter', icon:'fa fa-twitter'},
           {name:'notepad', icon:'fa fa-edit'},
           {name:'maps', icon:'fa fa-map'},
           {name:'playstore',icon:'fa fa-play'},
           {name:'vimeo',icon:'fa fa-vimeo'},
           {name:'quora',icon:'fa fa-quora'},
           {name:'twitch',icon:'fa fa-twitch'},
           {name:'youtube',icon:'fa fa-youtube'},
           {name:'googleplus',icon:'fa fa-google-plus-square'},
           {name:'pinterest',icon:'fa fa-pinterest'},
           {name:'camera',icon:'fa fa-camera'},
           {name:'calender',icon:'fa fa-calendar'},
           {name:'settings',icon:'fa fa-gears'}, 
           {name:'telegram',icon:'fa fa-telegram'}, 
           
        ]
     },
    router,
    methods:{
       Time:function(sec=false){
       var hours = new Date().getHours();
       var minutes = new Date().getMinutes();
       var seconds = new Date().getSeconds();
       var date = "";
       if(sec == true){
           date  = `${hours} : ${minutes} : ${seconds} `; 
         }
       else{
           date  = `${hours} : ${minutes}`; 
       }
       return date;
       }   
    }
    
});

