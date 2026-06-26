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
          思帝影像 S-D STUDIO，S-D 源自self-directed的縮寫，來自成人教育學的專有名詞『自我導向』。我們勇於挑戰與學習，
          在每個內容的開發上秉持成人教育學的觀念，在眾多案件中嘗試跨領域合作，持續學習、探索，並且內化，並結合影像的專業，
          為客戶量身打造適合的方案。
          <br>
          <span class="text-en">
            S-D, derived from the abbreviation of self-directed, originates
            from the specialized term in adult education known as 'self-directed learning.'
            We embrace challenges and learning, adhering to the principles of adult education
            in every content development endeavor.
            Through collaborative efforts across different cases (interdisciplinary),
            we learn, explore, and internalize,
            integrating our own expertise to tailor suitable solutions for clients.
          </span>
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
            <span class="text-en">
            We provide a one-stop service for film production, including scriptwriting,
            shooting, and editing.
            </span>
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
                <p>人物紀錄｜訪談影片</p>
              </div>
              <p class="category-en align-self-end">DOCUMENTARY</p>
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
            to="/postproduction/all" @click.native="scrollPoint"
            :style="{ backgroundImage:
            `url(${require('@/assets/images/banner/Color.png')})` }">
              <div class="category">
                <h3 class="mb-2">後期製作</h3>
                <p>調光｜剪輯｜2D動畫</p>
              </div>
              <p class="category-en align-self-end">POST-PRODUCTION</p>
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
          <br>
            <span class="text-en">
              The production period will base on the content of each case.
            </span>
        </p>
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
              <p class="text-center">Agreement and Script<span>confirmation</span></p>
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
