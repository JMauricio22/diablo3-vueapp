<template>
  <b-row class="my-4">
    <b-col sm="12" md="10" offset-md="1">
      <h2 class="text-center font-diablo">{{ details.name }}</h2>
      <div class="d-flex justify-content-center my-2">
        <img :src="itemUrl" :alt="details.icon" />
      </div>
      <p class="text-center fst-italic">
        Required Level
        <span class="text-info">({{ details.requiredLevel }})</span>
      </p>
      <b-row>
        <b-col md="10" sm="12" offset-md="1">
          <p class="text-center fw-light text-light fst-italic">
            {{ details.flavorText }}
          </p>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      required: true
    }
  },
  computed: {
    itemUrl () {
      const host = 'http://media.blizzard.com/d3/icons/items/large/'
      return `${host}${this.details.icon}.png`
    }
  }
}
</script>
