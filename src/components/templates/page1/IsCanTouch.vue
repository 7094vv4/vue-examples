<template lang="pug">
  .IsCanTouch
    .text {{ text }}
</template>

<script>
export default {
  computed: {
    isSupported () {
      return !!('ontouchstart' in window ||
        (navigator.pointerEnabled && navigator.maxTouchPoints > 0))
    },
    text () {
      return `タッチ操作：${this.isSupported ? '可' : '否'}`
    }
  }
}
</script>
