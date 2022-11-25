import RecipeCard from "../Components/Cards/RecipeCard"
import RecipeCardCollection from "../Components/Collections/RecipeCardCollection"
import ListItem from "../Components/utilities/ListItem"

const StartPage = () => {
  return (
    <RecipeCardCollection recipes={[]} sectionName={"Just cooked"} />
  )
}

export default StartPage
