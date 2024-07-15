<template>
  <div :class="active?'rtl-box show':'rtl-box'" @click="active=!active">
    <button type="button" class="btn btn-light rtl-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 20 20" fill="white">
        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
      </svg>
    </button>
    <div class="rtl-panel">
      <ul class="modes">
        <li :class="!rtl ?'dir-btn active':'dir-btn'" data-mode="rtl" data-active="false" data-value="ltr" @click="modechange('ltr')">
          <a href="javascript:void(0);">LTR</a>
        </li>
        <li :class="rtl ?'dir-btn active':'dir-btn'" data-mode="rtl" data-active="true" data-value="rtl" @click="modechange('rtl')">
          <a href="javascript:void(0);">RTL</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modeswitch',
  data () {
    return {
      active: false,
      rtl: false
    }
  },
  methods: {
    modechange (mode) {
      const element = document.querySelector('html')
      if (mode === 'rtl') {
        element.setAttribute('dir', 'rtl')
        this.rtl = true
      }
      if (mode === 'ltr') {
        element.setAttribute('dir', 'ltr')
        this.rtl = false
      }
    }
  }
}
</script>
