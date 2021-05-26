<template>
  <div class="side-bar">
    <router-link v-for="(item, index) in items" :key="index" to="#">{{
      item
    }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/components/Core/HomeSideBar.scss";
</style>
