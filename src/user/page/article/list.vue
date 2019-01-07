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
  padding: 0 15px;
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
      cursor: pointer;
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
      div(v-for='item of articleList'
      :class='$style["list-item"]'
      @mouseover='showOperBtns(true)'
      @mouseout='showOperBtns(false)')
        div(:class='$style["item-head"]')
          div(:class='$style["left-part"]')
            span(v-if='item.belong_special_column_id > 0'
            :class='$style["special-column"]') 专栏
            span {{ item.publish_date }}
          div(:class='$style["tag-group"]')
            span(:class='$style["tag-icon"]')
              i.fa.fa-tags
            span.tag.tag-info(v-for='tagItem of item.tags'
            :class='$style["tag"]') {{ tagItem }}
        div(:class='$style["item-body"]')
          span(:class='$style["article-title"]') {{ item.title }}
        div(:class='$style["item-foot"]')
          div(:class='$style["left-part"]')
            div.btn-group
              span.btn-item(title='点赞')
                i.fa.fa-thumbs-up.icon-primary  {{ item.thumbs_up_count }}
              span.btn-item(title='评论')
                i.fa.fa-commenting.icon-info  {{ item.comment_count }}
          div(:class='$style["right-part"]')
            transition(name='fade')
              div.btn-group(:class='$style["btn-group"]'
              v-show="isShowOperBtn")
                span.btn-item(:title='item.is_collected ? "已收藏" : "收藏"')
                  i.fa.fa-star.icon-warning(:class='{active: item.is_collected}')
                span.btn-item(title='分享')
                  i.fa.fa-share-alt.icon-success
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
        }],
        isShowOperBtn: false,
        articleList: []
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
    showOperBtns(flag) {
      this.isShowOperBtn = flag
    },
    getArticles(nav) {
      this.setActiveNav(nav)
      this.articleList.push({
        title: 'vue2+webpack4从零开始开发指南vue2+webpack4从零开始开发指南',
        belong_special_column_id: 1,
        publish_date: '2019-01-01 15:02:21',
        tags: ['vue', 'webpack', 'vue2', 'webpack4'],
        thumbs_up_count: 123,
        comment_count: 999,
        is_collected: true
      })
    }
  },
  mounted() {
    // this.setActiveNav('recommend')
    this.getArticles('recommend')
  }
}
</script>