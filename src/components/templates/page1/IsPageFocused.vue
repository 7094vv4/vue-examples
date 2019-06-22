<template lang="pug">
  .IsPageFocused {{ message }}
</template>

<script>
export default {
  data () {
    return {
      focused: null
    }
  },
  computed: {
    message () {
      return this.focused ? 'フォーカスがあたっている' : 'フォーカスがはずれている'
    }
  },
  methods: {
    setTrue () {
      this.focused = true
    },
    setFalse () {
      this.focused = false
    }
  },
  mounted () {
    addEventListener('focus', this.setTrue)
    addEventListener('blur', this.setFalse)
  },
  beforeDestroy () {
    removeEventListener('focus', this.setTrue)
    removeEventListener('blur', this.setFalse)
  }
}
</script>
