import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import FinalAssemblyHome from "../FinalAssembly/FinalAssemblyHome";

const FinalAssemblyRoutes = (p) => {
  return (
    <Suspense>
      <Routes>
        <Route index path="/" element={<Navigate replace to="/home" />} />
        <Route exact path="/home" element={<FinalAssemblyHome />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </Suspense>
    
  );
};

export default FinalAssemblyRoutes;
