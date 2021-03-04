<template>
  <div>
    <div class="logo" style="width: 200px">
      <h2>{{ $store.state.config["Product Name"] }}</h2>
    </div>
    <a-menu theme="light" mode="horizontal" :default-selected-keys="['1']"
            :style="{ lineHeight: '64px' }">
      <template v-for="(item) in data.routes">
        <a-menu-item v-if="item.meta" :key="item.key">
          <span>{{ item.meta.title }}</span>
          <router-link :to="item.path"/>
        </a-menu-item>
      </template>
    </a-menu>
  </div>
</template>

<script>
import {routes} from "@/router"

export default {
  name: "layout-header",
  data() {
    return {
      data: {
        routes: routes[0].children
      }
    }
  },
  components: {},
  methods: {},
}
</script>

<style scoped>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style