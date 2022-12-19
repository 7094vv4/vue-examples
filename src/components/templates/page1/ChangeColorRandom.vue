<template lang="pug">
  .ChangeColorRandom(:style='styleObject')
    VEButton(type='text' @click='changeColor') 色を変える
</template>

<script>
export default {
  data () {
    return {
      randomHue: 0
    }
  },
  computed: {
    start () {
      return `hsl(${this.randomHue}, 100%, 50%)`
    },
    end () {
      return `hsl(${this.randomHue + 40}, 100%, 50%)`
    },
    styleObject () {
      return {
        backgroundImage: `linear-gradient(-135deg, ${this.start}, ${this.end})`
      }
    }
  },
  methods: {
    changeColor () {
      this.randomHue = Math.trunc(Math.random() * 360)
    }
  }
}
</script>

<style lang="scss" scoped>
.ChangeColorRandom {
  align-items: center;
  display: flex;
  height: 12rem;
  justify-content: center;
  width: 12rem;
}
</style>
