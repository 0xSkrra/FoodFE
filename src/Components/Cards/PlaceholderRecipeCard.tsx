const PlaceholderRecipeCard = () => {
  return (
    <div className="w-full h-64 rounded border secondary-bg-border duration-200 ">
      <a href="link" className="cursor-pointer">
        <figure>
          <figcaption className="p-4 flex-col">
            <p className="text-sm sm:text-sm xs:text-xs xl:text-xs lg:text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"></p>
            <small className="leading-5 text-gray-500 dark:text-gray-400"></small>
            <small className="text-indigo-600 flex items-center dark:text-indigo-400">
              <span>
                <span className="text-slate-400 font-normal"></span>
              </span>
            </small>
          </figcaption>
        </figure>
      </a>
    </div>
  )
}

export default PlaceholderRecipeCard
