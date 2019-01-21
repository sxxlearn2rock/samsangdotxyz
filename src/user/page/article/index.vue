<style lang="sss" module>
@import '../../common/style/variable.css';
.article-wrapper {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}
</style>

<template lang="pug">
div(:class='$style["article-wrapper"]')
  article-list
</template>

<script>
import  ArticleList from './list.vue'
import { mapActions } from 'vuex';

export default {
  components: {
    ArticleList
  },
  methods: {
    ...mapActions([
      'setActiveNavMenu'
    ])
  },
  mounted() {
    // this.setActiveNavMenu('article');
  }
}
</script>