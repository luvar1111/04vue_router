<template>
  <h2 class="mb-5 text-center">product</h2>
  <div class="container">
    <div class="row">
        <div class="col-sm-6 col-md-3" v-for="(item,i) in pdata" :key="i">
          <img :src="pdata[i].image" alt="" class="w-100">
          <div @click="$emit('pOpen',pdata[i].id)"><b>{{pdata[i].title}}</b></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'product',
  props:['pdata']

}
</script>

<style>

</style>