<template>
  <div class="heroes-list border-top border-secondary mt-5 pt-5">
    <b-table
      dark
      :items="heroes"
      :fields="fields"
      hover
      striped
      small
      stacked="sm"
    >
      <template #cell(name)="data">
        <HeroIco :hero="data.item" />
      </template>

      <template #cell(class)="data">
        <HeroClassLevel
          :hero="{ class: data.item.class, level: data.item.level }"
        />
      </template>

      <template #cell(kills)="data">
        <span>{{ formatNumber(data.item.kills.elites) }}</span>
      </template>
    </b-table>
  </div>
</template>

<script>
import HeroIco from './HeroIco.vue'
import HeroClassLevel from './HeroClassLevel.vue'
import formatNumber from '@/mixins/formatNumber.js'

export default {
  name: 'HeroesList',
  data () {
    return {
      fields: [
        {
          key: 'name',
          label: 'Name'
        },
        {
          key: 'class',
          class: 'Class',
          sortable: true
        },
        {
          key: 'kills',
          class: 'Kilss',
          sortable: true
        }
      ]
    }
  },
  props: {
    heroes: {
      required: true,
      type: Array
    }
  },
  components: {
    HeroIco,
    HeroClassLevel
  },
  mixins: [formatNumber]
}
</script>
