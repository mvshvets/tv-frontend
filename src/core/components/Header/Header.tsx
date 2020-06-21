import './Header.sass'

import React, { FC, useCallback, useContext } from 'react'
import { LoaderContext, UserContext } from 'core/context'
import Logo from 'shared/image/logo.png'
import { useHistory } from 'react-router-dom'
import { MainMenu } from './components'
import { Button } from 'antd'
import { ROUTE_NAMES } from 'routing'
import { Link } from 'react-router-dom'
import { PopupAdapter, AuthModal } from 'shared/popups'
import { Store } from 'rc-field-form/lib/interface'
import { API } from 'api'

export const Header: FC = React.memo(() => {
    const { userData, setUserData } = useContext(UserContext)
    const { setLoaderState } = useContext(LoaderContext)
    const history = useHistory()

    const handleRequestFinish = useCallback((popupHandler: () => void) => (values: Store) => {
        try {
            setLoaderState(true)
            if (values.login === 'admin' && values.password === 'admin') {
                popupHandler()
                API.getTeacherInfo('c2dbb4e8-a4a9-4f95-92a7-51749e6069fa')
                    .then(res => {
                            setUserData(res.data)
                            history.push(ROUTE_NAMES.PROFILE)
                        }
                    )
            }
        } finally {
            setLoaderState(false)
        }
    }, [setUserData, history, setLoaderState])

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
                {userData ? <Button onClick={handleLogout}>ВЫХОД</Button> : <PopupAdapter
                    component={AuthModal}
                    formId="authForm"
                    buttonText="ВХОД"
                    onRequestFinish={handleRequestFinish}
                    modalOptions={{/*wrapClassName: 'auth-modal-popup'*/footer: null }}
                />}
            </div>
        </header>
    )
})
