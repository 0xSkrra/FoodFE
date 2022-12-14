import { IUserProfile } from "../../Common/Interfaces/IUserProfile"

export interface UserSlice{
    User: IUserProfile
    SetUser: (User: IUserProfile) => void,
    FetchUserProfile: () => void
}