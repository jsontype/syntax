<template>
  <div class="section-block">
    <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;p class=&#x22;h1&#x22;&#x3E;Example heading &#x3C;b-badge variant=&#x22;primary&#x22;&#x3E;New&#x3C;/b-badge&#x3E;&#x3C;/p&#x3E;
    &#x3C;p class=&#x22;h2&#x22;&#x3E;Example heading &#x3C;b-badge variant=&#x22;secondary&#x22;&#x3E;New&#x3C;/b-badge&#x3E;&#x3C;/p&#x3E;
    &#x3C;p class=&#x22;h3&#x22;&#x3E;Example heading &#x3C;b-badge variant=&#x22;success&#x22;&#x3E;New&#x3C;/b-badge&#x3E;&#x3C;/p&#x3E;
    &#x3C;p class=&#x22;h4&#x22;&#x3E;Example heading &#x3C;b-badge variant=&#x22;danger&#x22;&#x3E;New&#x3C;/b-badge&#x3E;&#x3C;/p&#x3E;
    &#x3C;p class=&#x22;h5&#x22;&#x3E;Example heading &#x3C;b-badge variant=&#x22;warning text-white&#x22;&#x3E;New&#x3C;/b-badge&#x3E;&#x3C;/p&#x3E;
    &#x3C;p class=&#x22;h6&#x22;&#x3E;Example heading &#x3C;b-badge variant=&#x22;info text-white&#x22;&#x3E;New&#x3C;/b-badge&#x3E;&#x3C;/p&#x3E;
  &#x3C;/div&#x3E;

  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;div class=&#x22;row&#x22;&#x3E;
      &#x3C;div class=&#x22;col-sm-4&#x22;&#x3E;
        &#x3C;b-button variant=&#x22;primary&#x22;&#x3E;Notifications &#x3C;b-badge variant=&#x22;secondary&#x22;&#x3E;4&#x3C;/b-badge&#x3E;&#x3C;/b-button&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;col-sm-3&#x22;&#x3E;
        &#x3C;b-button variant=&#x22;primary&#x22; class=&#x22;position-relative&#x22;&#x3E;
          Inbox
          &#x3C;b-badge variant=&#x22;danger pill&#x22; text-indicator&#x3E;
            99+
            &#x3C;span class=&#x22;visually-hidden&#x22;&#x3E;unread messages&#x3C;/span&#x3E;
          &#x3C;/b-badge&#x3E;
        &#x3C;/b-button&#x3E;
      &#x3C;/div&#x3E;
      &#x3C;div class=&#x22;col-sm-3&#x22;&#x3E;
        &#x3C;b-button variant=&#x22;primary&#x22; class=&#x22;position-relative&#x22;&#x3E;
          Profile
          &#x3C;b-badge variant=&#x22;danger&#x22; dot-indicator&#x3E;
            &#x3C;span class=&#x22;visually-hidden&#x22;&#x3E;New alerts&#x3C;/span&#x3E;
          &#x3C;/b-badge&#x3E;
        &#x3C;/b-button&#x3E;
      &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-badge variant=&#x22;primary &#x22; pill&#x3E;Primary&#x3C;/b-badge&#x3E;
    &#x3C;b-badge variant=&#x22;secondary mx-1&#x22; pill&#x3E;Secondary&#x3C;/b-badge&#x3E;
    &#x3C;b-badge variant=&#x22;success mx-1&#x22; pill&#x3E;Success&#x3C;/b-badge&#x3E;
    &#x3C;b-badge variant=&#x22;danger mx-1&#x22; pill&#x3E;Danger&#x3C;/b-badge&#x3E;
    &#x3C;b-badge variant=&#x22;warning mx-1&#x22; pill&#x3E;Warning&#x3C;/b-badge&#x3E;
    &#x3C;b-badge variant=&#x22;info mx-1&#x22; pill&#x3E;Info&#x3C;/b-badge&#x3E;
    &#x3C;b-badge variant=&#x22;light mx-1 text-dark&#x22; pill&#x3E;Light&#x3C;/b-badge&#x3E;
    &#x3C;b-badge variant=&#x22;dark &#x22; pill&#x3E;Dark&#x3C;/b-badge&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-badge variant=&#x22;soft-primary &#x22; pill&#x3E;Primary&#x3C;/b-badge&#x3E;
    &#x3C;b-badge variant=&#x22;soft-secondary mx-1&#x22; pill&#x3E;Secondary&#x3C;/b-badge&#x3E;
    &#x3C;b-badge variant=&#x22;soft-success mx-1&#x22; pill&#x3E;Success&#x3C;/b-badge&#x3E;
    &#x3C;b-badge variant=&#x22;soft-danger mx-1&#x22; pill&#x3E;Danger&#x3C;/b-badge&#x3E;
    &#x3C;b-badge variant=&#x22;soft-warning mx-1&#x22; pill&#x3E;Warning&#x3C;/b-badge&#x3E;
    &#x3C;b-badge variant=&#x22;soft-info mx-1&#x22; pill&#x3E;Info&#x3C;/b-badge&#x3E;
    &#x3C;b-badge variant=&#x22;soft-light mx-1 text-dark&#x22; pill&#x3E;Light&#x3C;/b-badge&#x3E;
    &#x3C;b-badge variant=&#x22;soft-dark&#x22; pill&#x3E;Dark&#x3C;/b-badge&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-badge pill variant=&#x22;soft-primary  iq-custom-badge&#x22;&#x3E;
      Primary
      &#x3C;button class=&#x22;btn btn-primary btn-sm rounded-pill iq-cancel-btn&#x22;&#x3E;
        &#x3C;svg class=&#x22;icon-14&#x22; width=&#x22;14&#x22; height=&#x22;14&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; fill=&#x22;none&#x22; viewBox=&#x22;0 0 24 24&#x22; stroke=&#x22;currentColor&#x22;&#x3E;
          &#x3C;path stroke-linecap=&#x22;round&#x22; stroke-linejoin=&#x22;round&#x22; stroke-width=&#x22;2&#x22; d=&#x22;M6 18L18 6M6 6l12 12&#x22;&#x3E;&#x3C;/path&#x3E;
        &#x3C;/svg&#x3E;
      &#x3C;/button&#x3E;
    &#x3C;/b-badge&#x3E;
    &#x3C;b-badge pill variant=&#x22;soft-secondary  iq-custom-badge&#x22;&#x3E;
      Secondary
      &#x3C;button class=&#x22;btn btn-secondary btn-sm rounded-pill iq-cancel-btn&#x22;&#x3E;
        &#x3C;svg class=&#x22;icon-14&#x22; width=&#x22;14&#x22; height=&#x22;14&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; fill=&#x22;none&#x22; viewBox=&#x22;0 0 24 24&#x22; stroke=&#x22;currentColor&#x22;&#x3E;
          &#x3C;path stroke-linecap=&#x22;round&#x22; stroke-linejoin=&#x22;round&#x22; stroke-width=&#x22;2&#x22; d=&#x22;M6 18L18 6M6 6l12 12&#x22;&#x3E;&#x3C;/path&#x3E;
        &#x3C;/svg&#x3E;
      &#x3C;/button&#x3E;
    &#x3C;/b-badge&#x3E;
    &#x3C;b-badge pill variant=&#x22;soft-success  iq-custom-badge mt-1 mt-sm-0&#x22;&#x3E;
      Success
      &#x3C;button class=&#x22;btn btn-success btn-sm rounded-pill iq-cancel-btn&#x22;&#x3E;
        &#x3C;svg class=&#x22;icon-14&#x22; width=&#x22;14&#x22; height=&#x22;14&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; fill=&#x22;none&#x22; viewBox=&#x22;0 0 24 24&#x22; stroke=&#x22;currentColor&#x22;&#x3E;
          &#x3C;path stroke-linecap=&#x22;round&#x22; stroke-linejoin=&#x22;round&#x22; stroke-width=&#x22;2&#x22; d=&#x22;M6 18L18 6M6 6l12 12&#x22;&#x3E;&#x3C;/path&#x3E;
        &#x3C;/svg&#x3E;
      &#x3C;/button&#x3E;
    &#x3C;/b-badge&#x3E;
    &#x3C;b-badge pill variant=&#x22;soft-warning  iq-custom-badge mt-1 mt-sm-0&#x22;&#x3E;
      Warning
      &#x3C;button class=&#x22;btn btn-warning btn-sm rounded-pill iq-cancel-btn&#x22;&#x3E;
        &#x3C;svg class=&#x22;icon-14&#x22; width=&#x22;14&#x22; height=&#x22;14&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; fill=&#x22;none&#x22; viewBox=&#x22;0 0 24 24&#x22; stroke=&#x22;currentColor&#x22;&#x3E;
          &#x3C;path stroke-linecap=&#x22;round&#x22; stroke-linejoin=&#x22;round&#x22; stroke-width=&#x22;2&#x22; d=&#x22;M6 18L18 6M6 6l12 12&#x22;&#x3E;&#x3C;/path&#x3E;
        &#x3C;/svg&#x3E;
      &#x3C;/button&#x3E;
    &#x3C;/b-badge&#x3E;
    &#x3C;b-badge pill variant=&#x22;soft-danger  iq-custom-badge mt-1 mt-sm-0&#x22;&#x3E;
      Danger
      &#x3C;button class=&#x22;btn btn-danger btn-sm rounded-pill iq-cancel-btn&#x22;&#x3E;
        &#x3C;svg class=&#x22;icon-14&#x22; width=&#x22;14&#x22; height=&#x22;14&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; fill=&#x22;none&#x22; viewBox=&#x22;0 0 24 24&#x22; stroke=&#x22;currentColor&#x22;&#x3E;
          &#x3C;path stroke-linecap=&#x22;round&#x22; stroke-linejoin=&#x22;round&#x22; stroke-width=&#x22;2&#x22; d=&#x22;M6 18L18 6M6 6l12 12&#x22;&#x3E;&#x3C;/path&#x3E;
        &#x3C;/svg&#x3E;
      &#x3C;/button&#x3E;
    &#x3C;/b-badge&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
    &#x3C;b-badge pill variant=&#x22;soft-primary rounded iq-custom-badge&#x22;&#x3E;
      Primary
      &#x3C;button class=&#x22;btn btn-primary btn-sm rounded iq-cancel-btn&#x22;&#x3E;
        &#x3C;svg class=&#x22;icon-14&#x22; width=&#x22;14&#x22; height=&#x22;14&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; fill=&#x22;none&#x22; viewBox=&#x22;0 0 24 24&#x22; stroke=&#x22;currentColor&#x22;&#x3E;
          &#x3C;path stroke-linecap=&#x22;round&#x22; stroke-linejoin=&#x22;round&#x22; stroke-width=&#x22;2&#x22; d=&#x22;M6 18L18 6M6 6l12 12&#x22;&#x3E;&#x3C;/path&#x3E;
        &#x3C;/svg&#x3E;
      &#x3C;/button&#x3E;
    &#x3C;/b-badge&#x3E;
    &#x3C;b-badge pill variant=&#x22;soft-secondary rounded iq-custom-badge&#x22;&#x3E;
      Secondary
      &#x3C;button class=&#x22;btn btn-secondary btn-sm rounded iq-cancel-btn&#x22;&#x3E;
        &#x3C;svg class=&#x22;icon-14&#x22; width=&#x22;14&#x22; height=&#x22;14&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; fill=&#x22;none&#x22; viewBox=&#x22;0 0 24 24&#x22; stroke=&#x22;currentColor&#x22;&#x3E;
          &#x3C;path stroke-linecap=&#x22;round&#x22; stroke-linejoin=&#x22;round&#x22; stroke-width=&#x22;2&#x22; d=&#x22;M6 18L18 6M6 6l12 12&#x22;&#x3E;&#x3C;/path&#x3E;
        &#x3C;/svg&#x3E;
      &#x3C;/button&#x3E;
    &#x3C;/b-badge&#x3E;
    &#x3C;b-badge pill variant=&#x22;soft-success rounded iq-custom-badge mt-1 mt-sm-0&#x22;&#x3E;
      Success
      &#x3C;button class=&#x22;btn btn-success btn-sm rounded iq-cancel-btn&#x22;&#x3E;
        &#x3C;svg class=&#x22;icon-14&#x22; width=&#x22;14&#x22; height=&#x22;14&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; fill=&#x22;none&#x22; viewBox=&#x22;0 0 24 24&#x22; stroke=&#x22;currentColor&#x22;&#x3E;
          &#x3C;path stroke-linecap=&#x22;round&#x22; stroke-linejoin=&#x22;round&#x22; stroke-width=&#x22;2&#x22; d=&#x22;M6 18L18 6M6 6l12 12&#x22;&#x3E;&#x3C;/path&#x3E;
        &#x3C;/svg&#x3E;
      &#x3C;/button&#x3E;
    &#x3C;/b-badge&#x3E;
    &#x3C;b-badge pill variant=&#x22;soft-warning rounded iq-custom-badge mt-1 mt-sm-0&#x22;&#x3E;
      Warning
      &#x3C;button class=&#x22;btn btn-warning btn-sm rounded iq-cancel-btn&#x22;&#x3E;
        &#x3C;svg class=&#x22;icon-14&#x22; width=&#x22;14&#x22; height=&#x22;14&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; fill=&#x22;none&#x22; viewBox=&#x22;0 0 24 24&#x22; stroke=&#x22;currentColor&#x22;&#x3E;
          &#x3C;path stroke-linecap=&#x22;round&#x22; stroke-linejoin=&#x22;round&#x22; stroke-width=&#x22;2&#x22; d=&#x22;M6 18L18 6M6 6l12 12&#x22;&#x3E;&#x3C;/path&#x3E;
        &#x3C;/svg&#x3E;
      &#x3C;/button&#x3E;
    &#x3C;/b-badge&#x3E;
    &#x3C;b-badge pill variant=&#x22;soft-danger rounded iq-custom-badge mt-1 mt-sm-0&#x22;&#x3E;
      Danger
      &#x3C;button class=&#x22;btn btn-danger btn-sm rounded iq-cancel-btn&#x22;&#x3E;
        &#x3C;svg class=&#x22;icon-14&#x22; width=&#x22;14&#x22; height=&#x22;14&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; fill=&#x22;none&#x22; viewBox=&#x22;0 0 24 24&#x22; stroke=&#x22;currentColor&#x22;&#x3E;
          &#x3C;path stroke-linecap=&#x22;round&#x22; stroke-linejoin=&#x22;round&#x22; stroke-width=&#x22;2&#x22; d=&#x22;M6 18L18 6M6 6l12 12&#x22;&#x3E;&#x3C;/path&#x3E;
        &#x3C;/svg&#x3E;
      &#x3C;/button&#x3E;
    &#x3C;/b-badge&#x3E;
  &#x3C;/div&#x3E;</code></pre>
  </div>
</template>
