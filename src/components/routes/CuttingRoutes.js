import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CuttingHome from "../cutting/CuttingHome";

const CuttingRoutes = (p) => {
  return (
    <Suspense>
      <Routes>
        <Route index path="/" element={<Navigate replace to="/home" />} />
        <Route exact path="/home" element={<CuttingHome />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </Suspense>
  );
};

export default CuttingRoutes;
