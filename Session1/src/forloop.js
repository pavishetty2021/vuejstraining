import * as Vue from "vue/dist/vue.esm-bundler.js";
const app = Vue.createApp({
    template:`<div v-for="number in numbers">
               <span>{{number}}</span>
               <div v-if="isEven(number)"> Even</div>
                <div v-else> Odd</div>
                </div>`,
    data(){
        return{
           numbers:[1,2,3,4,5,6,7,8]
        }        
    },
    methods:{      
        isEven(number){
           return number % 2 === 0;
        }
    }

})
app.mount("#app")