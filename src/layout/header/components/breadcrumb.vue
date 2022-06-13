<template>
  <el-breadcrumb separator="/" class="flex">
    <el-breadcrumb-item :to="{ path: '/' }">
        <el-dropdown>
            <el-button class="el-dropdown-link">
                Dropdown List
            </el-button>
            <template #dropdown>
                <el-dropdown-menu >
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </el-breadcrumb-item>
    <el-breadcrumb-item>
        <a href="/">promotion management</a>
        </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
