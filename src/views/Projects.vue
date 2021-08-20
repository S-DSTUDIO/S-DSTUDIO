<template>
  <div class="project">
    <header class="bg-s-gray"
    :style="{ backgroundImage: `url(${require('@/assets/images/banner/projects.png')})` }">
      <h2 class="text-white">PROJECTS<span>作 品</span></h2>
    </header>
    <section class="project-wall">
      <ul class="d-flex justify-content-between project-menu">
        <li class="mb-3 mb-lg-0">
          <router-link to="/projects/all" :class="{ 'line-on':  nowNav == 'all'}"
          >全部｜All</router-link>
        </li>
        <li class="mb-3 mb-md-0">
          <router-link to="/projects/commercial" :class="{ 'line-on':  nowNav == 'commercial'}"
        >廣告｜COMMERCIAL FILM</router-link>
        </li>
        <li class="mb-3 mb-md-0">
          <router-link to="/projects/documentary" :class="{ 'line-on':  nowNav == 'documentary'}"
        >紀錄片｜DOCUMENTARY</router-link>
        </li>
        <li><router-link to="/projects/behind" :class="{ 'line-on':  nowNav == 'behind'}"
        >活動及花絮紀錄｜BEHIND THE SCENE</router-link>
        </li>
      </ul>
      <div class="container-fluid wall-size">
        <div class="row">
          <ProjectCard :project="item" v-for="item in filterData" :key="item.id" class="mb-3"
          :class="{ 'col-md-6' : item.Series == 'N', 'col-md-12': item.Series == 'Y' }">
          </ProjectCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';

const { GoogleSpreadsheet } = require('google-spreadsheet');
// eslint-disable-next-line import/no-unresolved
const creds = require('../../credential.json'); // 憑證匯入

export default {
  data() {
    return {
      data: [],
      isLoading: false,
      nowNav: 'all',
    };
  },
  watch: {
    $route() {
      this.nowNav = this.$route.params.id;
    },
  },
  components: {
    ProjectCard,
  },
  computed: {
    filterData() {
      const vm = this;
      const target = vm.nowNav;
      const filterData = vm.data.filter((item) => {
        let filterItem = '';
        if (target === 'all') {
          filterItem = item;
        } if (target === 'commercial' && item.FilterTarget === 'Commercial') {
          filterItem = item;
        } if (target === 'documentary' && item.FilterTarget === 'Documentary') {
          filterItem = item;
        } if (target === 'behind' && item.FilterTarget === 'Behind') {
          filterItem = item;
        }
        return filterItem;
      });
      return filterData;
    },
  },
  methods: {
    getData() {
      const vm = this;
      const api = 'https://spreadsheets.google.com/feeds/list/1GdpFefqAfFOFErmLCH53PsIot9cf9OVYy2jBT1ubidA/1/public/values?alt=json';
      vm.$bus.$emit('loading', true);
      vm.$http.get(api).then((res) => {
        const newData = [];
        const data = res.data.feed.entry;
        data.forEach((item) => {
          const single = {
            ID: item.gsx$id.$t,
            Name: item.gsx$name.$t,
            Category: item.gsx$category.$t,
            Company: item.gsx$company.$t,
            CreditTitle: item.gsx$credittitle.$t,
            CreditContent: item.gsx$creditcontent.$t,
            OtherEvent: item.gsx$otherevent.$t,
            OtherContent: item.gsx$othercontent.$t,
            URL: item.gsx$url.$t,
            Page: item.gsx$page.$t,
            Behind: item.gsx$behind.$t,
            Series: item.gsx$series.$t,
            FilterTarget: item.gsx$filtertarget.$t,
          };
          newData.push(single);
        });
        vm.data = newData.filter((item) => item.Page === 'projects').reverse();
        vm.$bus.$emit('loading', false);
      });
    },
    async getSheet() {
      const newData = [];
      const doc = new GoogleSpreadsheet('1GdpFefqAfFOFErmLCH53PsIot9cf9OVYy2jBT1ubidA');
      this.$bus.$emit('loading', true);
      await doc.useServiceAccountAuth(creds);
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];
      const rows = await sheet.getRows();
      await rows.forEach((item) => {
        const newRow = {
          ID: item.ID,
          Name: item.Name,
          Category: item.Category,
          Company: item.Company,
          CreditTitle: item.CreditTitle,
          CreditContent: item.CreditContent,
          OtherEvent: item.OtherEvent,
          OtherContent: item.OtherContent,
          URL: item.URL,
          Page: item.Page,
          Behind: item.Behind,
          Series: item.Series,
          FilterTarget: item.FilterTarget,
        };
        newData.push(newRow);
      });
      this.data = await newData.filter((item) => item.Page === 'projects').reverse();
      await this.$bus.$emit('loading', false);
    },
  },
  created() {
    const vm = this;
    // vm.getData();
    vm.getSheet();
    vm.$bus.$emit('changeNav', 'projects');
    vm.nowNav = this.$route.params.id;
  },
};
</script>
