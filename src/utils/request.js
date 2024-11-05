import axios from 'axios'
import message from '@/utils/message'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  // timeout: 50000,
})

// http request 拦截器
// service.interceptors.request.use(
//   config => {
//     config.headers = {
//       // 'Content-Type': 'application/json',
//       // 'x-token': userStore.token,
//       // 'x-user-id': userStore.userInfo.ID,
//       ...config.headers,
//     }
//     return config
//   },
//   error => {
//     message.error(error)
//     return error
//   },
// )

// http response 拦截器
service.interceptors.response.use(
  response => {
    // const userStore = useUserStore()
    // if (response.headers['new-token']) {
    //   userStore.setToken(response.headers['new-token'])
    // }
    if (response.data.code === 200) {
      if (response.headers.msg) {
        response.data.msg = decodeURI(response.headers.msg)
      }
      return response.data.data
    } else {
      message.error(response.data.msg || decodeURI(response.headers.msg))

      return response.data.msg ? response.data : response
    }
  },
  error => {
    message.error(error)
    // switch (error.response.status) {
    //   case 500:
    //     ElMessageBox.confirm(
    //       `
    //     <p>检测到接口错误${error}</p>
    //     <p>错误码<span style="color:red"> 500 </span>：此类错误内容常见于后台panic，请先查看后台日志，如果影响您正常使用可强制登出清理缓存</p>
    //     `,
    //       '接口报错',
    //       {
    //         dangerouslyUseHTMLString: true,
    //         distinguishCancelAndClose: true,
    //         confirmButtonText: '清理缓存',
    //         cancelButtonText: '取消',
    //       },
    //     ).then(() => {
    //       const userStore = useUserStore()
    //       userStore.ClearStorage()
    //       router.push({ name: 'Login', replace: true })
    //     })
    //     break
    //   case 404:
    //     ElMessageBox.confirm(
    //       `
    //       <p>检测到接口错误${error}</p>
    //       <p>错误码<span style="color:red"> 404 </span>：此类错误多为接口未注册（或未重启）或者请求路径（方法）与api路径（方法）不符--如果为自动化代码请检查是否存在空格</p>
    //       `,
    //       '接口报错',
    //       {
    //         dangerouslyUseHTMLString: true,
    //         distinguishCancelAndClose: true,
    //         confirmButtonText: '我知道了',
    //         cancelButtonText: '取消',
    //       },
    //     )
    //     break
    //   case 401:
    //     ElMessageBox.confirm(
    //       `
    //       <p>无效的令牌</p>
    //       <p>错误码:<span style="color:red"> 401 </span>错误信息:${error}</p>
    //       `,
    //       '身份信息',
    //       {
    //         dangerouslyUseHTMLString: true,
    //         distinguishCancelAndClose: true,
    //         confirmButtonText: '重新登录',
    //         cancelButtonText: '取消',
    //       },
    //     ).then(() => {
    //       const userStore = useUserStore()
    //       userStore.ClearStorage()
    //       router.push({ name: 'Login', replace: true })
    //     })
    //     break
    // }

    return error
  },
)

export default service
