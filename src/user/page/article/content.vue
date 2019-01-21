<style lang="sss" module>
/*@import '../../common/style/common.css';
.content-wrapper {
  d: flex;
  @mixin size;
  .left-ladder {
    w: 200px;
    h: 100%;
    bg: #aaa;
  }
}*/
</style>

<template lang="pug">
div(:class='$style["content-wrapper"]')
  div(:class='$style["left-ladder"]')
  div(:class='$style["content-body"]')
  div(:class='$style["right-sidebar"]')
</template>

<script>
export default {

}
</script>