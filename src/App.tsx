import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:itemSlug" element={<ItemPage />} />
    </Routes>
  );
}

export default App;
