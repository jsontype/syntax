<template>
  <b-container fluid>
      <b-row class="row">
        <b-col lg="12">
            <div class="iq-card">
              <div class="iq-card-body">
                  Add Your Content Here.....
              </div>
            </div>
        </b-col>
      </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'

export default {
  name: 'BlankPage',
  mounted () {
    core.index()
  }
}
</script>
