<style lang="sss">
@import './common/style/common.css';
:global {

}
</style>

<script>
// import './common/style/variable.css';
</script>

<style lang="sss" module>
@import './common/style/variable.css';
.app-wrapper {
  width: 100%;
  height: 100%;
  background: $color-gray-lightest;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: $nav-height auto $footer-height;
  .header {
    background: $nav-bg-color;
  }
  .body {
    background: $color-gray-lightest;
    padding-top: 20px;
  }
  .footer {
    background: #ccc;
  }
}

</style>

<template lang="pug">
div(:class='$style["app-wrapper"]')
  div(:class="$style.header")
    nav-header
  div(:class="$style.body")
    router-view
  div(:class="$style.footer")
</template>

<script>
import navHeader from './common/component/header.vue'

export default {
  components: {
    navHeader
  },
  mounted() {
  }
}
</script>
