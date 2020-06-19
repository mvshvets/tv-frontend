import './InputControl.scss'

import React from 'react'
import { InputNumber } from 'antd'

import { InputNumberControlProps } from './InputControlProps.model'

/**
 * Декоратор для `InputNumber` от `antd`, принимает все теже `props`
 */
export const InputNumberControl: React.FC<InputNumberControlProps> = React.memo(
    (props) => {
        return (
            <div className="form-control input-number-control">
                <InputNumber {...props} />
            </div>
        )
    }
)
