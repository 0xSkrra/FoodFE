import { NavLink, useNavigate } from "react-router-dom"
import Logo from "../../logo.svg"
const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div className="flex-1 flex flex-row sm:flex-row">
      <div className="basis-4/12 space-x-3 flex flex-row items-center">
        <img
          onClick={() => navigate("/")}
          src={Logo}
          style={{ height: 55, width: 145 }}
          alt="website logo"
          className="hover:cursor-pointer logo-image rounded-md px-2"
        />
        <NavLink
          to={"/recipes"}
          className={({ isActive }) => {
            return isActive
              ? "active-nav-item text-end transition-colors duration-300 transform rounded-md"
              : "text-end transition-colors duration-300 transform rounded-md"
          }}
        >
          <a
            href="#_"
            className="inline-block py-2 text-sm font-normal px-1 transition-colors duration-300 transform rounded-md"
          >
            Recipes
          </a>
        </NavLink>
        <NavLink
          to={"/lists"}
          className={({ isActive }) => {
            return isActive
              ? "active-nav-item text-end transition-colors duration-300 transform rounded-sm "
              : "text-end transition-colors duration-300 transform rounded-md "
          }}
        >
          <a
            href="#_"
            className="inline-block py-2 text-sm font-normal -pl-2 px-1 transition-colors duration-300 transform rounded-md"
          >
            Lists
          </a>
        </NavLink>
      </div>
      <div className="basis-4/12"></div>
      <div className="basis-4/12 space-x-3 flex flex-row items-center justify-end">
        <NavLink
          to={"/sign-in"}
          className={({ isActive }) => {
            return isActive
              ? "active-nav-item text-end  transition-colors duration-300 transform rounded-md "
              : "text-end transition-colors  duration-300 transform rounded-md"
          }}
        >
          <a
            href="#_"
            className="inline-block py-2 text-sm font-normal px-2 transition-colors duration-300 transform rounded-md"
          >
            Sign In
          </a>
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar
