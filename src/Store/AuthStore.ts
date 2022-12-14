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
                        if(!response.Success){
                            throw response.Error
                        }
                        const user: IUserProfile= {
                            id: response.data.id,
                            username: response.data.username,
                            isAdmin: response.data.isAdmin,
                            bio: response.data.bio,
                            recipeCount: response.data.recipeCount,
                            picture: response.data.picture,
                        }
                        set(() => ({User: user}))

                    }
                    catch(e){
                        const response = await CreateDefaultUserProfile()
                        if(response.Success){
                            const user: IUserProfile = {
                                id: response.data.id,
                                username: response.data.username,
                                isAdmin: response.data.isAdmin,
                                bio: response.data.bio,
                                recipeCount: response.data.recipeCount,
                                picture: response.data.picture,
                            }
                            set(() => ({User: user}))
                        }
                        else{
                            console.log(response)
                        }
                    }
                },
            }),
        )
)