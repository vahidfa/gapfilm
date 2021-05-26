<template>
  <div>
    <v-row class="navigation">
      <v-col cols="12" md="3">
        <v-row class="left-nav">
          <h1>CELEBRITES</h1>
          <span>FAN ZONE</span>
        </v-row>
      </v-col>
      <v-col cols="12" md="9">
        <v-row class="right-nav">
          <router-link to="/" :class="{ active: $route.fullPath === '/' }"
            >HOME</router-link
          >
          <router-link to="#">CELEBRITES</router-link>
          <router-link to="#">GALLARY</router-link>
          <router-link to="#">NEWS</router-link>
          <router-link to="#">CONTACTS</router-link>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/components/Headers/NavigationBar.scss";
</style>
