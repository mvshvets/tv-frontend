import './Profile.sass'

import React, { FC, useCallback, useEffect, useState } from 'react'

import { Col, Form, Row } from 'antd'
import { CheckboxControl, IconsAdapter, InputControl, SelectControl } from 'shared/components'
import { PROFILE_ITEMS } from './consts'
import { API } from 'api'

export const Profile: FC = React.memo(() => {
    const [profileData, setProfileData] = useState(PROFILE_ITEMS)

    const handleAddCourse = useCallback((value) => {
        console.log(value)
        setProfileData([...profileData, value
        ])
    }, [profileData])

    useEffect(() => {
        API.getEduPrograms()
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <Form id={'profileData'}>
            <Row gutter={15}>
                <Col xs={8}>Название дисциплины/Направление подготовки/Год поступления </Col>
                <Col xs={2}>онлайн курс</Col>
            </Row>
            <ol className={'profile-data__items'}>
                {profileData.map(el => {
                    return <li key={performance.now()}>
                        <Row gutter={15}>
                            <Col xs={8}>
                                <div>{el.value}</div>
                            </Col>

                            <Col xs={2}>
                                <Form.Item
                                    name={'isOnline'}
                                    valuePropName={'checked'}
                                >
                                    <CheckboxControl/>
                                </Form.Item>
                            </Col>

                            <Col xs={11}>
                                <Form.Item
                                    name={'link'}
                                >
                                    <InputControl prefix={<IconsAdapter iconType={'LinkOutlined'}/>}
                                                  value={el.link}
                                                  placeholder={'введите электронный адрес курса'}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </li>
                })}
            </ol>
            <Col xs={8}>
            <Form.Item
            name={'newCourse'}
            >
                <SelectControl
                    values={[{ value: 'coding2020', label: 'Программирование (Электронная коммерция - 2020)' }]}
                    placeholder={'Выберите дисциплину'}
                    style={{margin: '0 20px'}}
                    onChange={handleAddCourse}
                />
            </Form.Item>
            </Col>
        </Form>
    )
})
