import { defineStore } from 'pinia';
import { state } from './state';

import { cast } from '../../StaticData/data';

const sleepTime = 500;

export const useStreamitMedia = defineStore('streamitMedia', {
  state: () => ({ ...state }),
  getters: {
    cast_list: (state) => state.streamitMedia.cast,
  },
  actions: {
    cast() {
      if (typeof payload !== typeof undefined) {
        setTimeout(() => {
          this.streamitMedia.cast = cast;
        }, sleepTime);
      }
    },
  },
});

window.pinia = useStreamitMedia;
