import Footer from "./footer"
import NavBar from "./Navbar"

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[]
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen h-screen w-screen flex flex-col justify-between content-between">
      <div className="flex h-full flex-row justify-center">
        <div className="h-full pt-5 pb-1 flex flex-col w-8/12">
          <div className="flex w-full flex-row sm:flex-row">
            <NavBar />
          </div>
          <div className="flex h-full w-full mt-2 flex-row sm:flex-row">
            <main className="w-full h-full">{children}</main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
