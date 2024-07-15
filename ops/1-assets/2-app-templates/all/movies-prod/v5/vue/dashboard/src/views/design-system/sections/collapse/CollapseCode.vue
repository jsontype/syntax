<template>
  <div class="section-block">
    <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
&#x3C;p&#x3E;
  &#x3C;b-button variant=&#x22;primary mt-2&#x22; href=&#x22;#&#x22; v-b-toggle.collapseExample&#x3E; Link with href &#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button v-b-toggle.collapseExample variant=&#x22;primary mt-2&#x22;&#x3E;Button with data-bs-target&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }}
  &#x3C;b-button v-b-toggle.collapseWidthExample variant=&#x22;primary mt-2&#x22;&#x3E;Toggle width collapse&#x3C;/b-button&#x3E;
&#x3C;/p&#x3E;
&#x3C;b-collapse id=&#x22;collapseExample&#x22;&#x3E;
  &#x3C;div class=&#x22;card card-body&#x22;&#x3E;Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.&#x3C;/div&#x3E;
&#x3C;/b-collapse&#x3E;
&#x3C;div&#x3E;
  &#x3C;b-collapse class=&#x22;collapse-horizontal&#x22; id=&#x22;collapseWidthExample&#x22;&#x3E;
    &#x3C;div class=&#x22;card card-body&#x22; style=&#x22;width: 300px&#x22;&#x3E;This is some placeholder content for a horizontal collapse. It&#x27;s hidden by default and shown when triggered.&#x3C;/div&#x3E;
  &#x3C;/b-collapse&#x3E;
  &#x3C;p&#x3E;
        &#x3C;b-button variant=&#x22;primary mt-2&#x22; href=&#x22;#&#x22; v-b-toggle.multiCollapseExample1&#x3E; Toggle first Elements &#x3C;/b-button&#x3E;
        {{ &#x27; &#x27; }}
        &#x3C;b-button v-b-toggle.multiCollapseExample2 variant=&#x22;primary mt-2&#x22;&#x3E;Toggle second Elements&#x3C;/b-button&#x3E;
        {{ &#x27; &#x27; }}
        &#x3C;b-button v-b-toggle=&#x22;[&#x27;multiCollapseExample1&#x27;, &#x27;multiCollapseExample2&#x27;]&#x22; variant=&#x22;primary mt-2&#x22;&#x3E;Toggle both Elements&#x3C;/b-button&#x3E;
      &#x3C;/p&#x3E;
  &#x3C;b-row&#x3E;
    &#x3C;b-col&#x3E;
      &#x3C;b-collapse class=&#x22;multi-collapse&#x22; id=&#x22;multiCollapseExample1&#x22;&#x3E;
        &#x3C;div class=&#x22;card card-body&#x22;&#x3E;Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.&#x3C;/div&#x3E;
      &#x3C;/b-collapse&#x3E;
    &#x3C;/b-col&#x3E;
    &#x3C;div class=&#x22;col&#x22;&#x3E;
      &#x3C;b-collapse class=&#x22;multi-collapse&#x22; id=&#x22;multiCollapseExample2&#x22;&#x3E;
        &#x3C;div class=&#x22;card card-body&#x22;&#x3E;Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.&#x3C;/div&#x3E;
      &#x3C;/b-collapse&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/b-row&#x3E;
&#x3C;/div&#x3E;
&#x3C;/div&#x3E;</code></pre>
  </div>
</template>
