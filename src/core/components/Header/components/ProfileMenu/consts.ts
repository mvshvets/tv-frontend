import { ROUTE_NAMES } from 'routing'

import { ProfileMenuItemProps } from './ProfileMenu.model'

export const PROFILE_MENU_ITEMS: Array<ProfileMenuItemProps> = [
    { title: 'Профайл', link: ROUTE_NAMES.PROFILE, icon: 'UserOutlined' },
    { title: 'Настройки', link: '#', icon: 'SettingOutlined' },
]
