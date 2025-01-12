import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import Layout from "./components/Layout/Layout";
import AddDevice from "./components/AddDevice/AddDevice";
import Configuration from "./components/Configuration/Configuration";
import GeneralInfo from "./components/GeneralInfo/GeneralInfo";
import Network from "./components/Network/Network";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { LangProvider } from "./context/LangContext";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="app">
                <LangProvider>
                  <Sidebar />
                  <Layout>
                    <Routes>
                      <Route path="/" element={<Navigate to="/combox" replace />} />
                      <Route path="/combox" element={<GeneralInfo />} />
                      <Route path="/generalinfo" element={<GeneralInfo />} />
                      <Route path="/configuration" element={<Configuration />} />
                      <Route path="/network" element={<Network />} />
                      <Route path="/add-device" element={<AddDevice />} />
                    </Routes>
                  </Layout>
                </LangProvider>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

