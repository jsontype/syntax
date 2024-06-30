<template>
  <b-container fluid>
    <b-row>
      <b-col lg="6">
        <div class="iq-accordion career-style faq-style  ">
          <iq-card v-for="(item,index) in faqList" :key="index" :class="`iq-card iq-accordion-block ${index == 0 ? 'accordion-active' : ''}`">
            <div class="clearfix">
              <div class="container">
                <b-row class="py-2">
                  <b-col sm="12">
                    <a v-b-toggle="`accordian-${index}`" class="accordion-title" @click="onCollapse"><span> {{ item.title }} </span> </a>
                  </b-col>
                </b-row>
              </div>
            </div>
            <b-collapse :id="`accordian-${index}`" :visible="index == 0 ? true : false" accordion="my-accordion" role="tabpanel" class="accordion-details">
              <p class="mb-0">
                {{ item.description }}
              </p>
            </b-collapse>
          </iq-card>
        </div>
      </b-col>
      <b-col lg="6">
        <div class="iq-accordion career-style faq-style  ">
          <iq-card v-for="(item,index) in faqList" :key="index" class="iq-card iq-accordion-block">
            <div class="clearfix">
              <div class="container">
                <b-row class="py-2">
                  <b-col sm="12">
                    <a v-b-toggle="`accordian1-${index}`" class="accordion-title" @click="onCollapse"><span> {{ item.title }} </span> </a>
                  </b-col>
                </b-row>
              </div>
            </div>
            <b-collapse :id="`accordian1-${index}`" :visible="false" accordion="my-accordion" role="tabpanel" class="accordion-details">
              <p class="mb-0">
                {{ item.description }}
              </p>
            </b-collapse>
          </iq-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../../assets/app/app'

export default {
  layout: 'BackendLayout',
  name: 'FAQ',
  data () {
    return {
      faqList: [
        {
          title: 'It is a long established fact that a reader will be?',
          description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.',
          active: false
        },
        {
          title: 'Distracted by the readable content of a page whent?',
          description: 'It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
          active: false
        },
        {
          title: 'What is user interface kit?',
          description: 'It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
          active: false
        },
        {
          title: 'The readable content of a page when looking at its layout?',
          description: 'It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
          active: false
        },
        {
          title: 'It is a long established fact that a reader will be?',
          description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.',
          active: false
        },
        {
          title: 'Distracted by the readable content of a page whent?',
          description: 'It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
          active: false
        },
        {
          title: 'What is user interface kit?',
          description: 'It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
          active: false
        }
      ]
    }
  },
  mounted () {
    core.index()
  },
  methods: {
    onCollapse (e) {
      const activeEl = document.getElementsByClassName('accordion-active')[0]
      activeEl.classList.remove('accordion-active')
      const el = e.target.closest('.iq-accordion-block')
      el.classList.add('accordion-active')
    }
  }
}
</script>
