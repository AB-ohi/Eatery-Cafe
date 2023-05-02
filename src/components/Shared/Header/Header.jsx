import React from 'react';
import '../Header/Header.css'
import Navber from '../Navber/Navber';
import { Outlet } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;