/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-12-17 20:42:38
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-12-17 21:54:54
 * @FilePath: /my-app/src/page/Home/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import {useState} from 'react'

import Edit  from "./components/Edit"
import List from "./components/List"
import './index.css'

const app={
  width:'100%',
  color:'red'
}

const  Home =()=>{
  
  const [data,setData] =useState([])

  return <div style={app}>
    <Edit add={setData}></Edit>
    <List listData={data} deleteData={setData}></List>
  </div>
}

export default Home
