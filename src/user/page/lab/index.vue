<style lang="sss" module>
@import '../../common/style/mixin.css';
.lab-wrapper {
  @mixin full-size;
}
</style>

<template lang="pug">
div(:class='$style["lab-wrapper"]')
  h1 hello lab
  #editor
    mavon-editor(v-model='mdValue'
     style="height: 100%")
</template>

<script>
import { mavonEditor } from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'

export default {
  components: {
    mavonEditor
  },
  data() {
    return {
      mdValue: ''
    }
  }
}
</script>
