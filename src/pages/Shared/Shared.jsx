import { useState } from "react";
import { useLocation } from "react-router-dom";
import TTVidFull from "../../components/TTVidFull/TTVidFull";
import Loading from "../Loading/Loading";

const Shared = (props) => {
  const location = useLocation()
  const [shared,setShared] = useState(location.state)
  const [idx, setIdx] = useState(0)

  const nextVideo = () =>{
    
    if (idx < shared.length-1){
      setIdx(idx + 1)
    }
  }
  const prevVideo = () =>{
    
    if (idx > 0){
      setIdx(idx - 1)
    }
  }

  const buttonFunction = async (id) =>{
    const deletedVid = await props.handleDeleteTTReview(id)
    console.log(deletedVid)
    setShared(shared.filter(v => v._id !== deletedVid._id))
    if (idx > 0){
      setIdx(idx-1)
    }
  }
  
  let currentVideo = shared[idx]

  if(!shared) return <Loading/>

  return ( 
    <>
      <h1> Shared TikToks </h1>
      <TTVidFull 
        buttonText="Delete" 
        buttonFunction={buttonFunction}
        dbID={currentVideo._id}
        vidID={currentVideo.vidID}
        nextVideo={nextVideo}
        prevVideo={prevVideo}
      />
    </>
  );
}

export default Shared;