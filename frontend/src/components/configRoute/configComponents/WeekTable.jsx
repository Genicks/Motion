import "./styles/WeekTable.css";
// import axios from "axios";
import React, { useEffect, useState } from "react";

const WeekTable = (props) => {
  const { fetchedData, setButtonDisabled, setUpdate } = props;
  const [data, setData] = useState([]);
  const [day, setDay] = useState([{}, {}, {}, {}, {}, {}, {}]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const toObject = async () => {
    setData(JSON.parse(fetchedData));
    setDay(data);
  };

  useEffect(() => {
    toObject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedData]);

  useEffect(() => {
    if (data && data.length > 0) {
      setDay(data[0].schedule.days);
    }
  }, [data]);

  const handleInput = (event, index) => {
    day[index].activity = event.target.value;
    setDay([...day]);
    data[0].schedule.days = day;
    setData([...data]);
    setUpdate(JSON.stringify(data, null, 3));
    // console.log(data)
    setButtonDisabled(false);
  };
  const week = () => {
    if (screenWidth < 600) {
      return (
        <tr>
          <th>SUN</th>
          <th>MON</th>
          <th>TUE</th>
          <th>WED</th>
          <th>THU</th>
          <th>FRI</th>
          <th>SAT</th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th>Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
        </tr>
      );
    }
  };

  return (
    <div className="tableCon">
      <h1 id="Overview">Overview</h1>
      <table className="table" border="1">
        <thead>
          {week()}
        </thead>
        <tbody>
          <tr>
            {day.map((day, index) => (
              <td key={index}>
                <input
                  id={`textInput${index}`}
                  className="textInput"
                  value={day.activity}
                  onChange={(e) => handleInput(e, index)}
                ></input>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default WeekTable;
