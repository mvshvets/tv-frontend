import './MultiSelectControl.scss'

import React, { useCallback, useMemo } from 'react'
import { TreeSelect } from 'antd'

import { DataNode } from '../../../../../node_modules/rc-tree-select/lib/interface.d'
import { MultiSelectControlProps } from './MultiSelectControlProps.model'

/**
 * Декоратор для `TreeSelect` от `antd`, принимает все теже `props`.
 * Использовать в случае, если нужен множественный выбор.
 */
export const MultiSelectControl: React.FC<MultiSelectControlProps<
    number[]
>> = React.memo((props) => {
    const {
        onChange,
        value,
        treeData,
        hasTagsCloud,
        isSeparateSelection,
        ...additionalProps
    } = props

    /**
     * Функция возвращает label
     * @param value - значение по которому необходимо найти label
     */
    const getTagLabel = useCallback(
        (value: number) => {
            const searchLabel = (el: DataNode): unknown =>
                el.value === value || el.children?.find(searchLabel)

            return treeData?.find(searchLabel)?.title
        },
        [treeData]
    )

    const handleDeselectOption = useCallback(
        (id: number) => {
            if (onChange && value) onChange(value.filter((el) => el !== id))
        },
        [value, onChange]
    )

    const tags = useMemo(() => {
        return value?.map((el: number) => (
            <span
                className="multi-select-tags__item"
                key={el}
                onClick={() => handleDeselectOption(el)}
            >
                <span>{getTagLabel(el)}</span>
                <i />
            </span>
        ))
    }, [getTagLabel, handleDeselectOption, value])

    return (
        <div
            className={`form-control multi-select-control${
                hasTagsCloud ? ' multi-select-control_has-tags-cloud' : ''
            }`}
        >
            {isSeparateSelection ? (
                <TreeSelect
                    defaultValue={value}
                    dropdownClassName="multi-select-control__dropdown"
                    multiple
                    allowClear
                    treeNodeFilterProp="title"
                    treeData={treeData}
                    onChange={onChange}
                    value={value}
                    {...additionalProps}
                />
            ) : (
                <TreeSelect
                    defaultValue={value}
                    dropdownClassName="multi-select-control__dropdown"
                    treeCheckable={true}
                    treeNodeFilterProp="title"
                    showCheckedStrategy="SHOW_PARENT"
                    treeData={treeData}
                    onChange={onChange}
                    value={value}
                    {...additionalProps}
                />
            )}
            {tags && hasTagsCloud && (
                <div className="multi-select-tags">{tags}</div>
            )}
        </div>
    )
})
