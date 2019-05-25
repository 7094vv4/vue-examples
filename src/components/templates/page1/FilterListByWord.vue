<template lang="pug">
  .FilterListByWord
    VEInput(v-model='word')
    .wrap(:style='wrapStyleObject')
      ul.list(ref='list')
        li.item(v-for='item in filteredList' :key='item.name') {{ item.name }}：{{ item.phonetic }}
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      word: '',
      list: [],
      height: 0
    }
  },
  computed: {
    filteredList () {
      return this.list.filter(val => val.name.startsWith(this.word) || val.phonetic.startsWith(this.word))
    },
    wrapStyleObject () {
      return {
        height: `${this.height}px`
      }
    }
  },
  methods: {
    async loadContent () {
      const { data } = await axios.get('/data/prefectures.json')
      this.list = data
    }
  },
  watch: {
    async filteredList () {
      await this.$nextTick()
      this.height = this.$refs.list.getBoundingClientRect().height
    }
  },
  created () {
    this.loadContent()
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  border: 1px solid $color-main;
  border-radius: $br-item;
  margin-top: 0.5rem;
  min-height: 3rem;
  overflow: hidden;
  transition: height $ad-medium;
}

.list {
  padding: 1rem;
}

.item {
  &:not(:first-child) {
    margin-top: 0.25rem;
  }
}
</style>
