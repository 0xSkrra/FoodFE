export interface IUserProfile{
    id: number,
    username: string,
    isAdmin: boolean,
    bio: string,
    recipeCount: number,
    picture: string,
    RefreshToken: string,
    AccessToken: string
}

export const DefaultUserProfile: IUserProfile = {
    id: -1,
    username: "DefaultUser",
    isAdmin: false,
    bio: "anonymous",
    recipeCount: 0,
    picture: "",
    RefreshToken: "",
    AccessToken: ""
}