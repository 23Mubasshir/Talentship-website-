import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import { UserAuthContextProvider } from './context/UserAuthContext.js'
import ProtectedRoutes from './auth/ProtectedRoutes'
import ForAdmin from './auth/ForAdmin'
import Category from './components/Category'
import Members from './components/Members'
import Projects from './components/Projects'
import AddCategory from './others/AddCategory'
import UpdateCategory from './others/UpdateCategory'
import UpdateProjects from './others/UpdateProjects'
import AddProjects from './others/AddProjects'
import UpdateMembers from './others/UpdateMembers'
import AddMembers from './others/AddMembers'
import Team from './components/Team'
import AllProjects from './components/AllProjects'
import ProjectView from './components/ProjectView'
import Navbar from './pages/Navbar'
import Principles from './pages/Principles'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <Router>
        <UserAuthContextProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/principles' element={<Principles/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/team' element={<Team/>} />
            <Route path='/allprojects' element={<AllProjects/>} />
            <Route path='/projectDetail/:id' element={<ProjectView/>} />
            <Route path='/login' element={<ForAdmin><Login/></ForAdmin>} />
            <Route path='/dashboard' element={<ProtectedRoutes><Dashboard/></ProtectedRoutes>} />
            <Route path='/category' element={<ProtectedRoutes><Category/></ProtectedRoutes>} />
            <Route path='/projects' element={<ProtectedRoutes><Projects/></ProtectedRoutes>} />
            <Route path='/members' element={<ProtectedRoutes><Members/></ProtectedRoutes>} />
            <Route path='/addadmin' element={<ProtectedRoutes><Register/></ProtectedRoutes>} />
            <Route path='/addCategory' element={<ProtectedRoutes><AddCategory/></ProtectedRoutes>} />
            <Route path='/addProject' element={<ProtectedRoutes><AddProjects/></ProtectedRoutes>} />
            <Route path='/addMember' element={<ProtectedRoutes><AddMembers/></ProtectedRoutes>} />
            <Route path='/updateCategory/:id' element={<ProtectedRoutes><UpdateCategory/></ProtectedRoutes>} />
            <Route path='/updateProject/:id' element={<ProtectedRoutes><UpdateProjects/></ProtectedRoutes>} />
            <Route path='/updateMember/:id' element={<ProtectedRoutes><UpdateMembers/></ProtectedRoutes>} />
          </Routes>
        </UserAuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
