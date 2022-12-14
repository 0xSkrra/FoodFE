import { IUserProfile } from "../../Interfaces/IUserProfile"
import { IUserProfileResponse } from "../../Interfaces/IUserProfileResponse"
import API from "./api"

export const GetUserProfile = async (): Promise<IUserProfileResponse> => {
    const user: IUserProfileResponse = await API.get(`/api/user`)

    return user
}

export const CreateDefaultUserProfile = async (): Promise<IUserProfileResponse> => {
    // API gets userinfo from IDP via /connect/userinfo using berear token on behalf of the user
    const user: IUserProfileResponse = await API.post(`/api/user`, {})

    return user;
}

export const updateUserPRofile = async (user: IUserProfile): Promise<IUserProfileResponse> => {
    const toUpdate = {
        id: user.id,
        bio: user.bio,
        picture: user.picture
    }
    const updatedUser: IUserProfileResponse = await API.put(`/api/user/${user.id}`, toUpdate)
    return updatedUser
}