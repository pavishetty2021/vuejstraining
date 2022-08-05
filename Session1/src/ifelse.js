import * as Vue from "vue/dist/vue.esm-bundler.js";
const app = Vue.createApp({
    template:`<button v-on:click="decrement">Decrement</button>
                <div>Count{{count}}</div>
                <div v-if="isEven()"> Even</div>
                <div v-else> Odd</div>`,
    data(){
        return{
            msg:'firstapp',
            count:2000,
        }        
    },
    methods:{
        decrement(){
           this.count-=1;
        },
        isEven(){
           return this.count % 2 === 0;
        }
    }

})
app.mount("#app")