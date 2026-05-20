import styles from "../dishes/Dishes.module.css"

import dish1 from "../../../assets/menu/dish1.png";
import dish2 from "../../../assets/menu/dish2.png";
import dish3 from "../../../assets/menu/dish3.png";
import dish4 from "../../../assets/menu/dish4.png";
import dish5 from "../../../assets/menu/dish5.png";
import dish6 from "../../../assets/menu/dish6.png";
import dish7 from "../../../assets/menu/dish7.png";
import dish8 from "../../../assets/menu/dish8.png";

import { useState } from "react";

function Dishes ({ searchTermFromParent = ""}){
  const searchTerm = searchTermFromParent;
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All Dishes");
  const totalPages = 12;

  const dishes = [
    {
      id: 1,
      name: "Harvest Bowl",
      category: "Chef's Choice",
      price: "$18.50",
      description: "Organic quinoa, roasted seasonal roots, and avocado crema.",
      image: dish1,
      tag: "Chef's Choice",
      cuisine: "Vegan"
    },
    {
      id: 2,
      name: "Artisan Pasta",
      category: "Artisan Pasta",
      price: "$22.00",
      description: "Hand-rolled pappardelle with slow-simmered heirloom tomatoes.",
      image: dish2,
      tag: null,
      cuisine: "Italian"
    },
    {
      id: 3,
      name: "Truffle Marg",
      category: "Pizza",
      price: "$24.50",
      description: "Wood-fired sourdough base with black truffle honey drizzle.",
      image: dish3,
      tag: null,
      cuisine: "Italian"
    },
    {
      id: 4,
      name: "Ocean Trio",
      category: "Seafood",
      price: "$32.00",
      description: "A selection of premium sashimi with house-made ponzu.",
      image: dish4,
      tag: null,
      cuisine: "Japanese"
    },
    {
      id: 5,
      name: "Velvet Cakes",
      category: "Dessert",
      price: "$14.50",
      description: "Airy buttermilk stack with macerated forest berries.",
      image: dish5,
      tag: null,
      cuisine: "Desserts"
    },
    {
      id: 6,
      name: "Verde Garden",
      category: "Salad",
      price: "$16.00",
      description: "Market greens, toasted pine nuts, and lemon vinaigrette.",
      image: dish6,
      tag: null,
      cuisine: "Vegan"
    },
    {
      id: 7,
      name: "The Reserve Burger",
      category: "Burger",
      price: "$28.00",
      description: "Dry-aged beef, cave-aged cheddar, and truffle aioli.",
      image: dish7,
      tag: null,
      cuisine: "French"
    },
    {
      id: 8,
      name: "Lava Noir",
      category: "Dessert",
      price: "$15.00",
      description: "70% dark chocolate fondant with Madagascar vanilla gelato.",
      image: dish8,
      tag: null,
      cuisine: "Desserts"
    }
  ];

  const filteredDishes = dishes.filter(dish => {
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === "All Dishes" || dish.cuisine === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = ["All Dishes", "Italian", "Japanese", "Vegan", "French", "Seafood", "Desserts"];

    
    return (
        <>
              {/* Categories */}
      <ul className={styles.catigories}>
        {categories.map(category => (
          <li 
            key={category}
            className={`${activeCategory === category ? styles.activeCategory : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>

      {/* Dishes Grid */}
      <div className={styles.dishesGrid}>
        {filteredDishes.map((dish) => {
          return (
            <div key={dish.id} className={styles.dishCard}>
              <div className={styles.dishImage}>
                <img src={dish.image} alt={dish.name} />
              </div>
              <div className={styles.dishInfo}>
                <div className={styles.dishHeader}>
                  <div>
                    <h3 className={styles.dishName}>{dish.name}</h3>
                    {dish.tag && <span className={styles.dishTag}>{dish.tag}</span>}
                  </div>
                  <span className={styles.dishPrice}>{dish.price}</span>
                </div>
                <p className={styles.dishDescription}>{dish.description}</p>
                <button className={styles.addToCartBtn}>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>Add to Cart</span>
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredDishes.length === 0 && (
        <div className={styles.emptyState}>
          <i className="fa-solid fa-search" ></i>
          <p>No dishes found matching "{searchTerm}"</p>
        </div>
      )}

      {/* Pagination */}
      <div className={styles.pagination}>
        <button 
          className={styles.pageBtn}
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          <i className="fa-solid fa-chevron-left"></i>
          Prev
        </button>
        
        <div className={styles.pageNumbers}>
          {[1, 2, 3, 12].map((page) => (
            <button
              key={page}
              className={`${styles.pageNum} ${currentPage === page ? styles.activePage : ""}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
        
        <button 
          className={styles.pageBtn}
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          Next
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      {/* Explore More Button */}
      <div className={styles.exploreMore}>
        <button className={styles.exploreBtn}>Explore More Dishes</button>
      </div>
        </>
    )
}

export default Dishes ;
