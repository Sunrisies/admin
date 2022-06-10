<template>
    <div >
        <!-- <el-col :sm="12" :lg="6"> -->
            <el-result
                icon="warning"
                title="404提示"
                sub-title="你找的页面丢了~"
            >
                <template #extra>
                <el-button type="primary" @click="$router.push('/')">Back</el-button>
                </template>
            </el-result>
        <!-- </el-col> -->
    </div>
</template>