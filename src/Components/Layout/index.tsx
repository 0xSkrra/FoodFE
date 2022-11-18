import Footer from "./footer"
import NavBar from "./Navbar"

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[]
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container min-h-full min-w-full justify-center">
      <div className="flex h-full w-full justify-center">
        <div className="flex flex-col min-h-screen h-screen sm:6/12 lg:w-8/12 md:w-8/12 justify-between content-between">
          <div className="">
            <NavBar />
          </div>
          <div className="flex">{children}</div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
