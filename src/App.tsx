import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthLayout } from './components/layouts/AuthLayout';
import './App.css'

function App() {
  return (
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="" element={<LoginPage />}/>
          <Route path=":register" element={<RegisterPage />}/>
        </Route>
        <Route path="/" element={<HomePage />}/>
      </Routes>
  );
}

export default App;