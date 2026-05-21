import styles from "./Breadcrumb.module.css";

import { Link } from "react-router-dom";

const Breadcrumb = ({ dishName, category }) => {
  return (
    <div className={styles.breadcrumb}>

      <Link style={{textDecoration: 'none', color: 'inherit'}} to="/menu">MENU</Link>

      <i className="fa-solid fa-chevron-right"></i>

      <span style={{textTransform: 'uppercase'}}>{category || "MAIN ENTREE"}</span>

      <i className="fa-solid fa-chevron-right"></i>

      <span className={styles.active} style={{textTransform: 'uppercase'}}>
        {dishName || "TRUFFLE BUTTER SALMON"}
      </span>

    </div>
  );
};

export default Breadcrumb;