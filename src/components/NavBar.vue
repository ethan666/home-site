<template>
  <div class="wrapper">
    <div class="nav-bar">
      <IconHome class="logo" />
      <el-menu
        :default-active="activeIndex"
        class="nav-menu"
        mode="horizontal"
        @select="onLink"
      >
        <el-menu-item v-for="menu in routes" :index="menu.name">
          {{ menu.meta?.title ?? '' }}
        </el-menu-item>
      </el-menu>
      <el-button type="primary">登录/注册</el-button>
    </div>
  </div>
</template>

<script setup>
import IconHome from '@/components/icons/IconHome.vue'
import { routes } from '@/router'

const router = useRouter()

const onLink = (key, keyPath) => {
  console.log('menu: ', key, keyPath)
  router.push({ name: key })
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 24px;
}
.nav-bar {
  width: 100%;
  display: flex;
  // justify-content: space-between;

  align-items: center;
  gap: 48px;
  .logo {
    width: 60px;
    height: 60px;
  }
  .nav-menu {
    flex: 1 0;
    max-width: 100%;
  }
  .login-action {
  }
}
</style>
