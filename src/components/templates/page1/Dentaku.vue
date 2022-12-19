<template lang="pug">
  .Dentaku
    .field {{ field | numberWithDelimiter }}
    DentakuButtonRow(:list='[7, 8, 9]' :disabled='!isCanInput' @clicked='invoke')
    DentakuButtonRow(:list='[4, 5, 6]' :disabled='!isCanInput' @clicked='invoke')
    DentakuButtonRow(:list='[1, 2, 3]' :disabled='!isCanInput' @clicked='invoke')
    DentakuButtonRow(:list='[0, "C", "<"]' :disabled='isZero' @clicked='invoke')
    DentakuButtonRow(:list='["PUSH"]' :disabled='isZero' @clicked='invoke')
    transition
      ul.list(v-if='length')
        li.item(v-for='item in acc') {{ item | numberWithDelimiter }}
    transition
      DentakuButtonRow(v-if='length' :list='["POP"]' @clicked='invoke')
    transition
      .field-result(v-if='result !== "0"') {{ result | numberWithDelimiter }}
</template>

<script>
import DentakuButtonRow from '@/components/molecules/DentakuButtonRow.vue'

export default {
  components: {
    DentakuButtonRow
  },
  data () {
    return {
      field: '0',
      acc: []
    }
  },
  computed: {
    isCanInput () {
      return this.field.length < 10
    },
    isZero () {
      return this.field === '0'
    },
    length () {
      return this.acc.length
    },
    result () {
      return this.length ? this.acc.reduce((pre, cur) => String(Number(pre) + Number(cur))) : '0'
    }
  },
  methods: {
    invoke (item) {
      if (typeof item === 'number') {
        this.pushNum(item)
      } else {
        if (item === 'C') {
          this.clear()
        } else if (item === '<') {
          this.delete()
        } else if (item === 'PUSH') {
          this.push()
        } else if (item === 'POP') {
          this.pop()
        } else {
          return false
        }
      }
    },
    pushNum (item) {
      if (this.field === '0') this.field = ''
      this.field += String(item)
    },
    clear () {
      this.field = '0'
    },
    delete () {
      if (this.field.length === 1) {
        this.clear()
      } else {
        this.field = this.field.slice(0, -1)
      }
    },
    push () {
      this.acc.push(this.field)
      this.clear()
    },
    pop () {
      this.acc.pop()
    }
  },
  filters: {
    numberWithDelimiter (val) {
      if (!val) return '0'
      return val.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    }
  }
}
</script>

<style lang="scss" scoped>
.Dentaku {
  font-family: 'Roboto Mono', monospace;
}

.field {
  border: 1px solid $color-main;
  border-radius: $br-item;
  padding: 0.25rem;
  text-align: right;

  &-result {
    @extend .field;

    margin-top: 0.25rem;
  }
}

.DentakuButtonRow {
  margin-top: 0.25rem;
}

.list {
  border-bottom: 1px solid $color-main;
  border-top: 1px solid $color-main;
  margin-top: 0.25rem;
  padding: 0.25rem 0;
}

.item {
  text-align: right;

  &:not(:first-child) {
    margin-top: 0.25rem;
  }
}
</style>
