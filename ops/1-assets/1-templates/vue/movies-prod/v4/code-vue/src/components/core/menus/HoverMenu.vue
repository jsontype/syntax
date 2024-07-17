<template>
  <ul tag="ul" :class="className" :id="idName">
    <li v-for="(item,index) in items" :key="index" :class="item.is_heading ? 'iq-menu-title' :''">
      <i v-if="item.is_heading && hideListMenuTitle" class="ri-subtract-line" />
      <span v-if="item.is_heading">{{ $t(item.name) }}</span>
      <router-link :to="item.link" v-if="!item.is_heading" :class="`iq-waves-effect`">
        <i :class="item.icon" v-if="item.is_icon_class"/>
        <template v-else v-html="item.icon">
        </template>
        <span>{{ $t(item.name) }}</span>
        <i v-if="item.children" class="ri-arrow-right-s-line iq-arrow-right" />
        <small v-html="item.append" v-if="hideListMenuTitle" :class="item.append_class" />
      </router-link>
      <List v-if="item.children" :items="item.children" :sidebarGroupTitle="hideListMenuTitle" :idName="item.name" :className="`iq-submenu ${item.class_name}`" />
    </li>
  </ul>
</template>
<script>
import List from './CollapseMenu'
import { core } from '../../../config/pluginInit'
export default {
  name: 'List',
  props: {
    items: Array,
    className: { type: String, default: 'iq-menu' },
    open: { type: Boolean, default: false },
    idName: { type: String, default: 'sidebar' },
    sidebarGroupTitle: { type: Boolean, default: true }
  },
  components: {
    List
  },
  computed: {
    hideListMenuTitle () {
      return this.sidebarGroupTitle
    }
  },
  mounted () {
  },
  methods: {
    activeLink (item) {
      return core.getActiveLink(item, this.$route.name)
    }
  }
}
</script>

<style scoped>
  .iq-submenu{
    max-height: 300px;
    overflow-y: scroll;
  }
</style>
