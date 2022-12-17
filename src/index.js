/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-12-17 20:33:46
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-12-17 21:16:38
 * @FilePath: /my-app/src/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './page/Home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
