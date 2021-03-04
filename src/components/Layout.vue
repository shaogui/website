<template>
  <div id="App">
    <a-layout id="components-layout-demo-top" class="layout">
      <LayoutHeader></LayoutHeader>
      <LayoutContent></LayoutContent>
      <LayoutFooter></LayoutFooter>
    </a-layout>
  </div>
</template>
<script>
import LayoutHeader from "@/components/layout-header";
import LayoutContent from "@/components/layout-content";
import LayoutFooter from "@/components/layout-footer";

export default {
  data() {
    return {
      data: {}
    };
  },
  components: {
    LayoutHeader, LayoutContent, LayoutFooter
  },
  mounted() {
    this.$store.commit('update_config')
  }
};


</script>
<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
