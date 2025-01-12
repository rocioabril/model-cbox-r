import UserMenu from '../UserMenu/UserMenu'
import './layout.css'
const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="layout-user-menu">
        <UserMenu />
      </div>
      {children}
    </div>
  )
}

export default Layout