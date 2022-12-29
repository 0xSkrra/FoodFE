import { UserProfileNotFoundException } from "../../Exceptions/UserProfileNotFoundException"
import { IResponseWrapper } from "../../Interfaces/IResponseWrapper"
import { IUserProfile } from "../../Interfaces/IUserProfile"
import { IUserProfileResponse } from "../../Interfaces/IUserProfileResponse"
import API from "./api"

export const GetUserProfile = async (): Promise<IResponseWrapper<IUserProfileResponse>> => {
    const response: IResponseWrapper<IUserProfileResponse> = await API.get(`/api/user`)
    if(!response.result.succeeded){
        throw new UserProfileNotFoundException("profile not found")
    }
    return response
}

export const CreateDefaultUserProfile = async (): Promise<IResponseWrapper<IUserProfileResponse>> => {
    // API gets userinfo from IDP via /connect/userinfo using berear token on behalf of the user
    const response: IResponseWrapper<IUserProfileResponse> = await API.post(`/api/user`, {})
    if(response.result.status === 418){
        throw new Error("Profile Already Exists")
    }
    return response;
}

export const updateUserProfile = async (user: IUserProfile): Promise<IResponseWrapper<IUserProfileResponse>> => {
    const toUpdate = {
        id: user.id,
        bio: user.bio,
        picture: user.picture
    }
    const response: IResponseWrapper<IUserProfileResponse> = await API.put(`/api/user/${user.id}`, toUpdate)
    if(!response.result.succeeded){
        throw response.result.error
    }
    return response
}