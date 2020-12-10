import { useState } from 'react'
import { login } from '@/api/user';
import {ILoginData} from '@/utils/types'
import {setToken} from '@/utils/index'

export default function useUserModel(){
  let [isLogin, updateLogin] = useState(false);

  async function doLogin(data: ILoginData): Promise<boolean>{
    let result = await login(data);
    if (result.errno === 0){
      updateLogin(true);
      setToken(result.data.sessionKey);
    }
    return result.errno === 0;
  }

  return {
    isLogin,
    doLogin
  }
}
