import React from 'react'
import { IRouteComponentProps, Link } from 'umi'

const MainLayout: React.FC<IRouteComponentProps> = function(props) {

  return (
    <>
      { props.children }
      <footer>
        <ul>
          <li>
            <img src="" alt=""/>
            <Link to="/main/home">首页</Link>
          </li>
          <li>
            <img src="" alt=""/>
            <Link to="/main/topic">专题</Link>
          </li>
          <li>
            <img src="" alt=""/>
            <Link to="/main/classify">分类</Link>
          </li>
          <li>
            <img src="" alt=""/>
            <Link to="/main/cart">购物车</Link>
          </li>
          <li>
            <img src="" alt=""/>
            <Link to="/main/my">我的</Link>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default MainLayout;
