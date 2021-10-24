<template>
  <div>
    <h2 class="font-diablo mt-1">Attributes</h2>
    <div class="row">
      <div
        class="col-12 my-3"
        v-for="(attribute, attributeName) of attributes"
        :key="attributeName"
      >
        <b-row>
          <b-col>
            <h3 class="fw-bold fs-4">
              {{ attributeName }}
            </h3>
          </b-col>
          <b-col
            v-for="(text, iy) of attribute"
            :key="iy"
            variant="light"
            sm="10"
          >
            <p class="my-1 text-dark-yellow fw-light">{{ text }}</p>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Attributes',
  props: {
    attributes: {
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
