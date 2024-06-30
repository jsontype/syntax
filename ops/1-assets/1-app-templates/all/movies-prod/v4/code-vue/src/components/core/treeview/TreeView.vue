<template>
  <li>
    <div :class="{bold: isFolder}" @click="toggle" @dblclick="makeFolder">
      <span v-if="isFolder">
        <template v-if="isOpen">
          <template v-if="hasGroupOpenSlot">
            <slot name="groupClosed" />
          </template>
          <template v-else>
            <i class="fas fa-minus-square"></i>
          </template>
        </template>
        <template v-else>
          <template v-if="hasGroupCloseSlot">
            <slot name="groupOpened" />
          </template>
          <template v-else>
              <i class="fas fa-plus-square"></i>
          </template>
        </template>
      </span>
      <span v-else>
        <template v-if="hasItemSlot">
          <slot name="item"></slot>
        </template>
        <template v-else>
          <i class="fas fa-caret-square-right"></i>
        </template>
      </span> {{ item.name }}
    </div>
    <ul class="tree" v-show="isOpen" v-if="isFolder">
      <template v-if="item.children">
        <TreeView
          class=""
          v-for="(child, index) in item.children"
          :key="index"
          :item="child"
        >
          <template v-slot:groupOpened>
            <template v-if="hasGroupOpenSlot">
              <slot name="groupOpened" />
            </template>
            <template v-else>
              <i class="fas fa-plus-square"></i>
            </template>
          </template>
          <template v-slot:groupClosed>
            <template v-if="hasGroupOpenSlot">
              <slot name="groupClosed" />
            </template>
            <template v-else>
              <i class="fas fa-minus-square"></i>
            </template>
          </template>
          <template v-slot:item>
            <template v-if="hasItemSlot">
              <slot name="item"></slot>
            </template>
            <template v-else>
              <i class="fas fa-caret-square-right"></i>
            </template>
          </template>
        </TreeView>
      </template>
      <!--<li class="add" @click="$emit('add-item', item)">+</li>-->
    </ul>
  </li>
</template>

<script>
import TreeView from './TreeView'

export default {
  name: 'TreeView',
  props: ['item', 'isOpened'],
  comments: {
    TreeView
  },
  data () {
    return {
      isOpen: !!this.isOpened
    }
  },
  computed: {
    isFolder: function () {
      return this.item.children &&
          this.item.children.length
    },
    hasGroupOpenSlot () {
      return !!this.$slots.groupOpened
    },
    hasGroupCloseSlot () {
      return !!this.$slots.groupClosed
    },
    hasItemSlot () {
      return !!this.$slots.item
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    makeFolder: function () {
      if (!this.isFolder) {
        this.$emit('make-folder', this.item)
        this.isOpen = true
      }
    }
  }
}
</script>
