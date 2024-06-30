import React from "react";
import c from "./Hero.module.css";

const Hero = (p) => {

    return(
        <React.Fragment>
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
        </React.Fragment>
    )
};

export default Hero;
