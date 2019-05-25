<template lang="pug">
  .Timer
    VEInput(v-model.number='remain' v-if='!isStart' placeholder='Sec' type='number')
    .remain(v-else) {{ remain }}
    .buttons
      VEButton.start(v-if='!isStart' :disabled='!remain' @click='start') Start
      VEButton.stop(v-else :disabled='!remain' @click='stop') Stop
      VEButton.reset(:disabled='!remain' @click='reset') Reset
</template>

<script>
export default {
  data () {
    return {
      remain: 0,
      isStart: false,
      timer: null
    }
  },
  methods: {
    start () {
      this.timer = setInterval(this.coundDown, 1000)
      this.isStart = true
    },
    stop () {
      this.clear()
      this.isStart = false
    },
    reset () {
      if (this.timer) {
        this.clear()
      }
      this.isStart = false
      this.remain = 0
    },
    coundDown () {
      if (this.remain === 0) {
        this.clear()
        this.isStart = false
      } else {
        this.remain--
      }
    },
    clear () {
      clearInterval(this.timer)
    }
  }
}
</script>

<style lang="scss" scoped>
.Timer {
  align-items: center;
  display: flex;
  font-family: 'Roboto Mono', monospace;
}

.VEInput,
.remain {
  width: 7rem;
}

.remain {
  border: 1px solid $color-main;
  border-radius: $br-item;
  line-height: 1.3125rem;
  padding: calc(0.5rem + 1px);
}

.buttons {
  display: flex;
  margin-left: 0.25rem;
}

.start,
.stop,
.reset {
  width: 6rem;
}

.reset {
  margin-left: 0.25rem;
}
</style>
