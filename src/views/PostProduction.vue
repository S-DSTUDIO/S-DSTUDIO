<template>
  <div class="post">
    <header class="bg-s-gray"
    :style="{ backgroundImage: `url(${require('@/assets/images/banner/postproduction.png')})` }">
      <h2 class="text-white">POST-PRODUCTION<span>後期製作</span></h2>
      <div class="black-opacity"></div>
    </header>
    <section class="project-wall">
      <ul class="d-flex justify-content-between project-menu">
        <li class="mb-3 mb-lg-0">
          <router-link to="/postproduction/all" :class="{ 'line-on':  nowNav == 'all'}"
          >全部｜All</router-link>
        </li>
        <li class="mb-3 mb-md-0">
          <router-link to="/postproduction/colorgrading"
          :class="{ 'line-on':  nowNav == 'colorgrading'}"
        >調光｜COLOR GRADING</router-link>
        </li>
        <li class="mb-3 mb-md-0">
          <router-link to="/postproduction/editing" :class="{ 'line-on':  nowNav == 'editing'}"
        >剪輯｜EDITING</router-link>
        </li>
        <li><router-link to="/postproduction/2dfx" :class="{ 'line-on':  nowNav == '2dfx'}"
        >2D動畫｜2D FX</router-link>
        </li>
      </ul>
      <div class="container-fluid wall-size">
        <div class="row">
          <ProjectCard :project="item" v-for="item in filterData" :key="item.id"
          class="mb-3 col-md-6">
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
const creds = require('../../credential.json');

export default {
  data() {
    return {
      data: [],
      nowNav: 'all',
    };
  },
  components: {
    ProjectCard,
  },
  watch: {
    $route() {
      this.nowNav = this.$route.params.id;
    },
  },
  computed: {
    filterData() {
      const vm = this;
      const target = vm.nowNav;
      const filterData = vm.data.filter((item) => {
        const factor = item.FilterTarget.split(',');
        let filterItem = '';
        if (target === 'all') {
          filterItem = item;
        } if (target === 'colorgrading' && factor.indexOf('Color') !== -1) {
          filterItem = item;
        } if (target === 'editing' && factor.indexOf('Editing') !== -1) {
          filterItem = item;
        } if (target === '2dfx' && factor.indexOf('2d') !== -1) {
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
        vm.data = newData.filter((item) => item.Page === 'postproduction');
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
      this.data = await newData.filter((item) => item.Page === 'postproduction');
      await this.$bus.$emit('loading', false);
    },
  },
  created() {
    const vm = this;
    // vm.getData();
    vm.getSheet();
    vm.$bus.$emit('changeNav', 'post');
    vm.nowNav = this.$route.params.id;
  },
};
</script>
