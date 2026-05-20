import Breadcrumb from "../../components/mealDetails/Breadcrumb/Breadcrumb";
import MealInfo from "../../components/mealDetails/MealInfo/MealInfo";
import RecommendedSection from "../../components/mealDetails/RecommendedSection/RecommendedSection";

import styles from "./MealDetails.module.css";

const MealDetails = () => {
  return (
    <div className={styles.page}>

      <div className="container py-5">

        {/* Breadcrumb */}
        <Breadcrumb />

<div className="mt-5">
  <MealInfo />
</div>

        {/* Recommended Meals */}
        <RecommendedSection />

      </div>

    </div>
  );
};

export default MealDetails;