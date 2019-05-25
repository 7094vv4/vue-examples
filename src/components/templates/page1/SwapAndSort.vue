<template lang="pug">
  .SwapAndSort
    .buttons
      VEButton(@click='sortByAscending') 昇順
      VEButton(@click='sortByDescending') 降順
    .buttons
      VEButton(@click='shuffle') シャッフル
    transition-group.list(tag='ul' name='list')
      li.item(v-for='item, index in list' :key='item.id')
        VEButton(type='text' :disabled='isUpDisable(index)' @click='up(index)') ↑
        span.span {{ item.id }}:
        span.span {{ item.name }}
        VEButton(type='text' :disabled='isDownDisable(index)' @click='down(index)') ↓
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    async loadContent () {
      const { data } = await axios.get('/data/pripara.json')
      this.list = data
    },
    isUpDisable (index) {
      return index === 0
    },
    isDownDisable (index) {
      return index === this.list.length - 1
    },
    sortByAscending () {
      this.list.sort((a, b) => {
        return a.id - b.id
      })
    },
    sortByDescending () {
      this.list.sort((a, b) => {
        return b.id - a.id
      })
    },
    shuffle () {
      const array = this.list.concat()
      for (let i = array.length - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1))
          ;[array[i], array[randomIndex]] = [array[randomIndex], array[i]]
      }
      this.list = array
    },
    up (index) {
      const head = this.list.slice(0, index - 1)
      const tail = [this.list[index - 1], ...this.list.slice(index + 1)]
      this.list = [...head, this.list[index], ...tail]
    },
    down (index) {
      const head = [...this.list.slice(0, index), this.list[index + 1]]
      const tail = this.list.slice(index + 2)
      this.list = [...head, this.list[index], ...tail]
    }
  },
  created () {
    this.loadContent()
  }
}
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  justify-content: space-around;

  &:not(:first-child) {
    margin-top: 0.5rem;
  }
}

.list {
  border-top: 1px solid $color-main;
  list-style-type: none;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  width: 10rem;
}

.list-move {
  transition: transform $ad-medium;
}

.item {
  display: flex;
  justify-content: space-between;

  &:not(:first-child) {
    margin-top: 0.25rem;
  }

  .VEButton,
  .span {
    &:first-child,
    &:last-child {
      width: 1rem;
    }

    &:first-child {
      margin-right: 0.5rem;
      width: 1rem;
    }

    &:last-child {
      margin-left: 0.5rem;
      width: 1rem;
    }

    &:nth-child(2) {
      width: 1.5rem;
    }

    &:nth-child(3) {
      width: calc(100% - (1rem * 2 + 1.5rem + 1rem));
    }
  }
}
</style>
