<template>
  <el-row class="min-h-screen border imgs">
    <el-col class="flex justify-center">
      <div class="w-1/5 mt-20">
        <div>
          <img
            src="http://localhost:8001/src/assets/images/account-logo.png"
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
import { login } from '~/api/manager.js'

//定义邮箱跟密码
const form = reactive({
  email: '',
  password: '',
})

const RefInput = ref(null)

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
    //调用等入的api获取token
    login(form.email, form.password)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  })
}
</script>

<style>
.imgs {
  background: url("https://naive-ui-admin.vercel.app/assets/login.7b57ab51.svg");
}
</style>