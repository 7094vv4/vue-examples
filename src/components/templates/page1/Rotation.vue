<template lang="pug">
  .Rotation(ref='container')
    .item(ref='item' :style='position')
</template>

<script>
export default {
  data () {
    return {
      degree: 0,
      radius: 25,
      timer: null,
      container: {
        width: 0,
        height: 0
      },
      item: {
        width: 0,
        height: 0
      }
    }
  },
  computed: {
    rotation () {
      return (this.degree * Math.PI) / 180
    },
    position () {
      return {
        left: `${this.container.width / 2 + this.radius * Math.cos(this.rotation) - this.item.width / 2}px`,
        top: `${this.container.height / 2 + this.radius * Math.sin(this.rotation) - this.item.height / 2}px`
      }
    }
  },
  methods: {
    rotate () {
      if (this.degree === 359) {
        this.degree = 0
      } else {
        this.degree += 1
      }
    }
  },
  async mounted () {
    await this.$nextTick()
    this.container.width = this.$refs.container.getBoundingClientRect().width
    this.container.height = this.$refs.container.getBoundingClientRect().height
    this.item.width = this.$refs.item.getBoundingClientRect().width
    this.item.height = this.$refs.item.getBoundingClientRect().height
    this.timer = setInterval(this.rotate, 10)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
.Rotation {
  height: 100px;
  position: relative;
  width: 100px;
}

.item {
  background-color: $color-main;
  border-radius: 10px;
  height: 10px;
  position: absolute;
  width: 10px;
}
</style>
