import c from "./FinalAssemblyHome.module.css";
import { BESTCREW } from "../../DemoData";
const FinalAssemblyHome = (p) => {
  return (
    <div className={c.container}>
      <div className={c.title2}>
        <div className={c.line}></div>
        <h4 style={{ fontSize: "25px" }}>FA best performers</h4>
      </div>
      <div className={c.content}>
        <div className={c.monthH}>
          <span className={c.month}>Month:</span>
          <span className={c.monthD}><input type="month" onChange={e=>console.log(e.target.value)}/></span>
        </div>
        <div className={`${c.rowData}`} style={{borderBottom:"1px solid #4E7C88"}}>
          <div className={`${c.crEff} ${c.first}`}>
            <span>crew</span>
            <span>efficiency</span>
          </div>
          <div className={`${c.AbCompDac} ${c.firstacd}`}>
            <span>abssenteism</span>
            <span>Custmer complain</span>
            <span>daily kaizen</span>
          </div>
        </div>
        {BESTCREW.map((m) => (
          <div className={c.rowData}>
            <div className={c.crEff}>
              <span>{m.crew}</span>
              <span>{m.efficiency}% / 55%</span>
            </div>
            <div className={c.AbCompDac}>
              <span>{m.abs} / 55%</span>
              <span>{m.cc} / 55%</span>
              <span>{m.dailyKaizen} / 55%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinalAssemblyHome;
