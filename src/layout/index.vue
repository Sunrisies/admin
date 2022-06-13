<template>
  <div class="min-h-screen box-border flex">
    <div >
      <Menu :obj="obj" :isCollapse="isCollapse" />
    </div>
    <div class="flex-1">
       <Header class="shadow-md" />
      <div>123213213</div>
    </div>

  </div>
</template>

<script setup>
import Menu from './menu/index.vue'
import Header from './header/index.vue'
import {provide,ref} from 'vue'
//控制侧边栏的大小
let isCollapse = ref(true)
const changeSiderType = () => {
  isCollapse.value = !isCollapse.value
}
provide('changeSiderType', changeSiderType)
provide('isCollapse',isCollapse)
</script>

<style scoped>

</style>