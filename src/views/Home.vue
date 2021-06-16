<template>
  <div class="home">
    <nav class="navbar navbar-expand-sm">
      <h1 class="mb-0 navbar-brand">
        <router-link :class="{ 'text-black': nowNav == 'contact' }" to="/">S-D STUDIO</router-link>
      </h1>
      <button class="navbar-toggler" type="button"
        data-toggle="collapse"
        data-target="#mainNavbar">
        <i class="fas fa-bars text-white"
        :class="{ 'text-black': nowNav == 'contact' }"></i>
      </button>
      <div id="mainNavbar" class="collapse navbar-collapse flex-row-reverse">
        <ul class="d-sm-flex main-item">
          <li>
            <router-link to="/" class="nav-item line-style"
            :class="{ 'text-black': nowNav == 'contact', 'black': nowNav == 'contact' }">
              HOME
            </router-link>
          </li>
          <li>
            <router-link to="/projects" class="nav-item line-style"
            :class="{ 'text-black': nowNav == 'contact', 'black': nowNav == 'contact' }">
              PROJECTS
            </router-link>
          </li>
          <li>
            <router-link to="/postproduction" class="nav-item line-style"
            :class="{ 'text-black': nowNav == 'contact', 'black': nowNav == 'contact' }">
              POST-PRODUCTION
            </router-link>
          </li>
          <li>
            <router-link to="/contact" class="nav-item line-style"
            :class="{ 'text-black': nowNav == 'contact', 'black': nowNav == 'contact' }">
              CONTACT
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
    <footer class="bg-black px-3 px-md-0">
      <ul class="d-flex justify-content-center align-items-center text-white">
        <li class="d-flex align-items-center basic-info spacing">
          <img
            src="@/assets/images/logo/s-d-logo_white.png"
            alt="S-D STUDIO Logo"/>
          <ul>
            <li>思帝影像事業企業社</li>
            <li>S-D STUDIO</li>
            <li class="social">
              <a href="https://www.facebook.com/selfdirectedstudio" target="_blank"><i class="fab fa-facebook-f"></i></a>
              <a href="https://www.youtube.com/channel/UCGawabA6bnVLKxzzDdd5r0Q" target="_blank"><i class="fab fa-youtube"></i></a>
              <a href="https://www.instagram.com/selfdirectedstudio/" target="_blank"><i class="fab fa-instagram"></i></a>
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
          <p>selfdirectedstudio@gmail.com</p>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowNav: 'home',
    };
  },
  created() {
    const vm = this;
    vm.$bus.$on('changeNav', (nav) => {
      vm.nowNav = nav;
    });
  },
};
</script>
