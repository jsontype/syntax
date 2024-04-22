<script lang="ts" setup>
import LinkIcon from '@/assets/images/link-icon.svg'
import SparkleIcon from '@/assets/images/sparkle-icon.png'

const props = defineProps({
  to: String,
  span: {
    type: String,
    default: '1'
  },
  title: {
    type: String
  },
  subtitle: {
    type: String
  },
  custom: {
    type: Boolean,
    default: false
  },
  sparkle: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div
    class="relative col-span-2 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6"
    :class="[
      'sm:col-span-' + props.span,
      {
        'hover:cursor-pointer': props.to,
        'flex-col justify-end': !props.custom
      },
      $attrs.class
    ]"
  >
    <slot />

    <div v-if="!props.custom && (props.title || props.subtitle)">
      <span v-if="props.subtitle" class="uppercase text-xs font-medium"> {{ subtitle }} </span>
      <div v-if="props.title" class="text-xl text-white">{{ title }}</div>
    </div>

    <!-- sparkle -->
    <div v-if="props.sparkle" class="absolute top-0 left-6 opacity-30">
      <a href="#">
        <img :src="SparkleIcon" alt="" />
      </a>
    </div>

    <!-- Link Icon -->
    <div v-if="props.to" class="absolute bottom-6 right-6 opacity-30 group-hover:opacity-100">
      <a href="#">
        <img :src="LinkIcon" alt="" />
      </a>
    </div>
  </div>
</template>

<style lang="scss"></style>
