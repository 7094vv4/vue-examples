<template lang="pug">
  .StripeFramedBox
    .stripe
      .stripe-inner Stripe
</template>

<style lang="scss" scoped>
.StripeFramedBox {
  height: 24rem;
  width: 24rem;
}

.stripe {
  background-image: linear-gradient(45deg, $color-main 25%, transparent 25%, transparent 50%, $color-main 50%, $color-main 75%, transparent 75%, transparent);
  background-repeat: repeat;
  background-size: 10px 10px;
  height: 100%;
  padding: 1rem;
}

.stripe-inner {
  align-items: center;
  background-color: $color-background;
  display: flex;
  font-size: $fs-large;
  font-weight: bold;
  height: 100%;
  justify-content: center;
}
</style>
