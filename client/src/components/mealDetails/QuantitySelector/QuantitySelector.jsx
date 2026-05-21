import { useState } from "react";

import styles from "./QuantitySelector.module.css";

const QuantitySelector = () => {

  const [count, setCount] = useState(1);

  return (
    <div className={styles.box}>

      <button
        onClick={() =>
          count > 1 && setCount(count - 1)
        }
      >
        <i className="fa-solid fa-minus"></i>
      </button>

      <span>{count}</span>

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        <i className="fa-solid fa-plus"></i>
      </button>

    </div>
  );
};

export default QuantitySelector;