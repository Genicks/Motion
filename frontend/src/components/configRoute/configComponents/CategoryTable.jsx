import "./styles/CategoryTable.css";
import { useState, useEffect } from "react";

const CategoryTable = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { data, setUpdate } = props;
  const [catName, setCatName] = useState(["Loading..."]);
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setCatName(Object.keys(data[0].schedule.categories));
      setExercise(data[0].schedule.categories);
    }
  }, [data, setCatName]);

  const exerciseDetails = (catName) => {
    const row = () => {
      if (exercise.length !== 0) {
        const array = exercise[catName];

        return array.map((details, index) => {
          return (
            <tr key={index}>
              <td>{details.Exercise}</td>
              <td>{details.Set}</td>
              <td>{details.Rep}</td>
            </tr>
          );
        });
      }
    };
    return (row());
  };

  return (
    <div className="tableCon">
      <h1 id="Categories">Categories</h1>
      {catName.map((category, index) => (
        <div key={index} className="tableCon Section">
          <h3>{category}</h3>
          <table className="table tableCat" border="1">
            <thead>
              <tr>
                <th>Exercise</th>
                <th>Rep</th>
                <th>Set</th>
              </tr>
            </thead>
            <tbody>
              {exerciseDetails(category)}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};
export default CategoryTable;
