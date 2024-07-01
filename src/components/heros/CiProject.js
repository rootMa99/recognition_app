import React from "react";
import c from "./Hero.module.css";
import { PROJECTCI } from "../../DemoData";

const CiProject = (p) => {
  const fd = PROJECTCI.filter((f) => f.month === p.month);
  return (
    <React.Fragment>
      <div
        className={`${c.rowData}`}
        style={{ borderBottom: "1px solid #4E7C88" }}
      >
        <div
          className={`${c.crEff}`}
          style={{ backgroundColor: "#383942", width: "20%" }}
        >
          <span>project Name</span>
        </div>
        <div className={`${c.AbCompDac}`} style={{ width: "80%" }}>
          <span style={{ width: "20%" }}>leader </span>
          <span style={{ width: "20%" }}>teamMembers</span>
          <span style={{ width: "10%" }}>saving</span>
          <span style={{ width: "50%" }}>approach</span>
        </div>
      </div>
      {fd.length === 0 ? (
        <h4 className={c.noCrewS}>no data found for this month</h4>
      ) : (
        fd[0].data.map((m, i) => (
          <div className={`${c.rowData}`} key={i}>
            <div
              className={`${c.crEff}`}
              style={{ backgroundColor: "#383942", width: "20%" }}
            >
              <span>{m.projectName}</span>
            </div>
            <div className={`${c.AbCompDac}`} style={{ width: "80%" }}>
              <span style={{ width: "20%" }}>{m.leader} </span>
              <span style={{ width: "20%" }} className={c.spanList}>
                <ul>
                  {m.teamMembers.map((m, i) => (
                    <li key={`${i}id`}>{m}</li>
                  ))}
                </ul>
              </span>
              <span style={{ width: "10%" }}>{m.saving}</span>
              <span
                style={{
                  width: "50%",
                  textAlign: "start",
                  textTransform: "capitalize",
                }}
              >
                {m.approach}
              </span>
            </div>
          </div>
        ))
      )}
    </React.Fragment>
  );
};

export default CiProject;
