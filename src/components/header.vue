<template>
  <h1>logo</h1>
  <nav>
      <ul class="gnb clearfix">
          <li v-for="(item,i) in menu" :key="i">
              <router-link :to="menu[i].link">{{menu[i].title}}</router-link>
          </li>
      </ul>
  </nav>
</template>

<script>
export default {
    name:'header',
    data(){
        return{
            menu:[
                {title:'home',link:'/'},
                {title:'company',link:'/company'},
                {title:'product',link:'/product'}
            ]
        }
    }

}
</script>

<style>

</style>