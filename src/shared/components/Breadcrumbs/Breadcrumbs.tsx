import './Breadcrumbs.scss'

import React, { useCallback, useMemo } from 'react'
import { BREADCRUMBS_ROUTES } from 'routing'
import { NavLink, useLocation } from 'react-router-dom'

import { IconsAdapter } from '..'

/**
 * Хлебные крошки
 */
export const Breadcrumbs: React.FC = React.memo(() => {
    const location = useLocation()
    const currentPaths = location.pathname.split('/')

    const renderBreadcrumbs = useCallback(
        (el: string) => {
            const pathIndexToSlice = currentPaths.findIndex((path) => {
                return path === el
            })

            const link = currentPaths.slice(0, pathIndexToSlice + 1).join('/')

            const getLinkText = () => {
                if (el === '') {
                    return <IconsAdapter iconType="HomeOutlined" />
                }
                if (el !== '' && !isNaN(Number(el))) {
                    const childKey = `${currentPaths.slice(
                        pathIndexToSlice - 1,
                        pathIndexToSlice
                    )}:id`
                    return BREADCRUMBS_ROUTES[childKey]
                }
                return BREADCRUMBS_ROUTES[el]
            }

            return (
                <li key={el}>
                    <NavLink to={link}>{getLinkText()}</NavLink>
                </li>
            )
        },
        [currentPaths]
    )

    const breadcrumbs = useMemo(() => currentPaths.map(renderBreadcrumbs), [
        currentPaths,
        renderBreadcrumbs,
    ])

    return <ul className="breadcrumbs">{breadcrumbs}</ul>
})
