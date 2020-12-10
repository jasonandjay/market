import {request} from 'umi'
import {ITopicData, ICommmonList} from '@/utils/types'

// 获取专题列表
export let getTopicList = (data?: ITopicData)=>{
  return request('/topic/list', {
    method: 'POST',
    data: data
  })
}

// 专题详情
export let getTopicDetail = (id: string )=>{
  return request(`/topic/detail?id=${id}`)
}

// 获取相关专题
export let getRelatedTopic = (id: string)=>{
  return request(`/topic/related?id=${id}`)
}

// 获取相关评论
export let getCommentList = (params: ICommmonList)=>{
  return request(`/comment/list`, {
    method: 'GET',
    params
  })
}
