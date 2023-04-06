import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Component/Home";
import Add from "./Component/Add";
import Edit from "./Component/EditDialog";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/Create" element={<Add />}></Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
