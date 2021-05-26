import { CONTENT_LIST, FIRST_PAGE } from "@/helpers/movie-api";

export default (vm) => ({
  async fetchContentList({ commit }, page) {
    const response = await vm.$api.post(CONTENT_LIST, {
      request: {
        pageSize: page.pageSize,
        pageIndex: page.pageIndex,
      },
    });
    commit("setContentList", response.data.result);
  },
  async fetchFirstPage({ commit }) {
    const response = await vm.$api.get(FIRST_PAGE);
    commit("setContentList", response.data.result);
    return response;
  },
});
