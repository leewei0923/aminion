import { defineStore } from "pinia";

export const siderTagStore = defineStore("siderTag", {
  state: () => {
    return {
      siderTag: "none",
    };
  },
  getters: {
    getSiderTag(): string {
      return this.siderTag;
    },
  },
  actions: {
    changeSiderTag(tag: string) {
      this.siderTag = tag;
    },
  },
});
