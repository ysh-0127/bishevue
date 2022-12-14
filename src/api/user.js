import request from '@/utils/request'

export function updateMessage(message) {
  return request({
    url: '/user/updateMessage',
    method: 'post',
    params: message
  })
}

export function validPassword(validPass, token) {
  return request({
    url: '/user/validPassword',
    method: 'post',
    params: { validPass, token }
  })
}

export function updatePassword(data) {
  return request({
    url: '/user/updatePassword',
    method: 'post',
    params: data
  })
}
