import React, { FC } from 'react'
import './SelectProgram.sass'
import { Row } from 'antd'
import { IconsAdapter } from 'shared/components/IconsAdapter'
import { HEADHUNTER_ITEMS } from './consts'
import Bag from 'shared/image/bag.png'

export const SelectProgram: FC = React.memo(() => {

    return (
        <div className={'select-program'}>
            <Row className="select-program__title">
                <h2>КОММЕРЧЕСКАЯ ДЕЯТЕЛЬНОСТЬ (ТГУ)</h2>
                <Row>
                    <h2>7,8</h2>
                    <IconsAdapter iconType={'LikeOutlined'} style={{fontSize: 20}}/>
                </Row>
            </Row>
            <div className="select-program__description">
                <p>38.03.06 Торговое дело. Электронная коммерция.</p>
                <p>
                    Сегодня коммерсант - это человек, который делает бизнес. Современным коммерсантам приходится
                    ежедневно сталкиваться с множеством проблем, решение которых невозможно без знаний в различных областях: в коммерческой деятельности,
                    маркетинге, рекламе, логистике, товароведении и экспертизе товаров. Коммерсанты представляют собой настоящих универсалов в экономике.....
                </p>
            </div>

            <Row style={{ justifyContent: 'space-between' }}>
                <div>
                    <Row className={'headhunter'}>
                        <div className={'vacancy'}>
                            <h2>ВАКАНСИИ</h2>
                            <div className={'vacancy__items'}>
                                <ul className={'vacancy__name'}>
                                    {HEADHUNTER_ITEMS.vacancy.map(el => {
                                        return <Row style={{ justifyContent: 'space-between', flexWrap: 'nowrap' }} key={performance.now()}>
                                            <li>
                                                {el.name}
                                            </li>
                                            <li>
                                                {el.stat}
                                            </li>
                                        </Row>
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className={'average-salary'}>
                            <h2>СРЕДНЯЯ ЗАРАБОТНАЯ ПЛАТА</h2>
                            <div className={'average-salary__items'}>
                                <ul className={'average-salary__name'}>
                                    {HEADHUNTER_ITEMS.averageSalary.map(el => {
                                        return <Row style={{ justifyContent: 'space-between', flexWrap: 'nowrap' }} key={performance.now()}>
                                            <li>
                                                {el.name}
                                            </li>
                                            <li key={performance.now()}>
                                                {el.stat}
                                            </li>
                                        </Row>
                                    })}
                                </ul>

                            </div>
                        </div>
                    </Row>

                    <div className={'stat'}>
                        Средняя публикационнная активность (Индекс Хирша) 1,7
                    </div>
                </div>
                <img src={Bag} alt={'Рюкзак'} width={233} height={184}/>
            </Row>
            <Row>
                <div className={'stat'}>Доля онлайн курсов - 0,25</div>
                <div className={'stat'}>Доля преподавателей-практиков - 0,1</div>
            </Row>
            <div className={'stat'}>Оценка студентов - 4,5</div>
        </div>
    )
})
