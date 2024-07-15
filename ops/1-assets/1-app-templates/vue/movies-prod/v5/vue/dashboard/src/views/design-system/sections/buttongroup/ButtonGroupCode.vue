<template>
  <div class="section-block">
    <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;div class=&#x22;btn-toolbar&#x22; role=&#x22;toolbar&#x22; aria-label=&#x22;Toolbar with button groups&#x22;&#x3E;
      &#x3C;b-button-group class=&#x22;me-2 mt-2&#x22; role=&#x22;group&#x22; aria-label=&#x22;First group&#x22;&#x3E;
        &#x3C;b-button variant=&#x22;secondary&#x22;&#x3E;1&#x3C;/b-button&#x3E;
        &#x3C;b-button variant=&#x22;secondary&#x22;&#x3E;2&#x3C;/b-button&#x3E;
        &#x3C;b-button variant=&#x22;secondary&#x22;&#x3E;3&#x3C;/b-button&#x3E;
        &#x3C;b-button variant=&#x22;secondary&#x22;&#x3E;4&#x3C;/b-button&#x3E;
      &#x3C;/b-button-group&#x3E;
      &#x3C;b-button-group class=&#x22;me-2 mt-2&#x22; role=&#x22;group&#x22; aria-label=&#x22;Second group&#x22;&#x3E;
        &#x3C;b-button variant=&#x22;secondary&#x22;&#x3E;5&#x3C;/b-button&#x3E;
        &#x3C;b-button variant=&#x22;secondary&#x22;&#x3E;6&#x3C;/b-button&#x3E;
        &#x3C;b-button variant=&#x22;secondary&#x22;&#x3E;7&#x3C;/b-button&#x3E;
      &#x3C;/b-button-group&#x3E;
      &#x3C;b-button-group class=&#x22;mt-2&#x22; role=&#x22;group&#x22; aria-label=&#x22;Third group&#x22;&#x3E;
        &#x3C;b-button class=&#x22;secondary&#x22;&#x3E;8&#x3C;/b-button&#x3E;
      &#x3C;/b-button-group&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button-group role=&#x22;group&#x22; aria-label=&#x22;Basic example&#x22;&#x3E;
      &#x3C;b-button variant=&#x22;primary&#x22;&#x3E;Home&#x3C;/b-button&#x3E;
      &#x3C;b-button variant=&#x22;outline-primary&#x22;&#x3E;Profile&#x3C;/b-button&#x3E;
      &#x3C;b-button variant=&#x22;outline-primary&#x22;&#x3E;Message&#x3C;/b-button&#x3E;
    &#x3C;/b-button-group&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button-group vertical&#x3E;
      &#x3C;b-button variant=&#x22;primary&#x22;&#x3E;Home&#x3C;/b-button&#x3E;
      &#x3C;b-button variant=&#x22;outline-primary&#x22;&#x3E;Profile&#x3C;/b-button&#x3E;
      &#x3C;b-button variant=&#x22;outline-primary&#x22;&#x3E;Message&#x3C;/b-button&#x3E;
    &#x3C;/b-button-group&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;div class=&#x22;btn-group iq-qty-btn me-4&#x22; data-qty=&#x22;btn&#x22; role=&#x22;group&#x22;&#x3E;
      &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-sm btn-outline-primary iq-quantity-minus&#x22; @click=&#x22;newValue -= 1&#x22;&#x3E;
        &#x3C;svg xmlns=&#x22;http://www.w3.org/2000/svg&#x22; width=&#x22;6&#x22; height=&#x22;3&#x22; viewBox=&#x22;0 0 6 3&#x22; fill=&#x22;none&#x22;&#x3E;
          &#x3C;path d=&#x22;M5.22727 0.886364H0.136364V2.13636H5.22727V0.886364Z&#x22; fill=&#x22;currentColor&#x22;&#x3E;&#x3C;/path&#x3E;
        &#x3C;/svg&#x3E;
      &#x3C;/button&#x3E;
      &#x3C;input type=&#x22;text&#x22; class=&#x22;btn btn-sm btn-outline-primary input-display&#x22; v-model=&#x22;newValue&#x22; data-qty=&#x22;input&#x22; title=&#x22;Qty&#x22; readonly=&#x22;&#x22; /&#x3E;
      &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-sm btn-outline-primary iq-quantity-plus&#x22; @click=&#x22;newValue += 1&#x22;&#x3E;
        &#x3C;svg xmlns=&#x22;http://www.w3.org/2000/svg&#x22; width=&#x22;9&#x22; height=&#x22;8&#x22; viewBox=&#x22;0 0 9 8&#x22; fill=&#x22;none&#x22;&#x3E;
          &#x3C;path d=&#x22;M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z&#x22; fill=&#x22;currentColor&#x22;&#x3E;&#x3C;/path&#x3E;
        &#x3C;/svg&#x3E;
      &#x3C;/button&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;btn-group iq-qty-btn me-4&#x22; data-qty=&#x22;btn&#x22; role=&#x22;group&#x22;&#x3E;
      &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-sm btn-outline-secondary iq-quantity-minus&#x22; @click=&#x22;newValue1 -= 1&#x22;&#x3E;
        &#x3C;svg xmlns=&#x22;http://www.w3.org/2000/svg&#x22; width=&#x22;6&#x22; height=&#x22;3&#x22; viewBox=&#x22;0 0 6 3&#x22; fill=&#x22;none&#x22;&#x3E;
          &#x3C;path d=&#x22;M5.22727 0.886364H0.136364V2.13636H5.22727V0.886364Z&#x22; fill=&#x22;currentColor&#x22;&#x3E;&#x3C;/path&#x3E;
        &#x3C;/svg&#x3E;
      &#x3C;/button&#x3E;
      &#x3C;input type=&#x22;text&#x22; class=&#x22;btn btn-sm btn-outline-secondary input-display&#x22; v-model=&#x22;newValue1&#x22; data-qty=&#x22;input&#x22; title=&#x22;Qty&#x22; readonly=&#x22;&#x22; /&#x3E;
      &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-sm btn-outline-secondary iq-quantity-plus&#x22; @click=&#x22;newValue1 += 1&#x22;&#x3E;
        &#x3C;svg xmlns=&#x22;http://www.w3.org/2000/svg&#x22; width=&#x22;9&#x22; height=&#x22;8&#x22; viewBox=&#x22;0 0 9 8&#x22; fill=&#x22;none&#x22;&#x3E;
          &#x3C;path d=&#x22;M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z&#x22; fill=&#x22;currentColor&#x22;&#x3E;&#x3C;/path&#x3E;
        &#x3C;/svg&#x3E;
      &#x3C;/button&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;btn-group iq-qty-btn&#x22; data-qty=&#x22;btn&#x22; role=&#x22;group&#x22;&#x3E;
      &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-sm btn-outline-light iq-quantity-minus&#x22; @click=&#x22;newValue2 -= 1&#x22;&#x3E;
        &#x3C;svg xmlns=&#x22;http://www.w3.org/2000/svg&#x22; width=&#x22;6&#x22; height=&#x22;3&#x22; viewBox=&#x22;0 0 6 3&#x22; fill=&#x22;none&#x22;&#x3E;
          &#x3C;path d=&#x22;M5.22727 0.886364H0.136364V2.13636H5.22727V0.886364Z&#x22; fill=&#x22;currentColor&#x22;&#x3E;&#x3C;/path&#x3E;
        &#x3C;/svg&#x3E;
      &#x3C;/button&#x3E;
      &#x3C;input type=&#x22;text&#x22; class=&#x22;btn btn-sm btn-outline-light input-display&#x22; v-model=&#x22;newValue2&#x22; data-qty=&#x22;input&#x22; title=&#x22;Qty&#x22; readonly=&#x22;&#x22; /&#x3E;
      &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-sm btn-outline-light iq-quantity-plus&#x22; @click=&#x22;newValue2 += 1&#x22;&#x3E;
        &#x3C;svg xmlns=&#x22;http://www.w3.org/2000/svg&#x22; width=&#x22;9&#x22; height=&#x22;8&#x22; viewBox=&#x22;0 0 9 8&#x22; fill=&#x22;none&#x22;&#x3E;
          &#x3C;path d=&#x22;M3.63636 7.70455H4.90909V4.59091H8.02273V3.31818H4.90909V0.204545H3.63636V3.31818H0.522727V4.59091H3.63636V7.70455Z&#x22; fill=&#x22;currentColor&#x22;&#x3E;&#x3C;/path&#x3E;
        &#x3C;/svg&#x3E;
      &#x3C;/button&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;script&#x3E;
import { ref, watch } from &#x27;vue&#x27;
export default {
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  emits: [&#x27;update:modelValue&#x27;],
  setup(props, { emit }) {
    const newValue = ref(props.modelValue)
    const newValue1 = ref(props.modelValue)
    const newValue2 = ref(props.modelValue)
    watch(newValue, newValue1, newValue2, () =&#x3E; {
      emit(&#x27;update:modelValue&#x27;, newValue.value)
      emit(&#x27;update:modelValue&#x27;, newValue1.value)
      emit(&#x27;update:modelValue&#x27;, newValue2.value)
    })
    return {
      newValue,
      newValue1,
      newValue2
    }
  }
}
&#x3C;/script&#x3E;</code></pre>
  </div>
</template>
