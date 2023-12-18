import React from "react";
import "./styles/nav.css";

function Nav(props) {
  const { day } = props;

  const currentRoute = (dayPath) => {
    const currentPath = window.location.pathname;
    if (currentPath === dayPath) {
      return "Current";
    } else {
      return "Normal";
    }
  };

  return (
    <div className="Nav">
      <a className={currentRoute("/SUN")} id={(day === 0? "Today": null)} href="/SUN">
        SUN
      </a>
      <a className={currentRoute("/MON")} href="/MON">
        MON
      </a>
      <a className={currentRoute("/TUE")} href="/TUE">
        TUE
      </a>
      <a className={currentRoute("/WED")} href="/WED">
        WED
      </a>
      <a className={currentRoute("/THU")} href="/THU">
        THU
      </a>
      <a className={currentRoute("/FRI")} href="/FRI">
        FRI
      </a>
      <a className={currentRoute("/SAT")} href="/SAT">
        SAT
      </a>
    </div>
  );
}

export default Nav;
