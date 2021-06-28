<template>
    <div class="singleProject" :class="{ 'bg-black': !isSeries, 'text-white': !isSeries }">
      <div v-if="isSeries" class="series">
        <section class="main">
          <div class="container">
            <div class="content mb-3">
              <p>{{ data.Category }}</p>
              <h2>{{ data.Name }}</h2>
              <p>{{ data.Company }}</p>
            </div>
            <div class="part" v-for="(item, i) in seriesData" :key="i">
              <h3 class="mb-3 mt-5">{{ item.title }}</h3>
              <div class="iframe-container">
                <iframe :src="item.URL"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowfullscreen="true" scrolling="no" ></iframe>
              </div>
              <div class="part-content">
                <div class="my-4">
                  <p :class="{ 'part-center': isCenter }"
                  v-for="(content, i) in item.Content" :key="i">{{ content }}</p>
                </div>
              </div>
              <div class="part-credit" v-if="isPart">
                <h3 @click="slideCredit(i)">CREDIT</h3>
                <ul class="credit-list">
                  <li v-for="(credit, i) in item.Credit" :key="i">
                    <p :class="{ 'empty-row': credit =='工作人員 Crew' }">{{ credit }}</p>
                  </li>
                </ul>
              </div>
              <div class="line-dark" v-if="i !== 2"></div>
            </div>
            <div class="behind" v-if="isBehind">
              <h3 class="text-center">BEHIND THE SCENE</h3>
              <div class="row">
                <div class="col-md-6 mb-3" v-for="(item, i) in picNum" :key="i+item">
                  <img
                  :src="require('@/assets/images/collection/'+ data.Page +'/'+ data.ID
                  +'/behindscenes/'+ item +'.png')">
                </div>
              </div>
            </div>
            <div class="credit d-flex flex-column justify-content-center align-items-center"
              v-if="!isPart">
              <h3>CREDIT</h3>
              <div class="credit-containter d-flex justify-content-center"
                v-for="(item, i) in creditProcess.main" :key="i+item">
                <div class="credit-title space-right width-half">
                  <p class="text-right">{{ item.mainTitle }}</p>
                </div>
                <div class="credit-content width-half">
                  <p v-for="(content, i) in item.mainContent" :key="i">{{ content }}</p>
                </div>
              </div>
              <div class="other-containter d-flex justify-content-center"
                v-for="(item, i) in creditProcess.other" :key="i">
                <div class="other-title space-right width-half">
                  <p class="text-right">{{ item.otherTitle }}</p>
                </div>
                <div class="other-content width-half">
                  <p v-for="(content, i) in item.otherContent" :key="i">{{ content }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div v-else class="single">
        <section class="main">
          <div class="container">
            <div class="content mb-3">
              <p>{{ data.Category }}</p>
              <h2>{{ data.Name }}</h2>
              <p>{{ data.Company }}</p>
            </div>
            <div class="iframe-container">
              <iframe :src="data.URL"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowfullscreen="true" scrolling="no" ></iframe>
            </div>
            <hr class="bg-white">
            <Lightbox :lightbox="data" :behind="isBehind" v-if="data.ID"></Lightbox>
            <div class="credit d-flex flex-column justify-content-center align-items-center">
              <h3>CREDIT</h3>
              <div class="credit-containter d-flex justify-content-center"
                v-for="(item, i) in creditProcess.main" :key="i+item">
                <div class="credit-title space-right width-half">
                  <p class="text-right">{{ item.mainTitle }}</p>
                </div>
                <div class="credit-content width-half">
                  <p v-for="(content, i) in item.mainContent" :key="i">{{ content }}</p>
                </div>
              </div>
              <div class="other-containter d-flex justify-content-center"
                v-for="(item, i) in creditProcess.other" :key="i">
                <div class="other-title space-right width-half">
                  <p class="text-right">{{ item.otherTitle }}</p>
                </div>
                <div class="other-content width-half">
                  <p v-for="(content, i) in item.otherContent" :key="i">{{ content }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
</template>

<script>
import Lightbox from '@/components/Lightbox.vue';
import $ from 'jquery';

export default {
  data() {
    return {
      data: {},
      Id: '',
      isSeries: false,
      isLoading: false,
      isBehind: false,
      isCenter: true,
      isPart: false,
      picNum: [1, 2, 3, 4, 5, 6],
    };
  },
  components: {
    Lightbox,
  },
  computed: {
    creditProcess() {
      const vm = this;
      let newCredit = {};
      if (vm.data.ID) {
        const main = [];
        const mainL = vm.data.CreditTitle.split(',');
        const mainR = vm.data.CreditContent.split(',').map((item) => item.split('/'));
        const otherEvent = [];
        const otherL = vm.data.OtherEvent.split(',');
        const otherR = vm.data.OtherContent.split('/').map((item) => item.split(','));
        mainL.forEach((item, index) => {
          const mainItem = {
            mainTitle: item,
            mainContent: mainR[index],
          };
          main.push(mainItem);
        });
        otherL.forEach((item, index) => {
          const otherItem = {
            otherTitle: item,
            otherContent: otherR[index],
          };
          otherEvent.push(otherItem);
        });
        newCredit = {
          main,
          other: otherEvent,
        };
      }
      return newCredit;
    },
    seriesData() {
      const vm = this;
      let seriesItem = {};
      const content = vm.data.SeriesContent.split('+').map((item) => item.split('/'));
      const allCredit = vm.data.OtherContent.split('/').map((item) => item.split(','));
      const seriesData = [];
      if (vm.isSeries) {
        const info = vm.data.URL.split('+');
        info.forEach((item, index) => {
          seriesItem = {
            title: item.split(',')[0],
            URL: item.split(',')[1],
            Content: content[index],
            Credit: allCredit[index],
          };
          seriesData.push(seriesItem);
        });
      }
      return seriesData;
    },
  },
  methods: {
    getData() {
      const vm = this;
      const api = 'https://spreadsheets.google.com/feeds/list/1GdpFefqAfFOFErmLCH53PsIot9cf9OVYy2jBT1ubidA/1/public/values?alt=json';
      vm.$bus.$emit('loading', true);
      vm.$http.get(api).then((res) => {
        const data = res.data.feed.entry;
        const singleData = data.filter((item) => item.gsx$id.$t === vm.Id);
        vm.data = {
          ID: singleData[0].gsx$id.$t,
          Name: singleData[0].gsx$name.$t,
          Category: singleData[0].gsx$category.$t,
          Company: singleData[0].gsx$company.$t,
          CreditTitle: singleData[0].gsx$credittitle.$t,
          CreditContent: singleData[0].gsx$creditcontent.$t,
          OtherEvent: singleData[0].gsx$otherevent.$t,
          OtherContent: singleData[0].gsx$othercontent.$t,
          URL: singleData[0].gsx$url.$t,
          Page: singleData[0].gsx$page.$t,
          Behind: singleData[0].gsx$behind.$t,
          Series: singleData[0].gsx$series.$t,
          SeriesContent: singleData[0].gsx$seriescontent.$t,
          FilterTarget: singleData[0].gsx$filtertarget.$t,
        };
        if (vm.data.Series === 'Y') {
          vm.isSeries = true;
          vm.isCenter = true;
          vm.isPart = false;
          // header and footer跟 contact頁面一樣顏色
          this.$bus.$emit('changeNav', 'series');
          if (vm.data.ID === '20190416') {
            vm.isCenter = false;
            vm.isPart = true;
          }
        }
        if (vm.data.Behind === 'Y') {
          vm.isBehind = true;
        } else if (vm.data.Behind === 'N') {
          vm.isBehind = false;
        }
        vm.$bus.$emit('loading', false);
      });
    },
    slideCredit(i) {
      // 先回到上級再選到子選單(爸爸→兒子)
      const item = $('.credit-list')[i];
      $('.credit-list').parent().find(item).slideToggle();
    },
  },
  created() {
    this.getData();
    // eslint-disable-next-line prefer-destructuring
    this.Id = this.$route.params.id.split('-')[1];
    this.$bus.$emit('changeNav', 'single');
  },
};
</script>
