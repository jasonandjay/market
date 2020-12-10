import React, {useEffect} from 'react';
import { IRouteComponentProps } from 'umi'
import {useModel} from 'umi'

const AddCommentPage: React.FC<IRouteComponentProps<{id:string}>> = ({match}) => {


  return (
    <div>
     添加评论页面{JSON.stringify(match)}
    </div>
  );
}


export default AddCommentPage;
