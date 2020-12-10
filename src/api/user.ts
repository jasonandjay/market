import {request} from 'umi'
import {ILoginData} from '@/utils/types'

// 登陆接口
export let login = (data: ILoginData)=>{
  return request('/auth/loginByMobile', {
    method: 'POST',
    params: {},
    data: data
  })
}
