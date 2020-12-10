import { useState } from 'react'
import { getTopicList,getTopicDetail } from '@/api/index';
import {ITopicData, ITopicItem, ITopicDetail, ICommentItem} from '@/utils/types'
import { getRelatedTopic, getCommentList } from '../api/topic';

export default function useTopicModel(){
  let [topicList, updateTopicList] = useState<ITopicItem []>([]);
  let [topicInfo, updateTopicInfo] = useState({});
  let [topicDetail, updateTopicDetail] = useState<ITopicDetail>({} as ITopicDetail);
  let [relatedList, updateRelatedList] = useState<ITopicItem []>([]);
  let [commentList, updateCommentList] = useState<ICommentItem []>([]);

  async function getTopicListAction(data: ITopicData): Promise<void>{
    let result = await getTopicList(data);
    if (result.errno === 0){
      let {data, ...info} = result.data;
      updateTopicList(result.data.data);
      updateTopicInfo(info)
    }
  }

  async function getTopicDetailAction(id: string): Promise<void>{
    let detailResult = await getTopicDetail(id);
    let relatedResult = await getRelatedTopic(id);
    let commentResult = await getCommentList({valueId: id, typeId: 1});
    if (detailResult.errno === 0){
      updateTopicDetail(detailResult.data);
    }
    if (relatedResult.errno === 0){
      updateRelatedList(relatedResult.data);
    }
    if (commentResult.errno === 0){
      updateCommentList(commentResult.data.data);
    }
  }

  return {
    topicList,
    topicInfo,
    topicDetail,
    relatedList,
    commentList,
    getTopicListAction,
    getTopicDetailAction
  }
}
