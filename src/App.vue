<template>
 <!-- <div v-if="pView==true">
   <div class="pPop text-center">
     <img :src="pdata[pNum].image" class="w-100">
     <p>{{pdata[pNum].title}}</p>
     <button class="btn btn-primary" @click="pView=false">닫기</button>
   </div>
 </div> -->
 <transition name="fade" style="position:relative;z-index:9999">
   <pPop :pdata="pdata" :pNum="pNum" :pView="pView" @pClose="pView=false"/>
 </transition>
 <top-header/>
 <router-view :pdata="pdata" @pOpen="pView=true;pNum=$event"  :bdata="bdata"></router-view>
 
 <bottom-footer/>
</template>

<script>
import header from './components/header.vue'
import pPop from './components/pPop.vue'
import footer from './components/footer.vue'
import pdata from './pdata.js'
import bdata from './bdata.js'
export default {
  name:'App',
  components:{
    'top-header':header,
    pPop:pPop,
    'bottom-footer':footer,
  },
  data(){
    return{
     pdata:pdata,
     bdata:bdata,
     pView:false,
     pNum:0,


    }
  }

}
</script>

<style>
  .pPop {position:fixed; z-index:10; background: #fff; width: 60%; top: 50%; left: 50%; transform: translate(-50%, -50%);
         box-shadow:0 0 10px rgba(0,0,0,0.5); border-radius:10px; padding: 20px;}

  .fade-enter-from{opacity:0}
  .fade-enter-active{transition:.5s}
  .fade-enter-to{opacity:1}

  .fade-leave-from{opacity:1}
  .fade-leave-active{transition:.5s}
  .fade-leave-to{opacity:0}

  @media screen and (max-width:900px){
    .pPop {width: 400px;}
    .pPop img {width: 300px;}
  }
</style>