import './AuthPage.scss'

import logologin from 'shared/image/logo.svg'
import React, { FC, useCallback, useContext, useEffect } from 'react'
import { Button, Form, message, Row } from 'antd'
import { InputControl, InputPasswordControl } from 'shared/components'
import { ROUTE_NAMES } from 'routing'
import { LoaderContext, UserContext } from 'core/context'
import { useHistory } from 'react-router-dom'

const errorMessageLogin: string = 'Пожалуйста, введите логин!'
const errorMessagePassword: string = 'Пожалуйста, введите пароль!'

export const AuthPage: FC = React.memo(() => {
    const { setLoaderState } = useContext(LoaderContext)
    const { userData, setUserData } = useContext(UserContext)
    const history = useHistory()

    const handleFinish = useCallback((values) => {
        try {
            setLoaderState(true)
            if (values.login === 'admin' && values.password === 'admin') {
                localStorage.setItem('userData', JSON.stringify(values))
                setUserData(values)
            } else {
                message.error('Неверный логин или пароль')
            }
        } catch (e) {
            console.log(e)
        } finally {
            setLoaderState(false)
        }
    }, [setLoaderState, setUserData])

    useEffect(() => {
        userData && history.push(ROUTE_NAMES.MAIN)
    }, [userData, history])

    return (
        <Row className="auth">
            <Form
                className="form"
                onFinish={handleFinish}
                hideRequiredMark
                size="large"
            >
                <img src={logologin} alt="Logo" height={65} width={268}/>
                <br/>
                <label htmlFor="login">логин</label>
                <Form.Item
                    name="login"
                    className="field"
                    rules={[
                        {
                            required: true,
                            message: errorMessageLogin,
                        },
                    ]}
                >
                    <InputControl className="field__input"/>
                </Form.Item>
                <label htmlFor="password">пароль</label>
                <Form.Item
                    name="password"
                    className="field"
                    rules={[
                        {
                            required: true,
                            message: errorMessagePassword,
                        },
                    ]}
                >
                    <InputPasswordControl
                        visibilityToggle={false}
                        className="field__input"
                    />
                </Form.Item>
                <Form.Item className="buttons">
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="buttons__button"
                        size={'middle'}
                    >
                        войти
                    </Button>
                </Form.Item>
            </Form>
        </Row>
    )
})
