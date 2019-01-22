<style lang="sss" module>
@import '../../common/style/common.css';
.content-wrapper {
  d: flex;
  justify-content: space-between;
  @mixin full-size;
  .left-ladder {
    w: 14%;
    h: 100%;
    bg: #bbb;
  }
  .content-body {
    w: 70%;
    h: 100%;
    bg: $content-bg-color-base;
  }
  .right-sidebar {
    w: 14%;
    h: 100%;
    bg: #bbb;
  }
}

.content-body {
  padding: 15px;
  d: flex;
  .content {
    flex-grow: 1;
  }
  .side-tool-bar {
    w: 60px;
    h: 100%;
    bg: #ddd;
  }
  .head {
    w: 100%;
    &>div{
      padding: 5px 0;
    }
    &>.title {
      font-size: $font-size-h3;
      font-weight: bold;
      c: $text-color-base;
    }
    &>.detail {
      @mixin fja;
      &>.tag-group {
        @mixin fja;
        margin-left: 30px;
        .tag-icon {
          color: $color-gray-dark;
        }
        .tag {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>

<template lang="pug">
div(:class='$style["content-wrapper"]')
  div(:class='$style["left-ladder"]')
  div(:class='$style["content-body"]')
    div(:class='$style["content"]')
      div(:class='$style["head"]')
        div(:class='$style["title"]') 从零搭建Vue2+Webpack4工程(一) 搭建开发环境
        div(:class='$style["detail"]')
          span(:class='$style["publish-date"]') 2019-01-01 15:22:33
          div(:class='$style["tag-group"]')
            span(:class='$style["tag-icon"]')
              i.fa.fa-tags
            span(:class='$style["tag"]').tag.tag-info vue
            span(:class='$style["tag"]').tag.tag-info vue
            span(:class='$style["tag"]').tag.tag-info vue
        div(:class='$style["special-column"]')
          a.link 所属专栏：从零搭建Vue2+Webpack4工程 
    div(:class='$style["side-tool-bar"]')
      i.icon.icon-xs.icon-gray-primary.fa.fa-thumbs-up
      i.icon.icon-sm.icon-gray-info.fa.fa-thumbs-up
      i.icon.icon-bs.icon-gray-warning.fa.fa-thumbs-up
      i.icon.icon-lg.icon-gray-success.fa.fa-thumbs-up
      i.icon.icon-xl.icon-gray-error.fa.fa-thumbs-up
  div(:class='$style["right-sidebar"]')
</template>

<script>
export default {

}
</script>