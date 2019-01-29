<style lang="sss" module>
.article-wrapper {
  width: 100%;
  height: 100%;
}
</style>

<template lang="pug">
div(:class='$style["article-wrapper"]')
  //- article-list
  router-view
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