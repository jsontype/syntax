<template>
  <div class="section-block">
    <pre><code class="language-markup">&lt;div class=&quot;bd-example&quot;&gt;
  &lt;div class=&quot;mb-3&quot;&gt;
    &lt;b-form-input id=&quot;input-large&quot; size=&quot;lg&quot; placeholder=&quot;.form-control-lg&quot;&gt;&lt;/b-form-input&gt;
  &lt;/div&gt;
  &lt;div class=&quot;mb-3&quot;&gt;
    &lt;b-form-select v-model=&quot;ex1Selected&quot; :options=&quot;ex1Options&quot; size=&quot;lg&quot; class=&quot;mt-3&quot;&gt;&lt;/b-form-select&gt;
  &lt;/div&gt;
  &lt;div class=&quot;mb-3&quot;&gt;
    &lt;input type=&quot;file&quot; class=&quot;form-control form-control-lg&quot; aria-label=&quot;Large file input example&quot; /&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;bd-example&quot;&gt;
  &lt;div class=&quot;mb-3&quot;&gt;
    &lt;b-form-input id=&quot;input-small&quot; size=&quot;sm&quot; placeholder=&quot;.form-control-sm&quot;&gt;&lt;/b-form-input&gt;
  &lt;/div&gt;
  &lt;div class=&quot;mb-3&quot;&gt;
    &lt;b-form-select v-model=&quot;ex1Selected&quot; :options=&quot;ex1Options&quot; size=&quot;sm&quot; class=&quot;mt-3&quot;&gt;&lt;/b-form-select&gt;
  &lt;/div&gt;
  &lt;div class=&quot;mb-3&quot;&gt;
    &lt;input type=&quot;file&quot; class=&quot;form-control form-control-sm&quot; aria-label=&quot;Small file input example&quot; /&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;script setup&gt;
import { ref } from &apos;vue&apos;

const ex1Selected = ref()
const ex1Options = [
  { value: null, text: &apos;Open this select menu&apos; },
  { value: &apos;c&apos;, text: &apos;One&apos; },
  { value: &apos;a&apos;, text: &apos;Two&apos; },
  { value: &apos;b&apos;, text: &apos;Three&apos; }
]
&lt;/script&gt;
</code></pre>
  </div>
</template>
