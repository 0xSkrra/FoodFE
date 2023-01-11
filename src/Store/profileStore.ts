import create, { StateCreator } from "zustand";
import {devtools, persist} from "zustand/middleware";
import { UserProfileNotFoundException } from "../Common/Exceptions/UserProfileNotFoundException";
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
                Loading: false,
                Error: false,
                SetUser: (user: IUserProfile) => set(() => ({User : user})),
                //fix this1
                FetchUserProfile: async () => {
                    set(() => ({Loading: true}))
                    try{
                        const fetchedUser = await GetUserProfile()
                        set(() => ({User: fetchedUser, Loading: false}))
                    }
                    catch(e){
                        if(e instanceof UserProfileNotFoundException){
                            const fetchedUser = await CreateDefaultUserProfile()
                            set(() => ({User: fetchedUser, Loading: false}))
                            if(!fetchedUser){
                                set(() => ({Error: true, Loading: false}))
                            }
                        }
                        else{
                            set(() => ({Loading: false, Error: true}))
                        }

                    }

                },
            }),
        )
)