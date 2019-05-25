<template lang="pug">
  .ClipPathDecoration
    p.p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed quam a lectus luctus auctor.
    p.p.clipPath Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed quam a lectus luctus auctor.
    p.p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed quam a lectus luctus auctor.
</template>

<style lang="scss" scoped>
.ClipPathDecoration {
  height: 24rem;
  overflow: auto;
  padding: initial;
  width: 24rem;
}

.p {
  padding: 1.5rem;
}

.clipPath {
  background-color: $color-main;
  clip-path: polygon(0 0, 100% 20%, 100% 65%, 0 100%);
  color: $color-background;
  padding: 4rem 1.5rem;
}
</style>
