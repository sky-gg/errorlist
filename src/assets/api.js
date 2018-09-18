import axios from 'axios'

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

/**
 * 请求ajax请求
 * @param url 路径
 * @param data 数据 如果是false则为get请求
 * @returns {Promise}
 */
export default function api (url, data = false) {
  return new Promise((reslove, reject) => {
    let obj = {
      url,
      method: data ? 'post' : 'get',
    }
    data ? obj.data = data : ''
    axios(obj).then(res => {
      res = res.data
      if (res.result_code == 'success') {
        reslove(res.data)
      } else {
        reject(res.result_msg)
      }
      return
    }).catch(e => {
      reject(e)
    })
  })
}






