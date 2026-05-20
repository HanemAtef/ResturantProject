import styles from "./Breadcrumb.module.css";

const Breadcrumb = () => {
  return (
    <div className={styles.breadcrumb}>

      <span>MENU</span>

      <i className="fa-solid fa-chevron-right"></i>

      <span>MAIN ENTREE</span>

      <i className="fa-solid fa-chevron-right"></i>

      <span className={styles.active}>
        TRUFFLE BUTTER SALMON
      </span>

    </div>
  );
};

export default Breadcrumb;