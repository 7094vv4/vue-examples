<template lang="pug">
  .ReloadAnimation
    VEButton(@click='loadContent' :disabled='!list.length') コンテンツをリロード
    .wrap(:style='wrapStyleObject')
      ul.list(ref='list')
        li.item(v-for='item in list' :key='item.id') {{ item.name }}：￥{{ item.price }}
      transition
        .before-load-content(v-if='!list.length') LOADING NOW
</template>

<script>
import sleepable from '@/mixins/sleepable.js'
import axios from 'axios'

export default {
  mixins: [
    sleepable
  ],
  data () {
    return {
      list: [],
      height: 0
    }
  },
  computed: {
    wrapStyleObject () {
      return {
        height: `${this.height}px`
      }
    }
  },
  methods: {
    async loadContent () {
      this.list = []
      const { data } = await axios.get('/data/osakana.json')
      await this.$_sleepable_sleep(1500)
      this.list = data
    }
  },
  watch: {
    async list () {
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
  position: relative;
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

.before-load-content {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
