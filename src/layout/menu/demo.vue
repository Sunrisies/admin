<template>
  <div class="flex">
     <el-menu
    default-active="2"
    class="el-menu-vertical-demo border min-h-screen"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
  <div class="flex justify-center h-16 items-center">
      <img
        class="w-8 h-8"
        src="https://naive-ui-admin.vercel.app/assets/logo.1ea765ca.png"
        alt=""
      />
      <h2 class="ml-2">NaiveUiAdmin</h2>
    </div>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>

  </div>
 
</template>

<script setup>
import { defineProps } from 'vue'
let props = defineProps({
    isCollapse: {
		type: Boolean,
		default: [],
		required: true,
	},
})
const handleOpen = (key, keyPath ) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>