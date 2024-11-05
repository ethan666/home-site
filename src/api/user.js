import service from '@/utils/request'

export const getList = () => {
  return service({
    url: '/users/getList',
    method: 'post',
  })
}

export const add = data => {
  return service({
    url: '/users/insert',
    method: 'post',
    data,
  })
}

export const edit = data => {
  return service({
    url: '/users/edit',
    method: 'post',
    data,
  })
}

export const del = data => {
  return service({
    url: '/users/delete',
    method: 'post',
    data,
  })
}
