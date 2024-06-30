<template>
  <div class="section-block">
    <pre><code class="language-markup">&lt;div class=&quot;bd-example&quot;&gt;
    &lt;b-button variant=&quot;danger&quot; id=&quot;popover&quot;&gt;Click to toggle popover&lt;/b-button&gt;
    &lt;b-popover target=&quot;popover&quot; triggers=&quot;click&quot; placement=&quot;right&quot;&gt;
      &lt;template #title&gt;Popover Title&lt;/template&gt;
      And here&apos;s some amazing content. It&apos;s very engaging. Right?
    &lt;/b-popover&gt;
  &lt;/div&gt;

  &lt;div class=&quot;bd-example&quot;&gt;
    &#x3C;b-button v-b-popover.click.top=&#x22;&#x27;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#x27;&#x22;&#x3E;Popover on top&#x3C;/b-button&#x3E;
    {{ &#x27; &#x27; }}
    &#x3C;b-button v-b-popover.click.right=&#x22;&#x27;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#x27;&#x22;&#x3E;Popover on end&#x3C;/b-button&#x3E;
    {{ &#x27; &#x27; }}
    &#x3C;b-button v-b-popover.click.bottom=&#x22;&#x27;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#x27;&#x22;&#x3E;Popover on bottom&#x3C;/b-button&#x3E;
    {{ &#x27; &#x27; }}
    &#x3C;b-button v-b-popover.click.left=&#x22;&#x27;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#x27;&#x22;&#x3E;Popover on start&#x3C;/b-button&#x3E;
  &lt;/div&gt;
</code></pre>
  </div>
</template>
