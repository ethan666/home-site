<template>
  <el-dialog
    v-model="visible"
    :title="`${form._id ? '编辑' : '新增'}用户`"
    width="40%"
  >
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
import { add, edit } from '@/api/user'

const visible = defineModel('visible')
const form = defineModel('form')

const emit = defineEmits(['success'])

const submitForm = async () => {
  if (form.value._id) {
    await edit(form.value)
  } else {
    await add(form.value)
  }

  form.value = {}
  emit('success')
}
</script>
