import React from 'react';

const Cart: React.FC & {wrappers: string[]} = () => {
  return (
    <div>
      <h1>我的页面</h1>
    </div>
  );
}

Cart.wrappers = ['@/wrappers/auth']

export default Cart;
