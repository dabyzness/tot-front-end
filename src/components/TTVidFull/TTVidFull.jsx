import styles from "./TTVidFull.module.css";

const TTVidFull = (props) => {
  const iframe_container = {
    left: 0,
    width: "323px",
    height: "580px",
    position: "relative",
  };

  const iframe = {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "relative",
    border: 0,
    objectFit: "fill",
  };

  return (
    <div className={styles.container}>
      <div style={iframe_container}>
        <iframe
          title="TikTok"
          src={`https://www.tiktok.com/embed/${props.vidID}`}
          style={iframe}
          allowFullScreen
          scrolling="no"
          allow="encrypted-media;"
        />
      </div>
      <button
        style={{ marginTop: "auto", marginBottom: "8rem" }}
        onClick={() =>
          props.handleRemoveFromWishlist(props.profile._id, props.dbI)
        }
      >
        Remove from WishList
      </button>
    </div>
  );
};

export default TTVidFull;
