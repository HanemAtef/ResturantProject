import { Outlet } from "react-router-dom"

export default function MainLayouts() {
  return (
    <div>

      <main>
        <Outlet />
      </main>

    </div>
  )
}
