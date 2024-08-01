import { useState } from "react";
import c from "./CuttingHome.module.css";
import { getMonth } from "../hooks/handyfn";
import { BESTCUTTING, BESTLPOP } from "../../DemoData";

const CuttingHome = (p) => {
  const [month, setMonth] = useState(getMonth());

  const data = BESTCUTTING.filter((f) => f.month === month);
  const datalp = BESTLPOP.filter((f) => f.month === month);
  return (
    <div className={c.container}>
      <div className={c.title2}>
        <div className={c.line}></div>
        <h4 style={{ fontSize: "25px" }}>cutting/lp best performers</h4>
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
          <h1>cutting</h1>
        </div>
        <div className={c.containerData}>
          <div className={c.cutting}>
            <div
              className={`${c.rowData}`}
              style={{ borderBottom: "1px solid #4E7C88" }}
            >
              <div className={`${c.crEff} ${c.first}`}>
                <span>Cutting / OP</span>
              </div>
              <div className={`${c.AbCompDac} ${c.firstacd}`}>
                <span>PMH</span>
                <span>SetupTime</span>
                <span>Absenteeism</span>
                <span>
                  daily kaizen
                  <br />
                  <p className={c.pargi}>actual | target</p>
                </span>
                <span>rating</span>
              </div>
            </div>
            {data.length > 0 ? (
              data[0].data
                .sort((a, b) => b.rating - a.rating)
                .map((m) => (
                  <div className={c.rowData}>
                    <div className={c.crEff}>
                      <span>{m.matricule}</span>
                    </div>
                    <div className={c.AbCompDac}>
                      <span>{m.pmh}</span>
                      <span>{m.setupTime}</span>
                      <span>{m.absenteeism}</span>
                      <span>
                        {m.dailyKaizen.act} | {m.dailyKaizen.target}
                      </span>
                      <span>{m.rating.toFixed(2)}</span>
                    </div>
                  </div>
                ))
            ) : (
              <h4 className={c.noCrewS}>no data found for this month</h4>
            )}
          </div>
          <div className={c.employeeT} style={{ marginTop: "16px" }}>
            <span></span>
            <h1>leadprep</h1>
          </div>
          <div className={c.cutting}>
            <div
              className={`${c.rowData}`}
              style={{ borderBottom: "1px solid #4E7C88" }}
            >
              <div
                className={`${c.crEff} ${c.first}`}
                style={{ backgroundColor: "#4e7c88" }}
              >
                <span>Cutting / OP</span>
              </div>
              <div className={`${c.AbCompDac} ${c.firstacd}`}>
                <span>PMH</span>
                <span>SetupTime</span>
                <span>Absenteeism</span>
                <span>
                  daily kaizen
                  <br />
                  <p className={c.pargi}>actual | target</p>
                </span>
                <span>rating</span>
              </div>
            </div>
            {datalp.length > 0 ? (
              datalp[0].data
                .sort((a, b) => b.rating - a.rating)
                .map((m) => (
                  <div className={c.rowData}>
                    <div className={c.crEff} style={{ backgroundColor: "#4e7c88" }}>
                      <span>{m.matricule}</span>
                    </div>
                    <div className={c.AbCompDac}>
                      <span>{m.pmh}</span>
                      <span>{m.setupTime}</span>
                      <span>{m.absenteeism}</span>
                      <span>
                        {m.dailyKaizen.act} | {m.dailyKaizen.target}
                      </span>
                      <span>{m.rating.toFixed(2)}</span>
                    </div>
                  </div>
                ))
            ) : (
              <h4 className={c.noCrewS}>no data found for this month</h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuttingHome;

// <div className={c.lp}>
// <div className={c.header}>
//   <span>LP / OP</span>
//   <span>PMH</span>
// </div>
// <div className={c.body}>
//   {datalp.length > 0 ? (
//     datalp[0].data.map((m) => (
//       <div className={c.rowDatab}>
//         <span>{m.matricule}</span>
//         <span>{m.pmh}</span>
//       </div>
//     ))
//   ) : (
//     <h4 className={c.noCrewS}>no data found for this month</h4>
//   )}
// </div>
// </div>
