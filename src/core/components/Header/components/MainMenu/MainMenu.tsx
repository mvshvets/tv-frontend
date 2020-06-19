import './MainMenu.scss'
import React, { FC, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { MAIN_MENU_ITEMS } from './consts'

export const MainMenu: FC = React.memo(() => {
    const menuRender = useMemo(
        () =>
            MAIN_MENU_ITEMS.map((menuItem) => (
                <NavLink to={menuItem.link} key={menuItem.title}>
                    {menuItem.title}
                </NavLink>
            )),
        []
    )

    return <nav className="nav">{menuRender}</nav>
})
