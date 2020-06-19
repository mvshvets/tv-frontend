import { UserContract } from './UserContext.model'

export interface UserContextProps {
    userData: UserContract | null
    setUserData: (userData: UserContract | null) => void
}
