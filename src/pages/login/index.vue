<template>
  <el-row class="min-h-screen border imgs">
    <el-col class="flex justify-center">
      <div class="w-1/5 mt-20">
        <div>
          <img
            src="https://naive-ui-admin.vercel.app/assets/account-logo.0a6f895e.png"
            alt=""
          />
        </div>
        <div class="mb-6">
          <h6 class="text-center">Naive Ui Admin中台前端/设计解决方案</h6>
        </div>
        <div>
          <el-form ref="RefInput" :model="form" :rules="rules">
            <el-form-item prop="email">
              <el-input v-model="form.email" placeholder="请输入正确的邮箱">
                <template #prefix>
                  <el-icon><User /></el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                show-password
                v-model="form.password"
                placeholder="请输入密码"
              >
                <template #prefix>
                  <el-icon><Unlock /></el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item class="mt-10">
              <el-button type="primary" @click="submitForm" class="w-full"
						 :loading="loading"
                >登 入</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, reactive } from 'vue'
import {ElMessage} from 'element-plus'
import {useRouter} from 'vue-router'
import { useStore } from 'vuex'

//定义邮箱跟密码
const form = reactive({
  email: '',
  password: '',
})
//点击按钮的初始化
let loading = ref(false)

const RefInput = ref(null)

const router = useRouter()
const store = useStore()
//表单验证
const rules = {
  email: [
    {
      required: true,
      message: '邮箱不能为空',
      trigger: 'blur'
    }],
  password: [
    {
      required: true,
      message: '密码不能少于6个',
      trigger: 'blur'
    }],
}

const submitForm = () => {
  RefInput.value.validate((valid) => {
    //当邮箱跟密码都有值，才会触发
    if (!valid) {
      return false
    }
	loading.value = true;
    //调用等入的api获取token
	  store.dispatch('login',form).then(res => {
		  ElMessage({
			  message: '登入成功,即将进入系统',
			  type: 'success',
		  })
		  //跳转到后台首页
		  router.push('/')
	  }).finally(() => {
		  loading.value = false
	  })
  })
}
</script>

<style>
.imgs {
  background: url("https://naive-ui-admin.vercel.app/assets/login.7b57ab51.svg");
}
</style>