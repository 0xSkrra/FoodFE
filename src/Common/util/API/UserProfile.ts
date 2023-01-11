import { UserProfileNotFoundException } from "../../Exceptions/UserProfileNotFoundException"
import { IUserProfile } from "../../Interfaces/IUserProfile"
import API from "./api"

export const GetUserProfile = async (): Promise<IUserProfile> => {
    const response = await API.get(`/api/user`)
    if(response.status === 404){
        throw new UserProfileNotFoundException("Profile does not exist");
    }
    const userProfile: IUserProfile = response.data
    return userProfile
}

export const GetUserProfileDataByUsername = async (username: string): Promise<IUserProfile> => {
    const response = await API.get(`api/user/username/${username}`)
    if(response.status !== 200){
        throw new UserProfileNotFoundException("Profile does not exist")
    }
    const userProfile: IUserProfile = response.data
    return userProfile
}

export const CreateDefaultUserProfile = async (): Promise<IUserProfile> => {
    // API gets userinfo from IDP via /connect/userinfo using berear token on behalf of the user
    const response = await API.post(`/api/user`, {})
    if(response.status === 418){
        throw new Error("Profile Already Exists")
    }
    const userProfile: IUserProfile = response.data
    return userProfile
}

export const updateUserProfile = async (user: IUserProfile): Promise<IUserProfile> => {
    const toUpdate = {
        id: user.id,
        bio: user.bio,
        picture: user.picture
    }
    const response = await API.put(`/api/user/${user.id}`, toUpdate)
    if(response.status !== 200){
        throw new Error("Failed to update user")
    }
    const userProfile: IUserProfile = response.data
    return userProfile
}