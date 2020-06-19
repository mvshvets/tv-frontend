import './Header.sass'

import React, { FC, useContext } from 'react'
import { UserContext } from 'core/context'
import Logo from 'shared/image/logo.png'

import {
    MainMenu,
    ProfileMenu,
} from './components'
import { Button } from 'antd'
import { ROUTE_NAMES } from 'routing'
import { Link } from 'react-router-dom'

export const Header: FC = React.memo(() => {
    const { userData } = useContext(UserContext)
    return (
        <header className="header">
            <Link to={ROUTE_NAMES.MAIN}>
                <img src={Logo} alt="Логотип"/>
            </Link>
            <div>
                <MainMenu/>
                {userData ? <ProfileMenu/> : <Button>ВХОД</Button>}
            </div>
        </header>
    )
})
