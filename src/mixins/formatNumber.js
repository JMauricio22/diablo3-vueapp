import numeral from 'numeral'

export default {
  methods: {
    formatNumber (n) {
      if (!n) {
        return 0
      }

      return numeral(Number(n)).format()
    }
  }
}
