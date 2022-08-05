import * as Vue from "vue/dist/vue.esm-bundler.js";
const app = Vue.createApp({
    template:'<button v-on:click="decrement">Decrement</button><div>Count{{count}}</div>',
    data(){
        return{
            msg:'firstapp',
            count:2000,
        }        
    },
    methods:{
        decrement(){
           this.count-=1;
        }
    }

})
app.mount("#app")