<template>
  <div class="pt-7">
    <v-row>
      <v-col cols="12" md="3">
        <home-side-bar :items="sideBarItems" />
      </v-col>

      <v-col cols="12" md="9" class="pt-6 pr-8">
        <template v-for="(item, index) in contentList">
          <v-row :key="index">
            <template v-for="(data, i) in item.list">
              <hero-card v-if="item.type === 0" :key="i + 'a'" :item="data" />
            </template>
          </v-row>
          <v-row v-if="item.type === 1" :key="index + 'b'">
            <v-col
              v-for="(data, i) in item.list"
              :key="i + 'c'"
              cols="12"
              md="6"
              class="pa-8"
            >
              <hero-card :key="i + 'd'" :item="data" />
            </v-col>
          </v-row>

          <v-row :key="index + 'e'" class="mt-8">
            <section-header v-if="index === 1" title="FEATURED ARTICLES" />
          </v-row>
          <v-row :key="index + 'f'">
            <template v-for="(data, i) in item.list">
              <card v-if="item.type === 2" :key="i + 'g'" :item="data" />
            </template>
          </v-row>
        </template>
      </v-col>
    </v-row>
    <toast :show.sync="show" :text="error" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    HomeSideBar: () =>
      import(
        /* webpackChunkName: "home" */ "@/components/Core/HomeSideBar.vue"
      ),
    HeroCard: () =>
      import(/* webpackChunkName: "home" */ "@/components/Cards/HeroCard.vue"),
    Card: () =>
      import(/* webpackChunkName: "home" */ "@/components/Cards/Card.vue"),
    SectionHeader: () =>
      import(
        /* webpackChunkName: "home" */ "@/components/Core/SectionHeader.vue"
      ),
    Toast: () =>
      import(/* webpackChunkName: "home" */ "@/components/Common/Toast.vue"),
  },
  data() {
    return {
      error: "",
      show: false,
      sideBarItems: [
        "ACTORS",
        "ACTRESSES",
        "HAITI",
        "MODELS",
        "ACTORS",
        "ACTRESSES",
        "HAITI",
        "MODELS",
        "ACTORS",
        "ACTRESSES",
        "HAITI",
        "MODELS",
      ],
    };
  },
  computed: {
    ...mapGetters({
      contentList: "content/contentList",
    }),
  },
  async mounted() {
    try {
      const response = await this.fetchFirstPage();
      if (response.data.status === -1) {
        this.show = true;
        this.error = response.message;
        console.log(response.data.message);
      }
      return response;
    } catch (error) {
      this.show = true;
      this.error = "error";
      console.log(error);
    }
  },
  methods: {
    ...mapActions({
      fetchFirstPage: "content/fetchFirstPage",
    }),
  },
};
</script>
