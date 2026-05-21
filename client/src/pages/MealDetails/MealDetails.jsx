import { useParams } from "react-router-dom";
import { dishes } from "../../data/dishes";
import Breadcrumb from "../../components/mealDetails/Breadcrumb/Breadcrumb";
import MealInfo from "../../components/mealDetails/MealInfo/MealInfo";
import RecommendedSection from "../../components/mealDetails/RecommendedSection/RecommendedSection";

import styles from "./MealDetails.module.css";

const MealDetails = () => {
  const { id } = useParams();
  const dish = dishes.find(d => d.id === parseInt(id));

  if (!dish) {
    return <div className="container py-5 text-center"><h2>Meal not found</h2></div>;
  }

  return (
    <div className={styles.page}>

      <div className="container py-5">

        {/* Breadcrumb */}
        <Breadcrumb dishName={dish.name} category={dish.category} />

<div className="mt-5">
  <MealInfo dish={dish} />
</div>

        {/* Recommended Meals */}
        <RecommendedSection />

      </div>

    </div>
  );
};

export default MealDetails;