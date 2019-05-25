<template lang="pug">
  .TabbedContents
    .tabs
      VETab(v-for='item in list' :key='item.id' :id='item.id' :label='item.label' v-model='currentId')
    .contents
      transition(mode='out-in')
        span(:key='currentId') {{ current.content }}
</template>

<script>
export default {
  data () {
    return {
      currentId: 1,
      list: [
        {
          id: 1, label: 'Tab1', content: 'コンテンツ1'
        },
        {
          id: 2, label: 'Tab2', content: 'コンテンツ2'
        },
        {
          id: 3, label: 'Tab3', content: 'コンテンツ3'
        }
      ]
    }
  },
  computed: {
    current () {
      return this.list.find(e => e.id === this.currentId) || {}
    }
  }
}
</script>

<style lang="scss" scoped>
.contents {
  border: 1px solid $color-main;
  border-radius: 0 0 $br-item $br-item;
  padding: 1rem;
  text-align: center;
}
</style>
