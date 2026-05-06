import styles from './Feature.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlRice, faBoltLightning, faMortarPestle } from '@fortawesome/free-solid-svg-icons';

export default function Feature() {
    return (
        <div className={styles.container}>
            <section className={styles.box}>
                {/* Card 1 */}
                <div className="card text-center mb-3 border-0 ">
                    <div className={`card-body ${styles.body}`}>
                        <span className={styles.icon}>
                            <FontAwesomeIcon icon={faBowlRice} />
                        </span>
                        <h5 className="card-title">Premium Ingredients</h5>
                        <p className="card-text">
                            We source only the finest organic and locally produced ingredients to ensure
                            every meal is a masterpiece of quality.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="card text-center mb-3 border-0">
                    <div className={`card-body ${styles.body}`}>
                           <span className={`mt-3 ${styles.icon}`}>
                            <FontAwesomeIcon icon={faBoltLightning} />
                        </span>
                        <h5 className="card-title">Express Delivery</h5>
                        <p className="card-text">
                            Our specialized logistics team ensures your food arrives hot and fresh within 45
                            minutes, guaranteed or it's on us.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className={`card text-center mb-3 border-0`}>
                    <div className={`card-body ${styles.body}`}>
                           <span className={styles.icon}>
                            <FontAwesomeIcon icon={faMortarPestle} />
                        </span>
                        <h5 className="card-title">Chef-Curated</h5>
                        <p className="card-text">
                            Menus designed by Michelin-star culinary experts who bring a modern twist to classic
                            gourmet dishes.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}