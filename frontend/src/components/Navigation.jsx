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
      <a className={currentRoute("/MON")} id={(day === 1? "Today": null)} href="/MON">
        MON
      </a>
      <a className={currentRoute("/TUE")} id={(day === 2? "Today": null)} href="/TUE">
        TUE
      </a>
      <a className={currentRoute("/WED")} id={(day === 3? "Today": null)} href="/WED">
        WED
      </a>
      <a className={currentRoute("/THU")} id={(day === 4? "Today": null)} href="/THU">
        THU
      </a>
      <a className={currentRoute("/FRI")} id={(day === 5? "Today": null)} href="/FRI">
        FRI
      </a>
      <a className={currentRoute("/SAT")} id={(day === 6? "Today": null)} href="/SAT">
        SAT
      </a>
    </div>
  );
}

export default Nav;
