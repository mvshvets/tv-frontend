import './Header.sass'

import React, { FC, useCallback, useContext } from 'react'
import { UserContext } from 'core/context'
import Logo from 'shared/image/logo.png'

import { MainMenu } from './components'
import { Button } from 'antd'
import { ROUTE_NAMES } from 'routing'
import { Link } from 'react-router-dom'
import { PopupAdapter, AuthModal } from 'shared/popups'
import { Store } from 'rc-field-form/lib/interface'

export const Header: FC = React.memo(() => {
    const { userData, setUserData } = useContext(UserContext)

    const handleRequestFinish = useCallback((popupHandler: () => void) => (values: Store) => {
        if (values.login === 'admin' && values.password === 'admin') {
            popupHandler()
            setUserData(values)
        }
    }, [setUserData])

    const handleLogout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        localStorage.removeItem('userData')
        setUserData(null)
    }

    return (
        <header className="header">
            <Link to={ROUTE_NAMES.MAIN}>
                <img src={Logo} alt="Логотип"/>
            </Link>
            <div className="header__menu-wrapper">
                <MainMenu/>
                {userData ? <Button onClick={handleLogout} >ВЫХОД</Button> : <PopupAdapter
                    component={AuthModal}
                    formId="authForm"
                    buttonText="ВХОД"
                    onRequestFinish={handleRequestFinish}
                    modalOptions={{/*wrapClassName: 'auth-modal-popup'*/footer: null}}
                />}
            </div>
        </header>
    )
})
