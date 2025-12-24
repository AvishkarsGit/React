// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export function Github() {
  // const [userData, setUserData] = useState([]);
  const userData = useLoaderData();
  // useEffect(() => {
  //   fetch("https://api.github.com/users/AvishkarsGit")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUserData(data);
  //       console.log(data);
  //     });
  // }, []);

  // console.log(userData);
  return (
    <>
      <div>
        <p>Github Followers : {userData.followers}</p>
        <img src={userData.avatar_url} />
      </div>
    </>
  );
}
