import TTCard from "../TTCard/TTCard";

import styles from "./Row.module.css";

const TTRow = ({ ttreviews, handleAddToWishlist, user }) => {
  return (
    <div className={styles.row}>
      {ttreviews.map((ttreview, i) => (
        <TTCard
          ttreview={ttreview}
          key={i}
          handleAddToWishlist={handleAddToWishlist}
          user={user}
        />
      ))}
      {/* <TTCard ttreviews={ttreviews}/> */}
    </div>
  );
};

export default TTRow;
