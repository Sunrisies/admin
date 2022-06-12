<template>
  <div class="common-layout min-h-screen box-border">
    <el-container class="min-h-screen box-border border">
      <el-aside class="min-h-screen w-1/6">
        <Menu :obj="obj" class="min-h-screen w-full" />
      </el-aside>
      <el-container class="border border-red-500">
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from './menu/index.vue'


</script>

<style scoped>
</style>