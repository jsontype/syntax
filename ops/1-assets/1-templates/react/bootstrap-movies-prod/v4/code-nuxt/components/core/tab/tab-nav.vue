<template>
  <ul :id="id" :class="'nav nav-'+' '+pills ? 'pills' : '' +' '+tabs ? 'tabs' : ''+' '+vertical ? 'flex-column' : ''+' '+align ? 'justify-content-'+align : ''">
    <slot />
  </ul>
</template>
<script>
// import Tab from 'bootstrap/js/src/tab'
export default {
  name: 'TabNav',
  props: {
    id: { type: String, default: 'myTab' },
    pills: { type: Boolean, default: false },
    vertical: { type: Boolean, default: false },
    tabs: { type: Boolean, default: false },
    align: { type: String, default: '' }
  },
  mounted () {
    const triggerTabList = [].slice.call(document.querySelectorAll(`#${this.id} a`))
    triggerTabList.forEach(function (triggerEl) {
      // const tabTrigger = new Tab(triggerEl)

      triggerEl.addEventListener('click', function (e) {
        e.preventDefault()
        // tabTrigger.show()
      })
    })
  }
}
</script>
