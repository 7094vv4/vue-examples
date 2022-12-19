<template lang="pug">
  button.VETab.tab(@click='$emit("input", id)' :class='active') {{ label }}
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  computed: {
    active () {
      return this.value === this.id ? 'tab-active' : false
    }
  }
}
</script>
