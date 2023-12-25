// import React, { useEffect, useState } from "react";
import "./styles/editor.css"

const Editor = (props) => {
  const { setButtonDisabled, setUpdate, Update } = props;

  const handleTextAreaChange = (event) => {
    setUpdate(event.target.value);
    setButtonDisabled(false);
  };

  return (
    <div>
      <h1 className="header">Update JSON Database directly</h1>
      {/* <Edit isButtonDisabled={isButtonDisabled} handleButtonClick={handleButtonClick}/> */}

      <div className="codeCon">
        <div className="codeEditor">
          <textarea
            name="config"
            id="config"
            value={Update}
            onChange={handleTextAreaChange}
          />
        </div>
      </div>
    </div>

  );
};
export default Editor;
