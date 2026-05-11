import styles from "./Review.module.css";

import user from "../../../assets/user.svg";
import user1 from "../../../assets/user1.svg";
import user2 from "../../../assets/user2.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Review() {
  const reviews = [
    { src: user, alt: "user" },
    { src: user1, alt: "user1" },
    { src: user2, alt: "user2" },
  ];

  return (
    <div className={`${styles.container} `}>
      <div className="container h-100">
        
        <div className="row align-items-center h-100">

          
          <div className="col-lg-6">
            <span className={styles.subTitle}>WHAT THEY SAY</span>

            <h2 className={styles.heading}>
              Join Thousands of Happy
              <br />
              Diners
            </h2>

            <p className={styles.desc}>
              Discover why BistroModern has become the go-to choice for urban
              food enthusiasts seeking restaurant-quality meals in the comfort
              of their home.
            </p>

            <div className="d-flex align-items-center gap-4 mt-5">

              {/* USERS */}
              <div className={styles.users}>
                {reviews.map((rev, index) => (
                  <div
                    key={index}
                    className={styles.userCard}
                    style={{ left: `${index * 28}px` }}
                  >
                    <img src={rev.src} alt={rev.alt} />
                  </div>
                ))}
              </div>

              <span className={styles.reviewText}>
                4.9/5 from 12k+
               
                reviews
              </span>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="col-lg-6 d-flex justify-content-center mt-5">

            <div className={styles.reviewCard}>
              
              <div className="d-flex gap-1 mb-4">
              <FontAwesomeIcon icon={faStar} className={styles.star} />                         
                <FontAwesomeIcon icon={faStar} className={styles.star} />
                <FontAwesomeIcon icon={faStar} className={styles.star} />
                <FontAwesomeIcon icon={faStar} className={styles.star} />
                <FontAwesomeIcon icon={faStar} className={styles.star} />
              </div>

              <p className={styles.cardText}>
                "The best delivery experience I've had. The packaging was
                eco-friendly and the Wagyu sliders arrived exactly as if I were
                sitting at the chef's counter."
              </p>

              <div className="d-flex align-items-center gap-3 mt-4">

                <div className={styles.avatar}>
                  JD
                </div>

                <div>
                  <h6 className="text-white mb-0">
                    Julianne Deville
                  </h6>

                  <p className="text-secondary">
                    Culinary Blogger
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}