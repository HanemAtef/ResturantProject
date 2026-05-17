import styles from "./RecommendedMeals.module.css";

const RecommendedMeals = ({ meal }) => {
  return (
    <div className={styles.card}>

      <img
        src={meal.image}
        alt={meal.title}
        className={styles.image}
      />

      <div className={styles.body}>

        <div>
          <h4>{meal.title}</h4>

          <p>
            ${meal.price}
          </p>
        </div>

        <button>
          <i className="fa-solid fa-plus"></i>
        </button>

      </div>

    </div>
  );
};

export default RecommendedMeals;