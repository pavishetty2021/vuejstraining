import * as Vue from "vue/dist/vue.esm-bundler.js";
const app = Vue.createApp({
    template:`<div>
                <input 
                  v-model="name" 
                   />
              </div>
              <div class="red">
              {{error}}
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