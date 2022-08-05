import * as Vue from "vue/dist/vue.esm-bundler.js";
const app = Vue.createApp({
    template:`<div>
                <input 
                   v-on:input="input" 
                   v-bind:value="value"
                   />
              </div>
              <div class="red">
              {{error}}
              </div>
              `,
    data(){
        return{
           value:"user",
        }        
    },
    computed:{
        error(){
           
            if(this.value.length <5){
                return "Greater than 5"
            } 
        }
    },
    methods:{ 
        input($event){
            this.value = $event.target.value;
        },
        getClass(number){
         return this.isEven(number) ? "blue" : "red";
        }  ,   
        isEven(number){
           return number % 2 === 0;
        }
    }

})
app.mount("#app")