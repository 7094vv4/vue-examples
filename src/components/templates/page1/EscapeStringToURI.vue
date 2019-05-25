<template lang="pug">
  .EscapeStringToURI
    VEInput(v-model='text')
    VEButton(@click='open' :disabled='!text') ツイートする
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  computed: {
    encoded () {
      let str = `${this.text} #Vue.js`
      str = encodeURIComponent(str)
      return `https://twitter.com/intent/tweet?text=${str}`
    }
  },
  methods: {
    open () {
      open(this.encoded)
      this.text = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.VEButton {
  margin-top: 0.5rem;
}
</style>
