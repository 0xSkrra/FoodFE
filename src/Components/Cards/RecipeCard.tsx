import React from "react"

const RecipeCard = () => {
  return (
    <div className="w-full rounded shadow-sm shadow-gray-200 dark:shadow-gray-900 secondary-bg duration-200 hover:-translate-y-1">
      <a href="link" className="cursor-pointer">
        <figure>
          <img
            src="https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe-f.jpg"
            className="rounded-t w-full object-scale-down"
            alt="kek"
          />

          <figcaption className="p-4 flex-col">
            <p className="text-sm sm:text-sm xs:text-xs xl:text-base lg:text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
              Authenetic Italian Lasagna
            </p>
            <small className="leading-5 text-gray-500 dark:text-gray-400">
              add to collection
            </small>
            <small className="text-indigo-600 flex items-center dark:text-indigo-400">
              <svg
                width="24"
                height="24"
                fill="none"
                aria-hidden="true"
                className="mr-1 stroke-current dark:stroke-indigo-500"
              >
                <path
                  d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>
                4.89{" "}
                <span className="text-slate-400 font-normal">
                  (128)
                </span>
              </span>
            </small>
          </figcaption>
        </figure>
      </a>
    </div>
  )
}

export default RecipeCard
