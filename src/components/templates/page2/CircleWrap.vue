<template lang="pug">
  .CircleWrap
    .circle
    VELoremSection
</template>

<style lang="scss" scoped>
.CircleWrap {
  height: 24rem;
  overflow: auto;
  width: 24rem;
  word-break: break-all;
}

.circle {
  background-color: $color-main;
  border-radius: 100%;
  float: right;
  height: 12rem;
  shape-outside: circle();
  width: 12rem;
}
</style>
