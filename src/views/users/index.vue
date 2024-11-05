<template>
  <div class="page">
    <el-button type="primary" @click="getTableData">查询</el-button>
    <el-button type="primary" @click="onAdd">新增</el-button>

    <el-table :data="tableData" v-loading="loading" style="width: 100%">
      <el-table-column prop="name" label="姓名" min-width="120">
      </el-table-column>
      <el-table-column prop="age" label="年龄" min-width="120">
      </el-table-column>
      <el-table-column
        align="center"
        fixed="right"
        label="操作"
        min-width="160"
      >
        <template #default="scope">
          <el-button type="primary" link @click="onEdit(scope.row)"
            >编辑</el-button
          >
          <el-button type="danger" link @click="onDel(scope.row)"
            >删除</el-button
          >
        </template></el-table-column
      >
    </el-table>
  </div>
  <UserForm
    v-model:visible="showDialog"
    v-model:form="formData"
    @success="onSuccess"
  />
</template>

<script setup>
import { getList, del } from '@/api/user'
import message from '@/utils/message'
import UserForm from './components/UserForm.vue'

const loading = ref(false)

const tableData = ref([])

const onDel = async ({ _id }) => {
  await message.confirm('确认删除吗？')
  await del({ _id })
  message.success('删除成功')
  getTableData()
}

const showDialog = ref(false)
const formData = ref({})

const onAdd = () => {
  formData.value = {}

  showDialog.value = true
}

const onEdit = row => {
  formData.value = { ...row }
  showDialog.value = true
}

const onSuccess = () => {
  getTableData()
  showDialog.value = false
}

// 查询
const getTableData = async () => {
  loading.value = true

  const res = await getList({
    // page: page.value,
    // pageSize: pageSize.value,
  })
  loading.value = false

  tableData.value = res
}

getTableData()
</script>

<style lang="scss" scoped></style>
