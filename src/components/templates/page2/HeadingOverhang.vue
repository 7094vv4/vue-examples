<template lang="pug">
  .HeadingOverhang
    VELoremSection
</template>

<style lang="scss" scoped>
.HeadingOverhang {
  height: 24rem;
  overflow: hidden;
  position: relative;
  width: 24rem;
}
</style>

<style lang="scss">
.HeadingOverhang {
  .VELoremSection {
    .h2 {
      font-size: 6rem;
      left: -0.7rem;
      position: absolute;
      text-transform: uppercase;
      top: -1.5rem;
      white-space: nowrap;
    }

    .p {
      &:first-of-type {
        margin-top: 3.8rem;
      }

      &:not(:first-of-type) {
        display: none;
      }
    }
  }
}
</style>
