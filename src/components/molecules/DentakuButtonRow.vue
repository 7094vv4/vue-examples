<template lang="pug">
  .DentakuButtonRow
    VEButton(v-for='item in list' :key='item' @click='handleClick(item)') {{ item }}
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleClick (item) {
      this.$emit('clicked', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.DentakuButtonRow {
  display: flex;
  justify-content: center;
}

.VEButton {
  flex-basis: 100%;

  &:not(:first-child) {
    margin-left: 0.25rem;
  }
}
</style>
