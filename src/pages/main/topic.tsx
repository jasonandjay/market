import React, {useEffect} from 'react';
import { useModel, IRouteComponentProps } from 'umi';

const TopicPage:React.FC<IRouteComponentProps> = ({history}) => {
  let {topicList, topicInfo, getTopicListAction} = useModel('topic');

  // 获取专题页数据
  useEffect(()=>{
    getTopicListAction({page: 1, size: 5});
  }, [])

  console.log('topicList...', topicList);
  return (
  <div>{
    topicList.map((item, index)=>{
      return <li onClick={()=>history.push(`/detail/${item.id}`)} key={item.id}>
        <img src={item.scene_pic_url} alt=""/>
        <p>{item.title}</p>
        <p>{item.subtitle}</p>
      </li>
    })
  }</div>
  );
}

export default TopicPage;
