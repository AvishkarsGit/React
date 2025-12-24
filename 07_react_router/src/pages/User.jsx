import { useParams } from "react-router-dom";

export function User() {
  const { id } = useParams();
  return (
    <>
      <p>User : {id}</p>
    </>
  );
}
