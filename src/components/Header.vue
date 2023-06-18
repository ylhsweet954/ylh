<template>
  <div class="header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">开始</el-menu-item>
      <el-sub-menu index="2">
        <template #title>测试</template>
        <el-menu-item index="2-1">拖拽</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>更多</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3">Info</el-menu-item>
      <el-menu-item index="4">Orders</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'


// const props = defineProps({
//   msg: {
//     type: String
//   },
// })

// const emit = defineEmits(['change'])
// const handleChange = () => {
//   emit('change')
// }
const router = useRouter()
const activeIndex = ref(1)
const handleSelect = (e: any) => {
  console.log('e', e)
  switch (e) {
    case '2-1':
      router.push('/drag')
      break
    case '1':
      router.push('/')
      break
    default:
      console.log('error')
  }
}

</script>



<style lang="less" scoped>
.header {
  display: flex;
  justify-content: center;
  user-select: none;

  .el-menu-item {
    width: 200px;
  }
}
</style>
