
import { Routes ,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'

import Policy from './pages/Policy'
import Pagenotfound from './pages/Pagenotfound'
import Register from './pages/Register'
import Signin from './pages/Signin'
import Connent from './pages/Connent'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Dashboard from './pages/user/Dashboard'



const App = () => {
  return (
    <>
    <Routes>
     <Route path="/" element={<HomePage/>} />
    <Route path="/about" element={<About/>} /> 
    <Route path="/register" element={<Register/>} /> 
    <Route path="/dashboard" element={<Dashboard/>} /> 
    <Route path="/contact" element={<Connent/>} />
    <Route path="/forgot-password" element={<ForgotPassword/>} />
    <Route
          path="/resetpassword/:resetPasswordToken"
          element={<ResetPassword />}
        />
    <Route path="/signin" element={<Signin/>} />
    <Route path="/policy" element={<Policy/>} />
    <Route path="/*" element={<Pagenotfound/>} />
   </Routes></>
   
  )
}

export default App
