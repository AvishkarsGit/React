import { useContext } from "react";
import UserContext from "../context/userContext";

export function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <p>Please login</p>;
  return (
    <>
      <div>
        <h1>Profile</h1>
        <p>welcome, {user}</p>
      </div>
    </>
  );
}
