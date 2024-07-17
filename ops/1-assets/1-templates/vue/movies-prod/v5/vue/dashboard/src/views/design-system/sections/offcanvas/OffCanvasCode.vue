<template>
  <div class="section-block">
    <pre><code class="language-markup">
      &#x3C;template&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button variant=&#x22;primary mt-2&#x22; type=&#x22;button&#x22; @click=&#x22;offcanvasTop = true&#x22;&#x3E;Toggle top offcanvas&#x3C;/b-button&#x3E;
    {{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;primary mt-2&#x22; type=&#x22;button&#x22; @click=&#x22;offcanvasEnd = true&#x22;&#x3E;Toggle right offcanvas&#x3C;/b-button&#x3E;
    {{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;primary mt-2&#x22; type=&#x22;button&#x22; @click=&#x22;offcanvasBottom = true&#x22;&#x3E;Toggle bottom offcanvas&#x3C;/b-button&#x3E;
    {{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;primary mt-2&#x22; type=&#x22;button&#x22; @click=&#x22;offcanvasStart = true&#x22;&#x3E;Toggle left offcanvas&#x3C;/b-button&#x3E;
    {{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;primary mt-2&#x22; type=&#x22;button&#x22; @click=&#x22;offcanvasScroll = true&#x22;&#x3E;Toggle Scroll offcanvas&#x3C;/b-button&#x3E;
    &#x3C;b-offcanvas class=&#x22;offcanvastop&#x22; v-model=&#x22;offcanvasTop&#x22; placement=&#x22;top&#x22; title=&#x22;Offcanvas top&#x22;&#x3E;...&#x3C;/b-offcanvas&#x3E;
    &#x3C;b-offcanvas class=&#x22;offcanvasright&#x22; v-model=&#x22;offcanvasEnd&#x22; placement=&#x22;end&#x22; title=&#x22;Offcanvas right&#x22;&#x3E;...&#x3C;/b-offcanvas&#x3E;
    &#x3C;b-offcanvas class=&#x22;offcanvasbottom&#x22; v-model=&#x22;offcanvasBottom&#x22; placement=&#x22;bottom&#x22; title=&#x22;Offcanvas bottom&#x22;&#x3E;...&#x3C;/b-offcanvas&#x3E;
    &#x3C;b-offcanvas class=&#x22;offcanvasleft&#x22; v-model=&#x22;offcanvasStart&#x22; placement=&#x22;start&#x22; title=&#x22;Offcanvas left&#x22;&#x3E;...&#x3C;/b-offcanvas&#x3E;
    &#x3C;b-offcanvas class=&#x22;offcanvasscroll&#x22; v-model=&#x22;offcanvasScroll&#x22; placement=&#x22;start&#x22; title=&#x22;Offcanvas Scroll&#x22; :body-scrolling=&#x22;true&#x22;&#x3E;...&#x3C;/b-offcanvas&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/template&#x3E;
&#x3C;script setup&#x3E;
import { ref } from &#x27;vue&#x27;
const offcanvasTop = ref(false)
const offcanvasStart = ref(false)
const offcanvasEnd = ref(false)
const offcanvasBottom = ref(false)
const offcanvasScroll = ref(false)
&#x3C;/script&#x3E;
&#x3C;style&#x3E;
.offcanvastop.show {
  visibility: visible;
}
.offcanvasright.show {
  visibility: visible;
}
.offcanvasbottom.show {
  visibility: visible;
}
.offcanvasleft.show {
  visibility: visible;
}
.offcanvasscroll.show {
  visibility: visible;
}
&#x3C;/style&#x3E;
      </code></pre>
  </div>
</template>
