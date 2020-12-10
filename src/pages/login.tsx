import React from 'react';
import styles from './index.less';
import {useModel} from 'umi';
import { useState } from 'react';

export default () => {
  let [mobile, setMobile] = useState('15323807318');
  let [password, setPassword] = useState('123456');

  let {isLogin, doLogin} = useModel('user', model=>({isLogin: model.isLogin, doLogin: model.doLogin}));

  async function loginClick(){
    debugger
    (window as any)._hmt.push(['_trackEvent', '登陆页面', '登陆按钮']);
    if (!/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[013-8])|(18[0,5-9]))\d{8}$/.test(mobile)){
      alert('请输入正确的手机号');
      return;
    }
    if (!password){
      alert('请输入正确的密码');
      return;
    }
    let result = await doLogin({mobile, password});
    console.log('result...', result);
  }


  return (
    <div>
      <h1 className={styles.title}>登陆页面</h1>
      <input type="text" placeholder="请输入你的手机号" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
      <input type="text" placeholder="请输入你的密码"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={loginClick}>登陆</button>
    </div>
  );
}
