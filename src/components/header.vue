<template>
  <h1 class="pt-5 mb-5">ZOUND</h1>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav justify-content-md-center w-100">
      <li v-for="(item,i) in menu" :key="i" class="nav-item active text-center" style="flex:1" @click="close">
        <router-link :to="menu[i].link" class="nav-link">{{menu[i].title}}</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
    name:'header',
    data(){
        return{
            menu:[
                {title:'home',link:'/'},
                {title:'product',link:'/product'},
                {title:'board',link:'/board'}
            ]
        }
    },
    methods:{
      close:function(){
        document.getElementById("navbarNav").classList.remove("show")
      }
    }

}
</script>

<style>

</style>