<template lang="pug">
  .OpenConfirm
    .state {{ state }}
    VEButton(@click='openConfirm') Open
</template>

<script>
export default {
  data () {
    return {
      confirm: false
    }
  },
  computed: {
    state () {
      return this.confirm ? 'はい' : 'いいえ'
    }
  },
  methods: {
    openConfirm () {
      this.confirm = confirm('よろしいですか？')
    }
  }
}
</script>

<style lang="scss" scoped>
.state {
  margin-bottom: 0.5rem;
  text-align: center;
}
</style>
