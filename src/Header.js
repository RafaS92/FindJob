import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://www.freeiconspng.com/thumbs/recruitment-icon/recruitment-icon-9.png" alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Home" />
                <HeaderOption Icon={ChatIcon} title="My Network" />
                <HeaderOption Icon={NotificationsIcon} title="Home" />
                <HeaderOption avatar="https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png" />
            </div>
        </div>
    )
}

export default Header