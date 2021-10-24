<template>
  <div>
    <h1 class="font-diablo">Info</h1>
    <div class="d-flex justify-content-between">
      <div>
        <p class="text-dark-yellow fw-light">
          Armor
        </p>
      </div>
      <div>
        <p class="fw-bold">
          {{ formatNumber(info.armor) }}
        </p>
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <div>
        <p class="text-dark-yellow fw-light">
          Attacks per second
        </p>
      </div>
      <div>
        <p class="fw-bold">
          {{ formatNumber(info.attacksPerSecond) }}
        </p>
      </div>
    </div>
    <Attributes :attributes="info.attributes" />
  </div>
</template>

<script>
import Attributes from './Attributes/Index.vue'
import formatNumber from '@/mixins/formatNumber'

export default {
  name: 'Info',
  components: { Attributes },
  mixins: [formatNumber],
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.text-dark-yellow
  color #efb45d
  font-weight 600
</style>
