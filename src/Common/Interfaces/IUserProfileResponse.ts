import { IResponseWrapper } from "./IResponseWrapper";

export interface IUserProfileResponse extends IResponseWrapper{
    data: {
        id: number,
        username: string,
        isAdmin: boolean,
        bio: string,
        recipeCount: number,
        picture: string,
    }
}