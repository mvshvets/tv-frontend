import React, { FC } from 'react'
import './Programs.sass'

import { PROGRAM_ITEMS } from './consts'
import { Row } from 'antd'

export const Programs: FC = React.memo(() => {

    return (
        <div className={'programs'}>
            <div className={'bakalavriat'}>
                <h2>Бакалавриат</h2>
                <div className={'programs__items'}>
                    <ul className={'bakalavriat__name'}>
                        {PROGRAM_ITEMS.bakalavriat.map(el => {
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

            <div className={'magistratura'}>
                <h2>Магистратура</h2>
                <div className={'programs__items'}>
                    <ul className={'magistratura__name'}>
                        {PROGRAM_ITEMS.magistratura.map(el => {
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
        </div>
    )
})
