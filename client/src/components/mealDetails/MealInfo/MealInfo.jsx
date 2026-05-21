import MealFeatures from "../MealFeatures/MealFeatures";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

import styles from "./MealInfo.module.css";

const MealInfo = ({ dish }) => {
  return (
    <div className={styles.wrapper}>

      {/* LEFT SIDE IMAGE */}
      <div className={styles.detailsHero}>

        <img
          src={dish?.image}
          alt={dish?.name || "Meal Image"}
          className={styles.image}
        />

        <button className={styles.favoriteBtn}>
          <i className="fa-regular fa-heart"></i>
        </button>

      </div>

      {/* RIGHT SIDE INFO */}
      <div className={styles.infoSection}>

        <p className={styles.signature} style={{textTransform: 'uppercase'}}>
          {dish?.tag || "SPECIALITY"}
        </p>

        <h1 className={styles.title}>
          {dish?.name || "Truffle Butter Glazed Atlantic Salmon"}
        </h1>

        <div className={styles.ratingRow}>

          <span className={styles.price}>
            {dish?.price || "$34.50"}
          </span>

     

        </div>

        <p className={styles.description}>
          {dish?.description || "Our premium Atlantic salmon is pan-seared to perfection, finished with a decadent black truffle butter glaze."}
        </p>

        <MealFeatures />

        <div className={styles.bottom}>

          <QuantitySelector />

          <button className={styles.cartBtn}>
            ADD TO CART — {dish?.price || "$34.50"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default MealInfo;