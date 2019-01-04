<style lang="sss" module>
@import '../../common/style/mixin.css';
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

.list-item {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 30px auto 36px;
  padding: 0 20px;
  border-bottom: 1px solid $sep-line-color-base;
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
      }
      &>.tag {
        margin-left: 5px;
      }
    }

  }
  .item-body {
    padding: 5px 0;
    &>.article-title {
      w: 100%;
      fs: $font-size-h4;
      c: $color-gray-darker;
      word-break: break-all;
    }
  }
  .item-foot {
    d: flex;
    justify-content: space-between;
    align-items: center;
    &>.left-part {
      @mixin fja;
      w: 50%;
      h: 100%;
    }
    &>.right-part {
      @mixin fja center, flex-end;
      w: 50%;
    }
    .thumbs-up:hover {
      color: $color-primary;
    }
    .comment:hover {
      color: $color-info;
    }
    .collect:hover {
      color: $color-warning;
    }
    .share:hover {
      color: $color-success;
    }
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
            span.tag.tag-info(:class='$style["tag"]') vue
            span.tag.tag-info(:class='$style["tag"]') webpack
            span.tag.tag-info(:class='$style["tag"]') vue2
            span.tag.tag-info(:class='$style["tag"]') webpack4
        div(:class='$style["item-body"]')
          span(:class='$style["article-title"]') vue2+webpack4从零开始开发指南vue2+webpack4从零开始开发指南
        div(:class='$style["item-foot"]')
          div(:class='$style["left-part"]')
            div.btn-group(:class='$style["btn-group"]')
              span.btn-item(:class='$style["thumbs-up"]')
                i.fa.fa-thumbs-up  255
              span.btn-item(:class='$style["comment"]')
                i.fa.fa-commenting  366
          div(:class='$style["right-part"]')
            div.btn-group(:class='$style["btn-group"]')
              span.btn-item(:class='$style["collect"]')
                i.fa.fa-star
              span.btn-item(:class='$style["share"]')
                i.fa.fa-share-alt
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