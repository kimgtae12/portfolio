// eslint-disable-next-line

import React from 'react';

function Menubar(props) {
    const menuEl = props.menu.map(menu => {
        return (
            <div className="menu-element" key={menu.menuname}>
                <div className="el-width">
                    <a href={menu.link}>{menu.menuname}</a>
                    <hr />
                </div>
            </div>
        )
    });
    return (
        <section className="menu-area">
            {menuEl}
        </section>
    )
}

export default Menubar;