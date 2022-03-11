
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/SignupPage';
import { getLocalStorage } from './lib/custom-hook/helper/localStorage';
import useToken from './lib/custom-hook/helper/userAuth';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [token,setToken] = useState(sessionStorage.getItem("token"))
  useEffect(() => {
    
    if(!token){
    
      // history.push("/login")
    }
  }, [])
  return (
   <BrowserRouter>
   <Routes>
   <Route
        path="/"
        element={
  
          <RequireAuth redirectTo="/login">
            <HomePage />
          </RequireAuth>
        }
      />
     <Route path='/login' element={
     <IfAuthenticated>
       <LoginPage />
     </IfAuthenticated> }/>
     <Route path='/signup'element={<SignupPage />} />
     
   </Routes>

   </BrowserRouter>
  );
}
function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = getLocalStorage("token")
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
function IfAuthenticated({children,redirectTo}) {
  let isAuthenticated = getLocalStorage("token")
  
  return isAuthenticated ? <Navigate to={"/"}/>: children
}
export default App;
