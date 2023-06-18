<template>
  <div class="container">
    <Header></Header>
    <!-- <h1>welcome to my project!</h1> -->
    <el-dropdown>
      <el-button type="primary">
        Dropdown List
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'


</script>

<style scoped lang="less">
h1 {
  margin-top: 10%;
  text-align: center;
  font-size: 5vh;
}
</style>
