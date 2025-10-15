<template>
  <div id="people" class="component">
    <aside>
      <aside-items />
    </aside>
    <section class="contents">
      <main-contents />
    </section>
  </div>
</template>

<script>
export default {
  name: 'People',
  components: {
    AsideItems: {
      render: function(createElement) {
        return createElement('div')
      }
    },
    MainContents: {
      render: function(createElement) {
        return createElement('div')
      }
    }
  }
}
</script>
