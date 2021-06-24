<template>
  <h2 class="mb-5 text-center">board1</h2>
  <div class="container">
    <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">제목</th>
        <th scope="col">날짜</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,i) in bdata" :key="i">
        <th scope="row">{{bdata[i].number}}</th>
        <td>{{bdata[i].title}}</td>
        <td>{{bdata[i].date}}</td>
      </tr>
    </tbody>
    </table>
  </div>


</template>

<script>
export default {
  name:'board',
  props:['bdata']

}
</script>

<style>

</style>