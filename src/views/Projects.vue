<template>
  <div class="project">
    <header class="bg-s-gray">
      <h2 class="text-white">作 品 <span>PROJECTS</span></h2>
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
        >紀錄片｜DOCUMENTARY
          </router-link>
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

export default {
  data() {
    return {
      data: [],
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
      const api = 'https://sheet.best/api/sheets/74ea92d8-e6fd-48d9-a8e2-0f8cce12fc14';
      vm.$http.get(api).then((res) => {
        vm.data = res.data.filter((item) => item.Page === 'Projects').reverse();
      });
    },
  },
  created() {
    const vm = this;
    vm.getData();
    vm.$bus.$emit('changeNav', 'projects');
    vm.nowNav = this.$route.params.id;
  },
};
</script>
