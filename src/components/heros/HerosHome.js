import { useState } from "react";
import c from "./HerosHome.module.css";
import { getMonth } from "../hooks/handyfn";

const HerosHome = (p) => {
  const [month, setMonth] = useState(getMonth());
  
  return (
    <div className={c.container}>
      <div className={c.title2}>
        <div className={c.line}></div>
        <h4 style={{ fontSize: "25px" }}>heroes best performers</h4>
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
        <div className={c.employeeT}>
          <span></span>
          <h1>quality hero</h1>
        </div>
      </div>
    </div>
  );
};
export default HerosHome;
