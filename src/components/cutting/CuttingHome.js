import { useState } from "react";
import c from "./CuttingHome.module.css";
import { getMonth } from "../hooks/handyfn";
import { BESTCUTTING } from "../../DemoData";

const CuttingHome = (p) => {
  const [month, setMonth] = useState(getMonth());

  const data = BESTCUTTING.filter((f) => f.month === month);
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
            <span>Down Time</span>
            <span>OEE</span>
          </div>
        </div>
        {data.length > 0 ? (
          data[0].data.map((m) => (
            <div className={c.rowData}>
              <div className={c.crEff}>
                <span>{m.matricule}</span>
              </div>
              <div className={c.AbCompDac}>
                <span>{m.pmh}</span>
                <span>{m.setupTime}</span>
                <span>{m.downTime}</span>
                <span>{m.oee}</span>
              </div>
            </div>
          ))
        ) : (
          <h4 className={c.noCrewS}>no data found for this month</h4>
        )}
      </div>
    </div>
  );
};

export default CuttingHome;
