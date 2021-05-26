<template>
  <v-row class="hero">
    <router-link to="#">
      <img :src="item.LandscapeImage" />
      <div class="hero-mask">
        <div class="pa-4">
          <h1>{{ item.Title }}</h1>
          <span>{{ item.Summary }}</span>
        </div>
      </div>
    </router-link>
  </v-row>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/components/Cards/HeroCard.scss";
</style>
