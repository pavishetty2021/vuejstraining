import * as Vue from "vue/dist/vue.esm-bundler.js";
const app = Vue.createApp({
    template:`<div v-for="number in numbers">
               <span v-bind:class="getClass(number)">{{number}}</span>
               </div>
              `,
    data(){
        return{
           numbers:[1,2,3,4,5,6,7,8]
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