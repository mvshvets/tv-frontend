import './SelectControl.scss'

import React from 'react'
import { LabeledValue } from 'antd/lib/select'
import { Select } from 'antd'

import { SelectControlProps } from './SelectControlProps.model'

const { Option } = Select

/**
 * Декоратор для `Select` от `antd`, принимает все теже `props`
 */
export const SelectControl: React.FC<SelectControlProps<
    LabeledValue
>> = React.memo((props) => {
    const { values = [], dropdownClassName, ...restProps } = props

    return (
        <div className="form-control select-control">
            <Select
                {...restProps}
                dropdownClassName={`select-control__dropdown${
                    dropdownClassName ? ' ' + dropdownClassName : ''
                }`}
            >
                {values.map((el) => (
                    <Option key={String(el.key)} value={el.value}>
                        {el.label}
                    </Option>
                ))}
            </Select>
        </div>
    )
})
