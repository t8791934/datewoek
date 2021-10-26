import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Inquire = ({ data, setDisplayData }) => {
  const [keywords, setKeywords] = useState("");
  function keywordsChange(e) {
    setKeywords(e.target.value);
  }
  const [keyPageExplanation, setKeyPageExplanation] = useState("");
  function keyPageExplanationChange(e) {
    setKeyPageExplanation(e.target.value);
  }
  const [keyCreatePageUser, setkeyCreatePageUser] = useState("");
  function keyCreatePageUserChange(e) {
    setkeyCreatePageUser(e.target.value);
  }
  const [keyUpdatePageUser, setkeyUpdatePageUser] = useState("");
  function keyUpdatePageUserChange(e) {
    setkeyUpdatePageUser(e.target.value);
  }

  // const [selectItem, setSelectItem] = useState("");
  // function selectItemChange(e) {
  //   setSelectItem(e.target.value);
  // }

  console.log(data);

  //設定項目查詢功能

  function filterPages() {
    if (keywords.length !== 0) {
      const newPage = [...data].filter((item, index) => {
        return item.pageName.includes(keywords);
      });
      const newNewPage = [...newPage].filter((item, index) => {
        return item.pageName.includes(keywords);
      });
      setDisplayData(newNewPage);
    }

    if (keyPageExplanation.length !== 0) {
      const newPage = [...data].filter((item, index) => {
        return item.pageExplanation.includes(keyPageExplanation);
      });
      const newNewPage = [...newPage].filter((item, index) => {
        return item.pageExplanation.includes(keyPageExplanation);
      });
      setDisplayData(newNewPage);
    }

    if (keyCreatePageUser.length !== 0) {
      const newPage = [...data].filter((item, index) => {
        return item.createPageUser.includes(keyCreatePageUser);
      });
      const newNewPage = [...newPage].filter((item, index) => {
        return item.createPageUser.includes(keyCreatePageUser);
      });
      setDisplayData(newNewPage);
    }

    if (keyUpdatePageUser.length !== 0) {
      const newPage = [...data].filter((item, index) => {
        return item.updatePageUser.includes(keyUpdatePageUser);
      });
      const newNewPage = [...newPage].filter((item, index) => {
        return item.updatePageUser.includes(keyUpdatePageUser);
      });
      setDisplayData(newNewPage);
    }
  }

  return (
    <>
      {/* 查詢頁面 */}

      <div value="pageName" className="inquireList" selected>
        <InputGroup className="mb-2">
          <Button>首頁</Button>
          <FormControl
            placeholder="請輸入查詢頁面"
            size="lg"
            onChange={keywordsChange}
            value={keywords}
            id="keywords"
          />
        </InputGroup>
        <InputGroup className="mb-2">
          <Button>首頁內容</Button>
          <FormControl
            placeholder="請輸入查詢頁面內容"
            size="lg"
            onChange={keyPageExplanationChange}
            value={keyPageExplanation}
            id="keywords"
          />
        </InputGroup>
        <InputGroup className="mb-2">
          <Button>建檔人員</Button>
          <FormControl
            placeholder="請輸入查詢建檔人員"
            size="lg"
            onChange={keyCreatePageUserChange}
            value={keyCreatePageUser}
            id="keywords"
          />
        </InputGroup>

        <InputGroup className="mb-2">
          <Button>修改人員</Button>
          <FormControl
            placeholder="請輸入查詢修改人員"
            size="lg"
            onChange={keyUpdatePageUserChange}
            value={keyUpdatePageUser}
            id="keywords"
          />
        </InputGroup>
        </div>
        <div className="inquire">
          <Button
            className="inquire-button"
            variant="outline-secondary"
            id="button-addon"
            onClick={filterPages}
          >
            查詢
          </Button>
           </div>
    </>
  );
};
export default Inquire;
