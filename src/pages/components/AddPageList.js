import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { v4 } from "uuid";

function AddPageList (props){
  const {
  setData,
  data,
  setSerialNumber,
  serialNumber,
  uuid,
  pageName,
  pageExplanation,
  createPageUser,
  createPageDate,
  updatePageUser,
  updatePageDate,
  setPageName,
  setPageExplanation,
  setCreatePageUser,
  setCreatePageDate,
  setUpdatePageUser,
  setUpdatePageDate,
  inputStatus,
  setInputStates,
  editId
} = props;

  function pageNameChange(e) {
    setPageName(e.target.value);
  }
  function pageExplanationChange(e) {
    setPageExplanation(e.target.value);
  }
  function createPageUserChange(e) {
    setCreatePageUser(e.target.value);
  }

  function createPageDateChange(e) {
    setCreatePageDate(e.target.value);
  }
  function updatePageUserChange(e) {
    setUpdatePageUser(e.target.value);
  }

  function updatePageDateChange(e) {
    setUpdatePageDate(e.target.value);
  }


  //新增功能

  function addItem() {
    if (
      pageName !== "" &&
      pageExplanation !== "" &&
      createPageUser !== "" &&
      createPageDate !== ""
    ) {
      setData(function () {
        return [
          {
            serialNumber,
            uuid:v4(),
            pageName,
            pageExplanation,
            createPageUser,
            createPageDate,
            updatePageUser,
            updatePageDate,
          },
          ...data,
        ];
      });

      setSerialNumber(serialNumber + 1);
      setPageName("");
      setPageExplanation("");
      setCreatePageUser("");
      setCreatePageDate("");
  
    } else {
      alert("請填寫資料");
    }
  }

  //修改功能
  function upEditData(){
    setInputStates(true)
    setData((prev)=>{
        const index = data.findIndex((item)=>{
            return item.uuid!==uuid
        })
        const newData = [...prev]
        newData[index]={
        "serialNumber":editId,
        "uuid":uuid,
        "pageName": pageName,
        "pageExplanation": pageExplanation,
        "createPageUser": createPageUser,
        "createPageDate": createPageDate,
        "updatePageUser": updatePageUser,
        "updatePageDate": updatePageDate,
      }
       return newData
       
    })
    setPageName("")
    setPageExplanation("")
    setCreatePageUser("")
    setCreatePageDate("")
    setUpdatePageUser("")
    setUpdatePageDate("")
    alert("修改成功");
}

  //日期排序功能
  useEffect(() => {
    function changeSort(){
      let newData = [...data]
      newData = [...data].sort((a, b) => a.createPageDate >= b.createPageDate ? 1 :-1);
      console.log(newData)
      setData(newData)
    }
    changeSort();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[...data]);


  return (
    <div>
      <h5>MenuMaintain-新增/修改</h5>
      <Table  striped bordered hover>
        <tbody>
          <tr>
            <td className="height-td"
            >頁面:</td>
            <td className="width-td">
              <input type="text" value={pageName} onChange={pageNameChange} />
            </td>
            <td className="height-td">頁面說明:</td>
            <td className="cols-td">
              <textarea
                 cols="50" rows="3"
                value={pageExplanation}
                onChange={pageExplanationChange}
              />
            </td>
          </tr>
          <tr>
            <td>建檔人員:</td>
            <td>
              <input
                 disabled={!inputStatus && "disable"}
                type="text"
                value={createPageUser}
                onChange={createPageUserChange}
              />
            </td>
            <td>建檔日期:</td>
            <td>
              <input
                disabled={!inputStatus && "disable"}
                type="date"
                value={createPageDate}
                onChange={createPageDateChange}
              />
            </td>
          </tr>
          <tr>
            <td>修改人員:</td>
            <td>
              <input
                disabled={inputStatus && "disable"}
                type="text"
                value={updatePageUser}
                onChange={updatePageUserChange}
              />
            </td>
            <td>修改日期:</td>
            <td>
              <input
                disabled={inputStatus && "disable"}
                type="date"
                value={updatePageDate}
                onChange={updatePageDateChange}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="addPage-button">
      {inputStatus && <Button onClick={addItem}  variant="outline-secondary"className="add">新增</Button>}
       {!inputStatus &&  <Button onClick={upEditData} variant="outline-secondary" className="update">修改</Button>}
      </div>
    </div>
  );
};

export default AddPageList;
