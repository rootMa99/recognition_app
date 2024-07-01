import { useState } from "react";
import { getMonth } from "../hooks/handyfn";
import c from "./MpcHome.module.css";

const MpcHome = (p) => {
  const [month, setMonth] = useState(getMonth());

  // const data = BESTCREW.filter((f) => f.month === month);
  return (
    <div className={c.container}>
      <div className={c.title2}>
        <div className={c.line}></div>
        <h4 style={{ fontSize: "25px" }}>mpc best performers</h4>
      </div>
      <div className={c.content}>
        <div className={c.monthH}>
          <span className={c.month}>Month:</span>
          <span className={c.monthD}>
            <input
              type="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MpcHome;
