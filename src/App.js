import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route  path="/" element={<Page1 />} />
        <Route exact path="/BirthdayMessage" element={<Page2 />} />
        <Route exact path="/poem" element={<Page3 />} />
        <Route exact path="/suggestions" element={<Page4 />} />
      </Routes>
    </div>
  );
}

export default App;
