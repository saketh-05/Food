import React from 'react';
import { LocateIcon, Search, Utensils } from 'lucide-react';
import { useNavigate,useLocation } from 'react-router-dom';
export default function Header({onLogout, handleSearchInput}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = React.useState('');
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleSearch = () => {
    handleSearchInput(value);
  };
  const triggerLogout = () => {
    onLogout();
  };
  const redirectHome = () => {
    navigate('/');
  };
  return (
    <header className="header">
      <div className="header__icon">
        <Utensils className="utensils-icon" onClick={redirectHome}/>
      </div>
      <h1 className="header__title">FoodTube</h1>
      <div className="header__center">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search for recipes..."
              className="search-input"
              value={value}
              onChange={handleInputChange}
            />
            <Search onClick={handleSearch} className="search-icon" />
          </div>
      </div>
      {location.pathname.includes('/recipe') ?
      null : (<div className="header__right">
      <button onClick={triggerLogout} className='app__logout'>Logout</button>
   </div> )}
      
    </header>
  );
}
