import { defineStore } from 'pinia';

export const useStremit = defineStore('app', {
  state: () => ({ 
    breadcrumb: {
        show: false,
        name: ''
    }
   }),
  actions: {
    breadcrumbSet(payload) {
      this.breadcrumb = payload;
    },
  },
});
window.pinia = useStremit;
