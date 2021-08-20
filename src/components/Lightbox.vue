<template>
    <div class="filmclip">
      <img v-for="(item, i) in picNum" :key="i+item"
          :src="require('@/assets/images/collection/'+ lightbox.Page +'/'+ lightbox.ID
          +'/small/'+ item +'.png')"
          @click="isOpen = true;showSlide(i)">
      <div class="behind" v-if="behind">
        <h3 class="text-center">BEHIND THE SCENE</h3>
        <div class="row">
          <div class="col-md-6 mb-3" v-for="(item, i) in picNum" :key="i+item">
            <img
          :src="require('@/assets/images/collection/'+ lightbox.Page +'/'+ lightbox.ID
          +'/behindscenes/'+ item +'.png')">
          </div>
        </div>
      </div>
      <!-- lightbox-modal -->
      <div id="lightbox-modal" class="lightbox-modal ipad-none"
      :class="{ 'active': isOpen == true }">
        <span class="close cursor" @click="isOpen = false">&times;</span>
        <div class="modal-pos">
          <div class="modal-content">
            <!-- main big pic-->
            <div class="slide-group">
              <div class="container-size">
                <!-- 假容器 -->
                <img :src="require('@/assets/images/collection/'+ lightbox.Page +'/'+ lightbox.ID
                +'/big/1.png')" style="width:100%">
              </div>
              <div class="slides" v-for="(item, i) in picNum" :key="i">
                <img :src="require('@/assets/images/collection/'+ lightbox.Page +'/'+ lightbox.ID
                +'/big/'+ item +'.png')" style="width:100%">
              </div>
            </div>
            <!-- Next/previous controls -->
            <a class="prev" @click="showSlide(slideIndex -= 1)"
            :class="{ 'active':  slideIndex > 0 }">&#10094;</a>
            <a class="next" @click="showSlide(slideIndex += 1)"
            :class="{ 'active':  slideIndex < 5 }">&#10095;</a>
            <!-- Thumbnail image controls -->
            <div class="row">
              <div class="column" v-for="(item, i) in picNum" :key="i"
              @click="showSlide(i)">
                <img :src="require('@/assets/images/collection/'+ lightbox.Page +'/'+ lightbox.ID
                +'/small/'+ item +'.png')" class="demo" :class="{ 'active': slideIndex == i }">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['lightbox', 'behind'],
  data() {
    return {
      picNum: [1, 2, 3, 4, 5, 6],
      isOpen: false,
      slideIndex: 0,
    };
  },
  methods: {
    showSlide(index = 0) {
      // 給slide-group的translate要移動到的指定圖片位置(就可以有滑動效果惹)
      const group = document.querySelector('.slide-group');
      if (index === 0) {
        group.style.transform = 'translate(0,0)';
      } else if (index === 1) {
        group.style.transform = 'translate(-1200px,0)';
      } else if (index === 2) {
        group.style.transform = 'translate(-2400px,0)';
      } else if (index === 3) {
        group.style.transform = 'translate(-3600px,0)';
      } else if (index === 4) {
        group.style.transform = 'translate(-4800px,0)';
      } else if (index === 5) {
        group.style.transform = 'translate(-6000px,0)';
      }
      // 最後在把更新後的圖片位置回丟給data裡的slideIndex做更新(當下圖片位置)
      this.slideIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.filmclip{
  padding-bottom: 100px;
}
.filmclip>img{
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 16px;
  &:hover{
    cursor: pointer;
    box-shadow: 0px 0px 1px 1px #FFBB00;
  }
}

h3{
    margin: 100px 0 40px;

}
img{
  display: block;
}

.behind{
  img{
    width: 100%;
    height: auto;
  }
}
/* The Modal (background) */
.lightbox-modal{
  display: none;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #000;
  animation: open 0.3s ease-in-out;
  .col{
    padding: 0;
  }
  &.active{
    display: block;
  }
}
@media(max-width: 768px){
  .lightbox-modal.ipad-none{
    display: none;
  }
}
.modal-pos{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}
/* Modal Content */
.modal-content{
  position: relative;
  width: 1200px;
  margin: auto;
  padding: 0;
  overflow: hidden;
}
/* slides */
.slide-group{
  width: 1200px;
  position: relative;
  transform: translate(0,0);
  transition: all 0.3s;
}
/* container-size 假容器 */
.container-size img{
  display: block;
  opacity: 0; // 置入圖片得到高度，但不顯示
}
.slides{
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  width: 1200px;
  height: 100%;
  overflow-x: hidden;
  &:nth-child(3){
    left: 1200px;
  }
  &:nth-child(4){
    left: 2400px;
  }
  &:nth-child(5){
    left: 3600px;
  }
  &:nth-child(6){
    left: 4800px;
  }
  &:nth-child(7){
    left: 6000px;
  }
  img{
    display: block;
    width: 100%;
    height: auto;
  }
}

/* 小圖等比例 */
.column{
  width: 16.56%;
}
img.demo{
  width: 100%;
  height: auto;
  opacity: 0.6;
  transition: all 0.3s;
  &.active,&:hover{
    cursor: pointer;
    opacity: 1;
  }
}

/* The Close Button */
.close {
  color: white;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
  &:hover,&:focus{
    color: #999;
    text-decoration: none;
    cursor: pointer;
  }
}

/* Next & previous buttons */
.prev,.next {
  display: none;
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
  &:hover{
    text-decoration: none;
  }
  &.active{
    display: block;
  }
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* open animation */
@keyframes open {
  0%{
    display: none;
    opacity: 0;
    transform: scale(0);
    }
  1%{
    display: block;
    opacity: 0;
    transform: scale(0);
    }
  100%{
    opacity: 1;
    transform: scale(1);
  }
}
</style>
