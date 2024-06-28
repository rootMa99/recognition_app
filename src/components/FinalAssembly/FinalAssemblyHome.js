import c from "./FinalAssemblyHome.module.css";
import { BESTCREW } from "../../DemoData";
import { useState } from "react";
import { getMonth } from "../hooks/handyfn";

const FinalAssemblyHome = (p) => {
  const [month, setMonth] = useState(getMonth());

  const data = BESTCREW.filter((f) => f.month === month);
  return (
    <div className={c.container}>
      <div className={c.title2}>
        <div className={c.line}></div>
        <h4 style={{ fontSize: "25px" }}>FA best performers</h4>
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
            <span>crew</span>
            <span>
              efficiency <br />
              <p className={c.pargi}>act | tar</p>
            </span>
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
                <span>{m.crew}</span>
                <span>
                  {m.efficiency.act}% | {m.efficiency.target}%
                </span>
              </div>
              <div className={c.AbCompDac}>
                <span>
                  {m.abs.act} | {m.abs.target}
                </span>
                <span>
                  {m.cc.act} | {m.cc.target}{" "}
                </span>
                <span>
                  {m.dailyKaizen.act} | {m.dailyKaizen.target}
                </span>
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

export default FinalAssemblyHome;
