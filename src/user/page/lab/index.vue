<style lang="sss">
/* lab lab*/
#editor {
  margin: auto;
  width: 80%;
  height: 580px;
}
</style>

<template lang="pug">
div
  h1 hello lab
  #editor
    mavon-editor(v-model='mdValue'
     style="height: 100%")
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

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
