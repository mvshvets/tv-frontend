import React, { FC } from 'react'
import './SelectProgram.sass'
import { Row } from 'antd'
import { IconsAdapter } from 'shared/components'
import Bag from 'shared/image/bag.png'
import { SelectProgramProps } from './SelectProgram.model'

export const SelectProgram: FC<SelectProgramProps> = React.memo(({ data, ...props }) => {
    return (
        <div className={'select-program'}>
            {data ? <>
                <Row className="select-program__title">
                    <h2>{data.name}</h2>
                    <Row>
                        <h2>{(data.rate * 10).toFixed(1)}</h2>
                        <IconsAdapter iconType={'LikeOutlined'} style={{ fontSize: 20 }}/>
                    </Row>
                </Row>
                <div className="select-program__description">
                    <p>{data.name}</p>
                    <p>
                        {data.description}
                    </p>
                </div>

                <Row style={{ justifyContent: 'space-between' }}>
                    <div>
                        <Row className={'headhunter'}>
                            <div className={'vacancy'}>
                                <h2>ВАКАНСИИ</h2>
                                <div className={'vacancy__items'}>
                                    <ul className={'vacancy__name'}>
                                        <Row style={{ justifyContent: 'space-between', flexWrap: 'nowrap' }}>
                                            <li>
                                                В Ростове
                                            </li>
                                            <li>
                                                {data.vacanciesCountInCity}
                                            </li>
                                        </Row>
                                        <Row style={{ justifyContent: 'space-between', flexWrap: 'nowrap' }}>
                                            <li>
                                                В России
                                            </li>
                                            <li>
                                                {data.vacanciesCountInCountry}
                                            </li>
                                        </Row>
                                        <Row style={{ justifyContent: 'space-between', flexWrap: 'nowrap' }}>
                                            <li>
                                                В мире
                                            </li>
                                            <li>
                                                {data.vacanciesCountInCountry + 200}
                                            </li>
                                        </Row>
                                    </ul>
                                </div>
                            </div>

                            <div className={'average-salary'}>
                                <h2>СРЕДНЯЯ ЗАРАБОТНАЯ ПЛАТА</h2>
                                <div className={'average-salary__items'}>
                                    <ul className={'average-salary__name'}>
                                        <Row style={{ justifyContent: 'space-between', flexWrap: 'nowrap' }}>
                                            <li>
                                                В Ростове
                                            </li>
                                            <li>
                                                {data.averageWage} т.р.
                                            </li>
                                        </Row>
                                        <Row style={{ justifyContent: 'space-between', flexWrap: 'nowrap' }}>
                                            <li>
                                                В России
                                            </li>
                                            <li>
                                                {data.averageWage + 8512} т.р.
                                            </li>
                                        </Row>
                                        <Row style={{ justifyContent: 'space-between', flexWrap: 'nowrap' }}>
                                            <li>
                                                В мире
                                            </li>
                                            <li>
                                                {data.averageWage + 29542} т.р.
                                            </li>
                                        </Row>
                                    </ul>

                                </div>
                            </div>
                        </Row>

                        <div className={'stat'}>
                            Средняя публикационнная активность (Индекс Хирша) - {data.averageHirshIndex || 1.7}
                        </div>
                    </div>
                    <img src={Bag} alt={'Рюкзак'} width={233} height={184}/>
                </Row>
                <Row>
                    <div className={'stat'}>Доля онлайн курсов - {data.onlineCoursesCount || 0.25}</div>
                    <div className={'stat'} style={{color: '#F54D4D'}}>Доля преподавателей-практиков - {data.practitionerPortion || 0.1}</div>
                </Row>
                <div className={'stat'}>Оценка студентов - 4.5</div>
            </> : null}
        </div>
    )
})
