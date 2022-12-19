<template lang="pug">
  .SmoothScroll
    ul.nav
      li
        a.link(href='#section1') Section 1
      li
        a.link(href='#section2') Section 2
      li
        a.link(href='#section3') Section 3
    VELoremSection#section1 Section 1
    VELoremSection#section2 Section 2
    VELoremSection#section3 Section 3
</template>

<style lang="scss" scoped>
.SmoothScroll {
  height: 24rem;
  overflow: auto;
  padding: initial;
  position: relative;
  scroll-behavior: smooth;
  width: 24rem;
}

.nav {
  background-color: $color-main;
  border-radius: $br-item;
  display: flex;
  justify-content: space-between;
  left: 1.5rem;
  padding: 1rem;
  position: sticky;
  top: 1.5rem;
  width: calc(100% - 3rem);
}

.link {
  border-color: $color-background;
  color: $color-background;
}

.VELoremSection {
  padding: 1.5rem;

  &:first-of-type {
    margin-top: 1.5rem;
  }
}
</style>
