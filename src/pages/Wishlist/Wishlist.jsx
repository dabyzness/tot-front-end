import { useState } from "react";
import TTVidFull from "../../components/TTVidFull/TTVidFull";

const Wishlist = (props) => {
  const [wishlist, setWishlist] = useState(props.profile.wishlist)
  const [idx, setIdx] = useState(0)

  const nextVideo = () =>{
    if (idx < wishlist.length-1){
      setIdx(idx + 1)
    }
  }
  const prevVideo = () =>{
    if (idx > 0){
      setIdx(idx - 1)
    }
  }

  let currentVideo = wishlist[idx]
  
  return ( 
    <>
      <h1>Wishlist</h1>
      <TTVidFull 
        buttonText="Remove"
        dbID={currentVideo._id}
        vidID={currentVideo.vidID}
        nextVideo={nextVideo}
        prevVideo={prevVideo}
        />
    </>
  );
}

export default Wishlist;