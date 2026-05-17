import MealFeatures from "../MealFeatures/MealFeatures";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

import salmon from "../../../assets/Grilled Salmon.png";

import styles from "./MealInfo.module.css";

const MealInfo = () => {
  return (
    <div className={styles.wrapper}>

      {/* LEFT SIDE IMAGE */}
      <div className={styles.detailsHero}>

        <img
          src={salmon}
          alt="salmon"
          className={styles.image}
        />

        <button className={styles.favoriteBtn}>
          <i className="fa-regular fa-heart"></i>
        </button>

      </div>

      {/* RIGHT SIDE INFO */}
      <div className={styles.infoSection}>

        <p className={styles.signature}>
          CHEF'S SIGNATURE
        </p>

        <h1 className={styles.title}>
          Truffle Butter Glazed Atlantic Salmon
        </h1>

        <div className={styles.ratingRow}>

          <span className={styles.price}>
            $34.50
          </span>

     

        </div>

        <p className={styles.description}>
          Our premium Atlantic salmon is pan-seared to perfection,
          finished with a decadent black truffle butter glaze.
          Served over a bed of wood-fired seasonal asparagus
          and a citrus-infused herb oil drizzle.
        </p>

        <MealFeatures />

        <div className={styles.bottom}>

          <QuantitySelector />

          <button className={styles.cartBtn}>
            ADD TO CART — $34.50
          </button>

        </div>

      </div>

    </div>
  );
};

export default MealInfo;