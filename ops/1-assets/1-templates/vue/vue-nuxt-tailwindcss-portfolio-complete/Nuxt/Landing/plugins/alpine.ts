import Alpine from "alpinejs";

export default defineNuxtPlugin((nuxtApp : any) => {
  nuxtApp.vueApp.use(Alpine)
});
