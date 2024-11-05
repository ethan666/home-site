<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名" min-width="120">
      </el-table-column>
      <el-table-column prop="age" label="年龄" min-width="120">
      </el-table-column>
      <el-table-column align="right" label="操作" min-width="160">
        <template #default="scope">
          <el-button type="primary" link icon="edit" @click="onDel(scope.row)"
            >删除</el-button
          >
        </template></el-table-column
      >
    </el-table>
  </div>
</template>

<script setup>
import { getList, del } from '@/api/user'
import message from '@/utils/message'

const tableData = ref([])

const onDel = async ({ _id }) => {
  // tableData.value.splice(tableData.value.indexOf(row), 1)
  // await message.confirm('确认删除吗？')
  await del({ _id })
  message.success('删除成功')
  getTableData()
}

// 查询
const getTableData = async () => {
  const res = await getList({
    // page: page.value,
    // pageSize: pageSize.value,
  })
  tableData.value = res
}

getTableData()
</script>

<style lang="scss" scoped></style>
