import React from 'react';
import { Redirect } from 'umi'
import {getToken} from '@/utils/index'

const AuthWrapper: React.FC = (props) => {
  const isLogin = !!getToken();

  if (isLogin) {
    return <div>{ props.children }</div>;
  } else {
    return <Redirect to="/login" />;
  }
}

export default AuthWrapper;
