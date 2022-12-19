<template lang="pug">
  input.VEInput.input(type='text' v-model='innerValue' placeholder='input...')
</template>

<script>
export default {
  props: {
    value: [String, Number]
  },
  computed: {
    innerValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
