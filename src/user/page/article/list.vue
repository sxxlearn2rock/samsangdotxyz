<style lang="sss" module>
@import '../../common/style/variable.css';
.list-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .list {
    width: 70%;
    background: $content-bg-color-base;
    .list-nav {
      display: flex;
      align-items: center;
      width: 100%;
      height: 40px;
      border-bottom: 1px solid $sep-line-color-base;
    } 
  }
  .right-sidebar {
    width: 27%;
    background: #ddd;
  }
}

.list-body {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 30px 30px 30px;
  padding: 0 20px;
  .item-head {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    &>div {
      display: flex;
      align-items: center;
    }
    &>.left-part {
      width: 50%;
      &>span {
        margin-right: 8px;
      }
      .special-column {
        color: $color-primary;
      }
    }
    &>.tag-group {
      justify-content: flex-end;
      width: 50%;
      &>.tag-icon {
        color: $color-gray-dark;
        margin-right: 5px;
      }
    }

  }
  .item-body {

  }
  .item-foot {

  }
}

</style>

<template lang="pug">
div(:class='$style["list-wrapper"]')
  div(:class='$style["list"]')
    div(:class='$style["list-nav"]')
      span.menu-item(v-for='item in articleNavs'
      :class='{active: item.nav === activeNav}'
      @click='getArticles(item.nav)')
        a {{ item.name }}
    div(:class='$style["list-body"]')
      div(:class='$style["list-item"]')
        div(:class='$style["item-head"]')
          div(:class='$style["left-part"]')
            span(:class='$style["special-column"]') 专栏
            span 2019-01-01
          div(:class='$style["tag-group"]')
            span(:class='$style["tag-icon"]')
              i.fa.fa-tags
            span.tag.tag-primary vue
            span.tag.tag-primary webpack
        div(:class='$style["item-body"]')
          span(:class='$style["article-title"]') vue2+webpack4从零开始开发指南
        div(:class='$style["item-foot"]')
  div(:class='$style["right-sidebar"]')
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      articleNavs: [
        {
          name: '推荐',
          nav: 'recommend'
        },
        {
          name: '前端',
          nav: 'frontend'
        },
        {
          name: '后端',
          nav: 'backend'
        }]
    }
  },
  computed: {
    ...mapGetters('article', [
      'activeNav'
    ])
  },
  methods: {
    ...mapActions('article', [
        'setActiveNav',
    ]),
    getArticles(nav) {
      this.setActiveNav(nav)
    }
  },
  mounted() {
    this.setActiveNav('recommend')
  }
}
</script>