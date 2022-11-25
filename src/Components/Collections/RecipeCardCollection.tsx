import React from "react"
import RecipeCard from "../Cards/RecipeCard"
interface RecipeCardCollectionProps {
  recipes: []
  sectionName: string
}
const RecipeCardCollection = ({
  recipes,
  sectionName,
}: RecipeCardCollectionProps) => {
  const recipeCards = recipes.map((r) => {
    return r
  })
  return (
    <section className="h-full">
      <h1 className="prose standard-text-color">{sectionName}</h1>
      <div className="grid grid-flow-row gap-y-4 gap-x-2 xs:grid-cols-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />

        <RecipeCard />
      </div>
    </section>
  )
}

export default RecipeCardCollection
