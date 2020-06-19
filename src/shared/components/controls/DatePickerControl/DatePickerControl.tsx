import './DatePickerControl.scss'

import React from 'react'
import { DatePicker } from 'antd'

import { DatePickerControlProps } from './DatePickerControlProps.model'
import { dateFormatList } from './consts'

/**
 * Декоратор для `DatePicker` от `antd`, принимает все теже `props`
 */
export const DatePickerControl: React.FC<DatePickerControlProps> = React.memo(
    (props) => {
        return (
            <div className="form-control date-picker-control">
                <DatePicker format={dateFormatList} {...props} />
            </div>
        )
    }
)
