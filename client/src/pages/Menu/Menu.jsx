import styles from "../Menu/Menu.module.css";
import Navbar from '../../components/layouts/Navbar/Navbar' ;
import Footer from '../../components/layouts/Footer/Footer';
import Searchbar from "../../components/Menu/searchmenu/Searchbar" ;
import Dishes from "../../components/Menu/dishes/Dishes";
import { useState } from "react";

function Menu(){
    const [searchTerm, setSearchTerm] = useState("");

    return(
        <>
        <Navbar/>
        <div className={styles.address}> 
            <h1>Our Curated Menu</h1>
            <p>Discover the finest urban dining experience, crafted with passion and seasonal
                ingredients.</p>
        </div>
        <Searchbar searchTerm={searchTerm} onSearch={setSearchTerm}/>
        <Dishes searchTermFromParent={searchTerm}/>
        <Footer/>
        </>
    )
}
export default Menu ;
