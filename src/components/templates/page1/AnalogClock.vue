<template lang="pug">
  .AnalogClock
    .circle
    .lineHour(:style='degreeOfHour')
    .lineMin(:style='degreeOfMinute')
    .lineSec(:style='degreeOfSecond')
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
    },
    degreeOfHour () {
      return { 'transform': `rotate(${this.hour * (360 / 12) + this.minute * (360 / 12 / 60)}deg)` }
    },
    degreeOfMinute () {
      return { 'transform': `rotate(${this.minute * (360 / 60)}deg)` }
    },
    degreeOfSecond () {
      return { 'transform': `rotate(${this.second * (360 / 60)}deg)` }
    }
  },
  methods: {
    update () {
      this.currentTime = new Date()
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
.AnalogClock {
  height: 10rem;
  position: relative;
  width: 10rem;
}

.circle {
  background-color: $color-background;
  border-radius: 50%;
  height: 1.5rem;
  left: calc(50% - 0.75rem);
  position: absolute;
  top: calc(50% - 0.75rem);
  width: 1.5rem;
  z-index: 1;
}

.lineBase {
  background-color: $color-main;
  position: absolute;
  transform-origin: bottom;
}

.lineHour {
  @extend .lineBase;

  height: 3rem;
  left: calc(50% - 0.25rem);
  top: calc(50% - 3rem);
  width: 0.5rem;
}

.lineMin {
  @extend .lineBase;

  height: 4.5rem;
  left: calc(50% - 0.125rem);
  top: calc(50% - 4.5rem);
  width: 0.25rem;
}

.lineSec {
  @extend .lineBase;

  height: 4.75rem;
  left: calc(50% - 0.0625rem);
  top: calc(50% - 4.75rem);
  width: 0.125rem;
}
</style>
