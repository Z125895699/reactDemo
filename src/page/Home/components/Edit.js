/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-12-17 20:42:38
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-12-18 14:23:25
 * @FilePath: /my-app/src/page/Home/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {useState} from 'react'
import { v4 } from 'uuid'
import dayjs from 'dayjs';
import { Button,Input,DatePicker,TimePicker } from 'antd';

const  Edit =({add})=>{
  const [note,setNote] = useState('')

  const [date,setDate] = useState('')

  const [time,setTime] = useState('')

  function addItem(){
    add(function(pre){
      console.log(pre);
      return[
        {
          id:v4(),
          note,
          date,
          time,
        },
        ...pre,
      ]
    })
  }

  //实现双向绑定
  function noteChange(evt){
    setNote(evt.target.value)
  }
  function dateChange(time,dateString){
    setDate(dateString)
  }
  function timeChange(time,timeString){
    setTime(timeString)
  }

  return <div className='edit'>
    <h1>备忘录</h1>
    <div className='note'>
      <span>记录:</span>
      <Input value={note} onChange={noteChange} placeholder="Basic usage" />
    </div>
    <div className='date'>
      <span>日期:</span>
      <DatePicker onChange={dateChange} />
    </div>
    <div className='time'>
      <span>时间:</span>
      <TimePicker onChange={timeChange}/>
    </div>
    <Button type="primary" onClick={addItem}>新增</Button>
  </div>
}

export default Edit
