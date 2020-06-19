import React, { FC, useCallback, useContext, useEffect, useState } from 'react'

import { LoaderContext, UserContext } from 'core/context'
import { UserContract } from './UserContext.model'

export const UserContextProvider: FC = React.memo(({ children }) => {
    const { setLoaderState } = useContext(LoaderContext)
    const [userData, setUserData] = useState<UserContract | null>(null)

    const onSetUserData = useCallback(
        (userData: UserContract | null) => {
            setUserData(userData)
        },
        [setUserData]
    )

    const checkAuth = useCallback(async () => {
        if (userData) {
            return
        }

        try {
            setLoaderState(true)
            const user = await localStorage.getItem('userData')
            setUserData(user ? JSON.parse(user) : null)
        } catch (e) {
            console.log(e)
        } finally {
            setLoaderState(false)
        }
    }, [userData, setLoaderState, setUserData])

    useEffect(() => {
        checkAuth()
    }, [checkAuth])

    return (
        <UserContext.Provider value={{ userData, setUserData: onSetUserData }}>
            {children}
        </UserContext.Provider>
    )
})
