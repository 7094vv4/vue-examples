<template lang="pug">
  .CountItemOfNestedList
    ol.ol
      li.li アジ
      li.li サバ
        ol.ol
          li.li サバ1
          li.li サバ2
          li.li サバ3
      li.li ウナギ
</template>

<style lang="scss" scoped>
.ol {
  counter-reset: counter;
  line-height: $lh-medium;
  list-style-type: none;
}

.li {
  &::before {
    content: counters(counter, '.') ' ';
    counter-increment: counter;
  }
}
</style>
