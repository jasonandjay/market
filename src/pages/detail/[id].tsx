import React, {useEffect} from 'react';
import { IRouteComponentProps, Link } from 'umi'
import {useModel} from 'umi'
import styles from  './detail.less'

const DetailPage: React.FC<IRouteComponentProps<{id:string}>> = ({match, history}) => {
  let {topicDetail, relatedList, commentList, getTopicDetailAction} = useModel('topic')

  useEffect(()=>{
    getTopicDetailAction(match.params.id);
  }, [])

  useEffect(()=>{
    if (topicDetail.title){
      document.title = topicDetail.title
    }
  }, [topicDetail.title])

  return (
    <div className={styles.wrap}>
      {/* 专题详情 */}
      <div dangerouslySetInnerHTML={{__html:topicDetail.content}}></div>
      {/* 评论列表 */}
      <div>
        <p>
          <span>精选留言</span>
          <span onClick={()=>history.push(`/detail/addComment?id=${match.params.id}`)}>评论</span>
        </p>
        <ul>{
          commentList.slice(0, 5).map(item=>{
            return <li key={item.id}>
              <p>
                <span>匿名用户</span>
                <span>{item.add_time}</span>
              </p>
              <p>{item.content}</p>
            </li>
          })
        }</ul>
        {
          commentList.length > 5?<Link to={{pathname: "/detail/commentList", state: commentList}} >查看更多</Link>: null
        }
      </div>
      {/* 相关专题 */}
      <div>{
        relatedList.map(item=>{
          return <li>
            <img src={item.scene_pic_url} alt=""/>
            <p>{item.title}</p>
          </li>
        })
      }</div>
    </div>
  );
}


export default DetailPage;
