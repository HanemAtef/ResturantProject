import heroImg from "../../../assets/Hero.png"
import style from "./HeroSection.module.css"

export default function Herosection() {
    return (
        <section className={style.hero}>

            <div className={style.content}>

                <h1>Experience the Art of Fine Dining at Home</h1>

                <p>Chef-crafted masterpieces delivered to your door.Fresh ingredients, bold flavors, and timeless elegance in every bite.</p>

                <div className={style.btn}>
                    <button className={style.orangeBtn}>Order Now</button>
                    <button className={style.whiteBtn}>View Menu</button>
                </div>
            </div>

        </section>
    )
}
