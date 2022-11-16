import Footer from "./footer"
import NavBar from "./Navbar"

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[]
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-between content-between">
      <div className="flex flex-row min-h-full justify-center">
        <div className="h-full mt-5  flex flex-col w-9/12">
          <div className="flex w-full flex-row sm:flex-row">
            <NavBar />
          </div>
          <div className="flex min-h-full min-w-full mt-2 flex-row sm:flex-row">
            <main className="min-w-full min-h-full">{children}</main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
