import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Layout from "../Layout/Layout";
import Preferences from "../Preferences/Preferences";
import Public from "../Public/Public";
import Register from "../Register/Register";
import "./App.less";

const App = () => {
  return (
    <div className="wrapper">
      <h1>Role In Story</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route
              path="/preferences"
              element={<Preferences></Preferences>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
