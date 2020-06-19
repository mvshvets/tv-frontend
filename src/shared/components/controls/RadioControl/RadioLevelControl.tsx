import './RadioLevelControl.scss'

import React, { useCallback, useMemo } from 'react'
import { Col, Radio, Row } from 'antd'

import { RadioControlProps } from './RadioControlProps.model'

/**
 * Декоратор для `RadioGroup` от `antd`, принимает все теже `props`
 */
export const RadioLevelControl: React.FC<RadioControlProps> = React.memo(
    (props) => {
        const {
            values = [],
            label,
            labelCol = { xs: 8 },
            valueCol = { xs: 16 },
            rowOptions = { gutter: 20, align: 'middle' },
            ...restProps
        } = props

        const renderLevel = useCallback(
            (count: number) => new Array(count).fill(<span></span>),
            []
        )

        const radios = useMemo(() => {
            return values
                .map((el) => (
                    <Radio
                        key={String(el.key)}
                        value={el.value}
                        className="radio-level-control__level"
                        style={{
                            width: `calc(100% / ${values.length} * ${Number(
                                el.value
                            )})`,
                        }}
                    >
                        <div className="radio-level-control__grid">
                            {renderLevel(Number(el.value))}
                        </div>
                        <div
                            className="radio-level-control__label"
                            style={{
                                width: `calc(100% / ${Number(el.value)})`,
                            }}
                        >
                            {el.label}
                        </div>
                    </Radio>
                ))
                .reverse()
        }, [renderLevel, values])

        return (
            <div className="form-control radio-level-control">
                <Row {...rowOptions}>
                    <Col {...valueCol}>
                        <Radio.Group {...restProps}>{radios}</Radio.Group>
                    </Col>
                    <Col {...labelCol}>
                        {label && (
                            <div className="radio-level-control__group-label">
                                {label}
                            </div>
                        )}
                    </Col>
                </Row>
            </div>
        )
    }
)
