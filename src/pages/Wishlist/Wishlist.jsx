import { useState } from "react";
import TTVidFull from "../../components/TTVidFull/TTVidFull";
import VidButton from "../../components/VidButton/VidButton";
import styles from "./Wishlist.module.css";
import Loading from "../Loading/Loading";

const Wishlist = (props) => {
  const [idx, setIdx] = useState(0);

  // const nextVideo = () => {
  //   if (idx < wishlist.length - 1) {
  //     setIdx(idx + 1);
  //   }
  // };

  // const prevVideo = () => {
  //   if (idx > 0) {
  //     setIdx(idx - 1);
  //   }
  // };

  if (!props.profile) {
    return <Loading />;
  }

  return (
    <main className={styles.fakeMain}>
      <h1>Wishlist</h1>
      <div className={styles.vidContainer}>
        {props.profile.wishlist.length &&
          props.profile.wishlist.map((item) => (
            <TTVidFull
              key={item._id}
              dbID={item._id}
              vidID={item.vidID}
              profile={props.profile}
              handleRemoveFromWishlist={props.handleRemoveFromWishlist}
              // nextVideo={nextVideo}
              // prevVideo={prevVideo}
            />
          ))}
      </div>
      {/* <button>Prev</button>
      <button>Remove</button>
      <button>Next</button> */}
    </main>
  );
};

export default Wishlist;
