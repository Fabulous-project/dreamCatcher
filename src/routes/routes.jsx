import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Login from '../pages/login'
import SignUpPage from '../pages/signUpPage'
import ProtectedRoute from './protectRoutes'
import CreateD from '../pages/dreams/createDream'
import YourDreams from '../pages/dreams/privateDreams'
import Dashboard from '../pages/dashboard'
import PublicDreams from '../pages/dreams/comunitiesDream'
import LandingPage from '../pages/landingPage'
import MyProfile from '../pages/userProfile/userProfile'
import DreamDetails from '../pages/dreams/dreamDetails'
import NotFound from '../pages/not-found'
import Analysis from '../pages/analysis'
import MoodAnalysis from '../pages/analysismoods'
import Moods from '../pages/moods/moods'

const AppRoutes = () => {
  const location = useLocation()
  const hideNavbarRoutes = ['/', '/login', '/signup']
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname)
  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <div className='main-area'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/*' element={<NotFound />} />
          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <MyProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path='/add-dream'
            element={
              <ProtectedRoute>
                <CreateD />
              </ProtectedRoute>
            }
          />

          <Route
            path='/mine-dreams'
            element={
              <ProtectedRoute>
                <YourDreams />
              </ProtectedRoute>
            }
          />
          <Route
            path='/dream/:dreamId'
            element={
              <ProtectedRoute>
                <DreamDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path='/public-dreams'
            element={
              <ProtectedRoute>
                <PublicDreams />
              </ProtectedRoute>
            }
          />
          <Route
            path='/analysis'
            element={
              <ProtectedRoute>
                <Analysis />
              </ProtectedRoute>
            }
          />
          <Route
            path='/moods-tracker'
            element={
              <ProtectedRoute>
                <Moods />
              </ProtectedRoute>
            }
          />
          <Route
            path='/moods-analysis'
            element={
              <ProtectedRoute>
                <MoodAnalysis />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  )
}

export default AppRoutes
