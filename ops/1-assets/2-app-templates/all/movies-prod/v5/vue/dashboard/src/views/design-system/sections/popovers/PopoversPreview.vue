<template>
  <div class="bd-example">
    <b-button id="popover" variant="danger">Click to toggle popover</b-button>
    <b-popover target="popover" triggers="click" placement="right">
      <template #title>Popover Title</template>
      And here's some amazing content. It's very engaging. Right?
    </b-popover>
  </div>

  <div class="bd-example">
    <b-button v-b-popover.click.top="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'">Popover on top</b-button>
    {{ ' ' }}
    <b-button v-b-popover.click.right="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'">Popover on end</b-button>
    {{ ' ' }}
    <b-button v-b-popover.click.bottom="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'">Popover on bottom</b-button>
    {{ ' ' }}
    <b-button v-b-popover.click.left="'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'">Popover on start</b-button>
  </div>
</template>
