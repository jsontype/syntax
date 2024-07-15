<template>
  <section class="section-padding">
    <b-container>
      <b-row>
        <b-col :lg="12" :sm="12">
          <div class="iq-accordian iq-accordian-square">
            <div
v-for="(item, index) in accordionItems" :key="index + 'ac' + item.title"
              :class="`iq-accordian-block ${index} ${isOpen[index] ? 'iq-active' : ''}`">
              <div class="iq-accordian-title text-capitalize" @click="toggleAccordion(index)">
                <div class="iq-icon-right">
                  <i aria-hidden="true" class="fa fa-minus active"></i>
                  <i aria-hidden="true" class="fa fa-plus inactive"></i>
                </div>
                <h4 class="mb-0 accordian-title text-capitalize">{{ $t(item.title) }}</h4>
              </div>
              <b-collapse :id="`collapse-${index}`" v-model="isOpen[index]">
                <div class="iq-accordian-details">
                  <p class="mb-0">{{ $t(item.content) }}</p>
                </div>
              </b-collapse>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const accordionItems = ref([
  {
    title: 'faq.what_is_streamit',
    content: 'faq.desc',
  },
  {
    title: 'faq.will_account',
    content: 'faq.desc',
  },
  {
    title: 'faq.video_issue',
    content: 'faq.desc',
  },
  {
    title: 'faq.manage_notification',
    content: 'faq.desc',
  },
  {
    title: 'faq.what_benefits',
    content: 'faq.desc',
  },
]);

const isOpen = ref(Array(accordionItems.value.length).fill(false));
isOpen.value[0] = true; // Open the first accordion item by default

const toggleAccordion = (index) => {
  isOpen.value = isOpen.value.map((value, i) => (i === index ? !value : false));
};
</script>
<style>
.collapsed .when-open {
  display: block;
}

.iq-accordion-title:not(.collapsed) .when-closed {
  display: block;
}

.iq-accordion-details {
  display: block !important;
}
</style>
