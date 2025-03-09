import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/authContext'
import { useMemo } from 'react'

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

  // Define menu items in an array for cleaner mapping
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
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      {/* Sidebar Header / Toggle Button */}
      <div className='sidebar-header'>
        <button className='sidebar-toggle-btn' onClick={toggleSidebar}>
          {isSidebarOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
        </button>
      </div>

      {/* Menu List */}
      <ul className='menu-list'>
        {menuItems.map(({ path, label, icon }) => (
          <li key={path} className='menu-item'>
            <Link to={path}>
              {icon} {isSidebarOpen && <span>{label}</span>}
            </Link>
          </li>
        ))}
      </ul>

      {/* Sidebar Footer */}
      <div className='sidebar-footer'>
        <ul>
          <li className='menu-item' onClick={logout}>
            <Link to='/'>
              <LogoutIcon /> {isSidebarOpen && <span>Logout</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
