/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2022-12-17 20:42:38
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2022-12-17 22:24:03
 * @FilePath: /my-app/src/page/Home/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const  Item =({id,note,date,time,deleteData})=>{

  function deleteItem(){
    deleteData(function(pre){
      return pre.filter(item => item.id!=id)
    })
  }
  return <div>
    <div>
      {note}
      {`${date}-${time}`}
    </div>
    <button onClick={deleteItem} className="remove">删除</button>
  </div>
}

export default Item
