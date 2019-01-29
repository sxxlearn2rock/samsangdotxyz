<style lang="sss" module>
@import '../style/variable.css';
.header-wrapper {
  width: 1200px;
  height: 100%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  .brand {
    padding: 3px 5px 5px;
    font-size: $font-size-h4;
    color: $color-gray-dark;
    border: 1px solid $color-gray-dark;
    border-radius: $border-radius-base;
    margin-right: 30px;
  }
  .menu {
    color: $color-gray-base;
    span.item {
      padding: 0 20px;
    }
  }
}
</style>

<template lang="pug">
div(:class='$style["header-wrapper"]')
  div(:class='$style["brand"]') 
    span Samsang
  div(:class='$style["menu"]')
    span.menu-item(v-for='menu of navMenus'
    :class='[$style["item"], {active: menu.name==activeNavMenu}]') 
      router-link(:to='menu.path') {{ menu.name }}
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      navMenus:[
      {
        name: 'home',
        path: '/home'
      },
      {
        name: 'article',
        path: '/article/list'
      },
      {
        name: 'lab',
        path: '/lab'
      }]
    }
  },
  computed: {
    ...mapGetters([
      'activeNavMenu'
    ])
  },
  mounted() {
  }
}
</script>
