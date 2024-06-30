// utilities/usePage.js
import { useStremit } from "~/store/streamit";
import { onMounted, computed, onUnmounted } from "vue";

export const useEnterExit = () => {
  onMounted(() => {
    document.body.classList.add("custom-header-relative");
  });

  onUnmounted(() => {
    document.body.classList.remove("custom-header-relative");
  });
};

export const useBreadcrumb = (name) => {
  const store = useStremit();

  const addBreadcrumb = (name) => {
    if (store.breadcrumb.name !== name) {
      store.breadcrumbSet({ show: true, name: name });
      console.log(`Breadcrumb added: ${name}`);
    }
  };

  const getBreadcrumb = computed(() => store.breadcrumb);

  onMounted(() => {
    console.log(`Mounted: Adding breadcrumb ${name}`);
    addBreadcrumb(name);
  });

  return {
    addBreadcrumb,
    getBreadcrumb,
  };
};
