import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import PresentationForm from "./components/PerfilSolicitante/PresentationForm";
import PersonalInformation from "./components/PerfilSolicitante/PersonalInformation/PersonalInformation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/presentation" element={<PresentationForm/>}/>
          <Route path="/PersonalInformation" element={<PersonalInformation/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
