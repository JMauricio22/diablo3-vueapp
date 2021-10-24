<template>
  <div>
    <div v-if="!isLoading && item">
      <ItemDetailHeader :details="detailHeaderProps" />
      <b-row>
        <b-col v-if="hasGems" md="6" sm="12" order-md="2">
          <Gems :gems="item.gems" />
        </b-col>
        <b-col md="6" sm="12" order-md="1" :offset-md="infoOffset">
          <Info :info="infoProps" />
        </b-col>
      </b-row>
    </div>
    <BaseLoading v-if="isLoading" />
  </div>
</template>

<script>
import ItemDetailHeader from './ItemDetailHeader/Index.vue'
import Info from './Info/Info.vue'
import Gems from './Gems/Gems.vue'
import BaseLoading from '@/components/BaseLoading/Index.vue'
import { getApiDetailedHeroItems } from '@/api/search'
import setError from '@/mixins/setError'

export default {
  name: 'Item',
  data () {
    return {
      item: null,
      isLoading: false
    }
  },
  components: { BaseLoading, ItemDetailHeader, Info, Gems },
  mixins: [setError],
  created () {
    this.isLoading = true
    const { region, battleTag: account, heroId } = this.$route.params
    getApiDetailedHeroItems({ region, account, heroId })
      .then(({ data }) => {
        const itemName = this.$route.params.name
        this.item = Object.values(data).find(item => itemName === item.name)
      })
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
  },
  computed: {
    detailHeaderProps () {
      const { name, icon, requiredLevel, flavorText } = this.item
      return {
        name,
        icon,
        requiredLevel,
        flavorText
      }
    },
    infoProps () {
      const { armor, attacksPerSecond, attributes } = this.item
      return {
        armor,
        attacksPerSecond,
        attributes
      }
    },
    hasGems () {
      return this.item.gems
    },
    infoOffset () {
      const offset = this.item.gems ? '0' : '3'
      return offset
    }
  }
}
</script>
