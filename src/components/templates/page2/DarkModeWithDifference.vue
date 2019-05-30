// https://dev.wgao19.cc/2019-05-04__sun-moon-blending-mode/

<template lang="pug">
  .DarkModeWithDifference(:style='styleObject')
    VEButton(@click='toggle') toggle
    VELoremSection
</template>

<script>
export default {
  data () {
    return {
      dark: false
    }
  },
  computed: {
    styleObject () {
      const style = {
        backgroundColor: '#d2c6c6',
        mixBlendMode: 'difference'
      }
      return this.dark ? style : null
    }
  },
  methods: {
    toggle () {
      this.dark = !this.dark
    }
  }
}
</script>

<style lang="scss" scoped>
.DarkModeWithDifference {
  background-color: #fff;
  color: #000;
  height: 24rem;
  overflow: auto;
  width: 24rem;
}

.VEButton {
  border-color: #000;
  color: #000;
  margin-bottom: 1rem;
}
</style>
