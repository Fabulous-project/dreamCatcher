import { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/authContext'

// Icons
import {
  NightsStay as NightsStayIcon,
  Public as PublicIcon,
  AddBox as AddBoxIcon,
  AutoGraph as AutoGraphIcon,
  AccountCircle as AccountCircleIcon,
  AutoAwesome as AutoAwesomeIcon,
  Logout as LogoutIcon,
  Mood as MoodIcon,
  Insights as InsightsIcon,
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon
} from '@mui/icons-material'

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const { user, logout } = useAuthContext()

  const [isMobile, setIsMobile] = useState(window.innerWidth < 490)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 490)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const sidebarClass = isSidebarOpen && !isMobile ? 'open' : 'closed'

  const menuItems = useMemo(
    () => [
      { path: '/mine-dreams', label: 'My Dreams', icon: <AutoAwesomeIcon /> },
      { path: '/analysis', label: 'Analytics', icon: <AutoGraphIcon /> },
      { path: '/add-dream', label: 'Add New Dream', icon: <AddBoxIcon /> },
      { path: '/profile', label: 'My Profile', icon: <AccountCircleIcon /> },
      { path: '/public-dreams', label: 'Public Dreams', icon: <PublicIcon /> },
      { path: '/moods-tracker', label: 'Mood Tracker', icon: <MoodIcon /> },
      {
        path: '/moods-analysis',
        label: 'Mood Analysis',
        icon: <InsightsIcon />
      }
    ],
    []
  )

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className='sidebar-header'>
        <button className='sidebar-toggle-btn' onClick={toggleSidebar}>
          {isSidebarOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
        </button>
      </div>

      <ul className='menu-list'>
        {menuItems.map(({ path, label, icon }) => (
          <li key={path} className='menu-item'>
            <Link to={path}>
              {icon} {isSidebarOpen && !isMobile && <span>{label}</span>}
            </Link>
          </li>
        ))}
      </ul>

      <div className='sidebar-footer'>
        <ul>
          <li className='menu-item' onClick={logout}>
            <Link to='/'>
              <LogoutIcon /> {isSidebarOpen && !isMobile && <span>Logout</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
