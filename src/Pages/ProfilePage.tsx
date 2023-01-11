import { useParams } from "react-router-dom"
import { GetUserProfilePageData } from "../Common/QueryClient/Hooks/GetUserProfilePageData"
import PlaceholderRecipeCard from "../Components/Cards/PlaceholderRecipeCard"
import RecipeCard from "../Components/Cards/RecipeCard"
import NotFoundPage from "./NotFoundPage"

const ProfilePage = () => {
  const { username } = useParams()

  const { isLoading, isError, data } = GetUserProfilePageData(
    username || ""
  )

  if (isLoading) return <h5>Loading</h5>
  if (!isLoading && isError) {
    return <NotFoundPage />
  }

  return (
    <main>
      <div className="flex w-full mx-auto">
        <div className="flex-initial w-32">
          <img
            src={data.picture}
            className="mb-4 rounded-full w-full object-scale-down"
            alt="Avatar"
          />
        </div>
        <div className="flex-initial justify-around w-96 mb-2 ml-2">
          <div className="flex ">
            <h5 className="text-xl font-medium leading-tight mb-2">
              {data.username}
            </h5>
          </div>
          <div className="flex">
            <button className="bg-gray-600 hover:bg-gray-700 border-b-4 border-black hover:border-gray-800 text-white text-center py-2 px-4 rounded">
              Follow
            </button>
          </div>

          <p className="secondary-text-color text-md">{data.bio}</p>
        </div>
        <div className="flex justify-end w-full">
          <div className="flex-initial w-16">
            <h4 className="text-center standard-text-color mb-2">
              {data.createdRecipeCount}
            </h4>
            <p className="text-center text-sm secondary-text-color ">
              Recipes
            </p>
          </div>
          <div className="flex-initial w-16">
            <h4 className="text-center standard-text-color mb-2">
              {data.createdRecipeCount}
            </h4>
            <p className="text-center text-sm secondary-text-color ">
              Lists
            </p>
          </div>

          <div className="flex-initial w-16">
            <h4 className="text-center standard-text-color mb-2">
              {data.createdRecipeCount}
            </h4>
            <p className="text-center text-sm secondary-text-color ">
              Cooked
            </p>
          </div>
          <div className="flex-initial w-16">
            <h4 className="text-center standard-text-color mb-2">
              {data.createdRecipeCount}
            </h4>
            <p className="text-center text-sm secondary-text-color ">
              Followers
            </p>
          </div>
          <div className="flex-initial w-16">
            <h4 className="text-center standard-text-color mb-2">
              {data.createdRecipeCount}
            </h4>
            <p className="text-center text-sm secondary-text-color ">
              Following
            </p>
          </div>
        </div>
      </div>
      <div className="text-md font-medium text-center secondary-text-color   border-b border-t border-gray-500">
        <ul className="flex flex-wrap justify-center -mb-px">
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 rounded-t-lg border-b-2 border-transparent border-blue-600 active"
              aria-current="page"
            >
              Profile
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:border-gray-300"
            >
              Recipes
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:border-gray-300"
            >
              Lists
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:border-gray-300 "
            >
              Liked Recipes
            </a>
          </li>
          <li>
            <a
              className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:border-gray-300 "
              href="#"
            >
              Liked Lists
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-row space-x-4 mt-3 justify-around">
        <div className="flex-initial w-4/5">
          <h5 className="text-md mb-2 w-full border-b border-gray-500">
            Favorite Recipes
          </h5>
          <div className="flex-initial w-full">
            <div className="grid grid-flow-row gap-y-4 gap-x-2 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
              {/* TODO: Add favorite recipes from backend api
              OR PLACEHOLDER CARDS*/}
              <PlaceholderRecipeCard />
              <PlaceholderRecipeCard />
              <PlaceholderRecipeCard />
              <PlaceholderRecipeCard />
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
