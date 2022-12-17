/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-12-17 20:42:38
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-12-17 22:27:05
 * @FilePath: /my-app/src/page/Home/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {useState} from 'react'
import { v4 } from 'uuid'

const  Edit =({add})=>{
  const [note,setNote] = useState('')

  const [date,setDate] = useState('')

  const [time,setTime] = useState('')

  function addItem(){
    add(function(pre){
      return[{
        id:v4(),
        note,
        date,
        time,
        ...pre
      }]
    })
  }

  //实现双向绑定
  function noteChange(evt){
    setNote(evt.target.value)
  }
  function dateChange(evt){
    setDate(evt.target.value)
  }
  function timeChange(evt){
    setTime(evt.target.value)
  }

  return <div>
    <h1>备忘录</h1>
    <p>计时:</p>
    <input type='text' value={note} onChange={noteChange}></input>
    <p>日期:</p>
    <input type='date' value={date} onChange={dateChange}></input>
    <p>时间:</p>
    <input type='time' value={time} onChange={timeChange}></input>
    <button onClick={addItem}>新增</button>
  </div>
}

export default Edit
