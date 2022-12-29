import { IUserProfile } from "../../Interfaces/IUserProfile"
import API from "./api"

export const GetUserProfile = async (): Promise<IUserProfile> => {
    const user: IUserProfile = (await API.get(`/api/user`)).data

    return user
}
export const GetUserProfileByUsername = async (username: string): Promise<IUserProfile> => {
    const user: IUserProfile = (await API.get(`/api/user/username/${username}`)).data

    return user;
}

export const CreateDefaultUserProfile = async (): Promise<IUserProfile> => {
    // API gets userinfo from IDP via /connect/userinfo using berear token on behalf of the user
    const user: IUserProfile = (await API.post(`/api/user`, {})).data

    return user;
}

export const updateUserPRofile = async (user: IUserProfile): Promise<IUserProfile> => {
    const toUpdate = {
        id: user.id,
        bio: user.bio,
        picture: user.picture
    }
    const updatedUser: IUserProfile = (await API.put(`/api/user/${user.id}`, toUpdate)).data
    return updatedUser
}