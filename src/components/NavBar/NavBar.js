import React from 'react';

import UserSection from './../UserSection/UserSection';

const NavBar = () => {
    return (
        <nav>
           <h1>MB Tracker</h1>
           <section>
               <UserSection />
           </section>
        </nav>
    )
};

export default NavBar;

