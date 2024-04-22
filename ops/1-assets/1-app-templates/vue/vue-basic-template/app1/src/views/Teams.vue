<template>
  <div id="teams" class="component">
    <aside>
      <aside-items/>
    </aside>
    <section class="contents">
      <main-contents/>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Teams',
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
