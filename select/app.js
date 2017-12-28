new Vue({
    el:"#root",
    data:{
        datas:[
            {title:1111111,
            id:1},
            {title:22222222,
                id:2},
            {title:33333333,
                id:3},
        ],
        title:"",
        state:false,
    },
    methods:{
       aa(){ console.log(1)
           this.state =true;

       },
       bb(val){
           this.title = val;
           this.state = false
       }

    }
})