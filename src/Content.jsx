import React, { useContext } from 'react';
import Gallery from './gallery/Gallery';
import Posts from './posts/Posts';
import style from './style.module.css'
import Todos from './todos/Todos';
import Users from './users/Users';
import { MainContext } from './contexts/MainContext';

const Content = () => {
    const { showMenu, setShowMenu } = useContext(MainContext);

    const handleShowMenu = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    }

    return (
        <div className={style.content_section} onClick={()=>{setShowMenu(false)}}>
            <i className={`${style.menu_button} fas fa-bars text-dark m-2 pointer`} onClick={handleShowMenu}></i>
            <Users />
            <Posts />
            <Gallery />
            <Todos />
        </div>
    )
}

export default Content;