import { onMounted, onUnmounted } from 'vue';
export const useEnterExit = () => {
  onMounted(() => {
    document.body.classList.add('custom-header-relative');
  });

  onUnmounted(() => {
    document.body.classList.remove('custom-header-relative');
  });
};
