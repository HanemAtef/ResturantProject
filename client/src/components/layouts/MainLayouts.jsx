import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
// import Footer from "./Footer/Footer"
export default function MainLayouts() {
  return (
    <div>
      <Navbar />

      <main>
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  )
}
