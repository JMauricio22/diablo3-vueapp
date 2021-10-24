<template>
  <b-row class="my-1">
    <b-col>
      <div class="d-flex align-items-center">
        <div class="me-1">
          <img :src="gemUrl" :alt="gem.item.name" />
        </div>
        <div>
          {{ gem.item.name }}
          <span class="fst-italic text-info"> ({{ isGem }}) </span>
        </div>
      </div>
    </b-col>
    <b-col sm="10" offset="1">
      <p
        class="fw-lighter"
        v-for="(attribute, index) of gem.attributes"
        :key="index"
      >
        <small> {{ attribute }}</small>
      </p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'GemItem',
  props: {
    gem: {
      type: Object,
      required: true
    }
  },
  computed: {
    gemUrl () {
      const host = 'http://media.blizzard.com/d3/icons/items/small/'
      return `${host}${this.gem.item.icon}.png`
    },
    isGem () {
      return this.gem.isGem ? 'Gem' : 'Jewel'
    }
  }
}
</script>

<style lang="stylus" scoped>
p
 white-space normal
</style>
