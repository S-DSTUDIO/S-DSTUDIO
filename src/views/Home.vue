<template>
  <div class="home">
    <Loading :isLoading="isLoading"></Loading>
    <nav class="navbar navbar-expand-sm justify-content-between">
      <h1 class="mb-0 navbar-brand">
        <router-link :class="{ 'text-black': nowNav == 'contact' || nowNav =='series' }"
        to="/">S-D STUDIO</router-link>
      </h1>
      <button class="btn d-block d-md-none px-0" @click="isNavOpen = !isNavOpen" type="button">
        <i class="fas fa-bars text-white"
          :class="{ 'text-black': nowNav == 'contact' || nowNav =='series' }"></i>
      </button>
        <div id="mainNavbar" class="flex-row-reverse" :class="{ 'active': isNavOpen }">
          <ul class="d-sm-flex main-item">
            <li class="d-block d-md-none">
              <a class="text-white text-right" @click="isNavOpen = !isNavOpen">&times;</a>
            </li>
            <li>
              <router-link to="/" class="nav-item line-style"
                :class="{
                  'black': nowNav == 'contact' || nowNav =='series',
                  'line-on': nowNav == 'home',}"
                @click.native="isNavOpen = !isNavOpen">
                HOME
              </router-link>
            </li>
            <li>
              <router-link to="/projects/all" class="nav-item line-style"
                :class="{
                  'black': nowNav == 'contact' || nowNav =='series',
                  'line-on': nowNav == 'projects',}"
                @click.native="isNavOpen = !isNavOpen">
                PROJECTS
              </router-link>
            </li>
            <li>
              <router-link to="/postproduction/all" class="nav-item line-style"
                :class="{
                  'black': nowNav == 'contact' || nowNav =='series',
                  'line-on': nowNav == 'post',}"
                @click.native="isNavOpen = !isNavOpen">
                POST-PRODUCTION
              </router-link>
            </li>
            <li>
              <router-link to="/film/all" class="nav-item line-style"
                :class="{
                  'black': nowNav == 'contact' || nowNav =='series',
                  'line-on': nowNav == 'film',}"
                @click.native="isNavOpen = !isNavOpen">
                FILM
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="nav-item line-style"
                :class="{
                  'black': nowNav == 'contact' || nowNav =='series',
                  'line-on': nowNav == 'contact',}"
                @click.native="isNavOpen = !isNavOpen">
                CONTACT
              </router-link>
            </li>
          </ul>
        </div>
    </nav>
    <router-view></router-view>
    <footer class="bg-black px-4 px-md-0 d-flex d-lg-block justify-content-md-center"
    :class="{ 'white-style': nowNav == 'single' }">
      <ul class="d-flex justify-content-center align-items-lg-center text-white">
        <li class="d-flex align-items-center basic-info spacing">
          <img v-if="isWhite" src="@/assets/images/logo/s-d-logo_white.png" alt="S-D STUDIO Logo"/>
          <img v-else src="@/assets/images/logo/s-d-logo_black.png" alt="S-D STUDIO Logo"/>
          <ul>
            <li>思帝影像事業企業社</li>
            <li>S-D STUDIO</li>
            <li class="social">
              <a
                href="https://www.facebook.com/selfdirectedstudio"
                target="_blank"
                ><i class="fab fa-facebook-f"></i></a>
              <a
                href="https://www.youtube.com/channel/UCGawabA6bnVLKxzzDdd5r0Q"
                target="_blank"
                ><i class="fab fa-youtube"></i></a>
              <a
                href="https://www.instagram.com/selfdirectedstudio/"
                target="_blank"
                ><i class="fab fa-instagram"></i></a>
            </li>
          </ul>
        </li>
        <li class="address spacing">
          <p>
            710 台南市永康區富強路一段98巷38弄3號 <br />1F., No. 3, Aly. 38, Ln.
            98, <br />Sec. 1, Fuqiang Rd., Yongkang Dist., Taiwan
          </p>
        </li>
        <li class="email spacing">
          <p>sdstudio@sdstudiotw.com</p>
        </li>
      </ul>
    </footer>
    <!-- go to top -->
    <div @click="scrollToTop" class="to-top" :class="{ active: toTop == true }">
      <button class="btn-style"><i class="fas fa-arrow-up"></i></button>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue';

export default {
  data() {
    return {
      nowNav: 'home',
      toTop: false,
      isWhite: true,
      isLoading: false,
      isNavOpen: false,
    };
  },
  components: {
    Loading,
  },
  methods: {
    scrollBtn() {
      const scrollPos = window.scrollY;
      if (scrollPos > 500) {
        this.toTop = true;
      } else if (scrollPos < 500) {
        this.toTop = false;
      }
    },
    scrollToTop() {
      // eslint-disable-next-line no-undef
      $('html,body').animate(
        { scrollTop: 0 }, 500,
      );
    },
  },
  created() {
    const vm = this;
    vm.$bus.$on('changeNav', (nav) => {
      vm.nowNav = nav;
      vm.isWhite = true;
      if (nav === 'single') {
        vm.isWhite = false;
      }
    });
    vm.$bus.$on('loading', (value) => {
      vm.isLoading = value;
    });
  },
  mounted() {
    window.addEventListener('scroll', this.scrollBtn);
  },
};
</script>
