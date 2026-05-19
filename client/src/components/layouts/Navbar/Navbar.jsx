import style from "./Navbar.module.css"

export default function Navbar() {
    const links = [
        { name: "Home", path: "/" },
        { name: "Menu", path: "/menu" },
        { name: "About", path: "/about" },
        { name: "Contacts", path: "/contacts" }
    ];
    return (
        <nav className="navbar d-flex justify-content-between bg-white align-items-center px-5 py-3">

            <div className={style.logo}>Fegla Restruant </div>

            <ul className={`${style.links} d-flex gap-4 list-unstyled m-0`}>
                {links.map((link,index) => (
                    <li key={index}>
                        <a href={link.path}>{link.name}</a>
                    </li>
                ))}
            </ul>

            <div className={`${style.icons} d-flex gap-3`}>
                <i className="fa-solid fa-cart-shopping"></i>
                <i className="fa-solid fa-circle-user"></i>
            </div>


        </nav>
    )
}
