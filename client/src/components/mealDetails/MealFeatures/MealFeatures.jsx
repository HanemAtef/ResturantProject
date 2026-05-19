import styles from "./MealFeatures.module.css";

const MealFeatures = () => {
  return (
    <div className={styles.features}>

      <div className={styles.item}>
        <div className={styles.icon}>
          <i className="fa-solid fa-fish"></i>
        </div>

        <div>
          <h5>Protein</h5>
          <p>Fresh Salmon</p>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.icon}>
          <i className="fa-solid fa-leaf"></i>
        </div>

        <div>
          <h5>Vegetables</h5>
          <p>Grilled Asparagus</p>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.icon}>
          <i className="fa-solid fa-seedling"></i>
        </div>

        <div>
          <h5>Flavor</h5>
          <p>Black Truffle</p>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.icon}>
          <i className="fa-solid fa-fire"></i>
        </div>

        <div>
          <h5>Dietary</h5>
          <p>Gluten-Free</p>
        </div>
      </div>

    </div>
  );
};

export default MealFeatures;