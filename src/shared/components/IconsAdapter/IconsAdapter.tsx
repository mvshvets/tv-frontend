import React from 'react'
import {
    ArrowLeftOutlined,
    CheckOutlined,
    CloseOutlined,
    CopyOutlined,
    DeleteOutlined,
    DownOutlined,
    EditOutlined,
    FileAddOutlined,
    FilterOutlined,
    HomeOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuOutlined,
    MenuUnfoldOutlined,
    MinusOutlined,
    PlusCircleOutlined,
    PlusOutlined,
    SearchOutlined,
    SettingOutlined,
    UserOutlined,
    RightOutlined,
    LikeOutlined
} from '@ant-design/icons'

import { IconsAdapterProps } from './IconsAdapter.model'

/**
 * Адаптер для `Icons` от `antd`, принимает все теже `props`.
 * iconType влияет на тип выводимой иконки.
 */

export const IconsAdapter: React.FC<IconsAdapterProps> = React.memo(
    ({ iconType, ...restProps }) => {
        const iconsLibrary = {
            ArrowLeftOutlined: <ArrowLeftOutlined {...restProps} />,
            CheckOutlined: <CheckOutlined {...restProps} />,
            CloseOutlined: <CloseOutlined {...restProps} />,
            CopyOutlined: <CopyOutlined {...restProps} />,
            DeleteOutlined: <DeleteOutlined {...restProps} />,
            DownOutlined: <DownOutlined {...restProps} />,
            EditOutlined: <EditOutlined {...restProps} />,
            FileAddOutlined: <FileAddOutlined {...restProps} />,
            FilterOutlined: <FilterOutlined {...restProps} />,
            HomeOutlined: <HomeOutlined {...restProps} />,
            LogoutOutlined: <LogoutOutlined {...restProps} />,
            MenuFoldOutlined: <MenuFoldOutlined {...restProps} />,
            MenuOutlined: <MenuOutlined {...restProps} />,
            MenuUnfoldOutlined: <MenuUnfoldOutlined {...restProps} />,
            MinusOutlined: <MinusOutlined {...restProps} />,
            PlusCircleOutlined: <PlusCircleOutlined {...restProps} />,
            PlusOutlined: <PlusOutlined {...restProps} />,
            SearchOutlined: <SearchOutlined {...restProps} />,
            SettingOutlined: <SettingOutlined {...restProps} />,
            UserOutlined: <UserOutlined {...restProps} />,
            RightOutlined: <RightOutlined {...restProps} />,
            LikeOutlined: <LikeOutlined {...restProps} />,
        }

        return <>{iconType ? iconsLibrary[iconType] : ''}</>
    }
)
