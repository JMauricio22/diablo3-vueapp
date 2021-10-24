<template>
  <div class="container">
    <HeaderBar />
    <BaseLayout />
    <FooterBar />
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar/Index.vue'
import BaseLayout from './BaseLayout.vue'
import FooterBar from '@/components/FooterBar/Index.vue'

export default {
  name: 'MainLayout',
  components: {
    HeaderBar,
    BaseLayout,
    FooterBar
  }
}
</script>
