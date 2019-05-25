<template lang="pug">
  .HeadingShift
    .box
    VELoremSection
</template>

<style lang="scss" scoped>
.HeadingShift {
  display: flex;
  height: 24rem;
  overflow: auto;
  width: 48rem;
}

.box {
  background-color: #fff;
  height: 21rem;
  margin-right: 1.5rem;
  width: 21rem;
}

.VELoremSection {
  flex-shrink: 99;
}
</style>

<style lang="scss">
.HeadingShift {
  .VELoremSection {
    .h2 {
      font-size: 3rem;
      margin-left: -5rem;
    }
  }
}
</style>
