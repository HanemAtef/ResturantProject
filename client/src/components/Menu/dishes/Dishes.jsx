import styles from "../dishes/Dishes.module.css"

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dishes } from "../../../data/dishes";

function Dishes ({ searchTermFromParent = ""}){
  const searchTerm = searchTermFromParent;
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All Dishes");
  const totalPages = 12;
  const navigate = useNavigate();

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
            <div key={dish.id} className={styles.dishCard} onClick={() => navigate(`/meal/${dish.id}`)} style={{cursor: "pointer"}}>
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
                <button 
                  className={styles.addToCartBtn} 
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    // Add to cart logic here if any 
                  }}
                >
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
