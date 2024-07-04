import { useState } from "react";
import { getMonth } from "../hooks/handyfn";
import c from "./MpcHome.module.css";
import { MPC } from "../../DemoData";

const MpcHome = (p) => {
  const [month, setMonth] = useState(getMonth());

  const data = MPC.filter((f) => f.month === month);
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
      <div
        className={`${c.rowData}`}
        style={{ borderBottom: "1px solid #4E7C88" }}
      >
        <div className={`${c.crEff} ${c.first}`}>
          <span>crew</span>
        </div>
        <div className={`${c.AbCompDac} ${c.firstacd}`}>
          <span>
            abssenteism
            <br />
            <p className={c.pargi}>act | tar</p>
          </span>
          <span>
            Custmer complain
            <br />
            <p className={c.pargi}>act | tar</p>
          </span>
          <span>
            daily kaizen
            <br />
            <p className={c.pargi}>act | tar</p>
          </span>
        </div>
      </div>
      {data.length > 0 ? (
        data[0].data.map((m) => (
          <div className={c.rowData}>
            <div className={c.crEff}>
              <span>{m.matricule}</span>
            </div>
            <div className={c.AbCompDac}>
              <span>
                {m.dciwmse} | {m.dciwmseTarget}
              </span>
              <span>
                {m.workload} | {m.workloadTarget}
              </span>
              <span>
                {m.dailyKaizen} | {m.dailyKaizenTarget}
              </span>
            </div>
          </div>
        ))
      ) : (
        <h4 className={c.noCrewS}>no data found for this month</h4>
      )}
    </div>
  );
};

export default MpcHome;
