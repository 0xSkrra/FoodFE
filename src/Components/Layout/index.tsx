import Footer from "./footer"
import NavBar from "./Navbar"

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[]
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container min-h-full min-w-full overflow-auto justify-center">
      <div className="flex h-full w-full justify-center">
        <div className="flex flex-col min-h-screen h-screen sm:7/12 lg:w-7/12 md:w-7/12 justify-between content-between">
          <div className="pt-10 basis-2/12">
            <NavBar />
          </div>
          <div className="container basis-8/12 pt-10 pb-10 primary-bg min-w-full">
            {children}
          </div>
          <div className="basis-2/12">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
