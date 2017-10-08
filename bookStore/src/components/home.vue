<template>
   <div class='container'>
       <nav class="nav-header">
           <header>
             <a href="/" class="brand">移动书城</a>
             <a href="/" class="avater"></a>
           </header>
           <div class="swipe">
                <mt-swipe :auto="4000">
                   <mt-swipe-item>
                     <img src="../assets/images/1.jpg" alt="">
                   </mt-swipe-item>
                   <mt-swipe-item>
                     <img src="../assets/images/2.jpg" alt="">
                   </mt-swipe-item>
                   <mt-swipe-item>
                     <img src="../assets/images/3.jpg" alt="">
                   </mt-swipe-item>
                   <mt-swipe-item>
                     <img src="../assets/images/4.jpg" alt="">
                   </mt-swipe-item>
                   <mt-swipe-item>
                     <img src="../assets/images/5.jpg" alt="">
                   </mt-swipe-item>
                </mt-swipe>
           </div>
       </nav>
       <nav class="home-nav">
         <router-link class="guide-nav-div" v-for="(item,index) in type" :key="index" :to="{path:'category',query:{
            type:item.num
         }}" @click="openBookCategory(item.num)">
           <i class="icon icon-sort"></i>
           <h4 class="guide-nav-h">{{item.word}}</h4>
         </router-link>
       </nav>
       <div v-if="!loading">
           <recommend :booklist="booklist| hot" title="热门小说"></recommend>
           <recommend :booklist="booklist| top" title="排行榜"></recommend> 
           <recommend :booklist="booklist| free" title="限时免费"></recommend>
       </div>
       <loading v-show="loading"></loading>
   </div>
</template>
   
<style scoped>
   
</style>
   
<script>
  //  import common from '../../common/common.js'
   import axios from "axios"
   import recommend from '../common/recommend.vue'
  //  import Booklist from  '../common/booklist.vue'
  //  import Loading from  '../common/loading.vue'

   export default {
       data() {
           return {
             booklist:[],
             type:[
               {
                 num:1,
                 word:"玄幻"
               },
        
               {
                num:2,
                word:"修真"
               },
               {
                 num:3,
                 word:"都市"
               },
               {
                 num:4,
                 word:"历史"
               },
               {
                 num:5,
                 word:"游戏"
               }
             ],
             loading:false
           }
       },
       created() {
           this.getData()
       },
       methods: {
           getData(){
             this.loading+true;
              axios.get(`${this.common.api}/booklist`).then(res=>{
                console.log(res);
              })
           }
       },
       components:{
            recommend,
          //  Booklist,
          //  Loading
       },
         
 
      filters: {
        hot(value) {
          if (!value) return ''
          var arr = []
          value.forEach((item, index) => {
            //简单更改下首页加载数据太多,可自行修改
            if (index < 20) {
              if (index % 2 == 1) {
                arr.push(item)
              }
            }
          })
          return arr
        },
        top(value) {
          if (!value) return ''
          var arr = []
          value.forEach((item, index) => {
            //简单更改下首页加载数据太多,可自行修改
            if (index < 20) {
              if (index % 2 == 0) {
                arr.push(item)
              }
            }
          })
          return arr
        },
        free(value) {
          if (!value) return ''
          var arr = []
          value.forEach((item, index) => {
            //简单更改下首页加载数据太多,可自行修改
            if (index < 20) {
              if (index % 3 == 2) {
                arr.push(item)
              }
            }
          })
          return arr
        },
        newbook(value) {
          if (!value) return ''
          var arr = []
          value.forEach((item, index) => {
            if (index % 3 == 1) {
              arr.push(item)
            }
          })
          return arr.splice(0, 3)
        },
        endbook(value) {
          if (!value) return ''
          var arr = []
          value.forEach((item, index) => {
            if (item.serialize === '完本') {
              arr.push(item)
            }
          })
          return arr
        },
        like(value) {
          if (!value) return ''
          var arr = []
          value.forEach((item, index) => {
            if (index % 4 == 2) {
              arr.push(item)
            }
          })
          return arr.splice(0, 3)
        }
      }
   }
</script>