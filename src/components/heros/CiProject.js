import React, { useEffect, useState } from "react";
import c from "./Hero.module.css";
import { PROJECTCI } from "../../DemoData";

const CiProject = (p) => {
  const fd = PROJECTCI.filter((f) => f.month === p.month);

  const initialRatings =
    fd.length > 0 ? fd[0].data.map((item) => item.rating || 0) : [];
  const [ratings, setRatings] = useState(initialRatings);

  useEffect(() => {
    const initialRatings =
      fd.length > 0 ? fd[0].data.map((item) => item.rating || 0) : [];
    setRatings(initialRatings);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p.month, fd.length]);

  const handleRatingChange = (index, value) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);
    fd[0].data[index].rating = value;
  };
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
          <span style={{ width: "15%" }}>leader </span>
          <span style={{ width: "15%" }}>team Members</span>
          <span style={{ width: "10%" }}>saving</span>
          <span style={{ width: "45%" }}>approach</span>
          <span style={{ width: "15%" }}>rating</span>
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
              <span style={{ width: "15%" }}>{m.leader} </span>
              <span style={{ width: "15%" }} className={c.spanList}>
                <ul>
                  {m.teamMembers.map((m, i) => (
                    <li key={`${i}id`}>{m}</li>
                  ))}
                </ul>
              </span>
              <span style={{ width: "10%" }}>{m.saving}</span>
              <span
                style={{
                  width: "45%",
                  textAlign: "start",
                  textTransform: "capitalize",
                }}
              >
                {m.approach}
              </span>
              <span style={{ width: "15%" }}>
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
                </div>{" "}
              </span>
            </div>
          </div>
        ))
      )}
    </React.Fragment>
  );
};

export default CiProject;
