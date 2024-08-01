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

  const initialRatings =
    fd.length > 0 ? fd[0].data.map((item) => item.rating || 0) : [];
  console.log(initialRatings);
  const [ratings, setRatings] = useState(initialRatings);

  useEffect(() => {
    const initialRatings =
      fd.length > 0 ? fd[0].data.map((item) => item.rating || 0) : [];
    setRatings(initialRatings);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, type, fd.length]);

  const handleRatingChange = (index, value) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);
    fd[0].data[index].rating = value;
  };

  return (
    <React.Fragment>
      <div className={c.rowData} style={{ borderBottom: "1px solid #4E7C88" }}>
        <div
          className={c.crEff}
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
        <div className={c.AbCompDac}>
          <span>{type === "lean" ? "Lead a Kaizen Project" : "detection"}</span>
          <span>
            {type === "lean"
              ? "Co-lead a Kaizen Project ( Influence )"
              : "occurrence"}
          </span>
          <span>
            {type === "lean" ? "Kaizens related to CI Plan" : "severity"}
          </span>
          <span>rating</span>
        </div>
      </div>
      {fd.length === 0 ? (
        <h4 className={c.noCrewS}>no data found for this month</h4>
      ) : (
        fd[0].data.map((m, i) => (
          <div className={c.rowData} key={i}>
            <div
              className={c.crEff}
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
            <div className={c.AbCompDac}>
              <span>{m.detection}</span>
              <span>{m.occurrence}</span>
              <span>{m.security}</span>
              <span>
                <div className={c.rating}>
                  <input
                    value="5"
                    name={`rating-${type}-${i}`}
                    id={`star5-${type}-${i}`}
                    type="radio"
                    checked={ratings[i] === 5}
                    onChange={() => handleRatingChange(i, 5)}
                  />
                  <label htmlFor={`star5-${type}-${i}`}></label>
                  <input
                    value="4"
                    name={`rating-${type}-${i}`}
                    id={`star4-${type}-${i}`}
                    type="radio"
                    checked={ratings[i] === 4}
                    onChange={() => handleRatingChange(i, 4)}
                  />
                  <label htmlFor={`star4-${type}-${i}`}></label>
                  <input
                    value="3"
                    name={`rating-${type}-${i}`}
                    id={`star3-${type}-${i}`}
                    type="radio"
                    checked={ratings[i] === 3}
                    onChange={() => handleRatingChange(i, 3)}
                  />
                  <label htmlFor={`star3-${type}-${i}`}></label>
                  <input
                    value="2"
                    name={`rating-${type}-${i}`}
                    id={`star2-${type}-${i}`}
                    type="radio"
                    checked={ratings[i] === 2}
                    onChange={() => handleRatingChange(i, 2)}
                  />
                  <label htmlFor={`star2-${type}-${i}`}></label>
                  <input
                    value="1"
                    name={`rating-${type}-${i}`}
                    id={`star1-${type}-${i}`}
                    type="radio"
                    checked={ratings[i] === 1}
                    onChange={() => handleRatingChange(i, 1)}
                  />
                  <label htmlFor={`star1-${type}-${i}`}></label>
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
