<template lang="pug">
  .DevicePixelRatio
    .log {{ text }}
    canvas.canvas(ref='canvas' :style='styleObject')
</template>

<script>
export default {
  data () {
    return {
      // キャンバスの論理的な大きさ
      w: 200,
      h: 200,
      // デバイスピクセル比
      dpr: null,
      timer: null
    }
  },
  computed: {
    text () {
      return `現在のデバイスピクセル比：${this.dpr}`
    },
    width () {
      return this.w * this.dpr // 実態の大きさは倍にする
    },
    height () {
      return this.h * this.dpr
    },
    styleObject () {
      return {
        width: `${this.w}px`, // 画面表示上のサイズ
        height: `${this.h}px`
      }
    }
  },
  methods: {
    getDpr () {
      this.dpr = window.devicePixelRatio
    },
    draw () {
      const canvas = this.$refs.canvas
      canvas.width = this.width
      canvas.height = this.height

      const context = canvas.getContext('2d')
      // スケールを設定
      context.scale(this.dpr, this.dpr) // 内部的に倍で描く
      // 円を描く
      context.fillStyle = '#753'
      context.arc(this.w / 2, this.h / 2, 100, 0, 2 * Math.PI)
      context.fill()
    }
  },
  watch: {
    dpr () {
      this.draw()
    }
  },
  async mounted () {
    await this.$nextTick()
    this.getDpr()
    this.draw()
    this.timer = setInterval(this.getDpr, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
.DevicePixelRatio {
  @include flexCentering;
}

.canvas {
  margin-top: 1rem;
}
</style>
