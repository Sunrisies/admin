<template>
  <el-col class="bg-[#545c64]">
    <div class="flex justify-center h-16 items-center">
      <img
        class="w-8 h-8"
        src="https://naive-ui-admin.vercel.app/assets/logo.1ea765ca.png"
        alt=""
      />
      <h2 class="ml-2">NaiveUiAdmin</h2>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="1"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      unique-opened
    >
      <el-sub-menu
        :index="item.id"
        v-for="(item, index) in menuList"
        :key="item.id"
      >
        <template #title>
          <el-icon>
            <component :is="iconList[index]" />
          </el-icon>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item
          class="ml-3"
          :index="it.id"
          v-for="it in item.children"
          :key="it.id"
        >
          {{ it.name }}</el-menu-item
        >
      </el-sub-menu>
    </el-menu>
  </el-col>
</template>

<script setup>
import { getMenu } from '~/api/menu'
import { ref } from 'vue'

const iconList = ref(['user', 'setting', 'shop', 'service', 'tickets', 'videoPlay', 'menu'])


const menuList = ref([])
const initMenusList = async () => {
  menuList.value = await getMenu()
}
initMenusList()




const handleOpen = (key, keyPath) => {

}
const handleClose = (key, keyPath) => {

}
</script>

<style>
</style>