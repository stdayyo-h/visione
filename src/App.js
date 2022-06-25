
import './App.css';
import { EMPLOYEE_DASHBOARD, HOME, LOGIN, MANAGER_DASHBOARD, PRICING, PROFILE, PROJECTS, PROJECT_DASHBOARD, SERVICES, SIGNUP, USER_PROJECTS } from './constants/routes';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Employee_DashBoard from './pages/Employee_DashBoard';
import EProjects from './pages/EProjects';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Manager_DashBoard from './pages/Manager_DashBoard';
import Home from './pages/Home';
import Project_Dashboard from './pages/Project_Dashboard';
import Features from './components/features';
import Pricing from './components/Pricing';
export default function App() {
  return (
    <div >
      <BrowserRouter>
              <div >
                
              </div>
              <Routes>
              <Route path={HOME} element={<Home />} exact />
                <Route path={EMPLOYEE_DASHBOARD} element={<Employee_DashBoard />} exact />
                <Route path={MANAGER_DASHBOARD} element={<Manager_DashBoard />} exact />
                <Route path={USER_PROJECTS} element={<EProjects/>} exact />
                <Route path={PROFILE} element={<Profile/>} exact />
                <Route path={LOGIN} element={<Login/>} exact />
                <Route path={SIGNUP} element={<Signup/>} exact />
                <Route path={PROJECT_DASHBOARD} element={<Project_Dashboard/>} exact />
                <Route path={SERVICES} element={<Features/>} exact />
                <Route path={PRICING} element={<Pricing/>} exact />
                
                
              </Routes>
            </BrowserRouter>
    </div>
  )
}

