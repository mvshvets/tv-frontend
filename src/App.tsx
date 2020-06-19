import React  from 'react'
import { ConfigProvider } from 'antd'
import ru_RU from 'antd/es/locale/ru_RU'
import './App.sass'
import { Header } from 'core/components'
import { Compose } from 'shared/components'
import { Routing } from 'routing'
import { DocumentTitleContextProvider, LoaderContextProvider, UserContextProvider } from 'core/context'
import { BrowserRouter } from 'react-router-dom'

export const App: React.FC = () => {
    return <div className="App">
        <ConfigProvider locale={ru_RU}>
            <Compose
                components={[
                    BrowserRouter,
                    LoaderContextProvider,
                    UserContextProvider,
                    DocumentTitleContextProvider,
                ]}
            >
                <Header/>

                <Routing />

            </Compose>
        </ConfigProvider>
    </div>
}