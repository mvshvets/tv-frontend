import './RadioButtonControl.scss'

import React from 'react'
import { Radio } from 'antd'

import { RadioControlProps } from './RadioControlProps.model'

/**
 * Декоратор для `RadioGroup` от `antd`, принимает все теже `props`
 */
export const RadioButtonControl: React.FC<RadioControlProps> = React.memo(
    (props) => {
        const { values = [], ...restProps } = props

        return (
            <div className="form-control radio-button-control">
                <Radio.Group {...restProps}>
                    {values.map((el) => (
                        <Radio.Button key={String(el.key)} value={el.value}>
                            {el.label}
                        </Radio.Button>
                    ))}
                </Radio.Group>
            </div>
        )
    }
)
