export interface IUserProfile{
    id: number,
    username: string,
    isAdmin: boolean,
    bio: string,
    createdRecipeCount: number,
    savedRecipeCount: number,
    favoritedRecipeCount: number,
    followerCount: number,
    followingCount: number,
    picture: string,
}

export const DefaultUserProfile: IUserProfile = {
    id: -1,
    username: "DefaultUser",
    isAdmin: false,
    bio: "anonymous",
    createdRecipeCount: -1,
    picture: "",
    savedRecipeCount: -1,
    favoritedRecipeCount: -1,
    followerCount: -1,
    followingCount: -1
}