import { useContext } from "react";
import { UserContext } from "../context/userContext";
function Home() {
  const { user } = useContext(UserContext);
  if (!user) return <p>Please login</p>;
  return (
    <>
      <p>Welcome,{user}</p>
    </>
  );
}
export default Home;
