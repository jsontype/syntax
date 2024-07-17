<template>
  <div class="user-actions" :id="this.params.data.id">
    <router-link :to="{name:'user.edit', params: {id: this.params.data.id} }">
      <button type="button" :attr="this.params.data.id" data-action-type="edit" class="btn btn-default text-success">
        <i class="fa fa-pencil"></i> Edit
      </button>
    </router-link>
    <button type="button" :attr="this.params.data.id"  data-action-type="remove" class="btn btn-default text-danger">
      <i class="fa fa-trash"></i> Delete
    </button>
  </div>
</template>

<script>
import Vue from 'vue'
import { core } from '../../../config/pluginInit'

export default Vue.extend({
  mixins: [
    {
      data () {
        return {
        }
      },
      methods: {
      }
    }
  ]
})
</script>
