import React, { useState } from 'react';
import c from "./HerosHome.module.css";
import { getMonth } from "../hooks/handyfn";
import Hero from "./Hero";
import CiProject from "./CiProject";

const HerosHome = () => {
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
        <Hero type="quality" month={month} />
        <div className={c.employeeT} style={{ marginTop: "16px" }}>
          <span></span>
          <h1>safety hero</h1>
        </div>
        <Hero type="safety" month={month} />
        <div className={c.employeeT} style={{ marginTop: "16px" }}>
          <span></span>
          <h1>lean hero</h1>
        </div>
        <Hero type="lean" month={month} />
        <div className={c.employeeT} style={{ marginTop: "16px" }}>
          <span></span>
          <h1>ci project</h1>
        </div>
        <CiProject month={month} />
      </div>
    </div>
  );
};

export default HerosHome;
