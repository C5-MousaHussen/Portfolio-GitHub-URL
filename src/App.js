import "./App.css";
import { Route, Routes } from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import Profile from "./component";
import Skills from "./component/Skills";


const App = () => {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
};

export default App;
