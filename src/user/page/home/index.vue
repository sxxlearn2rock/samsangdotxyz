<style lang="sss" module>
.wrapper {
  width: 100%;
  height: 100%;
  background: #eee;
}
</style>

<template lang="pug">
div(:class="$style.wrapper")
  div hello home
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'setActiveNavMenu'
    ])
  },
  mounted() {
    // this.setActiveNavMenu('home');
  }
}
</script>
