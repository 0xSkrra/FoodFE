export interface IUserProfile{
    id: number,
    username: string,
    isAdmin: boolean,
    bio: string,
    recipeCount: number,
    picture: string,
}

export const DefaultUserProfile: IUserProfile = {
    id: -1,
    username: "DefaultUser",
    isAdmin: false,
    bio: "anonymous",
    recipeCount: 0,
    picture: "",
}