import { UserProfileNotFoundException } from "../../Exceptions/UserProfileNotFoundException"
import { IUserProfile } from "../../Interfaces/IUserProfile"
import API from "./api"

export const GetUserProfile = async (): Promise<IUserProfile> => {
    const response = await API.get(`/api/user`)
    if(response.status !== 200){
        throw new UserProfileNotFoundException("profile not found")
    }
    const userProfile: IUserProfile = response.data
    return userProfile
}

export const GetUserProfileByUsername = async (username: string): Promise<IUserProfile> => {
    const response = await API.get(`api/user/username/${username}`)
    if(response.status !== 200){
        throw new Error("Profile not found")
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
    else if(response.status === 400){
        throw new Error("Bad request for creation of user")
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