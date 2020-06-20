import React, { FC } from 'react'
import { Carousel, Form } from 'antd'
import './MainPage.sass'
import { PageContent } from 'core/components'
import { InputControl, IconsAdapter } from 'shared/components'
import { Programs, SelectProgram } from './components'
import Student from 'shared/image/boy1.png'
import Teacher from 'shared/image/slider1.png'

export const MainPage: FC = React.memo(() => {

    return (
        <PageContent className="main-page">
            <div className="carousel-wrapper">
                <Carousel effect="fade">
                    <div className={'slide'}>
                            <img src={Teacher} alt={'Слайдер1'}/>
                    </div>
                </Carousel>
            </div>

            <div className="main-page__search">
                <h1>ПРОГРАММЫ</h1>
                <Form>
                    <Form.Item
                        name="program"
                    >
                        <InputControl placeholder={'Ввведите название программы или направления подготовки'}
                                      prefix={<IconsAdapter iconType={'SearchOutlined'}/>} className={'form-item'}/>
                    </Form.Item>
                </Form>
            </div>
            <img src={Student} alt={'Парень'} className={'boy'}/>
            <Programs/>
            <SelectProgram/>
        </PageContent>
    )
})
