<template>
  <a-layout-footer style="text-align: center">
    <p>
      ©{{ $store.state.config.Year }}- {{ $store.state.config["Company Name"] }}. All rights reserved. <br/>
      备案号：<a href="http://beian.miit.gov.cn/" target="_blank">{{ $store.state.config.ICP }}</a><br/>
      联系电话：{{ $store.state.config.Phone }}<br/>
      邮寄地址：{{ $store.state.config["Mail address"] }}（收）<br/>
    </p>
  </a-layout-footer>
</template>

<script>
export default {
  name: "layout-footer",
  data() {
    return {
      data: {}
    }
  }
}
</script>

<style scoped>

</style>