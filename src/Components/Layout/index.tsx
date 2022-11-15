import NavBar from "./Navbar"

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[]
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  )
}

export default Layout
