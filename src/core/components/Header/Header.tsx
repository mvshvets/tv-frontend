import './Header.sass'

import React, { FC, useContext } from 'react'
import { UserContext } from 'core/context'
import Logo from 'shared/image/logo.png'

import { MainMenu } from './components'
import { Button } from 'antd'
import { ROUTE_NAMES } from 'routing'
import { Link } from 'react-router-dom'

export const Header: FC = React.memo(() => {
    const { userData } = useContext(UserContext)

    const handleLogout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        localStorage.removeItem('userData')
    }

    return (
        <header className="header">
            <Link to={ROUTE_NAMES.MAIN}>
                <img src={Logo} alt="Логотип"/>
            </Link>
            <div className="header__menu-wrapper">
                <MainMenu/>
                {userData ? <Button onClick={handleLogout} >ВЫХОД</Button> : <Button>ВХОД</Button>}
            </div>
        </header>
    )
})
