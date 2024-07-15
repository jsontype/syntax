<template>
    <b-row>
      <b-col sm="12" lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Tooltips</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. The data-bs-placement attribute specifies the tooltip position.</p>
            <b-button v-b-tooltip.hover title="Tooltip on top" class="mt-2 me-1">Tooltip on top</b-button>
            <b-button v-b-tooltip.hover.right title="Tooltip on right" class="mt-2 me-1">Tooltip on right</b-button>
            <b-button v-b-tooltip.hover.bottom title="Tooltip on bottom" class="mt-2 me-1">Tooltip on bottom</b-button>
            <b-button v-b-tooltip.hover.left title="Tooltip on left" class="mt-2">Tooltip on left</b-button>
          </b-card-body>
        </b-card>
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Disabled elements</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p>Elements with the <code>disabled</code> attribute aren’t interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you’ll want to trigger the tooltip from a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>, ideally made keyboard-focusable using <code>tabindex="0"</code>, and override the <code>pointer-events</code> on the disabled element.</p>
            <span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" title="Disabled tooltip">
              <b-button v-b-tooltip.hover :disabled="true" variant="primary" title="Tooltip on disabled"> Disabled button</b-button>
            </span>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="12" lg="6">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Tooltips</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left Using background colors</p>
            <b-button v-b-tooltip.hover variant="primary" title="Tooltip on top" class="mt-2 me-1">Tooltip on top</b-button>
            <b-button v-b-tooltip.hover.right variant="success" title="Tooltip on right" class="mt-2 me-1">Tooltip on right</b-button>
            <b-button v-b-tooltip.hover.bottom variant="danger" title="Tooltip on bottom" class="mt-2 me-1">Tooltip on bottom</b-button>
            <b-button v-b-tooltip.hover.left variant="info" title="Tooltip on left" class="mt-2">Tooltip on left</b-button>
          </b-card-body>
        </b-card>
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Tooltips</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left Using Light background colors</p>
            <b-button v-b-tooltip.hover variant="primary-subtle" title="Tooltip on top" class="mt-2 me-1">Tooltip on top</b-button>
            <b-button v-b-tooltip.hover.right variant="success-subtle" title="Tooltip on right" class="mt-2 me-1">Tooltip on right</b-button>
            <b-button v-b-tooltip.hover.bottom variant="danger-subtle" title="Tooltip on bottom" class="mt-2 me-1">Tooltip on bottom</b-button>
            <b-button v-b-tooltip.hover.left variant="info-subtle" title="Tooltip on left" class="mt-2">Tooltip on left</b-button>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="12" lg="12">
        <b-card no-body>
          <b-card-header class="d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Hover elements</h4>
            </div>
          </b-card-header>
          <b-card-body>
            <p>Hover over the buttons below to see the tooltip.</p>
            <router-link
              v-b-tooltip.hover
              to="#"
              text="Hover
              over me"
              class="text-primary"
              title="Some tooltip text!"
              >Hover Over Me</router-link
            >
            <div class="tooltip bs-tooltip-top" role="tooltip">
              <div class="arrow"></div>
              <div class="tooltip-inner">Some tooltip text!</div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
</template>
<script setup>
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
</script>
