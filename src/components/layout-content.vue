<template>
  <div>
    <a-layout-content style="padding: 0 50px">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <router-view/>
      </div>
    </a-layout-content>
  </div>
</template>

<script>


export default {
  name: "layout-content",
  components: {}
}
</script>

<style scoped>

</style>