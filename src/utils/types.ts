// 登陆表单接口
export interface ILoginData {
  mobile: string,
  password: string
}

// 专题列表接口
export interface ITopicData {
  page?: number,
  size?: number
}
export interface ITopicItem {
  "id": number,
  "title": string,
  "price_info": number,
  "scene_pic_url": string,
  "subtitle": string
}

export interface ITopicDetail {
  avatar: string,
  content: string,
  id: number,
  is_show: number,
  item_pic_url: string,
  price_info: number,
  read_count: string,
  scene_pic_url: string,
  sort_order: number,
  subtitle: string,
  title: string,
  topic_category_id: number,
  topic_tag_id: number
  topic_template_id: number
}

export interface ICommmonList {
  valueId: string,
  typeId: 0|1,
  page?: number,
  size?: number
}

export interface ICommentItem{
  add_time: string,
  content: string,
  id: number
}
