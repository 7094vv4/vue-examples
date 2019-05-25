<template lang="pug">
  #app(v-cloak)
    .pageSelector
      VETab(v-for='page in pages' :key='page.id' :id='page.id' :label='page.label' v-model='currentPageId')
    component.component(:is='currentComponent')
</template>

<script>
export default {
  data () {
    return {
      currentPageId: 1,
      pages: [
        {
          id: 1, label: 'JS', component: () => import('@/views/Page1.vue')
        },
        {
          id: 2, label: 'CSS', component: () => import('@/views/Page2.vue')
        }
      ]
    }
  },
  computed: {
    currentComponent () {
      return this.pages.find(e => e.id === this.currentPageId).component
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/ress/dist/ress.min.css';
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

#app {
  @include fullWidth;

  animation: cloak-in $ad-long;
  background-color: $color-parentBg;
  color: $color-main;
  font-family: 'system-ui', '-apple-system', 'BlinkMacSystemFont', Verdana, 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1;

  &[v-cloak] {
    opacity: 0;
  }

  @keyframes cloak-in {
    0% {
      opacity: 0;
    }
  }
}

.pageSelector {
  background-color: $color-background;
  left: 0;
  padding: 0.25rem 1rem 0 1rem;
  position: absolute;
  top: 0;
  width: 100%;

  .VETab {
    font-size: $fs-medium;
    padding: 0.75rem 1rem;
  }

  .tab-active {
    background-color: $color-parentBg;
  }
}

.component {
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  padding: 2.75rem 1rem 1rem 0;

  & > div {
    background-color: $color-background;
    border-radius: $br-window;
    margin: 1rem 0 0 1rem;
    padding: 1.5rem;
  }
}
</style>
