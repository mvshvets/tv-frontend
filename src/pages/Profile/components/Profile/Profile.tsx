import './Profile.sass'

import React, { FC } from 'react'

import { Col, Form, Row, Button } from 'antd'
import { IconsAdapter, InputControl, SelectControl } from 'shared/components'
import { LABEL_COL, PROFILE_STAT, WORK_ITEMS } from './consts'
import Teacher2 from 'shared/image/teacher2.png'

export const Profile: FC = React.memo(() => {

    return (
        <Form id={'subjectData'} colon={false} className={'profile-tab'}>
            <Row gutter={90}>
                <Col xs={12}>
                    <Row style={{ marginBottom: 10, fontSize: 16 }}>
                        <IconsAdapter iconType={'BankOutlined'} style={{ margin: '4px 5px 0' }}/>
                        <div>Самарский государственный социально-педагогический университет</div>
                    </Row>
                    <Form.Item
                        name={'surname'}
                        label={'ФАМИЛИЯ'}
                        labelCol={LABEL_COL}
                        labelAlign={'left'}
                    >
                        <InputControl placeholder={'Маврин'}/>
                    </Form.Item>
                    <Form.Item
                        name={'name'}
                        label={'ИМЯ'}
                        labelCol={LABEL_COL}
                        labelAlign={'left'}
                    >
                        <InputControl placeholder={'Сергей'}/>
                    </Form.Item>
                    <Form.Item
                        name={'patronymic'}
                        label={'ОТЧЕСТВО'}
                        labelCol={LABEL_COL}
                        labelAlign={'left'}
                    >
                        <InputControl placeholder={'Алексеевич'}/>
                    </Form.Item>
                    <Form.Item
                        name={'academicDegree'}
                        label={'УЧЕНАЯ СТЕПЕНЬ'}
                        labelCol={LABEL_COL}
                        labelAlign={'left'}
                    >
                        <InputControl placeholder={'кандидат педагогических наук'}/>
                    </Form.Item>
                    <Form.Item
                        name={'academicTitle'}
                        label={'УЧЕНОЕ ЗВАНИЕ'}
                        labelCol={LABEL_COL}
                        labelAlign={'left'}
                    >
                        <SelectControl placeholder={'доцент'} values={[
                            { value: 'без звания', label: 'без звания', key: '1' },
                            { value: 'доцент', label: 'доцент', key: '2' },
                            { value: 'профессор', label: 'профессор', key: '3' }]}
                        />
                    </Form.Item>
                    <Form.Item
                        name={'scopus'}
                        label={'SCOPUS'}
                        labelCol={LABEL_COL}
                        labelAlign={'left'}
                    >
                        <InputControl placeholder={'https://www.uri?authorId=57210738423'}/>
                    </Form.Item>
                </Col>

                <Col className={'work-list'} xs={10}>
                    <div className={'work-list__title'}>Работа по профилю вне вуза</div>
                    <ol className={'work-list__items'}>
                        {WORK_ITEMS.map(el => {
                            return <li key={el.key}>
                                <Row style={{ justifyContent: 'space-between', display: 'flex', width: '100%' }}>
                                    <div>{el.value}</div>
                                    <div>{el.label}</div>
                                </Row>
                            </li>
                        })}
                    </ol>
                    <Button type={'primary'}>Добавить место работы</Button>

                    <ul className={'stat-list__items'}>
                        {PROFILE_STAT.map(el => {
                            return <li key={el.key}>
                                <Row style={{ justifyContent: 'space-between', display: 'flex', width: '100%', color: (Number(el.stat) < 2) ? '#f54d4d' : 'black'}} className={'stat-row'}>
                                    <div>{el.value}</div>
                                    <div>{el.stat}</div>
                                </Row>
                            </li>
                        })}
                    </ul>
                </Col>
            </Row>
            <div className={'img-profile-data'}>
                <img src={Teacher2} alt={'Учитель'}/>
            </div>
        </Form>

    )
})
