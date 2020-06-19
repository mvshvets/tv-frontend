import './InputControl.scss'

import React from 'react'
import { Input } from 'antd'

import { InputControlProps } from './InputControlProps.model'

/**
 * Декоратор для `Input` от `antd`, принимает все теже `props`
 */
export const InputControl: React.FC<InputControlProps> = React.memo((props) => {
    return (
        <div className="form-control input-control">
            <Input {...props} />
        </div>
    )
})
