import React, { useState } from "react";
import c from "./Hero.module.css";
import { LEANHERO, QUALITYHERO, SAFETYHERO } from "../../DemoData";

const Hero = (p) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

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
              ? { backgroundColor: "#006b63" }
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
          <span>severity</span>
          <span>rating</span>
        </div>
      </div>
      {fd.length === 0 ? (
        <h4 className={c.noCrewS}>no data found for this month</h4>
      ) : (
        fd[0].data.map((m, i) => (
          <div className={`${c.rowData}`} key={i}>
            <div
              className={`${c.crEff}`}
              style={
                p.type === "safety"
                  ? { backgroundColor: "#006b63" }
                  : p.type === "lean"
                  ? { backgroundColor: "#FFA211" }
                  : {}
              }
            >
              <span>{m.matricule}</span>
            </div>
            <div className={`${c.AbCompDac}`}>
              <span>{m.detection} </span>
              <span>{m.occurrence}</span>
              <span>{m.security}</span>
              <span>
                <div className={c.rating}>
                  <input
                    value="5"
                    name="rating"
                    id="star5"
                    type="radio"
                    onChange={handleRatingChange}
                  />
                  <label htmlFor="star5"></label>
                  <input
                    value="4"
                    name="rating"
                    id="star4"
                    type="radio"
                    onChange={handleRatingChange}
                  />
                  <label htmlFor="star4"></label>
                  <input
                    value="3"
                    name="rating"
                    id="star3"
                    type="radio"
                    onChange={handleRatingChange}
                  />
                  <label htmlFor="star3"></label>
                  <input
                    value="2"
                    name="rating"
                    id="star2"
                    type="radio"
                    onChange={handleRatingChange}
                  />
                  <label htmlFor="star2"></label>
                  <input
                    value="1"
                    name="rating"
                    id="star1"
                    type="radio"
                    onChange={handleRatingChange}
                  />
                  <label htmlFor="star1"></label>
                </div>
              </span>
            </div>
          </div>
        ))
      )}
    </React.Fragment>
  );
};

export default Hero;
