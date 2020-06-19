import { LabeledValue, SelectProps } from 'antd/lib/select'

export interface SelectControlProps<T> extends SelectProps<T> {
    values: LabeledValue[]
}
