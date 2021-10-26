import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const DeletePageItem = ({   
  serialNumber,
  uuid,
  pageName,
  pageExplanation,
  createPageUser,
  createPageDate,
  updatePageUser,
  updatePageDate,
  setData,
  changeSort,
  setPageName,
  setPageExplanation,
  setCreatePageUser,
  setCreatePageDate,
  setUpdatePageUser,
  setUpdatePageDate,
  setInputStates,
  setEditId,
  setSerialNumber


}) => {


// 刪除功能設定

  function deleteItem() {
    setData(function (prev) {
      return prev.filter((item) => item.uuid !== uuid);
      
    });
    
  }

// 修改功能設定
  function upDate() {
    setInputStates(false)
    setEditId(uuid)
    setPageName(pageName)
    setSerialNumber(serialNumber)
    setPageExplanation(pageExplanation)
    setCreatePageUser(createPageUser)
    setCreatePageDate(createPageDate)
    setUpdatePageUser(updatePageUser)
    setUpdatePageDate(setUpdatePageDate)
  }

  return (
    <tbody className={changeSort}>
      <tr>
        <td>{serialNumber}</td>
        <td>{uuid}</td>
        <td className="list-td">{pageName}</td>
        <td className="list-td">{pageExplanation}</td>
        <td  className="list-td">{createPageUser}</td>
        <td>{createPageDate}</td>
        <td  className="list-td">{updatePageUser}</td>
        <td>{updatePageDate}</td>
        <td>
          <button className="DeletePageItem-revise" onClick={upDate}>
            修改
          </button>      
          <button onClick={deleteItem} className="remove">
            刪除
          </button>
        </td>
      </tr>
    </tbody>
  )
};


export default DeletePageItem;
