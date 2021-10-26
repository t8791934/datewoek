import { useState, useEffect } from "react";
import AddPageList from "./components/AddPageList";
import PagesList from "./components/PagesList";
import Header from "./components/Header";
import Inquire from "./components/InquirePage";
import "./App.css";

const App = () => {

  const [data, setData] = useState([
    {
      serialNumber:1, 
      uuid:"d8codb7b-8685-4elf-b08c-ce9ab5e0fd54",
      pageName :"Default.asp", 
      pageExplanation:"首頁", 
      createPageUser:"王小明", 
      createPageDate:"2017-01-01", 
      updatePageUser:"吳三", 
      updatePageDate:"2019/6/10" 
    },
    {
      serialNumber:2,
      uuid: "a2ef9893-2e45-469b-lc00fc7086", 
      pageName:"UpLoad.as", 
      pageExplanation:"上傳", 
      createPageUser:"陳大勇", 
      createPageDate:"2019-01-01",
      updatePageUser:"", 
      updatePageDate:"" 
    }
  ]);

  const [displayData, setDisplayData] = useState([]);
  const [inputStatus, setInputStates] = useState(true);
  
  const [editId, setEditId] = useState("");
  const [serialNumber, setSerialNumber] = useState(3);
  const [pageName, setPageName] = useState("");
  const [pageExplanation, setPageExplanation] = useState("");
  const [createPageUser, setCreatePageUser] = useState("");
  const [createPageDate, setCreatePageDate] = useState("");
  const [updatePageUser, setUpdatePageUser] = useState("");
  const [updatePageDate, setUpdatePageDate] = useState("");
  

  useEffect(() => {
    setDisplayData(data)},[data])

    

  return (
    <div className="app">
      <Header />

      {/* 查詢部分 */}
      <Inquire 
      data={data}
      setData={setData}
      setDisplayData={setDisplayData} 
      displayData={displayData}/>
      {/* 新增及修改部分 */}
      <AddPageList 
        inputStatus={inputStatus}
        setInputStates={setInputStates}
        pageName={pageName}
        pageExplanation={pageExplanation}
        createPageUser={createPageUser}
        createPageDate={createPageDate}
        updatePageUser={updatePageUser}
        updatePageDate={updatePageDate}
        setPageName={setPageName}
        setPageExplanation={setPageExplanation}
        setCreatePageUser={setCreatePageUser}
        setCreatePageDate={setCreatePageDate}
        setUpdatePageUser={setUpdatePageUser}
        setUpdatePageDate={setUpdatePageDate}
        data={data}
        setData={setData} 
        setSerialNumber={setSerialNumber} 
        serialNumber={serialNumber}  
        setDisplayData={setDisplayData}
        displayData={displayData}
        editId={editId}
        />
        
        {/* 顯示 */}
      <PagesList  
       setPageName={setPageName}
       setSerialNumber={setSerialNumber}
       setPageExplanation={setPageExplanation}
       setCreatePageUser={setCreatePageUser}
       setCreatePageDate={setCreatePageDate}
       setUpdatePageUser={setUpdatePageUser}
       setUpdatePageDate={setUpdatePageDate}
       data={data}
       displayData={displayData}
       setData={setData}
       setDisplayData={setDisplayData}
       setInputStates={setInputStates}
       setEditId={setEditId}
        />
       
    </div>
  );
};

export default App;