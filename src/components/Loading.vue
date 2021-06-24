<template>
  <div class="loader" :class="{ 'active' : isLoading == true }">
    <div class="bouncing-loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isLoading'],
};
</script>

<style lang="scss" scoped>
.loader{
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(#fff,0.5);
  &.active{
    display: block;
  }
}
.bouncing-loader {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  &>div{
    width: 1rem;
    height: 1rem;
    margin: 3rem 0.2rem;
    background-color: rgb(0,0,0,0.8);
    border-radius: 50%;
    animation: bouncing-loader 0.6s infinite alternate;
  }
  &>div:nth-child(2){
    animation-delay: 0.2s;
  }
  &>div:nth-child(3){
    animation-delay: 0.4s;
  }
}
@keyframes bouncing-loader{
  to{
    opacity: 0.1;
    transform: translate3d(0, -1rem, 0);
  }
}
</style>
