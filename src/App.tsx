import { Global } from "@emotion/react";
import { GlobalStyles } from "./GlobalStyles";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";

const MainPage = lazy(() => import("./pages/MainPage"));
const OfficesPage = lazy(() => import("./pages/OfficesPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/offices" element={<OfficesPage />} />
        </Route>
      </Routes>
      <Global styles={GlobalStyles} />
    </>
  );
}

export default App;
