<style lang='sss' module>
.h2 {
  color: yellow;
}

.test-page-wrapper {
  &>#test-iframe {
    width: 100%;
    height: 100%;
  }
}
</style>

<template lang='pug'>
.test-page-wrapper
  iframe#test-iframe(:src='iframeSrc' 
  frameborder="0" 
  scrolling="no"
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
      $('#test-iframe').contents().find('body').css('overflow', 'hidden')
    }
  },
  mounted() {
    // document.domain = 'oa.com'
    // this.iframeSrc = 'http://lo.learn.oa.com:8888/mobile/netIframe?act_id=8373'
  }
}
</script>