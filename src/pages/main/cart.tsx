import React from 'react';

const Cart: React.FC & {wrappers: string[]} = () => {
  return (
    <div>
      <h1>首页</h1>
    </div>
  );
}

Cart.wrappers = ['@/wrappers/auth']

export default Cart;
