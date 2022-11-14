//import './App.css';

import InternshipInsights from "./components/InternshipInsights";
import CreateNewInternship from "./components/CreateNewInternship"
import Showhidetab from "./components/Buttons"
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <> 
      <Router>
        <Routes> 
          <Route path="/" element={<InternshipInsights />} />  {/* Week 1-2 Task*/}
          <Route path="/CreateNewInternship" element={<CreateNewInternship/>} />  {/*Week 3-4 Task */}
          <Route path="/CreateNewInternship" element={<SearchBar/>} />
          <Route path="/Showhidetab" element={<Showhidetab/>} />
        </Routes>
      </Router>
      </>

  );
}

export default App;
