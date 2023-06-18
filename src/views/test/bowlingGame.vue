<template>
  <div class="container">
    <el-input v-model="input"></el-input>
    <el-input v-model="output" disabled></el-input>
    <div class="btn">
      <el-button type="primary" @click="test">测试</el-button>
      <el-button @click="reset">清空</el-button>
    </div>
  </div>
  </template>

  <script setup lang="ts">
  import {ref} from 'vue'
  import {BowlingGame} from '@/utils/tset/BowlingGame'
  const input = ref('X|7/|9-|X|-8|8/|-6|X|X|X||80')
  const output = ref('')
  const test = () => {

  }
  const bowling = new BowlingGame()
  const reset = () => {
    output.value = ''
  }
  </script>

  <style scoped lang="less">
  .container{
    font-size: 16px;
    .el-input {
      margin-bottom: 12px;
    }
  }
  </style>
