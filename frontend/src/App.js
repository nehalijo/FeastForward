//simport logo from './logo.svg';
import LoginSignup from './components/loginsignup/login'
import Home from './components/home/home'
import DonorForm from './components/donorpage/donorform'

import './App.css';

function App() {
  console.log(12)
  return (
    <div>
      <LoginSignup> </LoginSignup>
      <Home />
      <DonorForm/>
    </div>
  );
}

export default App;
