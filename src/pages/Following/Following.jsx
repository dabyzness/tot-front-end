import ProfileLI from "../../components/ProfileLI/ProfileLI";

const Following = (props) => {
  return ( 
    <>
      <h1>{props.profile.name}</h1>
      <h3> Following ( {props.profile.following.length} )</h3>
      <ul>
        {props.profile.following.map(follow => 
          <ProfileLI key={follow._id} profile={follow}/>
          )}
      </ul>
    </>
  );
}

export default Following;