import "./styles/editor.css"
import axios from "axios";

const Edit = (props) => {
  const { isButtonDisabled,  Update } = props;

  const handleButtonClick = async() => {
    await axios
      // .post("https://exercise-data.onrender.com/config", { Update })
      // .post("http://192.168.18.40:4000/config", { Update })
      .post("http://localhost:4000/config", { Update })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="btnCon">
      <button
        disabled={isButtonDisabled}
        className="btn"
        onClick={handleButtonClick}
      >
        Update Json
      </button>
    </div>
  );
};
export default Edit;
