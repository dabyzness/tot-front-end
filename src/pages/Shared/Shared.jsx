import { useState } from "react";
import TTVidFull from "../../components/TTVidFull/TTVidFull";

const Shared = (props) => {
  console.log(props.user.profile)

  return ( 
    <>
      <h1>Shared TikToks</h1>
      <TTVidFull buttonText="Delete" vidID="7119935867350830378"/>
    </>
  );
}

export default Shared;