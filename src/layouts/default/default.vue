<template>
  <n-layout content-style="min-height: 100vh">
    <n-layout position="absolute" style="" has-sider>
      <!-- 側邊欄 -->
      <n-layout-sider
        content-style="padding;"
        :native-scrollbar="false"
        bordered
        style="background-color: black"
      >
        <Sidebar />
      </n-layout-sider>
      <n-layout content-style="padding: 0px;" :native-scrollbar="false">
        <n-layout-header style="padding: 10px" bordered>
          <Header />
        </n-layout-header>
        <Content />
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script setup>
import Sidebar from "./Sidebar.vue";
import Content from "./Content.vue";
import Header from "./Header.vue";
</script>

<style scoped>
.n-menu-item-content-header p {
  color: white;
}

.n-menu-item:hover .n-menu-item-content-header p {
  color: black;
  transition: 0.3s;
}
</style>
