<template lang="pug">
  transition(name='modal' appear)
    .VEModal(@click.self='$emit("close")')
      .window
        .content
          slot
        footer.footer
          slot(name='footer')
            VEButton(@click='$emit("close")') Close
</template>

<style lang="scss" scoped>
.VEModal {
  @include z-first;

  align-items: center;
  background: $color-background--transparent;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
}

.window {
  background-color: $color-background;
  border-radius: $br-window;
  overflow: hidden;
}

.content {
  padding: 1rem;
}

.footer {
  border-top: 1px solid $color-main;
  padding: 1rem;
  text-align: right;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity $ad-short;

  .window {
    transition: opacity $ad-short, transform $ad-short;
  }
}

.modal-leave-active {
  transition: opacity $ad-medium ease;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;

  .window {
    opacity: 0;
    transform: translateY(-1rem);
  }
}
</style>
