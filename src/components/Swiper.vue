<template>
  <swiper class="swiper" ref="fadeSwiper" :options="swiperOptions">
    <swiper-slide class="slide-1"
    :style="{backgroundImage: `url(${require('@/assets/images/banner/swiper/1.png')})`}">
      <router-link to="/singleproject/projects-20231016"
      class="btn btn-outline-white btn-pos" @click.native="toTop">看影片 Watch Video</router-link>
      <div class="main-content text-center">
        <p class="text-white">奇美綠能園區 生物多樣性
          <br />太陽的禮物</p>
      </div>
    </swiper-slide>
    <swiper-slide class="slide-2"
    :style="{backgroundImage: `url(${require('@/assets/images/banner/swiper/2.png')})`}">
      <router-link to="/singleproject/film-20220131"
      class="btn btn-outline-white btn-pos" @click.native="toTop">看影片 Watch Video</router-link>
      <div class="main-content text-center">
        <p class="text-white">小明的學習單</p>
      </div>
    </swiper-slide>
    <swiper-slide class="slide-3"
    :style="{backgroundImage: `url(${require('@/assets/images/banner/swiper/3.png')})`}">
      <router-link to="/singleproject/projects-20210325"
      class="btn btn-outline-white btn-pos" @click.native="toTop">看影片 Watch Video</router-link>
      <div class="main-content text-center">
        <p class="text-white">Perfection comes from
          <span class="breakline">MPI Production</span></p>
      </div>
    </swiper-slide>
    <swiper-slide class="slide-4"
    :style="{backgroundImage: `url(${require('@/assets/images/banner/swiper/4.png')})`}">
      <router-link to="/singleproject/projects-20210319"
      class="btn btn-outline-white btn-pos" @click.native="toTop">看影片 Watch Video</router-link>
      <div class="main-content text-center">
        <p class="text-white">台灣中油足球隊
          <br />正面突破</p>
      </div>
    </swiper-slide>
    <swiper-slide class="slide-5"
    :style="{backgroundImage: `url(${require('@/assets/images/banner/swiper/5.png')})`}">
      <router-link to="/singleproject/projects-20220823"
      class="btn btn-outline-white btn-pos" @click.native="toTop">看影片 Watch Video</router-link>
      <div class="main-content text-center">
        <p class="text-white">戡亂時期下的軍民合作思潮
          <br />家寶醫學研究室</p>
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
      isHover: false,
      swiperOptions: {
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
        autoplay: {
          delay: 5000,
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
  position: relative !important;
  .swiper-slide {
    padding-bottom: 56%; // 等比例縮放高度
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
      font-family: "GenJyuuGothic-regular", Arial, Helvetica, sans-serif;
      font-size: 30px;
      letter-spacing: 6px;
      line-height: 45px;
      animation: fadeIn 2s linear;
    }
  }
  .swiper-pagination{
    bottom: 6%;
  }
}
.btn-pos{
  font-family: "GenJyuuGothic-Bold";
  letter-spacing: 1.5px;
  position: absolute;
  left: 50%;
  bottom: 12%;
  transform: translate(-50%, 0);
  z-index: 999;
}
.btn-hover{
  opacity: 0.2;
  transition: all 0.2s;
  &:hover{
    opacity: 1;
  }
}
@media(min-width: 1920px){
  .swiper{
    .swiper-slide {
      padding-bottom: 1080px;
    }
  }
}
@media(max-width: 769px){
  .breakline{
    display: block;
  }
  .swiper{
    .main-content{
      p{
        opacity: 1;
        transform: translate(0, 0);
      }
    }
  }
}
@media(max-width: 540px){
  .btn-hover{
    display: none;
  }
  .swiper{
    .swiper-slide {
      padding-bottom: 100%;
    }
    .main-content{
      padding: 0 30px;
      p{
        font-size: 20px;
        font-weight: 500;
        opacity: 1;
        transform: translate(0, 0);
        .breakline{
          display: inline-block;
        }
      }
    }
    .btn-pos{
      white-space: nowrap;
    }
  }
}

@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>
