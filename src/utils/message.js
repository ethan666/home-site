export default {
  // 消息提示
  info(content) {
    ElMessage.info(content)
  },
  // 错误消息
  error(content) {
    ElMessage.error(content)
  },
  // 成功消息
  success(content) {
    ElMessage.success(content)
  },
  // 警告消息
  warning(content) {
    ElMessage.warning(content)
  },
  // 确认窗体
  confirm(content, tip = '系统提示') {
    return ElMessageBox.confirm(content, tip, {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    })
  },
}
