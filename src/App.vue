<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>

  <el-scrollbar max-height="400px">
    <RouterView />
  </el-scrollbar>
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
