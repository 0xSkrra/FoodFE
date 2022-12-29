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

export const useProfileStore = create<UserSlice>()(
        myMiddlewares((set) => ({
                User: DefaultUserProfile,
                SetUser: (user: IUserProfile) => set(() => ({User : user})),
                FetchUserProfile: async () => {
                    try{
                        const response = await GetUserProfile()
                        if(!response){
                            throw response
                        }
                        set(() => ({User: response}))
                    }
                    catch(e){
                        if(e as PromiseRejectedResult){
                            throw e;
                        }
                        const response = await CreateDefaultUserProfile()
                        if(!response){
                            throw response
                        }
                        set(() => ({User: response}))
                    }
                },
            }),
        )
)