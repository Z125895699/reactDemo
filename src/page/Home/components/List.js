/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-12-17 20:42:38
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-12-18 14:25:14
 * @FilePath: /my-app/src/page/Home/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Item from "./Item"

const  List =({listData,deleteData})=>{
  return <div className='list'>
    {
      listData.map(item=>{
        const {note ='',date,time,id} = item
        return <Item deleteData={deleteData} key={id} id={id} note={note} date={date} time={time}></Item>
      })
    }
  </div>
}

export default List
