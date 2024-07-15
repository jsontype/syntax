<template>
  <div class="section-block">
    <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button variant=&#x22;primary&#x22;&#x3E;Default&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;primary&#x22; pill&#x3E;Rounded&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;primary&#x22; pill&#x3E;
      {{ &#x27;&#x27; }}
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      With Icon &#x3C;/b-button
    &#x3E;{{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-primary&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27;&#x27; }}
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button variant=&#x22;primary&#x22;&#x3E;Primary&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;secondary&#x22;&#x3E;Secondary&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;success&#x22;&#x3E;Success&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;danger&#x22;&#x3E;Danger&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;warning&#x22;&#x3E;Warning&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;info&#x22;&#x3E;Info&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;light&#x22;&#x3E;Light&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;dark mt-2&#x22;&#x3E;Dark&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;link mt-2&#x22;&#x3E;Link&#x3C;/b-button&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;&#x3C;b-button variant=&#x22;outline-primary&#x22;&#x3E;Primary&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;outline-secondary&#x22;&#x3E;Secondary&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;outline-success&#x22;&#x3E;Success&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;outline-danger&#x22;&#x3E;Danger&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;outline-warning&#x22;&#x3E;Warning&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;outline-info&#x22;&#x3E;Info&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;outline-light&#x22;&#x3E;Light&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }} &#x3C;b-button variant=&#x22;outline-dark mt-2&#x22;&#x3E;Dark&#x3C;/b-button&#x3E;{{ &#x27;&#x27; }}&#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button variant=&#x22;soft-primary&#x22;&#x3E;Primary&#x3C;/b-button&#x3E;
    {{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;soft-secondary&#x22;&#x3E;Secondary&#x3C;/b-button&#x3E;
    {{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;soft-success&#x22;&#x3E;Success&#x3C;/b-button&#x3E;
    {{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;soft-danger&#x22;&#x3E;Danger&#x3C;/b-button&#x3E;
    {{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;soft-warning&#x22;&#x3E;Warning&#x3C;/b-button&#x3E;
    {{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;soft-info&#x22;&#x3E;Info&#x3C;/b-button&#x3E;
    {{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;soft-light&#x22;&#x3E;Light&#x3C;/b-button&#x3E;
    {{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;soft-dark mt-2&#x22;&#x3E;Dark&#x3C;/b-button&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button variant=&#x22;primary&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Primary &#x3C;/b-button
    &#x3E;{{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;secondary&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Secondary &#x3C;/b-button
    &#x3E;{{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;success&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Success &#x3C;/b-button
    &#x3E;{{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;danger&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Danger &#x3C;/b-button
    &#x3E;{{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;warning&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Warning &#x3C;/b-button
    &#x3E;{{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;info mt-2&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Info &#x3C;/b-button
    &#x3E;{{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;light mt-2&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Light &#x3C;/b-button
    &#x3E;{{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;dark mt-2&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Dark &#x3C;/b-button
    &#x3E;{{ &#x27;&#x27; }}
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button variant=&#x22;outline-primary&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Primary &#x3C;/b-button
    &#x3E;{{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;outline-secondary&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Secondary &#x3C;/b-button
    &#x3E;{{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;outline-success&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Success &#x3C;/b-button
    &#x3E;{{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;outline-danger&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Danger &#x3C;/b-button
    &#x3E;{{ &#x27;&#x27; }}
    &#x3C;b-button variant=&#x22;outline-warning&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Warning &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;outline-info mt-2&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Info &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;outline-light mt-2&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Light &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;outline-dark mt-2&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Dark &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button variant=&#x22;soft-primary&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Primary &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;soft-secondary&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Secondary &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;soft-success&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Success &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;soft-danger&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Danger &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;soft-warning&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Warning &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;soft-info mt-2&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Info &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;soft-light mt-2&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Light &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;soft-dark mt-2&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Dark &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button variant=&#x22;icon btn-primary&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-secondary&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-success&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-danger&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-warning&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-info&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-light&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-dark&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button variant=&#x22;icon btn-outline-primary&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-outline-secondary&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-outline-success&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-outline-danger&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-outline-warning&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-outline-info&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-outline-light&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-outline-dark&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button variant=&#x22;icon btn-soft-primary&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-soft-secondary&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-soft-success&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-soft-danger&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-soft-warning&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-soft-info&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-soft-light&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-soft-dark&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;&#x3C;b-button variant=&#x22;primary&#x22; pill&#x3E;Primary&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;secondary&#x22; pill&#x3E;Secondary&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;success&#x22; pill&#x3E;Success&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;danger&#x22; pill&#x3E;Danger&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;warning&#x22; pill&#x3E;Warning&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;info&#x22; pill&#x3E;Info&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;light&#x22; pill&#x3E;Light&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;dark mt-2&#x22; pill&#x3E;Dark&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;link mt-2&#x22; pill&#x3E;Link&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }}&#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;&#x3C;b-button variant=&#x22;outline-primary&#x22; pill&#x3E;Primary&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;outline-secondary&#x22; pill&#x3E;Secondary&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;outline-success&#x22; pill&#x3E;Success&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;outline-danger&#x22; pill&#x3E;Danger&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;outline-warning&#x22; pill&#x3E;Warning&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;outline-info&#x22; pill&#x3E;Info&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;outline-light&#x22; pill&#x3E;Light&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;outline-dark mt-2&#x22; pill&#x3E;Dark&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }}&#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;&#x3C;b-button variant=&#x22;soft-primary&#x22; pill&#x3E;Primary&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;soft-secondary&#x22; pill&#x3E;Secondary&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;soft-success&#x22; pill&#x3E;Success&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;soft-danger&#x22; pill&#x3E;Danger&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;soft-warning&#x22; pill&#x3E;Warning&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;soft-info mt-2&#x22; pill&#x3E;Info&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;soft-light mt-2&#x22; pill&#x3E;Light&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;soft-dark mt-2&#x22; pill&#x3E;Dark&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }}&#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button variant=&#x22;primary&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Primary &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;secondary&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Secondary &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;success&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Success &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;danger&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Danger &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;warning&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Warning &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;info mt-2&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Info &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;light mt-2&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Light &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;dark mt-2&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Dark &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button variant=&#x22;outline-primary&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Primary &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;outline-secondary&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Secondary &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;outline-success&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Success &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;outline-danger&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Danger &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;outline-warning&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Warning &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;outline-info mt-2&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Info &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;outline-light mt-2&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Light &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;outline-dark mt-2&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Dark &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button variant=&#x22;soft-primary&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Primary &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;soft-secondary&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Secondary &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;soft-success&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Success &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;soft-danger&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Danger &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;soft-warning&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Warning &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;soft-info mt-2&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Info &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;soft-light mt-2&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Light &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;soft-dark mt-2&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E;
      Dark &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button variant=&#x22;icon btn-primary&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-secondary&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-success&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-danger&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-warning&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-info&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-light&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-dark&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button variant=&#x22;icon btn-outline-primary&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-outline-secondary&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-outline-success&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-outline-danger&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-outline-warning&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-outline-info&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-outline-light&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-outline-dark&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button variant=&#x22;icon btn-soft-primary&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-soft-secondary&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-soft-success&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-soft-danger&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-soft-warning&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-soft-info&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-soft-light&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-soft-dark&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;&#x3C;b-button variant=&#x22;primary btn-sm&#x22;&#x3E;Small button&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;primary&#x22;&#x3E;Default button&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }} &#x3C;b-button variant=&#x22;primary btn-lg&#x22;&#x3E;Large button&#x3C;/b-button&#x3E;{{ &#x27; &#x27; }}&#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-button variant=&#x22;icon btn-primary btn-sm rounded-pill&#x22;&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-primary&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
    &#x3C;b-button variant=&#x22;icon btn-primary btn-lg&#x22; pill&#x3E;
      &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
        &#x3C;icon-component type=&#x22;outlined&#x22; icon-name=&#x22;button-heart&#x22;&#x3E;&#x3C;/icon-component&#x3E;
      &#x3C;/span&#x3E; &#x3C;/b-button
    &#x3E;{{ &#x27; &#x27; }}
  &#x3C;/div&#x3E;
</code></pre>
  </div>
</template>
