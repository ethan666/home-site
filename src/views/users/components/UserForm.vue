<template>
  <el-dialog v-model="visible" title="用户" width="40%">
    <el-form :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup>
import { add } from '@/api/user'

const visible = defineModel('visible')
const emit = defineEmits(['success'])

const form = ref({})

const submitForm = async () => {
  await add(form.value)
  form.value = {}
  emit('success')
}
</script>
