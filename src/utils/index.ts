import Cookie from 'js-cookie'

const key = 'x-nideshop-token';
// 获取登陆态
export function getToken(){
  return Cookie.get(key);
}

// 设置登陆态
export function setToken(val: string){
  Cookie.set(key, val);
}

// 删除登陆态
export function removeToken(){
  Cookie.remove(key);
}
