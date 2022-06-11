<template>
	<div class="common-layout min-h-screen box-border border border-red-400">
		<el-container class="min-h-screen box-border border  ">
			<el-aside class="h-full w-1/6 border border-red-400">侧边栏1111111111111111111111111111111111111111111111111</el-aside>
			<el-container class="border border-red-500">
				<el-header>Header</el-header>
				<el-main>Main</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script  setup>
import { getMenu } from '~/api/menu'

let getMenu =await getMenu();
console.log(getMenu,2222222222222)


</script>

<style scoped>

</style>