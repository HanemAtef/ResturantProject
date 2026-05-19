import { Outlet } from "react-router-dom"
import Footer from '../../components/layouts/Footer/Footer'
import Navbar from '../../components/layouts/Navbar/Navbar'
export default function MainLayouts() {
  return (
    <div>

      <Navbar />
      <main>
        <Outlet />
      </main>
     <Footer />
    </div>
  )
}
