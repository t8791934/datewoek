import React from "react";
import DeletePageItem from "./DeletePageItem";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const PagesList = ({ 
  data,
  setData,
  displayData,
  setPageName,
  setSerialNumber,
  setPageExplanation,
  setCreatePageUser,
  setCreatePageDate,
  setUpdatePageUser,
  setUpdatePageDate,
  setInputStates,
  setEditId,

 }) => {
  
  
  return (
    <div className="PagesList">
      <h5>MenuMaintain-表單</h5>
      <Table striped bordered hover>
            <thead>
              <tr>
                 <th>序號</th>
                 <th>頁面編碼</th>
                 <th>頁面</th>
                 <th>頁面內容</th>
                 <th>建檔人員</th>
                 <th>建檔日期</th>
                 <th>修改人員</th>                                                                                                                                                                                   
                 <th>修改日期</th>
                 <th>修改/刪除</th>
              </tr>
              </thead>
                     
              {displayData.map((item , index) => {
              const { pageName, pageExplanation, createPageUser, 
              createPageDate, updatePageUser, updatePageDate,uuid,
               serialNumber,changeSort,setDisplayData,displayData} = item;
               

              return (
                <DeletePageItem
                  {...item}
                  item={item}
                  index={index} 
                  serialNumber={serialNumber}
                  uuid={uuid}
                  pageName={pageName}
                  pageExplanation={pageExplanation}
                  createPageUser={createPageUser}
                  createPageDate={createPageDate}
                  updatePageUser={updatePageUser}
                  updatePageDate={updatePageDate}
                  setPageName={setPageName}
                  setSerialNumber={setSerialNumber}
                  setPageExplanation={setPageExplanation}
                  setCreatePageUser={setCreatePageUser}
                  setCreatePageDate={setCreatePageDate}
                  setUpdatePageUser={setUpdatePageUser}
                  setUpdatePageDate={setUpdatePageDate}
                  setData={setData}
                  data={data}
                  changeSort={changeSort}
                  setDisplayData={setDisplayData}
                  displayData={displayData}
                  setInputStates={setInputStates}
                  setEditId={setEditId}
                />
              );
              })
 }
        </Table>
    </div>
  );
};
export default PagesList;