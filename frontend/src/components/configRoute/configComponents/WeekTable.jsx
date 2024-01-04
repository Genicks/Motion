import React, { useEffect, useState } from "react";
import "./styles/WeekTable.css";


const WeekTable = (props) => {
  const { data, setData, setButtonDisabled} = props;
  const [days, setDays] = useState([{}, {}, {}, {}, {}, {}, {}]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // ! MAKE HEADER RESPONSIVE
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  // Header component that is responsive
  const TableHeader = () => {
    let week = [];
    if (screenWidth < 600) {
      week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    } else {
      week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    }
    return (
      <tr>
        {week.map((day, index) => {
          return <th key={index}>{day}</th>;
        })}
      </tr>
    );
  };
  //! Function to handle change
  const handleInput = (event, index) => {
    days[index].activity = event.target.value;
    setDays([...days]);
    data[0].schedule.days = days;
    setData([...data]);
    setButtonDisabled(false);
  };
  //! TABLE DATA LOGIC
  // SETTING INITIALS VALUE OF DATA
  useEffect(() => {
    if (data && data.length > 0) {
      setDays(data[0].schedule.days);
    }
  }, [data]);

  // TABLE DATA COMPONENT
  const TableData = () => {
    return (
      <tr>
        {days.map((day, index) => (
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
    );
  };
  //! FINAL RETURNS
  return (
    <div className="tableCon">
      <h1 id="Overview">Overview</h1>
      <table className="table">
        <thead>{TableHeader()}</thead>
        <tbody>{TableData()}</tbody>
      </table>
    </div>
  );
};
export default WeekTable;
