<template>
  <div class="post">
    <header class="bg-s-gray">
      <h2 class="text-white">作 品 <span>PROJECTS</span></h2>
    </header>
  </div>
</template>

<script>
export default {
  created() {
    const vm = this;
    vm.$bus.$emit('changeNav', 'post');
  },
};
</script>
