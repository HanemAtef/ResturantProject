import style from "./Navbar.module.css"

export default function Navbar() {
    const links = ["Home", "Menu", "About", "Contacts"];
    return (
        <nav className="navbar">



            <div className="logo">Fegla Restruant </div>

            <div className="navLinks">

                <ul className="Links">
                    {links.map(link => (
                        <li key={link}>
                            <a href="#">{link}</a>
                        </li>
                    ))}
                </ul>

                <div className="icons">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-circle-user"></i>
                </div>
            </div>

        </nav>
    )
}
