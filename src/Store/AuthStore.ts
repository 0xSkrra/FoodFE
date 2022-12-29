import { hasUncaughtExceptionCaptureCallback } from "process";
import create, { StateCreator } from "zustand";
import {devtools, persist} from "zustand/middleware";
import { DefaultUserProfile, IUserProfile } from "../Common/Interfaces/IUserProfile";
import { CreateDefaultUserProfile, GetUserProfile } from "../Common/util/API";
import { UserSlice } from "./Slices/UserSlice";

const myMiddlewares = (f: 
    StateCreator<UserSlice,  
    [["zustand/devtools", never],
    ["zustand/persist", unknown]],
    [],
    UserSlice
    >
    ) => devtools(persist(f))

export const useAuthStore = create<UserSlice>()(
        myMiddlewares((set) => ({
                User: DefaultUserProfile,
                SetUser: (user: IUserProfile) => set(() => ({User : user})),
                FetchUserProfile: async () => {
                    try{
                        const response = await GetUserProfile()
                        if(!response.result.succeeded){
                            console.log("Error fetching user:")
                            console.log(response)
                            return; // if request has errors that are not with statuscode 418 then something is wrong!

                        }
                        const user: IUserProfile= {
                            id: response.result.data.id,
                            username: response.result.data.username,
                            isAdmin: response.result.data.isAdmin,
                            bio: response.result.data.bio,
                            recipeCount: response.result.data.recipeCount,
                            picture: response.result.data.picture,

                        }
                        set(() => ({User: user}))

                    }
                    catch(e){
                        const response = await CreateDefaultUserProfile()
                        if(response.result.status !== 418){
                            const user: IUserProfile = {
                                id: response.result.data.id,
                                username: response.result.data.username,
                                isAdmin: response.result.data.isAdmin,
                                bio: response.result.data.bio,
                                recipeCount: response.result.data.recipeCount,
                                picture: response.result.data.picture,

                            }
                            set(() => ({User: user}))
                        }
                        else{
                            console.log("Error posting user")
                            console.log(response)
                        }
                    }
                },
            }),
        )
)