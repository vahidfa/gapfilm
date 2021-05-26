<template>
  <div>
    <v-row>
      <v-col cols="12" md="2" class="header-left">
        <router-link to="#" class="header-login"> Login </router-link>
        <router-link to="#" class="header-entiries"> Entiries </router-link>
      </v-col>
      <v-col cols="12" md="10" class="header-right">
        <input type="text" />
        <v-icon class="search-icon"> mdi-magnify </v-icon>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/components/Headers/SearchBar.scss";
</style>
