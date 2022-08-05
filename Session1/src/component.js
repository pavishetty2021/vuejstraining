import * as Vue from "vue/dist/vue.esm-bundler.js";
const hello={
    template:'Vuejs',
}
const first={
    template:'component',
}
const app = Vue.createApp({
    components:{
        hello,
        first
    },
    template:`<div>
               <hello/>
               
               <first/>
              </div>
              `,
    data(){
        return{
           name:"user",
        }        
    },
    computed:{
        error(){           
            if(this.name.length <5){
                return "Greater than 5"
            } 
        }
    },
    methods:{ 
        
        getClass(number){
         return this.isEven(number) ? "blue" : "red";
        }  ,   
        isEven(number){
           return number % 2 === 0;
        }
    }

})
app.mount("#app")