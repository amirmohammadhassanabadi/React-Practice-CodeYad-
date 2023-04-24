import React, { useContext } from 'react';
import { MainContext } from './contexts/MainContext';
import style from './style.module.css';
import imgUser from './assets/images/user.WEBP';
import imgLogo from './assets/images/logo.png'

const SideBar = () => {

    const { showMenu, setShowMenu } = useContext(MainContext)

    return (
        <div className={`${style.sidebar_section} bg-secondary`} style={showMenu ? {right: 0} : {}}>
            <div>
                <ul className={`${style.sidebar_list} m-0 p-0`}>
                    <li className={style.sidebar_avatar}>
                        <img src={imgUser} alt="" />
                    </li>
                    <li>
                        <a href="/">کاربران</a>
                    </li>
                    <li>
                        <a href="/">پست ها</a>
                    </li>
                    <li>
                        <a href="/">گالری</a>
                    </li>
                    <li>
                        <a href="/">کارها</a>
                    </li>
                </ul>
            </div>
            <div className={`${style.sidebar_logo} logoImg`}>
                <img src={imgLogo} alt="" />
            </div>
        </div>
    )

}

export default SideBar;