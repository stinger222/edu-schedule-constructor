import { HashRouter, Route, Routes } from "react-router-dom";
import Lessons from "./pages/Lessons";
import Main from "./pages/Main";
import Rings from "./pages/Rings";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/lessons" element={<Lessons />}/>
        <Route path="/rings" element={<Rings />}/>
      </Routes>
    </HashRouter>
  )
}

export default App;
