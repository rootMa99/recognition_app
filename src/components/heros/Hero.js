import React, { useEffect, useState } from "react";
import c from "./Hero.module.css";
import { LEANHERO, QUALITYHERO, SAFETYHERO } from "../../DemoData";

const Hero = ({ type, month }) => {
  const data =
    type === "quality"
      ? QUALITYHERO
      : type === "safety"
      ? SAFETYHERO
      : type === "lean"
      ? LEANHERO
      : [];
  const fd = data.filter((f) => f.month === month);

  const initialRatings = fd.length > 0 ? fd[0].data.map(() => 0) : [];
  const [ratings, setRatings] = useState(initialRatings);

  useEffect(() => {
    const initialRatings = fd.length > 0 ? fd[0].data.map(() => 0) : [];
    setRatings(initialRatings);
  }, [month, type]);

  const handleRatingChange = (index, value) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);
  };

  return (
    <React.Fragment>
      <div
        className={`${c.rowData}`}
        style={{ borderBottom: "1px solid #4E7C88" }}
      >
        <div
          className={`${c.crEff}`}
          style={
            type === "safety"
              ? { backgroundColor: "#006b63" }
              : type === "lean"
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
                type === "safety"
                  ? { backgroundColor: "#006b63" }
                  : type === "lean"
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
                    name={`rating-${i}`}
                    id={`star5-${i}`}
                    type="radio"
                    checked={ratings[i] === 5}
                    onChange={() => handleRatingChange(i, 5)}
                  />
                  <label htmlFor={`star5-${i}`}></label>
                  <input
                    value="4"
                    name={`rating-${i}`}
                    id={`star4-${i}`}
                    type="radio"
                    checked={ratings[i] === 4}
                    onChange={() => handleRatingChange(i, 4)}
                  />
                  <label htmlFor={`star4-${i}`}></label>
                  <input
                    value="3"
                    name={`rating-${i}`}
                    id={`star3-${i}`}
                    type="radio"
                    checked={ratings[i] === 3}
                    onChange={() => handleRatingChange(i, 3)}
                  />
                  <label htmlFor={`star3-${i}`}></label>
                  <input
                    value="2"
                    name={`rating-${i}`}
                    id={`star2-${i}`}
                    type="radio"
                    checked={ratings[i] === 2}
                    onChange={() => handleRatingChange(i, 2)}
                  />
                  <label htmlFor={`star2-${i}`}></label>
                  <input
                    value="1"
                    name={`rating-${i}`}
                    id={`star1-${i}`}
                    type="radio"
                    checked={ratings[i] === 1}
                    onChange={() => handleRatingChange(i, 1)}
                  />
                  <label htmlFor={`star1-${i}`}></label>
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