<template lang="pug">
  .SwayButton
    button.button-sway
      span.span hover me
</template>

<style lang="scss" scoped>
.button-sway {
  align-items: center;
  background-color: $color-main;
  border-radius: 50px;
  display: flex;
  height: 60px;
  justify-content: center;
  text-transform: uppercase;
  width: 210px;

  .span {
    color: $color-background;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.7px;
  }

  &:hover {
    animation: rotate 0.7s ease-in-out both;
  }

  &:hover .span {
    animation: storm 0.7s ease-in-out both;
    animation-delay: 0.06s;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }

  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }

  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }

  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
}

@keyframes storm {
  0% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }

  25% {
    transform: translate3d(4px, 0, 0) translateZ(0);
  }

  50% {
    transform: translate3d(-3px, 0, 0) translateZ(0);
  }

  75% {
    transform: translate3d(2px, 0, 0) translateZ(0);
  }

  100% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
}
</style>
