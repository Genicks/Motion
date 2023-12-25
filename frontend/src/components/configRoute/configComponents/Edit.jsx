const Edit = (props) => {
  const { isButtonDisabled, handleButtonClick } = props;

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
