<template lang="pug">
  button.VEButton(type='button' :class='classObject' @click='handleClick')
    slot
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default',
      validator: val => ['default', 'text'].indexOf(val) !== -1
    }
  },
  computed: {
    classObject () {
      return {
        'button': this.type === 'default',
        'button-text': this.type === 'text'
      }
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
