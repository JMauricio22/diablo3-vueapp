<template>
  <div class="home">
    <FormTitle />
    <MainForm />
  </div>
</template>

<script>
/* eslint-disable */
import FormTitle from './FormTitle.vue'
import MainForm from './HomeForm.vue'

export default {
  name: 'Home',
  components: {
    FormTitle,
    MainForm
  }
}
</script>
