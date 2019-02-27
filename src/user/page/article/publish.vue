<style lang="sss" module>
@import '../../common/style/mixin.css';
.wrapper {
  @mixin full-size;
  d: flex;
  flex-direction: column;
  #editor {
    flex-grow: 1;
  }
  .operation {
    height: 60px;
    @mixin fja;
  }
}
</style>

<style lang="sss">
:global {
  .v-note-wrapper {
    @mixin full-size;
  }
}  
</style>

<template lang="pug">
div(:class='$style["wrapper"]')
  div(:id='$style["editor"]')
    mavon-editor
  div(:class='$style["operation"]')
    a.btn 保存草稿
    a.btn 提交
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