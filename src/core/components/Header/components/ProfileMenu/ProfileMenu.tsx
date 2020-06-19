import './ProfileMenu.scss'

import React, { FC } from 'react'
import { Button } from 'antd'


const handleLogout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    localStorage.removeItem('userData')
}

export const ProfileMenu: FC = React.memo(() => {

    return <Button onClick={handleLogout}>ВЫЙТИ</Button>
})
