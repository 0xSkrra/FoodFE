import { IUserProfile } from "../../Common/Interfaces/IUserProfile"

export interface UserSlice{
    User: IUserProfile
    Loading: boolean,
    Error: boolean,
    SetUser: (User: IUserProfile) => void,
    FetchUserProfile: () => void
}