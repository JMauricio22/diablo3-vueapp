<template>
  <div class="search-form my-5">
    <div class="row">
      <div class="col-12 col-md-8 offset-md-2 p-md-4 rounded-3">
        <b-form @submit.prevent="onSubmit">
          <b-form-group
            id="input-group-1"
            label="BattleTag"
            label-for="input-text"
            description="Format: YourProfile#1234(IF you don't have an account write SuperRambo#2613)"
          >
            <b-form-input
              class="my-1"
              v-focus
              id="input-text"
              v-model="form.battleTag"
              type="text"
              size="lg"
              required
              placeholder="BattleTag"
            />
          </b-form-group>
          <b-form-group
            id="input-group-3"
            label="Region:"
            label-for="input-region"
          >
            <b-form-select
              class="my-1 w-100 py-3 px-3 rounded-3"
              id="input-region"
              v-model="form.region"
              :options="regions"
              required
            ></b-form-select>
          </b-form-group>
          <div class="d-flex justify-content-end mt-5">
            <b-button
              type="submit"
              variant="warning"
              size="lg"
              class="text-white fw-bolder"
              >Submit</b-button
            >
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import { regions } from '@/utils/regions'

export default {
  name: 'MainForm',
  data () {
    return {
      form: {
        battleTag: '',
        region: 'eu'
      }
    }
  },
  computed: {
    regions () {
      return regions.map(region => ({
        value: region,
        text: region.toUpperCase()
      }))
    }
  },
  methods: {
    onSubmit () {
      const { region, battleTag } = this.form
      this.$router.push({
        name: 'Profile',
        params: { region, battleTag: battleTag.replace('#', '-') }
      })
    }
  }
}
</script>
