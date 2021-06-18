<template>
  <div v-if="pView==true">
   <div class="pPop text-center">
     <img :src="pdata[pNum].image" class="w-80">
     <p>{{pdata[pNum].title}}</p>
     <p>{{pdata[pNum].content}}</p>
     <p>{{pdata[pNum].price}}</p>
     <button class="btn btn-primary" @click="$emit('pClose')">닫기</button>
   </div>
 </div>
</template>

<script>
export default {
    name:'pPop',
    props:[
        'pdata',
        'pNum',
        'pView'
    ]

}
</script>

<style>

</style>