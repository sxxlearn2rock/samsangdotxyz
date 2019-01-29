<style lang="sss" module>

</style>

<template lang="pug">
div(:class='$style["wrapper"]')
  div(:id='$style["editor"]')
    mavon-editor
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