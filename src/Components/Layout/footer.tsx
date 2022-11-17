import React from "react"

const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <footer className="w-8/12 border-t text-bold">
        <div className="">
          <ul className="max-w-screen-md mx-auto text-xs font-light flex flex-wrap justify-between">
            <li className="my-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-xs text-medium transition-colors duration-200"
                href="https://gitlab.com/users/esp0x1"
              >
                Gitlab
              </a>
            </li>
            <li className="my-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-xs text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="https://github.com/0xSkrra"
              >
                Github
              </a>
            </li>
            <li className="my-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-xs text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="https://no.linkedin.com/in/espen-sjo-72aaa7236"
              >
                LinkedIn
              </a>
            </li>
          </ul>
          <div className="text-center text-xs text-gray-500 dark:text-gray-200 pt-8 sm:pt-6 pb-1 font-light flex items-center justify-center">
            © Espen Sjo, 2022
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
