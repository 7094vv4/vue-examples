<template lang="pug">
  .ChangePageTitle
    VEInput(v-model='text')
    VEButton(@click='change' :disabled='!text') タイトルを変える
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    change () {
      document.title = this.text
    }
  },
  mounted () {
    this.text = document.title
  }
}
</script>

<style lang="scss" scoped>
.VEButton {
  margin-top: 0.5rem;
}
</style>
