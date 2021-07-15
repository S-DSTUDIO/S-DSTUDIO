<template>
  <div class="index">
    <header>
      <Swiper></Swiper>
    </header>
    <section class="about bg-white d-flex flex-column align-items-center  px-2">
      <h2 class="text-center">ABOUT US <span class="breakline">關於我們</span></h2>
      <div class="container-fluid d-flex flex-column justify-content-center align-items-center
      spacing">
        <img src="@/assets/images/banner/About.png" alt="About us">
        <p class="about-content">
          S-D STUDIO 思帝影像事業企業社
          <br>於2013年5月成立至今，秉持著對創作的熱情與細膩的拍攝手法，
          致力於各式類型影像的發想與製作，善用鏡頭語言傳達內心底蘊的情感，
          在沒有設限的畫面空間裡，刻劃每一個故事中，獨具價值的真摯溫度。
          倘若此刻或未來，你剛好有個故事，那不妨就讓我們與你，一同來說這故事吧！
          <br>S-D STUDIO has been established to producing multiple
          types of film creation since May 2013.
          With a strong passion for creating and an exquisite filming technique,
          we present sentimental feelings and a unique sense of warmth for every
          story through the screen with no boundaries.
          If there were any stories to share, let us join you at any time.
        </p>
        <ul class="d-flex justify-content-between dot">
          <li class="bg-s-light-blue"></li>
          <li class="bg-s-light-blue"></li>
          <li class="bg-s-light-blue"></li>
          <li class="bg-s-light-blue"></li>
          <li class="bg-s-light-blue"></li>
        </ul>
      </div>
    </section>
    <section class="service pt-5 d-flex flex-column align-items-center  px-2 px-md-0">
      <div class="service-content text-center">
        <h2>OUR SERVICE <span class="breakline">服務項目</span></h2>
        <p class="mt-2">
          從腳本開發、拍攝、剪輯後製，<span class="breakline">提供一站式的影像製作服務。</span>
          <br>
          We provide a one-stop service for film production, including scriptwriting,
          shooting, and editing.
        </p>
      </div>
      <div class="container-fluid service-items spacing">
        <div class="row">
          <div class="col-xl-3 col-sm-6 d-flex justify-content-center
          mb-3 mb-xl-0 items-content">
            <router-link class="d-flex flex-column justify-content-between"
            to="/projects/commercial" @click.native="scrollPoint"
            :style="{ backgroundImage:
            `url(${require('@/assets/images/banner/commercialfilm.png')})` }">
              <div class="category" >
                <h3 class="mb-2">廣告</h3>
                <p>企業形象廣告｜產品廣告 <br />活動宣傳｜招募影片</p>
              </div>
              <p class="category-en align-self-end">COMMERCIAL FILM</p>
            </router-link>
          </div>
          <div class="col-xl-3 col-sm-6 d-flex justify-content-center
          mb-3 mb-sm-0 items-content">
            <router-link class="d-flex flex-column justify-content-between"
            to="/projects/documentary" @click.native="scrollPoint"
            :style="{ backgroundImage:
            `url(${require('@/assets/images/banner/Documentary.png')})` }">
              <div class="category">
                <h3 class="mb-2">紀錄片</h3>
                <p>人物紀錄｜實務紀錄｜訪談影片</p>
              </div>
              <p class="category-en align-self-end">Documentary</p>
            </router-link>
          </div>
          <div class="col-xl-3 col-sm-6 d-flex justify-content-center
          mb-3 mb-sm-0 items-content">
            <router-link class="d-flex flex-column justify-content-between"
            to="/projects/behind" @click.native="scrollPoint"
            :style="{ backgroundImage:
            `url(${require('@/assets/images/banner/Behind.png')})` }">
              <div class="category">
                <h3 class="mb-2">活動及花絮紀錄</h3>
                <p>活動花絮拍攝｜重要典禮紀錄</p>
              </div>
              <p class="category-en align-self-end">BEHIND THE SCENE</p>
            </router-link>
          </div>
          <div class="col-xl-3 col-sm-6 d-flex justify-content-center items-content">
            <router-link class="d-flex flex-column justify-content-between"
            to="/postproduction/colorist" @click.native="scrollPoint"
            :style="{ backgroundImage:
            `url(${require('@/assets/images/banner/Color.png')})` }">
              <div class="category">
                <h3 class="mb-2">調光調色</h3>
                <p>廣告｜劇情片｜紀錄片</p>
              </div>
              <p class="category-en align-self-end">Colorist</p>
            </router-link>
          </div>
        </div>
      </div>
      <router-link to="/projects/all" class="more-btn" @click.native="scrollPoint">
        瀏覽更多作品<br />View More
      </router-link>
      <ul class="d-flex justify-content-between dot">
        <li class="bg-s-light-blue"></li>
        <li class="bg-s-light-blue"></li>
        <li class="bg-s-light-blue"></li>
        <li class="bg-s-light-blue"></li>
        <li class="bg-s-light-blue"></li>
      </ul>
    </section>
    <section class="workflow pt-5 d-flex flex-column align-items-center">
      <div class="workflow-content text-center mb-3 px-2 px-md-0">
        <h2>WORKFLOW <span class="breakline">服務流程</span></h2>
        <p class="mt-2">從腳本討論至影片完成，<span class="breakline">製作期依照案件內容而定。</span>
          <br>The production period will base on the content of each case.</p>
      </div>
      <div class="work-item py-3 bg-color px-2 px-md-0">
        <div class="container-fluid work-space justify-content-center">
          <div class="row align-items-start">
            <div class="col-xl-2 col-md-4 mb-4 mb-xl-0 d-flex flex-column
            justify-content-center align-items-center">
              <h3>需求討論</h3>
              <img src="@/assets/images/workflowicon/big1.png" alt="需求討論">
              <p>Discuss for demands</p>
            </div>
            <div class="col-xl-2 col-md-4 mb-4 mb-xl-0 d-flex flex-column
            justify-content-center align-items-center">
              <h3>初步提案與報價</h3>
              <img src="@/assets/images/workflowicon/big2.png" alt="初步提案與報價">
              <p>Proposal and Quotation</p>
            </div>
            <div class="col-xl-2 col-md-4 mb-4 mb-xl-0 d-flex flex-column
            justify-content-center align-items-center">
              <h3>簽約與腳本確認</h3>
              <img src="@/assets/images/workflowicon/big3.png" alt="腳本確認與簽約">
              <p class="text-center">Agreement and Script<br>confirmation</p>
            </div>
            <div class="col-xl-2 col-md-4 mb-4 mb-md-0 d-flex flex-column
            justify-content-center align-items-center">
              <h3>前置與拍攝</h3>
              <img src="@/assets/images/workflowicon/big4.png" alt="前置與拍攝">
              <p>Preparation and Shooting</p>
            </div>
            <div class="col-xl-2 col-md-4 mb-4 mb-md-0 d-flex flex-column
            justify-content-center align-items-center">
              <h3>後期製作</h3>
              <img src="@/assets/images/workflowicon/big5.png" alt="後期製作">
              <p>Post-production</p>
            </div>
            <div class="col-xl-2 col-md-4 d-flex flex-column
            justify-content-center align-items-center">
              <h3>完成交片</h3>
              <img src="@/assets/images/workflowicon/big6.png" alt="完成交片">
              <p>Production complete</p>
            </div>
          </div>
        </div>
      </div>
      <router-link to="/contact" class="more-btn" @click.native="scrollPoint">
        進一步了解<br />Learn More
      </router-link>
    </section>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper.vue';

export default {
  methods: {
    scrollPoint() {
      window.scroll(0, 0);
    },
  },
  components: {
    Swiper,
  },
  created() {
    const vm = this;
    vm.scrollPoint();
    vm.$bus.$emit('changeNav', 'home');
  },
};
</script>
