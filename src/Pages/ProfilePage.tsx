import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
  DefaultUserProfile,
  IUserProfile,
} from "../Common/Interfaces/IUserProfile"
import { GetUserProfileByUsername } from "../Common/util/API"
import RecipeCard from "../Components/Cards/RecipeCard"
import RecipeCardCollection from "../Components/Collections/RecipeCardCollection"
import { useProfileStore } from "../Store/AuthStore"

const ProfilePage = () => {
  const { username } = useParams()
  const profileStore = useProfileStore((state) => state)
  const [profile, setProfile] = useState<IUserProfile>(
    DefaultUserProfile
  )

  useEffect(() => {
    const getProfile = async () => {
      let response
      if (!username || profile.id !== -1) {
        return
      } else if (
        profileStore.User.username.toLowerCase() ===
        username?.toLowerCase()
      ) {
        response = profileStore.User
      } else {
        response = await GetUserProfileByUsername(username)
      }
      setProfile(response)
    }
    getProfile()
  }, [
    profile.id,
    profileStore.User,
    profileStore.User.username,
    username,
  ])
  return (
    <main>
      <div className="flex w-full mx-auto">
        <div className="flex-initial w-16">
          <img
            src={profile.picture}
            className="rounded-full w-20 mb-4 "
            alt="Avatar"
          />
        </div>
        <div className="flex-initial w-96 mb-2 ml-2">
          <h5 className="text-xl font-medium leading-tight mb-2">
            {profile.username}
          </h5>
          <p className="secondary-text-color text-md">
            {profile.bio}
          </p>
        </div>
        <div className="flex justify-end w-full">
          <div className="flex-initial w-16">
            <h4 className="text-center standard-text-color mb-2">
              {profile.createdRecipeCount}
            </h4>
            <p className="text-center text-sm secondary-text-color ">
              Recipes
            </p>
          </div>
          <div className="flex-initial w-16">
            <h4 className="text-center standard-text-color mb-2">
              {profile.createdRecipeCount}
            </h4>
            <p className="text-center text-sm secondary-text-color ">
              Lists
            </p>
          </div>

          <div className="flex-initial w-16">
            <h4 className="text-center standard-text-color mb-2">
              {profile.createdRecipeCount}
            </h4>
            <p className="text-center text-sm secondary-text-color ">
              Cooked
            </p>
          </div>
          <div className="flex-initial w-16">
            <h4 className="text-center standard-text-color mb-2">
              {profile.createdRecipeCount}
            </h4>
            <p className="text-center text-sm secondary-text-color ">
              Followers
            </p>
          </div>
          <div className="flex-initial w-16">
            <h4 className="text-center standard-text-color mb-2">
              {profile.createdRecipeCount}
            </h4>
            <p className="text-center text-sm secondary-text-color ">
              Following
            </p>
          </div>
        </div>
      </div>
      <div className="text-md font-medium text-center text-gray-500 border rounded-xl border-gray-800">
        <ul className="flex flex-wrap justify-center -mb-px">
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 rounded-t-lg border-b-2 border-transparent border-blue-600  hover:text-gray-600 hover:border-gray-300 active"
              aria-current="page"
            >
              Profile
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
            >
              Recipes
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
            >
              Lists
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 "
            >
              Liked Recipes
            </a>
          </li>
          <li>
            <a
              className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 "
              href="#"
            >
              Liked Lists
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-row space-x-28 mt-3 justify-around">
        <div className="flex-initial w-2/3">
          <h5 className="text-md mb-2 w-full border-b border-gray-500">
            Favorite Recipes
          </h5>
          <div className="flex-initial w-full">
            <div className="grid grid-flow-row gap-y-4 gap-x-2 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
              {/* TODO: Add favorite recipes from backend api
              OR PLACEHOLDER CARDS*/}
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
            </div>
          </div>
          <h5 className="text-md mb-2 w-full border-b border-gray-500">
            Recent
          </h5>
          <div className="flex-initial w-full">
            <div className="grid grid-flow-row gap-y-4 gap-x-2 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
              {/* TODO: Add recent recipes from backend api 
              OR PLACEHOLDER CARDS*/}
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
            </div>
          </div>
          <h5 className="text-md mb-2 w-full border-b border-gray-500">
            Following
          </h5>
          <div className="flex-initial w-full">
            <div className="grid grid-flow-row gap-y-4 gap-x-2 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
              {/* TODO: Add recent recipes from backend api 
              OR PLACEHOLDER CARDS*/}
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
              <RecipeCard />
            </div>
          </div>
        </div>
        <div className="flex-initial w-1/5">
          <h5 className="text-md mb-2 w-full border-b border-gray-500">
            Activity
          </h5>
        </div>
      </div>
    </main>
  )
}

export default ProfilePage
