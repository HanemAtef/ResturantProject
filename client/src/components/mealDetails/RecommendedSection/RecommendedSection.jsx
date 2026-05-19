import meals from "../../../data/meals";

import RecommendedMeals from "../RecommendedMeals/RecommendedMeals";

import styles from "./RecommendedSection.module.css";

const RecommendedSection = () => {
  return (
    <div className={styles.section}>

      <div className={styles.top}>

        <h2>
          You might also like
        </h2>

        <button>
          VIEW FULL MENU
          <i className="fa-solid fa-arrow-right"></i>
        </button>

      </div>

      <div className="row gy-4">

        {meals.map((meal) => (

          <div
            className="col-lg-3 col-md-6"
            key={meal.id}
          >
            <RecommendedMeals meal={meal} />
          </div>

        ))}

      </div>

    </div>
  );
};

export default RecommendedSection;