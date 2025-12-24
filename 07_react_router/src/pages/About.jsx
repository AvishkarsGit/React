import { useContext } from "react";
import { UserContext } from "../context/userContext";

function About() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <>
        <h1>Please login</h1>
      </>
    );

  return (
    <>
      <p>Welcome,{user}</p>
      <h1>About</h1>
    </>
  );
}
export default About;
