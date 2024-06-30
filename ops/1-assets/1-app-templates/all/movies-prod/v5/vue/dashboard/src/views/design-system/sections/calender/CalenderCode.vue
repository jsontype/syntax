<template>
  <div class="section-block">
    <pre><code class="language-markup">  &lt;b-row&gt;
    &lt;b-col md=&quot;6&quot; class=&quot;order-md-1&quot;&gt;
      &lt;div class=&quot;bd-example&quot;&gt;
        &lt;b-form-group&gt;
          &lt;flat-picker v-model=&quot;dateBasic&quot; className=&quot;form-control&quot; :config=&quot;datePicker&quot; placeholder=&quot;Date Picker&quot;&gt;&lt;/flat-picker&gt;
        &lt;/b-form-group&gt;
      &lt;/div&gt;
      &lt;div class=&quot;bd-example&quot;&gt;
        &lt;b-form-group&gt;
          &lt;flat-picker v-model=&quot;date&quot; :config=&quot;{ mode: &apos;range&apos;, minDate: &apos;today&apos;, dateFormat: &apos;Y-m-d&apos; }&quot; name=&quot;date&quot; placeholder=&quot;Range Date Picker&quot; class=&quot;form-control&quot;&gt;&lt;/flat-picker&gt;
        &lt;/b-form-group&gt;
      &lt;/div&gt;
      &lt;div class=&quot;bd-example&quot;&gt;
        &lt;b-form-group&gt;
          &lt;flat-picker id=&quot;time&quot; :config=&quot;timePicker&quot; className=&quot;form-control&quot; v-model=&quot;inTime&quot; placeholder=&quot;Time Picker&quot; readonly=&quot;readonly&quot;&gt;&lt;/flat-picker&gt;
        &lt;/b-form-group&gt;
      &lt;/div&gt;
      &lt;div class=&quot;bd-example&quot;&gt;
        &lt;b-form-group&gt;
          &lt;div class=&quot;input-group wrap_flatpicker&quot;&gt;
            &lt;flat-picker v-model=&quot;selectdate&quot; className=&quot;form-control&quot; :config=&quot;selectDate&quot; placeholder=&quot;Select Date ..&quot;&gt;&lt;/flat-picker&gt;
            &lt;!-- input is mandatory --&gt;
            &lt;a class=&quot;input-group-text input-button pointer-event&quot; title=&quot;toggle&quot; data-bs-toggle href=&quot;javascript:void(0)&quot;&gt;
              &lt;svg width=&quot;24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
                &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z&quot; /&gt;
              &lt;/svg&gt;
            &lt;/a&gt;
            &lt;a class=&quot;input-group-text input-button&quot; title=&quot;clear&quot; data-clear href=&quot;javascript:void(0)&quot;&gt;
              &lt;svg width=&quot;24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;
                &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M6 18L18 6M6 6l12 12&quot; /&gt;
              &lt;/svg&gt;
            &lt;/a&gt;
          &lt;/div&gt;
        &lt;/b-form-group&gt;
      &lt;/div&gt;
    &lt;/b-col&gt;
    &lt;b-col md=&quot;6&quot; class=&quot;bd-example form-group order-md-0 mt-0&quot;&gt;
      &#x3C;flat-picker v-model=&#x22;inlineDate&#x22; className=&#x22;d-none&#x22; :config=&#x22;inlineDatepicker&#x22; placeholder=&#x22;select Date&#x22;&#x3E;&#x3C;/flat-picker&#x3E;
    &lt;/b-col&gt;
  &lt;/b-row&gt;

  &lt;script setup&gt;
import { ref } from &apos;vue&apos;
import moment from &#x27;moment&#x27;
import FlatPicker from &apos;vue-flatpickr-component&apos;

const dateBasic = ref(&#x27;&#x27;)
const inlineDate = ref(&#x27;&#x27;)
const datePicker = ref({
  inline: false,
  minDate: &#x27;today&#x27;,
  dateFormat: &#x27;Y-m-d&#x27;
})
const selectDate = ref({
  altInput: true,
  dateFormat: &#x27;YYYY-MM-DD&#x27;,
  altFormat: &#x27;DD-MM-YYYY&#x27;,
  allowInput: true,
  parseDate: (datestr, format) =&#x3E; {
    return moment(datestr, format, true).toDate()
  },
  formatDate: (date, format) =&#x3E; {
    // locale can also be used
    return moment(date).format(format)
  }
})
const inlineDatepicker = ref({
  inline: true,
  minDate: &#x27;today&#x27;,
  dateFormat: &#x27;Y-m-d&#x27;
})
const timePicker = ref({
  wrap: true,
  enableTime: true,
  enableSeconds: false,
  noCalendar: true
})
&#x3C;/script&#x3E;</code></pre>
  </div>
</template>
