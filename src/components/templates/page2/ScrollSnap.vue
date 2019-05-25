<template lang="pug">
  .ScrollSnap
    template(v-for='i in [1, 2, 3, 4, 5]')
      section.section Section {{ i.toString() }}
</template>

<style lang="scss" scoped>
.ScrollSnap {
  height: 24rem;
  overflow: auto;
  padding: initial;
  scroll-snap-type: y mandatory;
  width: 24rem;
}

.section {
  align-items: center;
  display: flex;
  font-size: $fs-large;
  font-weight: bold;
  height: 100%;
  justify-content: center;
  scroll-snap-align: start;
  width: 100%;

  &:nth-child(even) {
    background-color: $color-main;
    color: $color-background;
  }
}
</style>
