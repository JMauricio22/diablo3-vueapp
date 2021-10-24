<template>
  <div>
    <h1 class="font-diablo">Gems</h1>
    <GemItem v-for="(gem, index) of gems" :key="index" :gem="gem" />
  </div>
</template>

<script>
import GemItem from './GemItem.vue'

export default {
  name: 'Gems',
  components: { GemItem },
  props: {
    gems: {
      type: Array,
      required: false
    }
  }
}
</script>
