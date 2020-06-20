import React, { FC, useCallback, useEffect, useState } from 'react'
import { Button, Carousel, Col, Form, Row } from 'antd'
import './MainPage.sass'
import { PageContent } from 'core/components'
import { IconsAdapter, SelectControl } from 'shared/components'
import { Programs, SelectProgram } from './components'
import Student from 'shared/image/boy1.png'
import Teacher from 'shared/image/slider1.png'
import { API } from 'api'

export const MainPage: FC = React.memo(() => {
    const [programsData, setProgramsData] = useState<any>()
    const [programData, setProgramData] = useState<any>()

    const handleFinish = useCallback((values) => {
        API.getProgramInfo(values.program)
            .then(() => {
                API.getEduProgram(values.program)
                    .then(res => {
                        //console.log(res.data)
                        setProgramData(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        API.getEduPrograms()
            .then((res: any) => {

                const normalizeData = res.data.map((el: any) => {
                    return {
                        ...el,
                        value: el.id,
                        label: el.name,
                        key: el.id,
                    }
                })

                setProgramsData(normalizeData)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

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
                <Form
                    id={'searchProgram'}
                    onFinish={handleFinish}
                >
                    <Row gutter={15}>
                        <Col xs={23}>
                            <Form.Item
                                name="program"
                            >
                                <SelectControl placeholder={'Ввведите название программы или направления подготовки'} values={programsData}
                                               className={'form-item'}/>
                            </Form.Item>
                        </Col>
                        <Col>
                            <Button icon={<IconsAdapter iconType={'SearchOutlined'}/>} shape="circle" htmlType="submit" className={'search__btn'}/>
                        </Col>
                    </Row>
                </Form>
            </div>
            <img src={Student} alt={'Парень'} className={'boy'}/>
            <Programs/>
            <SelectProgram data={programData}/>
        </PageContent>
    )
})
