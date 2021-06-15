<template>
  <div class="about">
    <h1>This is an Post page</h1>
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
