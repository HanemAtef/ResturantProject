import styles from "../searchmenu/Searchbar.module.css";

function Searchbar({ searchTerm, onSearch }) {

  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <div className={styles.searchbar}>
        
        <div className="position-relative w-50">
          <i className="fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y ms-2"></i>

          <input
            type="text"
            placeholder="Search for dishes, flavors, or ingredients..."
            value={searchTerm}
            className="w-100 p-2 ps-5 border border-gray-300 rounded"
            onChange={handleInputChange}
          />
        </div>

      </div>
    </>
  );
}

export default Searchbar;
