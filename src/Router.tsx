import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Missing from "./pages/Missing";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<Missing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
