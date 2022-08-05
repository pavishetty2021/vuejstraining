import * as Vue from "vue/dist/vue.esm-bundler.js";
const app = Vue.createApp({
    template:`<div v-for="number in evenlist">
               <span>{{number}}</span>
               </div>
              `,
    data(){
        return{
           numbers:[1,2,3,4,5,6,7,8]
        }        
    },
    computed:{
        evenlist(){
            return this.numbers.filter(num=>this.isEven(num));

        }

    },
    methods:{      
        isEven(number){
           return number % 2 === 0;
        }
    }

})
app.mount("#app")