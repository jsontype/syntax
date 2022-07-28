<template>
  <section
    v-if="items.length"
    class="mt-4"
  >
    <hr>
    <b-pagination
      v-model="currentPage"
      :total-rows="itemRows"
      :per-page="perPage"
      align="right"
      @input="$emit('search')"
    ></b-pagination>
    <b-table
      class="text-nowrap"
      thead-class="text-center"
      hover
      bordered
      no-border-collapse
      small
      responsive
      :items="items"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
    >
      <template #cell(delete)="data">
        <div
          class="del-icon text-center"
          @click="$emit('removeSpec', { index: (currentPage - 1) * perPage  + data.index, specId : data.item.specId })">
          <i class="fas fa-times"></i>
        </div>
      </template>
      <template #cell(index)="data">
        {{ (currentPage - 1) * perPage  + data.index + 1 }}
      </template>
      <template #cell(specId)="data">
        <a :href="`${linkUrl}${data.value}`">
          {{data.value}}
        </a>
      </template>
      <template #cell()="data">
        {{ Array.isArray(data.value) ? data.value.join(", ") : data.value }}
      </template>
    </b-table>
  </section>
</template>

<script>
export default {
  name: 'SearchResult',
  props: ['items'],
  data () {
    return {
      linkUrl: `${window.location.origin}/[app_name]/document?spec-id=`,
      perPage: 10,
      currentPage: 1,
      fields: [
        { key: 'index', label: '#' },
        { key: 'specId', label: '諸元番号', stickyColumn: true },
        { key: 'area', label: '地域' },
        { key: 'rfDesignStatus', label: 'RF設計ステータス' },
        { key: 'message', label: 'メッセージ' },
        { key: 'siteId', label: 'サイトID' },
        { key: 'baseNumber', label: '基地局管理番号' },
        { key: 'baseNameKanji', label: '基地局名' },
        { key: 'frequencyBand', label: '周波数' },
        { key: 'nwId', label: 'ネットワークID' }
      ]
    }
  },
  computed: {
    itemRows () {
      return this.items.length
    }
  },
  mounted () {
    if (this.isAdmin()) {
      this.fields.unshift({ key: 'delete', label: '削除' })
    }
  }
}
</script>

<style scoped>
.del-icon {
  cursor: pointer;
}
</style>
