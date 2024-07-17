import BrandName from '@/components/custom/logo/BrandName.vue';
import BrandLogo from '@/components/custom/logo/BrandLogo.vue';

// Form Components
import SelectComponent from '@/components/custom/select/SelectComponent.vue';
export default {
  install(app) {
    app.component('BrandName', BrandName);
    app.component('BrandLogo', BrandLogo);

    // Form Components
    app.component('SelectComponent', SelectComponent);
  },
};
