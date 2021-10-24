<template>
  <div>
    <BaseLoading v-if="isLoading" type="border" variant="info" />
    <template v-if="profileData !== null">
      <MainBlock :profile-data="profileData" />
      <ArtisansBlock :artisans-data="artisansData" />
    </template>
  </div>
</template>

<script>
import { getApiAccount } from '@/api/search'
import setError from '@/mixins/setError'
import BaseLoading from '@/components/BaseLoading/Index.vue'
import MainBlock from './MainBlock/Index.vue'
import ArtisansBlock from './ArtisansBlock/Index'

export default {
  name: 'ProfileView',
  data () {
    return {
      isLoading: false,
      profileData: null
    }
  },
  created () {
    this.isLoading = true
    const { region, battleTag: account } = this.$route.params
    this.fetchData(region, account)
  },
  mixins: [setError],
  methods: {
    fetchData (region, account) {
      getApiAccount({ region, account })
        .then(({ data }) => (this.profileData = data))
        .catch(error => {
          this.profileData = null
          const errorObj = {
            routeParams: this.$route.params,
            message: error.message
          }

          if (error.response) {
            errorObj.data = error.response.data
            errorObj.status = error.response.status
          }

          this.setApiErr(errorObj)

          this.$router.push({ name: 'Error' })
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  },
  components: { BaseLoading, MainBlock, ArtisansBlock },
  computed: {
    artisansData () {
      return {
        blacksmith: this.profileData.blacksmith,
        blacksmithHardcore: this.profileData.blacksmithHardcore,
        jeweler: this.profileData.jeweler,
        jewelerHardcore: this.profileData.jewelerHardcore,
        mystic: this.profileData.mystic,
        mysticHardcore: this.profileData.mysticHardcore
      }
    }
  }
}
</script>
