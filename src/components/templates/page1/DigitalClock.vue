<template lang="pug">
  .DigitalClock {{ hour | addZeroPadding }}:{{ minute | addZeroPadding }}:{{ second | addZeroPadding }}
</template>

<script>
export default {
  data () {
    return {
      currentTime: null,
      timer: null
    }
  },
  computed: {
    hour () {
      return this.currentTime.getHours()
    },
    minute () {
      return this.currentTime.getMinutes()
    },
    second () {
      return this.currentTime.getSeconds()
    }
  },
  methods: {
    update () {
      this.currentTime = new Date()
    }
  },
  filters: {
    addZeroPadding (val) {
      return String(val).padStart(2, '0')
    }
  },
  created () {
    this.update()
    this.timer = setInterval(this.update, 100)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
.DigitalClock {
  align-items: center;
  display: flex;
  font-family: 'Roboto Mono', monospace;
  height: 8rem;
  justify-content: center;
  width: 8rem;
}
</style>
