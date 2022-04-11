import './App.css';
import PresentantionForm from './Components/ProfileSolicitantes/PresentationForm/PresentationForm';
import LoginForm from './Components/LoginForm/LoginForm';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';

function App() {
  return (
    <div className="App">
      <LoginForm/>
      <RegistrationForm/>
      <PresentantionForm/>
    
    </div>
  );
}

export default App;
