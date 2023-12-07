import { defineStore } from "pinia";

type HomeRouteType = "home" | "profile" | "login";

export const homeRouteStore = defineStore("homeRouteTag", {
  state: () => {
    return {
      homeRouteTag: "home" as HomeRouteType,
    };
  },
  getters: {
    getHomeRote(): string {
      return this.homeRouteTag;
    },
  },
  actions: {
    changeHomeRouteTag(tag: HomeRouteType) {
      this.homeRouteTag = tag;
    },
  },
});
