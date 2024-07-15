<template>
  <div :id="this.params.data.id" class="user-actions">
    <nuxt-link :to="{name:'user.edit', params: {id: this.params.data.id} }">
      <button type="button" :attr="this.params.data.id" data-action-type="edit" class="btn btn-default text-success">
        <i class="fa fa-pencil" /> Edit
      </button>
    </nuxt-link>
    <button type="button" :attr="this.params.data.id" data-action-type="remove" class="btn btn-default text-danger" @click="removeData(params.data.id)">
      <i class="fa fa-trash" /> Delete
    </button>
  </div>
</template>

<script>
import Vue from 'vue'
// import { db } from '../../../config/firebase'
// import { core } from '../../../config/pluginInit'

export default Vue.extend({
  mixins: [
    {
      data () {
        return {
        }
      },
      methods: {
        removeData (id) {
          // db.collection('users').doc(id).delete()
          // core.showSnackbar('success', 'User has been remove successfully.')
        }
      }
    }
  ]
})
</script>
