<template>
  <b-row>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Popovers</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <b-button id="popover" variant="danger" size="lg">Click to toggle popover</b-button>

          <b-popover target="popover" triggers="click" placement="right">
            <template #title>Popover Title</template>
            And here's some amazing content. It's very engaging. Right?
          </b-popover>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Dismiss on next click</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Use the <code>focus</code> trigger to dismiss popovers on the user’s next click of a different element than the toggle element.</p>
          <b-button id="popover" variant="danger" size="md">Dismissible popover</b-button>
          <b-popover target="popovers" triggers="click" placement="left">
            <template #title>Popover Title</template>
            And here's some amazing content. It's very engaging. Right?
          </b-popover>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Disabled elements</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Elements with the <code>disabled</code> attribute aren’t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you’ll want to trigger the popover from a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> and override the <code>pointer-events</code> on the disabled element.</p>
          <b-button v-b-popover.click.start="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="primary" :disabled="true">Disabled button</b-button>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Hover elements</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>For disabled popover triggers, you may also prefer <code>data-trigger="hover"</code> so that the popover appears as immediate visual feedback to your users as they may not expect to <em>click</em> on a disabled element.</p>
          <span v-b-popover.hover.right="'Disabled popover'">
            <b-button variant="primary" :disabled="true">Disabled button</b-button>
          </span>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col sm="12" lg="6">
      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Four directions</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Four options are available: top, right, bottom, and left aligned.</p>
          <b-button v-b-popover.click.top="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" class="me-1 mb-1">Popover on top</b-button>
          <b-button v-b-popover.click.right="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" class="me-1 mb-1">Popover on right</b-button>
          <b-button v-b-popover.click.bottom="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" class="me-1 mb-1">Popover on bottom</b-button>
          <b-button v-b-popover.click.left="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" class="mb-1">Popover on left</b-button>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Popovers With Color</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Four options are available: top, right, bottom, and left aligned.</p>
          <b-button v-b-popover.click.top="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="primary" class="me-1 mb-1">Popover on top</b-button>
          <b-button v-b-popover.click.right="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="success" class="me-1 mb-1">Popover on right</b-button>
          <b-button v-b-popover.click.bottom="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="danger" class="me-1 mb-1">Popover on bottom</b-button>
          <b-button v-b-popover.click.left="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="info" class="mb-1">Popover on left</b-button>
        </b-card-body>
      </b-card>

      <b-card no-body>
        <b-card-header class="d-flex justify-content-between">
          <div class="header-title">
            <h4 class="card-title">Popovers With Color</h4>
          </div>
        </b-card-header>
        <b-card-body>
          <p>Four options are available: top, right, bottom, and left aligned.</p>
          <b-button v-b-popover.click.top="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="primary-subtle" class="me-1 mb-1">Popover on top</b-button>
          <b-button v-b-popover.click.right="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="success-subtle" class="me-1 mb-1">Popover on right</b-button>
          <b-button v-b-popover.click.bottom="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="danger-subtle" class="me-1 mb-1">Popover on bottom</b-button>
          <b-button v-b-popover.click.left="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'" variant="info-subtle" class="mb-1">Popover on left</b-button>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>
<script setup>
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
</script>
