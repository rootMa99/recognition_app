import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MpcHome from "../mpc/MpcHome";

const MpcRoutes = (p) => {
  return (
    <Suspense>
      <Routes>
        <Route index path="/" element={<Navigate replace to="/home" />} />
        <Route exact path="/home" element={<MpcHome />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </Suspense>
  );
};
export default MpcRoutes;
