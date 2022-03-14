
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/SignUp/SignupPage';
import { getLocalStorage } from './lib/custom-hook/helper/localStorage';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header/Header';
import ProfilePage from './pages/ProfilePage';

function App() {

  return (
    <BrowserRouter>
     <Header />

   <Routes>
   <Route
        path="/"
        element={
  
          <RequireAuth redirectTo="/login">
            <HomePage />
          </RequireAuth>
        }
      />

     <Route path='/profile' 
      element={
        <RequireAuth redirectTo="/login">
          <ProfilePage />
        </RequireAuth>
      }
     />
     <Route path='/login' element={
     <IfAuthenticated>
       <LoginPage />
     </IfAuthenticated> }/>
     <Route path='/signup'element={
     <IfAuthenticated>
      <SignupPage />
      </IfAuthenticated>} />
     
   </Routes>
      <ToastContainer />
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
