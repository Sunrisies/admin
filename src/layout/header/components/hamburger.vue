<template>
<div class="w-20 h-14 text-4xl flex justify-center items-center" >
    <el-icon @click="toggleClick">
        <Fold v-if="!isCollapse" />
        <Expand v-else/>
    </el-icon>
</div>
</template>  

<script setup>
import {inject} from 'vue'
//控制侧边栏的大小
const changeSiderType= inject('changeSiderType',)
const isCollapse = inject('isCollapse')
console.log(isCollapse,111)
const toggleClick = () => {
    changeSiderType()
}
</script>