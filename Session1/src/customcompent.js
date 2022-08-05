import * as Vue from "vue/dist/vue.esm-bundler.js";
const Num={
    props:['number'],
    template:`<button v-bind:class="getClass(number)" v-on:click="getClick">{{number}}</button>`,
    methods:{
        getClass(number){
            return this.isEven(number) ? "blue" : "red";
           },   
           isEven(number){
              return number % 2 === 0;
           },
           getClick(){
              this.$emit('choosen',this.number)
           }
    }


}
const app = Vue.createApp({
    components:{
        Num
    },
    template:`<num
                 v-for="number in numbers"
                 v-bind:number="number"
                 v-on:choosen="getNumber"
              />
              <hr/>
              <num
                 v-for="numbers in numberhistorylist"
                 v-bind:number="numbers"
                
              />
              `,
    data(){
        return{
           numbers:[1,2,3,4,5,6,7,8],
           numberhistorylist:[],
        }        
    },
    
    methods:{ 
        getNumber(number){
            this.numberhistorylist.push(number)
            console.log( this.numberhistorylist)
        }
        }

})
app.mount("#app")