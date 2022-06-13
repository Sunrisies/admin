<template>
  <div class="bg-[#545c64] min-h-screen width">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="1"
      :collapse="isCollapse"
      text-color="#fff"
      router
      unique-opened
    >
    <div class="flex justify-center h-16 items-center">
      <img
        class="w-6 h-6"
        src="https://naive-ui-admin.vercel.app/assets/logo.1ea765ca.png"
        alt=""
      />
      <h2 v-show="!isCollapse" class="ml-1">NaiveUiAdmin</h2>
    </div>
      <el-sub-menu
        :index="'/'+item.id"
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
          :index="'/' + iconList[index]"
          v-for="it in item.children"
          :key="it.id"
        >
          {{ it.name }}</el-menu-item
        >
      </el-sub-menu>
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>