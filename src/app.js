import React, { useState } from 'react';
import Content from './Content';
import { MainContext } from './contexts/MainContext'
import Side from './Sidebar';
import SideBar from './Sidebar';

const App = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div>
            <MainContext.Provider value={{ showMenu, setShowMenu }}>
                <SideBar />
                <Content />
            </MainContext.Provider>
        </div>
    )
}


export default App;
