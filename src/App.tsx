import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ItemPage from "./pages/ItemPage";
import ThomasXD from "./pages/ThomasXD";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:itemSlug" element={<ItemPage />} />
      <Route path="/XD" element={<ThomasXD />} />
    </Routes>
  );
}

export default App;
