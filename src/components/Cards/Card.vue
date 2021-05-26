<template>
  <div class="w-100">
    <v-col class="pl-0 pr-6">
      <router-link to="#">
        <img :src="item.PortraitImage" />
        <span>{{ item.Title }}</span>
        <p>{{ item.Title }}</p>
      </router-link>
    </v-col>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/components/Cards/Card.scss";
</style>
