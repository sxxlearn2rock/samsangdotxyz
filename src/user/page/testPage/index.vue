<style lang='sss' module>
.h2 {
  color: yellow;
}

.test-page-wrapper {
  width: 100%;
  height: 100%;
  &>.test-iframe {
    width: 100%;
    height: 100%;
  }
}
</style>

<template lang='pug'>
.div(:class='$style["test-page-wrapper"]')
  iframe#test-iframe(:src='iframeSrc'
  :class='$style["test-iframe"]' 
  frameborder="0"
  allowfullscreen="true" 
  webkitallowfullscreen="true"
  mozallowfullscreen="true"
  @load="iframeOnload()")
</template>

<script>
export default {
  data() {
    return {
      iframeSrc: ''
    }
  },
  methods: {
    iframeOnload() {
      // $('#test-iframe').contents().find('body').css('overflow', 'hidden')
      //     jwplayer('jwplayerWrapper').on("fullscreen",function(obj){
      //     if(obj.fullscreen){
      //       $('#test-iframe').width($('body').width())
      //       $('#test-iframe').height($('body').height())
                         
      //     }
      // });
    }
  },
  mounted() {
    document.domain = 'oa.com'
    this.iframeSrc = 'http://lo.learn.oa.com:8888/show/net?act_id=8272'
  }
}
</script>