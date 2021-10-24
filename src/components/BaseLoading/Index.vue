<template>
  <div class="loading-wrapper text-center py-5">
    <div class="spinner-wrapper w-100">
      <b-spinner
        class="spinner"
        label="Loading..."
        :type="type"
        :variant="variant"
      />
    </div>
    <h1 class="my-5">Loading...</h1>
  </div>
</template>

<script>
export default {
  name: 'BaseLoading',
  props: {
    type: {
      required: false,
      type: String,
      default: 'border',
      validator: value => ['grow', 'border'].indexOf(value) !== -1
    },
    variant: {
      required: false,
      type: String,
      default: 'info',
      validator: value =>
        [
          'primary',
          'secondary',
          'danger',
          'warning',
          'success',
          'info',
          'light',
          'dark'
        ].indexOf(value) !== -1
    }
  }
}
</script>
