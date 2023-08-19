/**
 * Item Impact
 *
 * App.js
 */

// Importsimport React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemImpact from "./ItemImpact";
import NavBar from "./components/NavBar";
import UploadScreen from "./screens/UploadScreen";
import ResultsScreen from "./screens/ResultsScreen";
import NoPage from "./screens/NoPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<UploadScreen />} />
            <Route path="/results" element={<ResultsScreen />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
