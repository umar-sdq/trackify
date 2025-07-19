import { NavLink } from 'react-router-dom';
import '../Header/Header.css';

const Header = () => {
  return (
     <div className="header">
      <div className='buttons'>
      <div className='SignUp'>
        <button>Sign up</button>
      </div>
       <div className='Login'>
        
        <button>Log in</button>
      </div>
      </div>
      
      </div>
    // <div className="header">
    //   <NavLink to="/profile">
    //     <h2>My Profile</h2>
    //   </NavLink>
    //   <NavLink to="/settings">
    //     <h2>Settings</h2>
    //   </NavLink>
    //   <NavLink to="/dashboard">
    //     <h2>Dashboard</h2>
    //   </NavLink>
    //   <NavLink to="/help">
    //     <h2>Help</h2>
    //   </NavLink>
    // </div>
  );
};

export default Header;
