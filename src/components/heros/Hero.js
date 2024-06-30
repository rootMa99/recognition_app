import React from "react";
import c from "./Hero.module.css";
import { LEANHERO, QUALITYHERO, SAFETYHERO } from "../../DemoData";

const Hero = (p) => {
  const data =
    p.type === "quality"
      ? QUALITYHERO
      : p.type === "safety"
      ? SAFETYHERO
      : p.type === "lean"
      ? LEANHERO
      : [];
  const fd = data.filter((f) => f.month === p.month);
  return (
    <React.Fragment>
      <div
        className={`${c.rowData}`}
        style={{ borderBottom: "1px solid #4E7C88" }}
      >
        <div
          className={`${c.crEff}`}
          style={
            p.type === "safety"
              ? { backgroundColor: "#6579E2" }
              : p.type === "lean"
              ? { backgroundColor: "#FFA211" }
              : {}
          }
        >
          <span>matricule</span>
        </div>
        <div className={`${c.AbCompDac}`}>
          <span>detection </span>
          <span>occurrence</span>
          <span>security</span>
        </div>
      </div>
      {fd.length === 0 ? (
        <h4 className={c.noCrewS}>no data found for this month</h4>
      ) : (
        fd[0].data.map((m) => (
          <div className={`${c.rowData}`}>
            <div className={`${c.crEff}`} style={
                p.type === "safety"
                  ? { backgroundColor: "#6579E2" }
                  : p.type === "lean"
                  ? { backgroundColor: "#FFA211" }
                  : {}
              }>
              <span>{m.matricule}</span>
            </div>
            <div className={`${c.AbCompDac}`}>
              <span>{m.detection} </span>
              <span>{m.occurrence}</span>
              <span>{m.security}</span>
            </div>
          </div>
        ))
      )}
    </React.Fragment>
  );
};

export default Hero;
