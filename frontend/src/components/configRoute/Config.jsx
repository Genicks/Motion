import Editor from "./configComponents/Editor";
import "../styles/main.css"
import WeekTable from "./configComponents/WeekTable";
import CategoryTable from "./configComponents/CategoryTable";
import { useState, useEffect } from "react";
import Edit from "./configComponents/Edit";
import axios from "axios";

const Config = (props) => {
  const { data } = props;
  const fetchedData = JSON.stringify(data, null, 3);

  const [Update, setUpdate] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    setUpdate(fetchedData);
    setButtonDisabled(true);
  }, [fetchedData]);

  const handleButtonClick = async() => {
    await axios
      .post("https://exercise-data.onrender.com/config", { Update })
      // .post("http://192.168.18.40:4000/config", { Update })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Edit isButtonDisabled={isButtonDisabled} handleButtonClick={handleButtonClick}/>
      <WeekTable fetchedData={fetchedData} setButtonDisabled={setButtonDisabled} setUpdate={setUpdate}/>
      <CategoryTable data={data} Update={Update}  setButtonDisabled={setButtonDisabled} setUpdate={setUpdate}/>
      <Editor setButtonDisabled={setButtonDisabled} setUpdate={setUpdate} Update={Update}/>
    </div>
  );
};
export default Config;
