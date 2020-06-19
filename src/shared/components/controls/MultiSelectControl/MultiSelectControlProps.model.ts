import { TreeSelectProps } from 'antd/lib/tree-select'

export interface MultiSelectControlProps<T> extends TreeSelectProps<T> {
    onChange?: (value: T) => void
    hasTagsCloud?: boolean
    isSeparateSelection?: boolean
}
