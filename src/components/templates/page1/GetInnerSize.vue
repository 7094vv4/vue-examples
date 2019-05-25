<template lang="pug">
  .GetInnerSize
    .width {{ width }}
    .height {{ height }}
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      width: 0,
      height: 0
    }
  },
  methods: {
    getInnerSize () {
      this.width = innerWidth
      this.height = innerHeight
    },
    handleResize: _.debounce(function () {
      this.getInnerSize()
    }, 100)
  },
  async mounted () {
    await this.$nextTick()
    this.getInnerSize()
    addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="scss" scoped>
.GetInnerSize {
  text-align: center;
}

.width {
  margin-bottom: 0.5rem;
}
</style>
