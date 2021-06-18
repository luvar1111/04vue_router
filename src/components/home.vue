<template>
  <swiper :pagination="true" class="mySwiper mb-5">
  <swiper-slide><img src="images/banner1.jpg"></swiper-slide>
  <swiper-slide><img src="images/banner2.jpg"></swiper-slide>
  <swiper-slide><img src="images/banner3.jpg"></swiper-slide>
  <swiper-slide><img src="images/banner4.jpg"></swiper-slide>
  <swiper-slide><img src="images/banner5.jpg"></swiper-slide>
  </swiper>

  <div class="best">
    <div class="container">
      <h3>best product</h3>
      <div class="row mb-5">
        <div class="col-sm-6 col-md-3 text-center" v-for="(item,i) in 4" :key="i">
          <img :src="pdata[i].image" alt="" class="w-100">
          <div @click="$emit('pOpen',pdata[i].id)"><b>{{pdata[i].title}}</b></div>
        </div>
      </div>
      <div class="btn btn-primary d-block m-auto">
        <router-link to="/product">more</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/swiper.scss';
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

export default {
  props:['pdata'],
  components: {
    Swiper,
    SwiperSlide,
  },

}
</script>

<style>
  .swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.best h3 {text-align:center;}
.best h3:after {display: block; content:""; width: 30px; height: 1px; background: #333; margin:20px auto;}

</style>