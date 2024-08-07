import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HerosHome from "../heros/HerosHome";

const HerosRoutes = (p) => {
  return (
    <Suspense>
      <Routes>
        <Route index path="/" element={<Navigate replace to="/home" />} />
        <Route exact path="/home" element={<HerosHome />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </Suspense>
  );
};

export default HerosRoutes;
