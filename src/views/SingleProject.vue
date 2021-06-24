<template>
    <div class="singleProject bg-black text-white">
      <div v-if="isSeries" class="series"></div>
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
            <Lightbox :lightbox="data" v-if="data.ID"></Lightbox>
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

export default {
  data() {
    return {
      data: {},
      Id: '',
      isSeries: false,
      isLoading: false,
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
          FilterTarget: singleData[0].gsx$filtertarget.$t,
        };
        if (vm.data.Series === 'Y') {
          vm.isSeries = true;
        }
        vm.$bus.$emit('loading', false);
      });
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
