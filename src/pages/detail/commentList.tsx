import React, {useEffect} from 'react';
import { IRouteComponentProps } from 'umi'
import {useModel} from 'umi'

const CommentListPage: React.FC<IRouteComponentProps<{id:string}>> = (props) => {


  return (
    <div>
     添加评论页面{JSON.stringify(props.location)}
    </div>
  );
}


export default CommentListPage;
