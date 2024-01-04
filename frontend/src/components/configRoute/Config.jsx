import Editor from "./configComponents/Editor";
// import CategoryTable from "./configComponents/CategoryTable";
import "../styles/main.css"
import WeekTable from "./configComponents/WeekTable";
import { useState, useEffect } from "react";
import Edit from "./configComponents/Edit";

const Config = (props) => {
  const { data, setData } = props;
  const [Update, setUpdate] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    setUpdate(JSON.stringify(data, null, 3));
  }, [data]);


  return (
    <div>
      <Edit isButtonDisabled={isButtonDisabled} Update={Update}/>
      <WeekTable data={data} setData={setData} setButtonDisabled={setButtonDisabled}/>
      {/* <CategoryTable data={data} Update={Update}  setButtonDisabled={setButtonDisabled} setUpdate={setUpdate}/> */}
      <Editor setButtonDisabled={setButtonDisabled} setUpdate={setUpdate} Update={Update}/>
    </div>
  );
};
export default Config;
