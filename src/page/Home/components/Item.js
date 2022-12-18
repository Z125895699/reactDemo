/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-12-17 20:42:38
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-12-18 14:22:33
 * @FilePath: /my-app/src/page/Home/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button } from 'antd';


const  Item =({id,note,date,time,deleteData})=>{

  function deleteItem(){
    deleteData(function(pre){
      return pre.filter(item => item.id!=id)
    })
  }
  return <div className="item">
    <div className='item-left'>
      {note}
      {`${date}----${time}`}
    </div>
    <Button onClick={deleteItem} type="primary" danger>删除</Button>
  </div>
}

export default Item
