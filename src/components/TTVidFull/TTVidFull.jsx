const TTVidFull = (props) => {
  const iframe_container = {
    left: 0,
    width: "323px",
    height: "580px",
    position: "relative"
  }

    const iframe = {
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      position: "relative",
      border: 0,
      objectFit:"fill"
    }
  
  return (
      <div className="embeded-tok">
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
        <br />
        <div>
          <button>Find on Map</button>
        </div>
        <br />
        <div>
          <button>Prev</button>
          {props.buttonText ? <button>{props.buttonText}</button>:<></>}
          <button>Next</button>
        </div>
      </div>


  );
};

export default TTVidFull;
