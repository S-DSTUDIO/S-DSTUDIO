<template>
  <swiper class="swiper" ref="fadeSwiper" :options="swiperOptions">
    <swiper-slide class="slide-1"
    :style="{backgroundImage: `url(${require('@/assets/images/banner/swiper/1.png')})`}">
      <div class="main-content text-center">
        <p class="mb-4 text-white">國立中正大學成人及繼續教育學系
          <br />系列廣告</p>
        <router-link to="/singleproject/projects-20200830"
        class="btn btn-outline-white" @click.native="toTop">看影片 Watch Video</router-link>
      </div>
    </swiper-slide>
    <swiper-slide class="slide-2"
    :style="{backgroundImage: `url(${require('@/assets/images/banner/swiper/2.png')})`}">
      <div class="main-content text-center">
        <p class="mb-4 text-white">運動科技邁向國際
          <br />東奧前看成大！</p>
        <router-link to="/singleproject/projects-20210502"
        class="btn btn-outline-white" @click.native="toTop">看影片 Watch Video</router-link>
      </div>
    </swiper-slide>
    <swiper-slide class="slide-3"
    :style="{backgroundImage: `url(${require('@/assets/images/banner/swiper/3.png')})`}">
      <div class="main-content text-center">
        <p class="mb-4 text-white">Perfection comes from MPI Productionp</p>
        <router-link to="/singleproject/projects-20210325"
        class="btn btn-outline-white" @click.native="toTop">看影片 Watch Video</router-link>
      </div>
    </swiper-slide>
    <swiper-slide class="slide-4"
    :style="{backgroundImage: `url(${require('@/assets/images/banner/swiper/4.png')})`}">
      <div class="main-content text-center">
        <p class="mb-4 text-white">台灣中油足球隊
          <br />正面突破</p>
        <router-link to="/singleproject/projects-20210319"
        class="btn btn-outline-white" @click.native="toTop">看影片 Watch Video</router-link>
      </div>
    </swiper-slide>
    <swiper-slide class="slide-5"
    :style="{backgroundImage: `url(${require('@/assets/images/banner/swiper/5.png')})`}">
      <div class="main-content text-center">
        <p class="mb-4 text-white">109年「臺南覓」老店計畫
          <br />《添心·天心軒》</p>
        <router-link to="/singleproject/projects-20201028"
        class="btn btn-outline-white" @click.native="toTop">看影片 Watch Video</router-link>
      </div>
    </swiper-slide>
    <div class="swiper-pagination swiper-pagination-white d-flex d-md-block justify-content-center"
    slot="pagination"></div>
    <div class="btn-hover">
      <div class="swiper-button-prev swiper-button-white ml-4" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white mr-4" slot="button-next"></div>
    </div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
import {
  Swiper as SwiperClass,
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from 'swiper/core';

SwiperClass.use([Navigation, Pagination, Autoplay, EffectFade]);
export default {
  components: {
    Swiper, SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        autoplay: {
          delay: 3000,
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.fadeSwiper.$swiper;
    },
  },
  methods: {
    toTop() {
      window.scroll(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  height: 100%;
  .swiper-slide {
    position: relative;
    height: 100%;
    background-position: center;
    background-size: cover;
    &::after {
      content: "";
      height: 100%;
      width: 100%;
      background-color: #000;
      position: absolute;
      z-index: 1;
      opacity: 0.3;
    }
  }
  .main-content {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    p {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 30px;
      letter-spacing: 6px;
      line-height: 45px;
    }
    a {
      font-family: "GenJyuuGothic-Bold";
      letter-spacing: 1.5px;
    }
  }
  .swiper-pagination{
    bottom: 70px;
  }
}
.btn-hover{
  opacity: 0.2;
  transition: all 0.2s;
  &:hover{
    opacity: 1;
  }
}
@media(max-width: 540px){
  .btn-hover{
    display: none;
  }
  .swiper{
    .main-content{
      padding: 0 30px;
    }
  }
}
</style>
