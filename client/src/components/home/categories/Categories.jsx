import style from "./Categories.module.css"

export default function CategorySection() {
    const categories = [
        { icon: "fa-light fa-pizza-slice", title: "Pizza" },
        { icon: "fa-thin fa-burger", title: "Burger" },
        { icon: "fa-light fa-fish", title: "Sushi" },
        { icon: "fa-light fa-utensils", title: "Steak" },
        { icon: "fa-regular fa-ice-cream", title: "Desserts" },
        { icon: "fa-solid fa-martini-glass", title: "Drinks" }
    ]
    return (
        
        <section className={`${style.categories} py-5 px-5`}>
            <div className={`${style.text} text-center`}>
                <p>Quick Browse</p>

                <h2 className={`${style.h2} mb-5`}>Explore by Category</h2>
            </div>
            <div className={`${style.categories} row justify-content-center g-4`}>
                {categories.map((item, index) => (
                    <div className="col-6 col-md-2" key={index}>
                        <div className={style.categoryItem}>
                            <div className={style.iconCircle}>
                                <i className={`fa-solid ${item.icon} `}></i>
                            </div>

                            <p className={`${style.categoryText} mt-3`}>
                                {item.title}
                            </p>
                        </div>
                    </div>
                ))}


            </div>


        </section>

    )
}
