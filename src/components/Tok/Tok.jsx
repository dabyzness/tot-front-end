const Tok = (props) => {
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
    <div className="embeded-tok">
      <div style={iframe_container}>
        <iframe
          title="TikTok"
          src={`https://www.tiktok.com/embed/${props.ttreview.vidID}`}
          style={iframe}
          allowFullScreen
          scrolling="no"
          allow="encrypted-media;"
        />
      </div>
      <br />
      {props.user && (
        <div>
          <button
            onClick={() =>
              props.handleAddToWishlist(props.user.profile, props.ttreview._id)
            }
          >
            Add To Wishlist
          </button>
        </div>
      )}
    </div>
  );
};

export default Tok;
