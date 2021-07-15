<template>
  <div class="project-card">
    <router-link :to="`/singleproject/${project.Page}-${project.ID}`"
    @click.native="toTop">
      <div class="card-size">
        <img :src="require('@/assets/images/project-card/'+ project.Page +'/'+ project.ID + '.png')"
        :alt="project.Name">
        <div class="content"
        :class="{
          'commercial': this.project.FilterTarget === 'Commercial' ||
          this.project.Page === 'postproduction',
          'documentary': this.project.FilterTarget == 'Documentary',
          'behind': this.project.FilterTarget == 'Behind'}">
          <div class="content-pos text-white">
            <div class="play mb-2">
              <img src="@/assets/images/play.png" alt="play">
            </div>
            <div class="title">{{ title }}</div>
            <div class="title" v-if="haveSecond">{{ secondTitle }}</div>
            <div class="depiction">{{ project.Category }}</div>
            <div class="depiction">{{ project.Company }}</div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['project'],
  data() {
    return {
      title: '',
      secondTitle: '',
      haveSecond: false,
    };
  },
  watch: {
    $route() {
      this.nameProcess();
    },
  },
  methods: {
    nameProcess() {
      const nameArray = this.project.Name.split('+');
      // eslint-disable-next-line prefer-destructuring
      this.title = nameArray[0];
      this.haveSecond = false;

      if (nameArray.length >= 2) {
        // eslint-disable-next-line prefer-destructuring
        this.secondTitle = nameArray[1];
        this.haveSecond = true;
      }
      console.log(this.project.URL);
    },
    toTop() {
      window.scroll(0, 0);
    },
  },
  created() {
    this.nameProcess();
  },
};
</script>

<style lang="scss" scoped>
.card-size{
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  &:hover{
    cursor: pointer;
  }
  img{
    display: block;
    width: 100%;
    height: auto;
  }
  .content{
    position: absolute;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    bottom: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    &:hover .content-pos{
      transform: translate(0,0);
      opacity: 1;
    }
  }
  .content-pos{
    position: absolute;
    bottom: 30px;
    left: 30px;
    padding-right: 24px;
    opacity: 0;
    transform: translate(0,500px);
    transition: all 0.5s;
  }
  .title{
    font-size: 25px;
    letter-spacing: 2.5px;
  }
  .depiction{
    font-size: 15px;
    letter-spacing: 1.5px;
  }
}
.play{
  display: block;
  width: 50px;
  height: 50px;
}
@media (max-width: 768px){
  .card-size{
    .title{
    font-size: 16px;
    letter-spacing: 2.5px;
    line-height: 1.5rem;
    }
    .depiction{
      display: none;
    }
  }
}

/* category-color */
.commercial:hover{
  background-color: rgba(#526171,0.5);
}
.documentary:hover{
  background-color: rgba(#AE6109,0.5);
}
.behind:hover{
  background-color: rgba(#5F7152,0.5);
}

</style>
