import React from "react"

const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <footer className="w-9/12 border-t text-bold">
        <div className="">
          <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
            <li className="my-2">
              <a
                className="text-sm text-medium transition-colors duration-200"
                href="#"
              >
                FAQ
              </a>
            </li>
            <li className="my-2">
              <a
                className="text-sm text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                Github
              </a>
            </li>
            <li className="my-2">
              <a
                className="text-sm text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                LinkedIn
              </a>
            </li>
          </ul>
          <div className="text-center text-gray-500 dark:text-gray-200 pt-8 sm:pt-6 pb-1 font-light flex items-center justify-center">
            © Espen Sjo, 2022
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
