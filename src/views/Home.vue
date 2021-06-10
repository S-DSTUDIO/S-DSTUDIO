<template>
  <div class="home">
    <nav class="navbar navbar-expand-sm">
      <h1 class="mb-0 navbar-brand">
        <router-link to="/">S-D STUDIO</router-link>
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mainNavbar"
      >
        <i class="fas fa-bars text-white"></i>
      </button>
      <div id="mainNavbar" class="collapse navbar-collapse flex-row-reverse">
        <ul class="d-sm-flex main-item">
          <li>
            <router-link to="/" class="nav-item line-style">HOME</router-link>
          </li>
          <li>
            <router-link to="/projects" class="nav-item line-style"
              >PROJECTS</router-link
            >
          </li>
          <li>
            <router-link to="/postproduction" class="nav-item line-style">
              POST-PRODUCTION
            </router-link>
          </li>
          <li>
            <router-link to="/contact" class="nav-item line-style"
              >CONTACT</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
    <footer class="bg-black">
      <ul class="d-flex justify-content-center align-items-center text-white">
        <li class="d-flex align-items-center basic-info spacing">
          <img
            src="@/assets/images/logo/s-d-logo_white.png"
            alt="S-D STUDIO Logo"
          />
          <ul>
            <li>思帝影像事業企業社</li>
            <li>S-D STUDIO</li>
            <li class="social">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
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
</script>
