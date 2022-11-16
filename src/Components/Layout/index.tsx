import NavBar from "./Navbar"

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[]
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-row justify-center">
      <div className="h-full mt-5 flex flex-col w-9/12">
        <div className="flex w-full flex-row sm:flex-row">
          <NavBar />
        </div>
        <div className="flex w-full mt-2 min-h-full flex-row sm:flex-row">
          <main className="">{children}</main>
        </div>
      </div>
    </div>
  )
}

export default Layout
