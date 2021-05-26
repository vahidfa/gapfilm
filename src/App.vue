<template>
  <v-app>
    <v-container>
      <header>
        <search-bar />
        <navigation-bar class="mt-4" />
      </header>

      <v-main>
        <router-view class="mt-5" />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    SearchBar: () =>
      import(
        /* webpackChunkName: "App" */ "@/components/Headers/SearchBar.vue"
      ),
    NavigationBar: () =>
      import(
        /* webpackChunkName: "App" */ "@/components/Headers/NavigationBar.vue"
      ),
  },
};
</script>
