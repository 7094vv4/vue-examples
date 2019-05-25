<template lang="pug">
  section.VELoremSection
    h2.h2
      slot Section
    p.p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed quam a lectus luctus auctor. Mauris ultrices vestibulum ante. Integer ex felis, porta vitae viverra ac, auctor quis libero. Ut aliquam augue ac tellus rhoncus auctor. Mauris in erat quis tellus suscipit vestibulum. Nam et lobortis nisl. Nunc varius erat nec lectus iaculis molestie.
    p.p Suspendisse ornare velit eu tempor sagittis. Ut quis justo vulputate, eleifend nisi eu, cursus velit. Vestibulum aliquam placerat diam eget tristique. Donec in risus id leo malesuada ultrices sed nec justo. Proin magna dui, faucibus finibus nisi ut, sagittis interdum quam. Curabitur fermentum urna nec luctus sodales. Maecenas neque nisi, pretium sit amet dignissim nec, hendrerit quis nibh. Sed ut tristique diam. Nunc nisl lorem, cursus vel magna imperdiet, vestibulum euismod odio. Suspendisse vitae congue sapien. Proin aliquam urna lacus, et vestibulum libero viverra sed.
</template>

<style lang="scss" scoped>
.h2 {
  font-size: $fs-large;
  font-weight: bold;
}

.p {
  line-height: $lh-short;
  margin-top: 0.5rem;
}
</style>
